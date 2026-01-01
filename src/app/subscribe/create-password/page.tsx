export const dynamic = 'force-dynamic';
"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useRef, useState } from "react";

export default function CreatePasswordPage() {
  const search = useSearchParams();
  const router = useRouter();

  const email = (search.get("email") || "").trim();

  const [show, setShow] = useState(false);
  const pass1 = useRef<HTMLInputElement>(null);
  const pass2 = useRef<HTMLInputElement>(null);
  const [err, setErr] = useState("");
  const [loading, setLoading] = useState(false);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setErr("");

    const p1 = pass1.current?.value || "";
    const p2 = pass2.current?.value || "";

<<<<<<< HEAD
    if (!email) { setErr("E-mail manquant."); return; }
    if (p1.length < 8) { setErr("Mot de passe : minimum 8 caractères."); return; }
    if (p1 !== p2) { setErr("Les mots de passe ne correspondent pas."); return; }
=======
    if (!email) {
      setErr("E-mail manquant.");
      return;
    }
    if (p1.length < 8) {
      setErr("Mot de passe : minimum 8 caractères.");
      return;
    }
    if (p1 !== p2) {
      setErr("Les mots de passe ne correspondent pas.");
      return;
    }
>>>>>>> dc31a71 (fix: client components build on render)

    setLoading(true);
    try {
      const resp = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password: p1 }),
      });
      const data = await resp.json().catch(() => ({}));

      if (!resp.ok || data?.ok !== true) {
        setErr(data?.error || "Impossible d’enregistrer le mot de passe.");
        return;
      }

<<<<<<< HEAD
      // Succès → on passe aux offres
=======
      // ✅ Succès → on passe aux offres
>>>>>>> dc31a71 (fix: client components build on render)
      router.push(`/subscribe/plans?email=${encodeURIComponent(email)}`);
    } catch (e: any) {
      setErr(e?.message || "Erreur réseau.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="container" style={{ maxWidth: 900 }}>
      <section className="glass-panel" style={{ margin: "34px auto" }}>
        <h1 className="auth-title">Créer un mot de passe</h1>
<<<<<<< HEAD
        <p className="auth-sub">Ton e-mail : <strong>{email || "—"}</strong></p>
=======
        <p className="auth-sub">
          Votre e-mail : <strong>{email || "—"}</strong>
        </p>
>>>>>>> dc31a71 (fix: client components build on render)

        <form onSubmit={submit} style={{ marginTop: 14 }}>
          <div style={{ display: "grid", gap: 10, maxWidth: 680 }}>
            <div style={{ display: "flex", gap: 10 }}>
              <input
                className="input-lg"
                type={show ? "text" : "password"}
                placeholder="Mot de passe (au moins 8 caractères)"
                ref={pass1}
                aria-label="Mot de passe"
                disabled={loading}
              />
              <button
                type="button"
                className="btn-ghost"
<<<<<<< HEAD
                onClick={() => setShow(s => !s)}
=======
                onClick={() => setShow((s) => !s)}
>>>>>>> dc31a71 (fix: client components build on render)
                disabled={loading}
              >
                {show ? "Masquer" : "Afficher"}
              </button>
            </div>

            <input
              className="input-lg"
              type={show ? "text" : "password"}
              placeholder="Confirmez le mot de passe"
              ref={pass2}
              aria-label="Confirmation mot de passe"
              disabled={loading}
            />
          </div>

          {err && (
            <p style={{ color: "#ffb3b3", marginTop: 8 }}>
              {err}
            </p>
          )}

          <div style={{ display: "flex", gap: 10, marginTop: 14 }}>
            <button className="btn-cta" type="submit" disabled={loading}>
              {loading ? "Enregistrement..." : "Terminer l’inscription"}
            </button>
            <a className="btn-ghost-secondary" href={`/subscribe/inbox?email=${encodeURIComponent(email)}`}>
              Utiliser le lien e-mail à la place
            </a>
          </div>

          <p className="notice" style={{ marginTop: 12 }}>
<<<<<<< HEAD
            En continuant, vous acceptez les Conditions d’utilisation et la Politique de confidentialité de <strong>Hashem Productions</strong>.
=======
            En continuant, vous acceptez les Conditions d’utilisation et la
            Politique de confidentialité de{" "}
            <strong>Hashem Productions</strong>. Après cette étape, vous
            pourrez choisir votre offre puis régler votre abonnement en toute
            sécurité.
>>>>>>> dc31a71 (fix: client components build on render)
          </p>
        </form>
      </section>
    </main>
  );
}
