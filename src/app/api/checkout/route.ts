import { NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";

console.log("🔥 CHECKOUT ROUTE UPDATED - STRIPE FIX ACTIVE");


/**
 * Mapping STRICT des tiers vers les PRICE_ID Stripe
 * ⚠️ Les clés DOIVENT correspondre exactement aux tiers envoyés par le frontend
 */
const STRIPE_PRICES = {
  standard_ads: process.env.STRIPE_PRICE_STANDARD_ADS,
  standard: process.env.STRIPE_PRICE_STANDARD,
  premium: process.env.STRIPE_PRICE_PREMIUM,
} as const;

type Tier = keyof typeof STRIPE_PRICES;

export async function POST(req: Request) {
  try {
    // 1️⃣ Lecture du body
    const body = await req.json().catch(() => ({} as any));

    /**
     * 2️⃣ Sécurisation ABSOLUE du tier
     * Aucune valeur inconnue ne peut passer
     */
    const tier: Tier =
      body?.tier === "standard_ads"
        ? "standard_ads"
        : body?.tier === "premium"
        ? "premium"
        : "standard";

    // 3️⃣ Email (optionnel)
    const email =
      typeof body?.email === "string"
        ? body.email.trim().toLowerCase()
        : "";

    // 4️⃣ Récupération du priceId
    const priceId = STRIPE_PRICES[tier];

    // 🔴 Sécurité absolue : Stripe ne doit JAMAIS recevoir undefined
    if (!priceId) {
      console.error("❌ PRICE_ID MANQUANT", {
        tier,
        env: {
          STRIPE_PRICE_STANDARD_ADS: process.env.STRIPE_PRICE_STANDARD_ADS,
          STRIPE_PRICE_STANDARD: process.env.STRIPE_PRICE_STANDARD,
          STRIPE_PRICE_PREMIUM: process.env.STRIPE_PRICE_PREMIUM,
        },
      });

      return NextResponse.json(
        { ok: false, error: "INVALID_TIER" },
        { status: 400 }
      );
    }

    // 5️⃣ Origine pour les redirections
    const origin =
      req.headers.get("origin") ||
      process.env.NEXT_PUBLIC_APP_URL ||
      "http://localhost:3000";

    // 6️⃣ Création de la session Stripe Checkout
    const session = await stripe.checkout.sessions.create({
      mode: "subscription",
      payment_method_types: ["card"],
      line_items: [
        {
          price: priceId, // ← JAMAIS undefined maintenant
          quantity: 1,
        },
      ],
      success_url: `${origin}/subscribe/welcome?plan=${tier}${
        email ? `&email=${encodeURIComponent(email)}` : ""
      }`,
      cancel_url: `${origin}/subscribe/cancel`,
      metadata: {
        plan: tier,
        ...(email ? { email } : {}),
      },
      ...(email ? { customer_email: email } : {}),
    });

    // 7️⃣ Réponse OK
    return NextResponse.json({
      ok: true,
      id: session.id,
      url: session.url,
    });
  } catch (err) {
    console.error("[/api/checkout] INTERNAL ERROR:", err);
    return NextResponse.json(
      { ok: false, error: "INTERNAL_ERROR" },
      { status: 500 }
    );
  }
}
