// src/app/title/[id]/page.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { catalog } from "../../../data/catalog";

export default function TitlePage({ params }: { params: { id: string } }) {
  const seriesId = Number(params.id);
  if (!Number.isFinite(seriesId)) return notFound();

  const series = catalog.find((s) => s.id === seriesId);
  if (!series) return notFound();

  const hasInedits = !!(series.inedits && series.inedits.length);

  return (
    <main className="container">
      {/* HERO / entête de la série */}
      <section className="title-hero">
        <div className="title-hero__poster">
          <Image
            src={series.poster}
            alt={series.title}
            width={540}
            height={304}
            priority
          />
        </div>

        <div className="title-hero__content">
          <h1 className="title-hero__title">{series.title}</h1>
          <p className="title-hero__desc">{series.description}</p>

          {series.episodes?.length ? (
            <Link className="btn-primary" href={`/watch/${series.id}/1`}>
              ▶ Lire l’épisode 1
            </Link>
          ) : null}
        </div>
      </section>

      {/* LISTE D'ÉPISODES */}
      <section className="row">
        <h2>Épisodes</h2>

        <div className="episode-list">
          {series.episodes.map((e) => {
            const isPremium = e.access === "premium";

            return (
              <article key={e.num} className="episode-row hover-full">
                {/* Vignette (cliquable) */}
                <Link
                  href={`/watch/${series.id}/${e.num}`}
                  className="thumb"
                  aria-label={`Épisode ${e.num}`}
                >
                  <Image
                    src={e.thumb}
                    alt={`Épisode ${e.num} — ${e.title}`}
                    fill
                    sizes="(max-width: 800px) 100vw, 320px"
                    style={{ objectFit: "cover" }}
                    priority={e.num <= 2}
                  />

                  <span
                    className={`badge ${
                      isPremium ? "badge-premium" : "badge-free"
                    }`}
                  >
                    {isPremium ? "Premium 🔒" : "Gratuit"}
                  </span>
                </Link>

                {/* Infos */}
                <div className="info">
                  <h3 className="title">
                    <Link href={`/watch/${series.id}/${e.num}`}>
                      Épisode {e.num} — {e.title}
                    </Link>
                  </h3>

                  <p className="synopsis">{e.synopsis}</p>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* INÉDITS */}
      {hasInedits && (
        <section className="row">
          <h2>Épisodes Inédits — Le Manifeste du Mahdi</h2>

          <div className="episode-list">
            {series.inedits!.map((e) => (
              <article key={`inedit-${e.num}`} className="episode-row hover-full">
                <Link
                  href={`/watch/${series.id}/inedit-${e.num}`}
                  className="thumb"
                  aria-label={`Inédit ${e.num}`}
                >
                  <Image
                    src={e.thumb || series.poster}
                    alt={`Inédit ${e.num} — ${e.title}`}
                    fill
                    sizes="(max-width: 800px) 100vw, 320px"
                    style={{ objectFit: "cover" }}
                  />
                </Link>

                <div className="info">
                  <h3 className="title">
                    <Link href={`/watch/${series.id}/inedit-${e.num}`}>
                      Inédit {e.num} — {e.title}
                    </Link>
                  </h3>

                  {e.synopsis ? (
                    <p className="synopsis">{e.synopsis}</p>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        </section>
      )}

      {/* styles locaux pour les badges */}
      <style jsx>{`
        .thumb {
          position: relative;
        }
        .badge {
          position: absolute;
          top: 8px;
          left: 8px;
          padding: 4px 8px;
          font-size: 12px;
          font-weight: 800;
          border-radius: 8px;
          box-shadow: 0 2px 8px rgba(0,0,0,.35);
        }
        .badge-free {
          background: rgba(60, 201, 90, .95);
          color: #0b0b0c;
          border: 1px solid rgba(255,255,255,.3);
        }
        .badge-premium {
          background: linear-gradient(135deg, #d4af37, #f7e27c);
          color: #111;
          border: 1px solid rgba(0,0,0,.25);
        }
      `}</style>
    </main>
  );
}
