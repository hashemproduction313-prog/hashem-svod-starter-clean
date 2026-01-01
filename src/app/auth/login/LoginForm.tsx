// src/app/auth/login/LoginForm.tsx
"use client";

import React from "react";
import Link from "next/link";

export default function LoginForm() {
  return (
    <main className="container">
      <section
        className="hero-modern"
        style={{ paddingTop: 40, paddingBottom: 70 }}
      >
        <div className="hero-overlay" />

<<<<<<< HEAD
        <form action="/api/auth/login" method="post" className="space-y-4">
          <div className="grid gap-2">
            <label htmlFor="email" className="text-sm font-medium">Email</label>
            <input id="email" name="email" type="email" required className="border rounded px-3 py-2 w-full bg-white/80" placeholder="ton@email.com" autoComplete="email" />
          </div>

          <div className="grid gap-2">
            <label htmlFor="password" className="text-sm font-medium">Mot de passe</label>
            <input id="password" name="password" type="password" required className="border rounded px-3 py-2 w-full bg-white/80" placeholder="••••••••" autoComplete="current-password" />
          </div>

          <button type="submit" className="w-full rounded-xl px-4 py-2 font-semibold border hover:bg-black/5 transition">
            Se connecter
          </button>
        </form>
=======
        <div
          className="hero-content"
          style={{
            width: "100%",
            maxWidth: 520,
            margin: "0 auto",
          }}
        >
          <div
            className="glass-panel"
            style={{
              background: "rgba(0,0,0,0.65)",
              borderRadius: 18,
              padding: "26px 28px 24px",
              boxShadow: "0 20px 60px rgba(0,0,0,0.75)",
              backdropFilter: "blur(10px)",
            }}
          >
            <header style={{ marginBottom: 16 }}>
              <h1 className="auth-title" style={{ marginBottom: 4 }}>
                Connexion
              </h1>
              <p className="auth-sub">
                Accède à ton compte{" "}
                <strong>Hashem Productions</strong>.
              </p>
            </header>
>>>>>>> dc31a71 (fix: client components build on render)

            {/* FORMULAIRE */}
            <form
              action="/api/auth/login"
              method="post"
              className="auth-form"
              style={{ display: "grid", gap: 12, marginTop: 6 }}
            >
              <div style={{ display: "grid", gap: 6 }}>
                <label htmlFor="email" className="label">
                  E-mail
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="ton@email.com"
                  className="input-lg"
                  style={{
                    background: "rgba(0,0,0,0.55)",
                    borderRadius: 12,
                    border: "1px solid rgba(255,255,255,0.14)",
                  }}
                />
              </div>

              <div style={{ display: "grid", gap: 6 }}>
                <label htmlFor="password" className="label">
                  Mot de passe
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  autoComplete="current-password"
                  placeholder="••••••••"
                  className="input-lg"
                  style={{
                    background: "rgba(0,0,0,0.55)",
                    borderRadius: 12,
                    border: "1px solid rgba(255,255,255,0.14)",
                  }}
                />
              </div>

              <button
                type="submit"
                className="btn-cta"
                style={{
                  width: "100%",
                  marginTop: 8,
                  fontWeight: 700,
                  letterSpacing: 0.2,
                }}
              >
                Se connecter
              </button>
            </form>

            {/* LIENS D’AIDE */}
            <div style={{ marginTop: 14, fontSize: ".95rem" }}>
              <p style={{ color: "var(--muted)" }}>
                Pas de compte ?{" "}
                <Link
                  href="/subscribe"
                  className="link"
                  style={{ color: "var(--gold)", fontWeight: 600 }}
                >
                  Créer un compte
                </Link>
              </p>
              <p
                style={{
                  color: "var(--muted)",
                  marginTop: 6,
                  fontSize: ".9rem",
                }}
              >
                Tu peux aussi t’abonner directement via la page{" "}
                <Link href="/subscribe" className="link">
                  Abonnements
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
