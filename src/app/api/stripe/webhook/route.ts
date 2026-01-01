import { NextResponse } from "next/server";
import { headers } from "next/headers";
import type Stripe from "stripe";
import { stripe } from "@/lib/stripe";
import { supabaseAdmin } from "@/lib/supabase/supabaseAdmin";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET!;

export async function POST(req: Request) {
  const body = await req.text();
  const sig = headers().get("stripe-signature");

  if (!sig) {
    return new NextResponse("Missing Stripe-Signature header", { status: 400 });
  }

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(body, sig, webhookSecret);
  } catch (err: any) {
    console.error("❌ Webhook signature verification failed:", err.message);
    return new NextResponse("Webhook Error", { status: 400 });
  }

  try {
    switch (event.type) {
      /**
       * ✅ Paiement via Checkout terminé avec succès
       *    → on active / crée le profil dans Supabase
       */
      case "checkout.session.completed": {
        const session = event.data.object as Stripe.Checkout.Session;

        const email =
          (
            session.customer_email ||
            (session.metadata?.email as string | undefined) ||
            ""
          )
            .trim()
            .toLowerCase();

        const plan = (session.metadata?.plan as string | undefined) || "standard";

        const stripeCustomerId =
          typeof session.customer === "string"
            ? session.customer
            : session.customer?.id;

        const stripeSubscriptionId =
          typeof session.subscription === "string"
            ? session.subscription
            : session.subscription?.id;

        console.log("✅ checkout.session.completed", {
          email,
          plan,
          stripeCustomerId,
          stripeSubscriptionId,
        });

        if (!email) {
          console.warn("⚠️ Pas d'email dans la session Stripe, skip DB update.");
          break;
        }

        // 👉 Mise à jour / création du profil dans Supabase
        const { error } = await supabaseAdmin
          .from("profiles")
          .upsert(
            {
              email,
              stripe_customer_id: stripeCustomerId,
              stripe_subscription_id: stripeSubscriptionId,
              subscription_plan: plan,
              subscription_status: "active",
            },
            { onConflict: "email" }
          );

        if (error) {
          console.error("❌ Erreur Supabase (checkout.session.completed):", error);
        }

        break;
      }

      /**
       * 🔄 Abonnement mis à jour / supprimé
       */
      case "customer.subscription.updated":
      case "customer.subscription.deleted": {
        const subscription = event.data.object as Stripe.Subscription;

        const stripeSubscriptionId = subscription.id;
        const stripeCustomerId = subscription.customer as string;
        const status = subscription.status; // 'active', 'canceled', 'past_due', etc.

        console.log(`ℹ️ ${event.type}`, {
          stripeSubscriptionId,
          stripeCustomerId,
          status,
        });

        const { error } = await supabaseAdmin
          .from("profiles")
          .update({
            subscription_status: status,
          })
          .eq("stripe_subscription_id", stripeSubscriptionId);

        if (error) {
          console.error(
            "❌ Erreur Supabase (subscription update/delete):",
            error
          );
        }

        break;
      }

      default: {
        console.log(`➡️ Unhandled Stripe event type: ${event.type}`);
      }
    }

    return NextResponse.json({ received: true });
  } catch (err) {
    console.error("❌ Error handling Stripe webhook:", err);
    return new NextResponse("Webhook handler error", { status: 500 });
  }
}
