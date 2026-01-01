// src/plans.ts

export type PlanId = "ad" | "standard" | "premium";

export type Plan = {
  id: PlanId;
  name: string;
  price: string;   // texte d'affichage
  priceId: string; // Stripe price_xxx (mode TEST pour l'instant)
};

// Lis d'abord les IDs depuis l'env (vus dans tes captures Render)
const ENV_PRICE_AD =
  process.env.NEXT_PUBLIC_STRIPE_PRICE_STANDARD_ADS ||
  process.env.STRIPE_PRICE_STANDARD_ADS ||
  "";

const ENV_PRICE_STANDARD =
  process.env.NEXT_PUBLIC_STRIPE_PRICE_STANDARD ||
  process.env.STRIPE_PRICE_STANDARD ||
  "";

const ENV_PRICE_PREMIUM =
  process.env.NEXT_PUBLIC_STRIPE_PRICE_PREMIUM ||
  process.env.STRIPE_PRICE_PREMIUM ||
  "";

export const PLANS: Record<PlanId, Plan> = {
  ad: {
    id: "ad",
    name: "Standard avec Pub",
    price: "7,99 € / mois",
    priceId: ENV_PRICE_AD || "price_XXXXXXXX_ad",
  },
  standard: {
    id: "standard",
    name: "Standard",
    price: "14,99 € / mois",
    priceId: ENV_PRICE_STANDARD || "price_XXXXXXXX_std",
  },
  premium: {
    id: "premium",
    name: "Premium",
    price: "21,99 € / mois",
    priceId: ENV_PRICE_PREMIUM || "price_XXXXXXXX_pre",
  },
};

export function normalizePlanId(v: any): PlanId {
  const s = String(v ?? "").toLowerCase().trim();
  if (s === "ad" || s === "standard" || s === "premium") return s;
  return "ad";
}
