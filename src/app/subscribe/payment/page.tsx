"use client";
export const dynamic = "force-dynamic";

import { useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { PLANS, normalizePlanId } from "@/data/plans";

const TIER_BY_PLAN: Record<string, "standard_ads" | "standard" | "premium"> = {
  ad: "standard_ads",
  standard: "standard",
  premium: "premium",
};

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
  const search = useSearchParams();

  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState<string | null>(null);
  const [selectedMethod, setSelectedMethod] = useState<MethodId>("card");

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
          method: selectedMethod,
        }),
      });

      const data = await resp.json().catch(() => ({}));

      if (data?.url) {
        window.location.href = data.url;
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

        <div className="hero-content" style={{ maxWidth: 960, margin: "0 auto" }}>
          <div
            className="glass-panel"
            style={{
              background: "rgba(0,0,0,.80)",
              borderRadius: 22,
              padding: "28px 26px 24px",
            }}
          >
            <h1 className="auth-title">Choisissez comment payer</h1>

            <p className="auth-sub">
              Offre sélectionnée : <strong>{plan.name}</strong> — {plan.price}
              {email && <> — <strong>{email}</strong></>}
            </p>

            <div style={{ display: "grid", gap: 12, marginTop: 20 }}>
              {METHODS.map((m) => (
                <button
                  key={m.id}
                  type="button"
                  onClick={() => setSelectedMethod(m.id)}
                  className={`payment-method ${
                    selectedMethod === m.id ? "active" : ""
                  }`}
                >
                  <div>
                    <strong>{m.title}</strong>
                    <div style={{ fontSize: 13, opacity: 0.7 }}>
                      {m.subtitle}
                    </div>
                  </div>
                  {m.badge && <span className="badge">{m.badge}</span>}
                </button>
              ))}
            </div>

            <div style={{ display: "flex", gap: 12, marginTop: 24 }}>
              <Link href={backHref} className="btn-ghost">
                ← Retour
              </Link>

              <button
                className="btn-cta"
                onClick={handleContinue}
                disabled={loading}
              >
                {loading ? "Redirection…" : "Continuer"}
              </button>
            </div>

            {err && (
              <p style={{ color: "#ffb3b3", marginTop: 12 }}>{err}</p>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
