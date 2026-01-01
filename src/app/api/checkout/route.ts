import { NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";

const STRIPE_PRICES = {
  standard_ads: process.env.STRIPE_PRICE_STANDARD_ADS || "",
  standard: process.env.STRIPE_PRICE_STANDARD || "",
  premium: process.env.STRIPE_PRICE_PREMIUM || "",
} as const;

type Tier = keyof typeof STRIPE_PRICES;

export async function POST(req: Request) {
  try {
    // On récupère le JSON envoyé par le frontend
    const body = await req.json().catch(() => ({} as any));

    let tier: Tier = "standard";

    if (body?.tier && body.tier in STRIPE_PRICES) {
      tier = body.tier as Tier;
    }

    const email = (body?.email || "").toString().trim().toLowerCase();

    const priceId = STRIPE_PRICES[tier];
    if (!priceId) {
      return NextResponse.json(
        { ok: false, error: "INVALID_TIER" },
        { status: 400 }
      );
    }

    // On récupère l'origine pour construire les URLs de redirection
    const origin =
      req.headers.get("origin") ||
      process.env.NEXT_PUBLIC_APP_URL ||
      "http://localhost:3000";

    const session = await stripe.checkout.sessions.create({
      mode: "subscription",
      payment_method_types: ["card"],
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      // 🔁 APRÈS PAIEMENT → PAGE DE BIENVENUE
      success_url: `${origin}/subscribe/welcome?plan=${tier}${
        email ? `&email=${encodeURIComponent(email)}` : ""
      }`,
      cancel_url: `${origin}/subscribe/cancel`,
      // 👇 Infos supplémentaires envoyées au webhook
      metadata: {
        ...(email ? { email } : {}),
        plan: tier, // ex: "standard_ads" | "standard" | "premium"
      },
      ...(email
        ? {
            customer_email: email,
          }
        : {}),
    });

    return NextResponse.json({ ok: true, id: session.id, url: session.url });
  } catch (err) {
    console.error("[/api/checkout] error:", err);
    return NextResponse.json(
      { ok: false, error: "INTERNAL_ERROR" },
      { status: 500 }
    );
  }
}
