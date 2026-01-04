"use client";
export const dynamic = "force-dynamic";

import { PLANS, type PlanId } from "@/data/plans";
import { useSearchParams } from "next/navigation";

const ORDER: PlanId[] = ["ad", "standard", "premium"];

/** Correspondance plan -> tier attendu par l’API */
const TIER_BY_PLAN: Record<PlanId, "standard_ads" | "standard" | "premium"> = {
  ad: "standard_ads",
  standard: "standard",
  premium: "premium",
};

export default function PricingPage() {
  const search = useSearchParams();
  const email = (search.get("email") || "").trim();

  const paymentsEnabled =
    (process.env.NEXT_PUBLIC_PAYMENTS_ENABLED ?? "").toLowerCase() === "true";

  async function startCheckout(plan: PlanId) {
    if (!paymentsEnabled) {
      alert(
        "Le paiement en ligne est temporairement désactivé. " +
          "La plateforme est gratuite pour le moment."
      );
      return;
    }

    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ tier: TIER_BY_PLAN[plan], email }),
      });

      let data: any = null;
      let text = "";

      try {
        data = await res.clone().json();
      } catch {
        text = await res.text();
      }

      if (!res.ok) {
        const msg =
          (data && (data.error || data.message)) ||
          (text || `HTTP ${res.status}`);
        alert(`Erreur paiement: ${msg}`);
        return;
      }

      const url = data?.url;
      if (typeof url === "string" && url.startsWith("http")) {
        window.location.href = url;
      } else {
        alert("Réponse inattendue du serveur (pas d’URL de paiement).");
      }
    } catch (e) {
      console.error(e);
      alert("Impossible de démarrer le paiement.");
    }
  }

  return (
    <main className="container">
      <section className="auth-hero">
        <h1 className="auth-title">Choisissez votre offre</h1>
        <p className="auth-sub">
          Sans engagement. Annulable à tout moment. Profitez de{" "}
          <span style={{ color: "var(--gold)" }}>Hashem Productions</span> sur
          tous vos appareils.
        </p>

        <div className="plan-grid" role="list" aria-label="Offres d’abonnement">
          {ORDER.map((id) => {
            const p = PLANS[id];
            const recommended = id === "standard";

            return (
              <article
                key={p.id}
                role="listitem"
                className={`plan-card ${recommended ? "popular" : ""}`}
                aria-label={`Offre ${p.name}, ${p.price}`}
              >
                <header className="plan-head">
                  <div className="plan-name">
                    {p.name}
                    {recommended && (
                      <span className="badge" style={{ marginLeft: 8 }}>
                        Populaire
                      </span>
                    )}
                  </div>
                </header>

                <div className="plan-price">{p.price}</div>

                <ul className="plan-feats">
                  {id === "ad" && (
                    <>
                      <li>• Bonne qualité vidéo et audio</li>
                      <li>• 1080p (Full HD)</li>
                      <li>• 2 appareils en simultané</li>
                      <li>• Publicités limitées</li>
                    </>
                  )}
                  {id === "standard" && (
                    <>
                      <li>• Sans pub</li>
                      <li>• 1080p (Full HD)</li>
                      <li>• 2 appareils en simultané</li>
                      <li>• Téléchargements</li>
                    </>
                  )}
                  {id === "premium" && (
                    <>
                      <li>• Sans pub</li>
                      <li>• 4 appareils en simultané</li>
                      <li>• Téléchargements</li>
                      <li>• Audio spatial (immersif)</li>
                    </>
                  )}
                </ul>

                <div style={{ marginTop: 12 }}>
                  <button
                    type="button"
                    className="btn-cta"
                    onClick={() => startCheckout(id)}
                    aria-label={`Choisir l’offre ${p.name}`}
                  >
                    Suivant
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </main>
  );
}
