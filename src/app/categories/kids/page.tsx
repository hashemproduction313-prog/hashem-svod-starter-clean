// src/app/categories/kids/page.tsx
import Link from "next/link";
import Image from "next/image";

type Access = "free" | "premium";
type Poster = { id: number; title: string; poster: string; access: Access };

const posters: Poster[] = [
  { id: 17, title: "Comptines",        poster: "/posters/poster17.jpg", access: "free" },
  { id: 18, title: "Cartoon",          poster: "/posters/poster18.jpg", access: "premium" },
  { id: 19, title: "Manga Kids",       poster: "/posters/poster19.jpg", access: "premium" },
  { id: 20, title: "Dessin Animé 3D",  poster: "/posters/poster20.jpg", access: "premium" },
];

// Mapping optionnel si tu veux des liens spécifiques vers /watch/… plus tard.
const deepLinks: Record<number, string> = {
  // 17: "/watch/…/1",
  // 18: "/watch/…/1",
  // 19: "/watch/…/1",
  // 20: "/watch/…/1",
};

function linkFor(id: number) {
  return deepLinks[id] ?? `/title/${id}`;
}

function Card({ v }: { v: Poster }) {
  const isPremium = v.access === "premium";
  return (
    <Link
      href={linkFor(v.id)}
      className="card-modern card-link"
      aria-label={v.title}
      style={{ position: "relative" }}
    >
      <div style={{ position: "relative" }}>
        <Image
          src={v.poster}
          alt={v.title}
          width={320}
          height={180}
          sizes="(max-width: 640px) 50vw, (max-width: 1100px) 33vw, 16vw"
          style={{ objectFit: "cover", borderRadius: 14 }}
        />
        <span
          className={`badge ${isPremium ? "badge--premium" : "badge--free"}`}
          aria-label={isPremium ? "Premium" : "Gratuit"}
        >
          {isPremium ? "Premium 🔒" : "Gratuit"}
        </span>
      </div>
      <h3>{v.title}</h3>
    </Link>
  );
}

export default function KidsPage() {
  return (
    <>
      {/* HERO */}
      <section
        className="hero-modern"
        style={{
          paddingTop: 28,
          paddingBottom: 40,
        }}
      >
        <div className="hero-overlay" />

        <div
          className="hero-content"
          style={{
            width: "100%",
            maxWidth: 1100,
            margin: "0 auto",
            display: "flex",
            gap: 24,
            alignItems: "stretch",
          }}
        >
          {/* Bloc gauche : texte principal */}
          <div
            className="glass-panel"
            style={{
              flex: 1.1,
              background: "rgba(0,0,0,.75)",
              borderRadius: 22,
              padding: "22px 26px 24px",
              boxShadow: "0 22px 70px rgba(0,0,0,.85)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              minHeight: 220,
            }}
          >
            <div
              style={{
                fontSize: 13,
                color: "var(--muted)",
                marginBottom: 6,
              }}
            >
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 6,
                  padding: "3px 10px",
                  borderRadius: 999,
                  background: "rgba(0,0,0,.6)",
                  border: "1px solid rgba(255,255,255,.12)",
                }}
              >
                <span style={{ fontSize: 14 }}>🛡️</span>
                <span>
                  Espace protégé · À partir de <strong>7 ans</strong> (recommandé)
                </span>
              </span>
            </div>

            <h1
              style={{
                fontSize: "clamp(26px, 3.5vw, 38px)",
                lineHeight: 1.25,
                fontWeight: 800,
                marginBottom: 10,
              }}
            >
              Espace Kids — avec le{" "}
              <span style={{ color: "var(--gold)" }}>Compagnon d’Égypte</span>
            </h1>

            <p
              style={{
                fontSize: 15,
                maxWidth: 640,
                color: "var(--muted)",
              }}
            >
              Retrouve des dessins animés, comptines, aventures 3D et séries
              manga adaptées aux plus jeunes, guidées par le{" "}
              <strong>Compagnon d’Égypte</strong>. Un univers doux, spirituel
              et sécurisé pour regarder en famille.
              <br />
              <br />
              De nouveaux programmes pour enfants viendront bientôt compléter
              cette section.
            </p>
          </div>

          {/* Bloc droite : avatar + bulle */}
          <aside
            style={{
              flex: 0.9,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                width: "100%",
                maxWidth: 320,
                background:
                  "radial-gradient(circle at top, rgba(255,255,255,.08), rgba(0,0,0,.92))",
                borderRadius: 26,
                padding: "20px 18px 18px",
                boxShadow: "0 22px 70px rgba(0,0,0,.85)",
                textAlign: "center",
                border: "1px solid rgba(255,255,255,.08)",
              }}
            >
              <p
                style={{
                  fontSize: 15,
                  fontWeight: 600,
                  marginBottom: 10,
                  color: "var(--gold)",
                }}
              >
                Bonjour mon enfant ! <br />
                Je suis le compagnon d’Égypte. <br />
                <span style={{ color: "#fff" }}>Bienvenue !</span>
              </p>

              <div style={{ display: "flex", justifyContent: "center" }}>
                <Image
                  src="/kids/compagnon-egypte-full.png"
                  alt="Ton compagnon d'Égypte"
                  width={220}
                  height={320}
                  priority
                  style={{ objectFit: "contain" }}
                />
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* GRILLE */}
      <section className="row">
        <h2>Pour les enfants &amp; à partager en famille</h2>
        <p style={{ color: "var(--muted)", marginBottom: 12 }}>
          Choisis un programme pour continuer l’aventure avec le Compagnon
          d’Égypte : comptines, dessins animés, manga kids et aventures 3D.
        </p>

        <div
          style={{
            display: "grid",
            gap: 16,
            gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
          }}
        >
          {posters.map((v) => (
            <Card key={v.id} v={v} />
          ))}
        </div>
      </section>
    </>
  );
}
