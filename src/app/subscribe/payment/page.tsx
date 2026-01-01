// src/app/subscribe/payment/page.tsx
"use client";

<<<<<<< HEAD
import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
=======
import { useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { PLANS, normalizePlanId } from "@/data/plans";
>>>>>>> dc31a71 (fix: client components build on render)

export const dynamic = "force-dynamic";

const TIER_BY_PLAN: Record<string, "standard_ads" | "standard" | "premium"> = {
  ad: "standard_ads",
  standard: "standard",
  premium: "premium",
};

<<<<<<< HEAD
export default function PaymentRedirect() {
=======
type MethodId = "card" | "mobile" | "paypal" | "gift";

const METHODS: {
  id: MethodId;
  title: string;
  subtitle: string;
  badge?: string;
}[] = [
  {
    id: "card",
    title: "Carte de crédit ou de débit",
    subtitle: "Visa, MasterCard…",
    badge: "Recommandé",
  },
  {
    id: "mobile",
    title: "Ajouter à la facture mobile",
    subtitle: "Opérateur compatible requis",
  },
  {
    id: "paypal",
    title: "PayPal",
    subtitle: "Paiement sécurisé",
  },
  {
    id: "gift",
    title: "Code cadeau",
    subtitle: "Utilisez un code",
  },
];

export default function PaymentPage() {
>>>>>>> dc31a71 (fix: client components build on render)
  const search = useSearchParams();
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState<string | null>(null);
  const [selectedMethod, setSelectedMethod] = useState<MethodId>("card");

<<<<<<< HEAD
  useEffect(() => {
    const plan = search.get("plan") || "standard";
    const email = search.get("email") || "";

    fetch("/api/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        tier: TIER_BY_PLAN[plan] ?? "standard",
        email,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.url) {
          window.location.href = data.url; // ✅ REDIRECTION STRIPE
        } else {
          alert("Erreur de redirection vers le paiement.");
        }
      })
      .catch(() => {
        alert("Impossible de lancer le paiement.");
      });
  }, [search]);

  return null;
=======
  const planParam = search.get("plan") || "standard";
  const email = (search.get("email") || "").trim();

  const planId = normalizePlanId(planParam);
  const plan = PLANS[planId];
  const tier = TIER_BY_PLAN[planParam] ?? "standard";

  async function handleContinue() {
    setLoading(true);
    setErr(null);

    try {
      const resp = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          tier,
          email,
          // Pour l’instant on ne l’utilise pas côté backend,
          // mais on garde l’info si un jour tu veux différencier
          // des flux de paiement :
          method: selectedMethod,
        }),
      });

      const data = await resp.json().catch(() => ({}));

      if (data?.url) {
        window.location.href = data.url; // ✅ redirection vers Stripe Checkout
      } else {
        setErr("Erreur de redirection vers la page de paiement.");
      }
    } catch (e: any) {
      console.error(e);
      setErr(e?.message || "Impossible de lancer le paiement.");
    } finally {
      setLoading(false);
    }
  }

  const backHref =
    "/subscribe/plans" +
    (email ? `?email=${encodeURIComponent(email)}` : "");

  return (
    <main className="container" style={{ maxWidth: 1100 }}>
      <section
        className="hero-modern"
        style={{ paddingTop: 40, paddingBottom: 70 }}
      >
        <div className="hero-overlay" />

        <div
          className="hero-content"
          style={{
            width: "100%",
            maxWidth: 960,
            margin: "0 auto",
          }}
        >
          <div
            className="glass-panel"
            style={{
              background: "rgba(0,0,0,.80)",
              borderRadius: 22,
              padding: "28px 26px 24px",
              boxShadow: "0 26px 80px rgba(0,0,0,.9)",
            }}
          >
            {/* TITRE */}
            <header style={{ marginBottom: 20 }}>
              <h1
                style={{
                  fontSize: "clamp(30px,4.6vw,42px)",
                  lineHeight: 1.15,
                  fontWeight: 800,
                }}
              >
                Choisissez comment payer
              </h1>
              <p
                style={{
                  marginTop: 10,
                  fontSize: "clamp(14px,2.2vw,16px)",
                  color: "var(--muted)",
                }}
              >
                Votre paiement est sécurisé et vous pouvez modifier votre mode de
                paiement à tout moment. <br />
                <strong>Facilement annulable en ligne.</strong>
              </p>
            </header>

            {/* OFFRE SÉLECTIONNÉE */}
            <p
              style={{
                marginBottom: 18,
                fontSize: 14,
                color: "var(--muted)",
              }}
            >
              Offre sélectionnée :{" "}
              <strong>{plan.name}</strong> — {plan.price} / mois
              {email && (
                <>
                  {" "}
                  — <strong>E-mail : {email}</strong>
                </>
              )}
            </p>

            {/* MÉTHODES DE PAIEMENT – CLIQUABLES */}
            <div
              role="list"
              aria-label="Méthodes de paiement"
              style={{
                display: "grid",
                gap: 12,
                marginBottom: 22,
              }}
            >
              {METHODS.map((m) => {
                const active = m.id === selectedMethod;
                return (
                  <button
                    key={m.id}
                    type="button"
                    role="listitem"
                    onClick={() => setSelectedMethod(m.id)}
                    aria-pressed={active}
                    style={{
                      width: "100%",
                      textAlign: "left",
                      borderRadius: 14,
                      padding: "12px 16px",
                      background: active
                        ? "linear-gradient(90deg, rgba(255,215,128,.18), rgba(0,0,0,.7))"
                        : "rgba(0,0,0,.55)",
                      border: active
                        ? "1px solid rgba(255,215,128,.8)"
                        : "1px solid rgba(255,255,255,.14)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      cursor: "pointer",
                      transition: "background .15s ease, transform .08s ease, box-shadow .15s ease",
                      boxShadow: active
                        ? "0 0 24px rgba(255,215,128,.35)"
                        : "none",
                    }}
                  >
                    <div>
                      <div
                        style={{
                          fontWeight: 600,
                          fontSize: 15,
                        }}
                      >
                        {m.title}
                      </div>
                      <div
                        style={{
                          fontSize: 13,
                          color: "var(--muted)",
                          marginTop: 2,
                        }}
                      >
                        {m.subtitle}
                      </div>
                    </div>

                    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                      {m.badge && (
                        <span
                          style={{
                            fontSize: 12,
                            padding: "2px 10px",
                            borderRadius: 999,
                            background: "rgba(0,0,0,.5)",
                            border: "1px solid rgba(255,255,255,.16)",
                          }}
                        >
                          {m.badge}
                        </span>
                      )}
                      <span
                        aria-hidden
                        style={{
                          fontSize: 16,
                          opacity: 0.6,
                        }}
                      >
                        ›
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* BAS DE CARTE : BOUTONS */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexWrap: "wrap",
                gap: 12,
              }}
            >
              <Link href={backHref} className="btn-ghost">
                ← Retour aux offres
              </Link>

              <button
                type="button"
                className="btn-cta"
                onClick={handleContinue}
                disabled={loading}
              >
                {loading
                  ? "Redirection vers le paiement…"
                  : "Continuer"}
              </button>
            </div>

            {/* MESSAGE D’ERREUR STRIPE */}
            {err && (
              <p
                style={{
                  marginTop: 14,
                  fontSize: 13,
                  color: "#ffb3b3",
                }}
              >
                {err}
              </p>
            )}
          </div>
        </div>
      </section>
    </main>
  );
>>>>>>> dc31a71 (fix: client components build on render)
}
