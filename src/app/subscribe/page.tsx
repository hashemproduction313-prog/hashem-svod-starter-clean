"use client";
export const dynamic = "force-dynamic";

import { useEffect, useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function SubscribeEmailStep() {
  const router = useRouter();
  const search = useSearchParams();

  useEffect(() => {
    document.title = "S’abonner — Hashem Productions";
  }, []);

  // Préremplir l’input si ?email= est présent
  const emailFromQS = useMemo(
    () => (search.get("email") ?? "").trim(),
    [search]
  );

  const [email, setEmail] = useState(emailFromQS);
  const [err, setErr] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  function isValidEmail(v: string) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setErr(null);

    const v = email.trim();
    if (!isValidEmail(v)) {
      setErr("L’adresse e-mail est obligatoire.");
      return;
    }

    setLoading(true);
    try {
      router.push(`/subscribe/create-password?email=${encodeURIComponent(v)}`);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <section
        className="hero-modern"
        style={{ paddingTop: 40, paddingBottom: 60 }}
      >
        <div className="hero-overlay" />

        <div
          className="hero-content"
          style={{
            width: "100%",
            maxWidth: 980,
            margin: "0 auto",
          }}
        >
          <div
            className="glass-panel"
            style={{
              background: "rgba(0,0,0,.45)",
              borderRadius: 18,
              padding: "28px 28px",
              backdropFilter: "blur(8px)",
            }}
          >
            <h1
              style={{
                fontSize: "clamp(28px,4.6vw,44px)",
                lineHeight: 1.2,
                fontWeight: 800,
                color: "var(--gold)",
                margin: "2px 0 10px 0",
              }}
            >
              Plateforme de Streaming
              <br />
              Spirituel
            </h1>

            <p
              style={{
                marginTop: 6,
                marginBottom: 14,
                color: "var(--muted)",
                fontSize: "clamp(14px,2.4vw,16px)",
              }}
            >
              À partir de <strong>7,99 €</strong>/mois. Annulable à tout moment.
            </p>

            <form
              onSubmit={onSubmit}
              noValidate
              style={{ display: "flex", gap: 12, maxWidth: 760 }}
            >
              <label htmlFor="email" className="sr-only">
                Adresse e-mail
              </label>

              <input
                id="email"
                type="email"
                inputMode="email"
                autoComplete="email"
                placeholder="Adresse e-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input"
                aria-invalid={!!err}
                aria-describedby={err ? "email-error" : undefined}
                style={{
                  flex: 1,
                  height: 42,
                  fontSize: 16,
                  background: "rgba(255,255,255,.06)",
                }}
              />

              <button
                type="submit"
                className="btn-primary"
                disabled={loading}
                style={{ height: 42, padding: "0 16px", fontWeight: 700 }}
              >
                {loading ? "…" : "S’abonner"}
              </button>
            </form>

            <div
              style={{
                marginTop: 10,
                color: "var(--muted)",
                fontSize: ".95rem",
              }}
            >
              {err ? (
                <p id="email-error" style={{ color: "#ffb3b3" }}>
                  {err}
                </p>
              ) : (
                <p>L’adresse e-mail est obligatoire.</p>
              )}

              <p style={{ marginTop: 8 }}>
                En cliquant sur <strong>S’abonner</strong>, vous créez votre
                compte <strong>Hashem Productions</strong>. Vous pourrez ensuite
                définir votre mot de passe, choisir votre offre et régler votre
                abonnement en toute sécurité.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}