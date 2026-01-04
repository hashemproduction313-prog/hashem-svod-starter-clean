"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useState } from "react";

export default function SubscribeInboxPage() {
  const router = useRouter();
  const search = useSearchParams();

  const email = (search.get("email") || "").trim();
  const [loading, setLoading] = useState(false);
  const [note, setNote] = useState<string | null>(null);
  const [err, setErr] = useState<string | null>(null);

  async function resend() {
    if (!email) {
      setErr("Adresse e-mail manquante.");
      return;
    }

    setLoading(true);
    setErr(null);
    setNote(null);

    try {
      const resp = await fetch("/api/auth/send-magic-link", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          redirectTo: "/subscribe/create-password",
        }),
      });

      const data = await resp.json().catch(() => ({}));

      if (!resp.ok || data?.ok !== true) {
        setErr(
          data?.error || "Impossible de renvoyer le lien pour le moment."
        );
        return;
      }

      setNote("Lien renvoyé ✅ — vérifie ta boîte de réception (et tes spams).");
    } catch (e: any) {
      setErr(e?.message || "Erreur réseau.");
    } finally {
      setLoading(false);
    }
  }

  const goCreatePassword = () => {
    router.push(
      `/subscribe/create-password?email=${encodeURIComponent(email)}`
    );
  };

  const goBack = () => {
    router.push("/subscribe");
  };

  return (
    <main className="container" style={{ maxWidth: 1200 }}>
      <section className="hero-modern" style={{ marginTop: 28 }}>
        <div className="hero-overlay" />
        <div className="hero-content">
          <h1 className="auth-title" style={{ marginBottom: 8 }}>
            Consultez votre boîte de réception <span aria-hidden>📩</span>
          </h1>

          <p className="auth-sub" style={{ maxWidth: 60 * 16 }}>
            Nous avons envoyé un lien d’activation à l’adresse{" "}
            <strong>{email || "—"}</strong>. Cliquez dessus pour accéder à{" "}
            <strong>Hashem Productions</strong>.
          </p>

          <div
            style={{
              display: "flex",
              gap: 12,
              marginTop: 14,
              flexWrap: "wrap",
            }}
          >
            <button
              className="btn-cta"
              onClick={resend}
              disabled={loading || !email}
            >
              {loading ? "Envoi..." : "Renvoyer le lien"}
            </button>

            <button
              className="btn-ghost"
              onClick={goCreatePassword}
              disabled={!email}
            >
              Créer plutôt un mot de passe
            </button>

            <button className="btn-ghost" onClick={goBack}>
              Revenir en arrière
            </button>
          </div>

          <p className="notice" style={{ marginTop: 12 }}>
            ⚠️ Le lien expirera dans 15 minutes. Pensez à vérifier vos spams.
          </p>

          {note && (
            <p className="email-note" style={{ marginTop: 8 }}>
              {note}
            </p>
          )}

          {err && (
            <p className="email-error" style={{ marginTop: 8 }}>
              {err}
            </p>
          )}
        </div>
      </section>
    </main>
  );
}
