// src/app/account/page.tsx
import Link from "next/link";

export default function AccountPage() {
  const currentPlanName = "Standard avec pub";
  const currentPlanPrice = "7,99 € / mois";

  return (
    <main
      className="container"
      style={{
        maxWidth: 1100,
        paddingTop: 48,
        paddingBottom: 80,
      }}
    >
      <div
        className="glass-panel"
        style={{
          margin: "0 auto",
          borderRadius: 26,
          padding: "26px 28px 24px",
          background:
            "radial-gradient(circle at top left, rgba(255,215,128,0.16), rgba(0,0,0,0.92))",
          boxShadow: "0 30px 90px rgba(0,0,0,0.95)",
          border: "1px solid rgba(255,255,255,0.10)",
        }}
      >
        {/* HEADER PROFIL */}
        <header
          style={{
            display: "flex",
            alignItems: "center",
            gap: 20,
            marginBottom: 24,
            flexWrap: "wrap",
          }}
        >
          {/* Avatar rond */}
          <div
            aria-hidden
            style={{
              width: 72,
              height: 72,
              borderRadius: "999px",
              background:
                "linear-gradient(135deg, rgba(255,215,128,0.9), rgba(120,80,10,0.9))",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 800,
              fontSize: 30,
              color: "#111",
              boxShadow: "0 0 0 3px rgba(0,0,0,0.7)",
            }}
          >
            H
          </div>

          <div style={{ flex: 1, minWidth: 230 }}>
            <h1
              className="auth-title"
              style={{
                margin: 0,
                fontSize: "clamp(24px,3.4vw,30px)",
                lineHeight: 1.2,
              }}
            >
              Mon compte
            </h1>
            <p
              className="auth-sub"
              style={{
                marginTop: 4,
                fontSize: 14,
                color: "var(--muted)",
              }}
            >
              Gérez votre abonnement, vos informations personnelles et
              retrouvez bientôt vos favoris, comme sur les grandes plateformes
              de streaming.
            </p>
          </div>

          {/* Badge plan actuel */}
          <div
            style={{
              padding: "8px 14px",
              borderRadius: 999,
              border: "1px solid rgba(255,215,128,0.6)",
              background: "rgba(0,0,0,0.6)",
              fontSize: 13,
              textAlign: "right",
              minWidth: 210,
            }}
          >
            <div style={{ fontWeight: 600, color: "var(--gold)" }}>
              Plan actuel
            </div>
            <div style={{ fontSize: 12 }}>
              {currentPlanName} — {currentPlanPrice}
            </div>
          </div>
        </header>

        {/* GRID PRINCIPALE */}
        <div
          style={{
            display: "grid",
            gap: 22,
            gridTemplateColumns: "minmax(260px, 1.2fr) minmax(260px, 1fr)",
          }}
        >
          {/* ABONNEMENT */}
          <section
            aria-labelledby="account-subscription-title"
            style={{
              borderRadius: 20,
              padding: "18px 18px 16px",
              background: "rgba(0,0,0,0.7)",
              border: "1px solid rgba(255,255,255,0.08)",
              minHeight: 190,
            }}
          >
            <h2
              id="account-subscription-title"
              className="section-title"
              style={{
                fontSize: 18,
                marginBottom: 10,
              }}
            >
              Abonnement
            </h2>

            <p
              style={{
                fontSize: 14,
                color: "var(--muted)",
                marginBottom: 8,
              }}
            >
              Offre actuelle :{" "}
              <strong>{currentPlanName}</strong> — {currentPlanPrice}
            </p>

            <p
              style={{
                fontSize: 13,
                color: "var(--muted)",
                marginBottom: 12,
              }}
            >
              Statut : <span style={{ color: "#4ade80" }}>Actif</span>{" "}
              <span style={{ opacity: 0.7 }}>
                (données de test pour l’instant)
              </span>
            </p>

            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
              <Link
                href="/subscribe/plans"
                className="btn-cta"
                style={{ fontSize: 14 }}
              >
                Changer d’offre
              </Link>

              <button
                type="button"
                className="btn-ghost"
                style={{
                  fontSize: 14,
                  borderColor: "rgba(239,68,68,0.6)",
                  color: "rgba(248,113,113,0.95)",
                }}
              >
                Résilier mon abonnement
              </button>
            </div>

            <p
              style={{
                marginTop: 10,
                fontSize: 12,
                color: "var(--muted)",
              }}
            >
              Vous pourrez bientôt gérer la facturation directement depuis
              cette page (via Stripe&nbsp;Customer&nbsp;Portal).
            </p>
          </section>

          {/* PROFIL */}
          <section
            aria-labelledby="account-profile-title"
            style={{
              borderRadius: 20,
              padding: "18px 18px 16px",
              background:
                "linear-gradient(135deg, rgba(255,255,255,0.02), rgba(0,0,0,0.85))",
              border: "1px solid rgba(255,255,255,0.12)",
              minHeight: 190,
            }}
          >
            <h2
              id="account-profile-title"
              className="section-title"
              style={{ fontSize: 18, marginBottom: 10 }}
            >
              Espace personnel
            </h2>

            <p
              style={{
                fontSize: 14,
                color: "var(--muted)",
                marginBottom: 12,
              }}
            >
              Personnalisez votre profil comme sur Netflix ou Amazon Prime.
            </p>

            <div style={{ display: "grid", gap: 8 }}>
              <div>
                <label
                  htmlFor="display-name"
                  style={{ fontSize: 13, opacity: 0.9 }}
                >
                  Nom d’affichage
                </label>
                <input
                  id="display-name"
                  className="input"
                  placeholder="Votre pseudo (bientôt éditable)"
                  disabled
                  style={{
                    marginTop: 4,
                    fontSize: 14,
                    opacity: 0.7,
                    cursor: "not-allowed",
                  }}
                />
              </div>

              <div>
                <label
                  htmlFor="language"
                  style={{ fontSize: 13, opacity: 0.9 }}
                >
                  Langue de l’interface
                </label>
                <select
                  id="language"
                  className="input"
                  disabled
                  style={{
                    marginTop: 4,
                    fontSize: 14,
                    opacity: 0.7,
                    cursor: "not-allowed",
                  }}
                >
                  <option>Français (bientôt)</option>
                  <option>Anglais (bientôt)</option>
                </select>
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginTop: 4,
                }}
              >
                <div>
                  <div style={{ fontSize: 13, fontWeight: 500 }}>
                    Mode Kids (protection enfants)
                  </div>
                  <p
                    style={{
                      fontSize: 12,
                      color: "var(--muted)",
                      marginTop: 2,
                    }}
                  >
                    Filtrera plus tard le catalogue pour les plus jeunes.
                  </p>
                </div>

                <button
                  type="button"
                  className="btn-ghost"
                  style={{
                    fontSize: 12,
                    padding: "6px 10px",
                    opacity: 0.7,
                    cursor: "not-allowed",
                  }}
                >
                  Bientôt
                </button>
              </div>
            </div>

            <button
              type="button"
              className="btn-ghost"
              style={{
                marginTop: 10,
                fontSize: 14,
                width: "100%",
                opacity: 0.75,
                cursor: "not-allowed",
              }}
            >
              Ajouter / changer ma photo de profil (à venir)
            </button>
          </section>
        </div>

        {/* FAVORIS */}
        <section
          aria-labelledby="account-favorites-title"
          style={{
            marginTop: 24,
            borderRadius: 20,
            padding: "18px 18px 12px",
            background: "rgba(0,0,0,0.78)",
            border: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <h2
            id="account-favorites-title"
            className="section-title"
            style={{ fontSize: 18, marginBottom: 8 }}
          >
            Vos favoris
          </h2>

          <p
            style={{
              fontSize: 14,
              color: "var(--muted)",
              marginBottom: 12,
            }}
          >
            Bientôt, vous pourrez marquer vos séries et films spirituels
            préférés, et les retrouver ici en un clin d’œil.
          </p>

          <div
            style={{
              display: "grid",
              gap: 12,
              gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
              opacity: 0.8,
            }}
          >
            {["Le Lever", "La 7ème Alliance", "Le Sermon"].map((title) => (
              <div
                key={title}
                className="card-modern"
                style={{
                  borderRadius: 16,
                  overflow: "hidden",
                  background:
                    "linear-gradient(135deg, rgba(255,255,255,0.04), rgba(0,0,0,0.9))",
                  border: "1px dashed rgba(255,255,255,0.18)",
                  padding: "10px 10px 12px",
                  minHeight: 130,
                }}
              >
                <div
                  style={{
                    height: 80,
                    borderRadius: 10,
                    background:
                      "linear-gradient(135deg, rgba(255,215,128,0.3), rgba(0,0,0,0.9))",
                    marginBottom: 8,
                  }}
                />
                <div
                  style={{
                    fontSize: 13,
                    fontWeight: 500,
                  }}
                >
                  {title}
                </div>
                <div
                  style={{
                    fontSize: 11,
                    color: "var(--muted)",
                    marginTop: 2,
                  }}
                >
                  Placeholder de favoris (non cliquable pour l’instant)
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
