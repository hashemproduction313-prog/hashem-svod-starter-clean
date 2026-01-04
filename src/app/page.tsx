// src/app/page.tsx
import Link from "next/link";

type Access = "free" | "premium";
type Poster = { id: number; title: string; poster: string; access: Access };

/**
 * ORDRE DEMANDÉ (sections explicites) :
 * 1) Premium vitrine : 1,2,3,7
 * 2) Enseignements d’Aba Al-Sadiq (de Lui est la Paix) : 12,14,15,16
 * 3) Les Sermons : 5
 * 4) Documentaire : 6
 * 5) Chroniques des Ansars : 8,9,10,11,13
 * 6) Musique : 4
 */
const allPosters: Poster[] = [
  // — Premium vitrine
  { id: 1,  title: "La 7ème Alliance",            poster: "/posters/poster1.jpg",  access: "premium" },
  { id: 2,  title: "Manga",                       poster: "/posters/poster2.jpg",  access: "premium" },
  { id: 3,  title: "Court-Métrage",               poster: "/posters/poster3.jpg",  access: "premium" },
  { id: 7,  title: "Kids",                        poster: "/posters/poster7.jpg",  access: "premium" },

  // — Enseignements d’Aba Al-Sadiq
  { id: 12, title: "Enseignements Divin",         poster: "/posters/poster12.jpg", access: "free" },
  { id: 14, title: "L'École des Mystères Divins", poster: "/posters/poster14.jpg", access: "free" },
  { id: 15, title: "Le Hall des Mystères",        poster: "/posters/poster15.jpg", access: "free" },
  { id: 16, title: "Demandez-Moi",                poster: "/posters/poster16.jpg", access: "free" },

  // — Les Sermons
  { id: 5,  title: "Le Sermon",                   poster: "/posters/poster5.jpg",  access: "free" },

  // — Documentaire
  { id: 6,  title: "Documentaire",                poster: "/posters/poster6.jpg",  access: "free" },

  // — Chroniques des Ansars
  { id: 8,  title: "Les Apôtres de l'Esprit Saint", poster: "/posters/poster8.jpg",  access: "free" },
  { id: 9,  title: "Le Lever",                      poster: "/posters/poster9.jpg",  access: "free" },
  { id: 10, title: "C'est l'Heure",                 poster: "/posters/poster10.jpg", access: "free" },
  { id: 11, title: "Dieu t'Appelle",                poster: "/posters/poster11.jpg", access: "free" },
  { id: 13, title: "Humanité 2.0",                  poster: "/posters/poster13.jpg", access: "free" },

  // — Musique
  { id: 4,  title: "Musique",                     poster: "/posters/poster4.jpg", access: "free" },
];

/** Deep links Home -> Watch */
const deepLinks: Record<number, string> = {
  9:  "/watch/1/1",
  8:  "/watch/2/1",
  5:  "/watch/3/1",
  13: "/watch/4/1",
  6:  "/watch/5/1",
  10: "/watch/6/1",
  11: "/watch/7/1",
  15: "/watch/15/1",
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
        {/* Image statique (compatible Render) */}
        <img
          src={v.poster}
          alt={v.title}
          loading={v.id <= 3 ? "eager" : "lazy"}
          style={{
            width: "100%",
            aspectRatio: "16 / 9",
            objectFit: "cover",
            borderRadius: 14,
            display: "block",
          }}
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

/** Sélections par groupe */
const premiumVitrineIds = [1, 2, 3, 7];
const enseignementsIds  = [12, 14, 15, 16];
const sermonsIds        = [5];
const documentaireIds   = [6];
const chroniquesIds     = [8, 9, 10, 11, 13];
const musiqueIds        = [4];

const pick = (ids: number[]) => allPosters.filter(p => ids.includes(p.id));

function Grid({ items }: { items: Poster[] }) {
  return (
    <div
      style={{
        display: "grid",
        gap: 16,
        gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
        justifyContent: "start",
      }}
    >
      {items.map(v => <Card key={v.id} v={v} />)}
    </div>
  );
}

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="hero-modern">
        <div className="hero-overlay" />
        <div className="hero-content">
          <h1>Plateforme de Streaming Spirituel</h1>
          <p>
            Un espace dédié aux âmes en quête de lumière : animations, films,
            documentaires, séries sacrées, chroniques des Ansars et vidéos
            d’Aba Al-Sadiq (De Lui est la Paix).
          </p>
          <Link className="btn-primary" href="/subscribe">
            Abonnez-vous
          </Link>
        </div>
      </section>

      <section className="row">
        <h2>Nouveautés</h2>
        <Grid items={pick(premiumVitrineIds)} />
      </section>

      <section className="row">
        <h2>Enseignements d’Aba Al-Sadiq (de Lui est la Paix)</h2>
        <Grid items={pick(enseignementsIds)} />
      </section>

      <section className="row">
        <h2>Les Sermons</h2>
        <Grid items={pick(sermonsIds)} />
      </section>

      <section className="row">
        <h2>Documentaire</h2>
        <Grid items={pick(documentaireIds)} />
      </section>

      <section className="row">
        <h2>Chroniques des Ansars</h2>
        <Grid items={pick(chroniquesIds)} />
      </section>

      <section className="row">
        <h2>Musique</h2>
        <Grid items={pick(musiqueIds)} />
      </section>
    </>
  );
}
