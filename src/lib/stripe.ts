<<<<<<< HEAD
// src/lib/stripe.ts
=======
>>>>>>> dc31a71 (fix: client components build on render)
import Stripe from "stripe";

const secretKey = process.env.STRIPE_SECRET_KEY;
if (!secretKey) {
<<<<<<< HEAD
  throw new Error(
    "STRIPE_SECRET_KEY manquant dans .env.local — ajoute-le puis relance `npm run dev`."
  );
}

/**
 * Instance Stripe côté serveur.
 * - API version fixée pour éviter les surprises
 * - Timeout raisonnable
 */
export const stripe = new Stripe(secretKey, {
  apiVersion: "2023-10-16", // ← compatible avec stripe@14.25.0
  timeout: 20_000,
});


/**
 * URLs de redirection (succès / annulation)
 * On s'appuie sur NEXT_PUBLIC_APP_URL défini dans .env.local
 * (on évite les opérateurs optionnels pour ne pas fâcher TypeScript strict)
 */
const rawAppUrl = process.env.NEXT_PUBLIC_APP_URL;
const appUrl = rawAppUrl ? rawAppUrl.replace(/\/$/, "") : "http://localhost:3002";
=======
  throw new Error("STRIPE_SECRET_KEY manquant dans .env.local");
}

export const stripe = new Stripe(secretKey, {
  apiVersion: "2023-10-16",
  timeout: 20_000,
});

const rawAppUrl = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3002";
const appUrl = rawAppUrl.replace(/\/$/, "");
>>>>>>> dc31a71 (fix: client components build on render)

export const STRIPE_RETURN_URLS = {
  success: `${appUrl}/subscribe/success`,
  cancel: `${appUrl}/subscribe/cancel`,
} as const;
<<<<<<< HEAD

/**
 * Price IDs (mode test) déclarés dans .env.local
 * On centralise ici pour éviter les fautes de frappe ailleurs.
 */
export const PRICES = {
  STANDARD_ADS: process.env.STRIPE_PRICE_STANDARD_ADS ?? "",
  STANDARD: process.env.STRIPE_PRICE_STANDARD ?? "",
  PREMIUM: process.env.STRIPE_PRICE_PREMIUM ?? "",
} as const;

export function assertPricesConfigured() {
  const missing: string[] = [];
  if (!PRICES.STANDARD_ADS) missing.push("STRIPE_PRICE_STANDARD_ADS");
  if (!PRICES.STANDARD) missing.push("STRIPE_PRICE_STANDARD");
  if (!PRICES.PREMIUM) missing.push("STRIPE_PRICE_PREMIUM");

  if (missing.length) {
    throw new Error(
      `Variables Stripe manquantes dans .env.local: ${missing.join(
        ", "
      )}. Vérifie tes IDs price_… dans le Dashboard Stripe (mode test).`
    );
  }
}

// --- AJOUTER / CONFIRMER ces exports ---

// Mapping des price IDs (depuis ton .env.local)
export const STRIPE_PRICES = {
  standard_ads: process.env.STRIPE_PRICE_STANDARD_ADS || "",
  standard: process.env.STRIPE_PRICE_STANDARD || "",
  premium: process.env.STRIPE_PRICE_PREMIUM || "",
} as const;

// Alias en camelCase attendu par la route (on réutilise ce que tu as déjà)
export const stripeReturnUrls = {
  success: STRIPE_RETURN_URLS.success,
  cancel: STRIPE_RETURN_URLS.cancel,
};
=======
>>>>>>> dc31a71 (fix: client components build on render)
