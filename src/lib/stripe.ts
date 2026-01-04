// src/lib/stripe.ts
import Stripe from "stripe";

const secretKey = process.env.STRIPE_SECRET_KEY;
if (!secretKey) {
  throw new Error("STRIPE_SECRET_KEY manquant dans .env.local");
}

/**
 * Instance Stripe côté serveur
 */
export const stripe = new Stripe(secretKey, {
  apiVersion: "2023-10-16",
  timeout: 20_000,
});

/**
 * URL de base de l'app
 */
const rawAppUrl = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3002";
const appUrl = rawAppUrl.replace(/\/$/, "");

/**
 * URLs de retour Stripe
 */
export const STRIPE_RETURN_URLS = {
  success: `${appUrl}/subscribe/success`,
  cancel: `${appUrl}/subscribe/cancel`,
} as const;

/**
 * Price IDs (depuis .env)
 */
export const STRIPE_PRICES = {
  standard_ads: process.env.STRIPE_PRICE_STANDARD_ADS || "",
  standard: process.env.STRIPE_PRICE_STANDARD || "",
  premium: process.env.STRIPE_PRICE_PREMIUM || "",
} as const;

export function assertPricesConfigured() {
  const missing = Object.entries(STRIPE_PRICES)
    .filter(([, v]) => !v)
    .map(([k]) => k);

  if (missing.length) {
    throw new Error(
      `Variables Stripe manquantes : ${missing.join(", ")}`
    );
  }
}
