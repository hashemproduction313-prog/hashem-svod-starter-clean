// src/app/categories/films-series/page.tsx
import Link from "next/link";
import Image from "next/image";

type Access = "free" | "premium";
type Poster = { id: number; title: string; poster: string; access: Access };

const posters: Poster[] = [
  { id: 1,  title: "La 7ème Alliance",            poster: "/posters/poster1.jpg",  access: "premium" },
  { id: 2,  title: "Manga",                       poster: "/posters/poster2.jpg",  access: "premium" },
  { id: 3,  title: "Court-Métrage",               poster: "/posters/poster3.jpg",  access: "premium" },
  { id: 7,  title: "Kids",                        poster: "/posters/poster7.jpg",  access: "premium" },
  { id: 5,  title: "Le Sermon",                   poster: "/posters/poster5.jpg",  access: "free"    },
  { id: 8,  title: "Les Apôtres de l'Esprit Saint", poster: "/posters/poster8.jpg", access: "free"   },
  { id: 9,  title: "Le Lever",                    poster: "/posters/poster9.jpg",  access: "free"    },
  { id: 10, title: "C'est l'Heure",               poster: "/posters/poster10.jpg", access: "free"    },
  { id: 11, title: "Dieu t'Appelle",              poster: "/posters/poster11.jpg", access: "free"    },
  { id: 13, title: "Humanité 2.0",                poster: "/posters/poster13.jpg", access: "free"    },
];

// Deep links vers /watch ou /title
const deepLinks: Record<number, string> = {
  9:  "/watch/1/1",
  8:  "/watch/2/1",
  5:  "/watch/3/1",
  13: "/watch/4/1",
  6:  "/watch/5/1",
  10: "/watch/6/1",
  11: "/watch/7/1",
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

export default function FilmsSeriesPage() {
  return (
    <>
      {/* Hero catégorie */}
      <section className="hero-modern" style={{ paddingTop: 40, paddingBottom: 40 }}>
        <div className="hero-overlay" />
        <div className="hero-content">
          <h1>Films &amp; Séries</h1>
          <p>
            Toutes les œuvres narratives : films, séries et chroniques spirituelles
            autour de la 7ème Alliance et des Ansars.
          </p>
        </div>
      </section>

      {/* Grille de films & séries */}
      <section className="row">
        <h2>Catalogue Films &amp; Séries</h2>
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
