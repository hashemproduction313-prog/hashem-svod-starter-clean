// src/app/watch/[id]/WatchClient.tsx
"use client";

import Link from "next/link";
import React, { useEffect, useRef } from "react";
import Hls from "hls.js";

type BonusItem = {
  imgSrc: string;      // ex: "/bonus/bonus1.jpg"
  alt: string;         // ex: "Épisode 1 – ..."
  href?: string;       // route cible
};

type ThumbItem = {
  num: number;
  title: string;
  thumb?: string;      // <-- chemin public ex: "/thumbs/thumbs_9-1.jpg"
};

type Props = {
  seriesId: number;
  seriesTitle: string;

  fullTitle: string;
  synopsis: string;
  duration: string;

  playbackId: string;
  isPremium: boolean;

  nextEpisodeNum?: number;
  nextEpisodeTitle?: string;

  // Désormais on reçoit thumb?: string
  thumbs?: ThumbItem[];

  // BONUS
  bonusTitle?: string;
  bonusSummary?: string;
  bonusItems?: BonusItem[];
};

export default function WatchClient({
  seriesId,
  seriesTitle,
  fullTitle,
  synopsis,
  duration,
  playbackId,
  isPremium,
  nextEpisodeNum,
  nextEpisodeTitle,
  thumbs,
  bonusTitle,
  bonusSummary,
  bonusItems,
}: Props) {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const hlsUrl = `https://stream.mux.com/${playbackId}.m3u8`;
    const videoEl = videoRef.current;
    if (!videoEl) return;

    if (videoEl.canPlayType("application/vnd.apple.mpegurl")) {
      videoEl.src = hlsUrl;
      return;
    }

    if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource(hlsUrl);
      hls.attachMedia(videoEl);
      return () => hls.destroy();
    }

    console.warn("HLS non supporté dans ce navigateur.");
  }, [playbackId]);

  const nextLabel =
    nextEpisodeNum && nextEpisodeTitle
      ? `Épisode ${nextEpisodeNum} — ${nextEpisodeTitle}`
      : nextEpisodeNum
      ? `Épisode ${nextEpisodeNum}`
      : undefined;

  return (
    <main className="container" style={{ maxWidth: 1100 }}>
      {/* Fil d’Ariane */}
      <nav className="breadcrumb" aria-label="Fil d’ariane">
        <Link
          href={`/title/${seriesId}`}
          className="back-link"
          style={{
            fontWeight: 600,
            color: "var(--text-primary, #fff)",
            textDecoration: "none",
          }}
        >
          ◀ {seriesTitle}
        </Link>
      </nav>

      {/* Titre */}
      <h1
        className="watch-title"
        style={{
          fontSize: "1.75rem",
          fontWeight: 700,
          color: "var(--text-primary, #fff)",
          marginTop: 8,
          lineHeight: 1.3,
        }}
      >
        {fullTitle}
      </h1>

      {/* Résumé + durée */}
      <p
        style={{
          color: "#d4af37",
          marginTop: 8,
          lineHeight: 1.5,
          fontSize: 15,
          maxWidth: 900,
          whiteSpace: "normal",
          overflow: "visible",
        }}
      >
        {synopsis}
        <span style={{ marginLeft: 8, opacity: 0.9 }}>• {duration}</span>
      </p>

      {/* Lecteur */}
      {!isPremium ? (
        <div
          className="player-wrap"
          style={{
            marginTop: 16,
            borderRadius: 8,
            overflow: "hidden",
            backgroundColor: "black",
            border: "1px solid rgba(255,255,255,0.15)",
          }}
        >
          <video
            ref={videoRef}
            controls
            playsInline
            preload="metadata"
            style={{
              width: "100%",
              maxWidth: "100%",
              display: "block",
              aspectRatio: "16/9",
              backgroundColor: "black",
            }}
          />
        </div>
      ) : (
        <div
          className="glass-panel"
          style={{
            display: "grid",
            gap: 12,
            placeItems: "center",
            padding: 28,
            marginTop: 8,
            background: "rgba(0,0,0,0.4)",
            borderRadius: 8,
            border: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          <p
            style={{
              fontSize: 18,
              fontWeight: 800,
              color: "var(--text-primary, #fff)",
              textAlign: "center",
            }}
          >
            Contenu Premium 🔒
          </p>
          <p
            style={{
              color: "var(--muted, #bbb)",
              textAlign: "center",
              maxWidth: 560,
              lineHeight: 1.5,
              fontSize: 15,
            }}
          >
            Cet épisode est réservé aux abonnés.
          </p>

          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            <Link
              href="/subscribe"
              className="btn-cta"
              style={{
                backgroundColor: "#d4af37",
                color: "#000",
                fontWeight: 600,
                padding: "10px 16px",
                borderRadius: 6,
                textDecoration: "none",
              }}
            >
              S’abonner
            </Link>
            <Link
              href={`/title/${seriesId}`}
              className="btn-ghost-secondary"
              style={{
                backgroundColor: "rgba(255,255,255,0.1)",
                color: "#fff",
                fontWeight: 500,
                padding: "10px 16px",
                borderRadius: 6,
                textDecoration: "none",
                border: "1px solid rgba(255,255,255,0.2)",
              }}
            >
              Voir les épisodes gratuits
            </Link>
          </div>
        </div>
      )}

      {/* Épisode suivant */}
      {nextEpisodeNum && nextLabel ? (
        <div style={{ marginTop: 24 }}>
          <Link
            href={`/watch/${seriesId}/${nextEpisodeNum}`}
            style={{
              display: "inline-block",
              backgroundColor: "#d4af37",
              color: "#000",
              fontWeight: 600,
              padding: "10px 16px",
              borderRadius: 6,
              textDecoration: "none",
              fontSize: "0.9rem",
              lineHeight: 1.4,
            }}
          >
            ▶ {nextLabel}
          </Link>
        </div>
      ) : null}

      {/* Autres épisodes (avec image si dispo) */}
      {thumbs && thumbs.length > 0 ? (
        <section style={{ marginTop: 32 }}>
          <h2
            style={{
              color: "var(--text-primary, #fff)",
              fontSize: 16,
              fontWeight: 600,
              marginBottom: 12,
            }}
          >
            Autres épisodes
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill,minmax(190px,1fr))",
              gap: 12,
            }}
          >
            {thumbs.map((ep) => (
              <Link
                key={ep.num}
                href={`/watch/${seriesId}/${ep.num}`}
                style={{
                  display: "block",
                  backgroundColor: "rgba(0,0,0,0.4)",
                  borderRadius: 6,
                  border: "1px solid rgba(255,255,255,0.12)",
                  padding: 10,
                  textDecoration: "none",
                }}
              >
                {ep.thumb ? (
                  <img
                    src={ep.thumb}
                    alt={`Épisode ${ep.num}`}
                    style={{
                      width: "100%",
                      display: "block",
                      aspectRatio: "16/9",
                      objectFit: "cover",
                      backgroundColor: "#000",
                      borderRadius: 4,
                      marginBottom: 8,
                      border: "1px solid rgba(255,255,255,0.2)",
                    }}
                  />
                ) : (
                  <div
                    style={{
                      backgroundColor: "#000",
                      borderRadius: 4,
                      height: 96,
                      border: "1px solid rgba(255,255,255,0.2)",
                      marginBottom: 8,
                      display: "grid",
                      placeItems: "center",
                      color: "#fff",
                      fontSize: 13,
                      fontWeight: 500,
                    }}
                  >
                    Épisode {ep.num}
                  </div>
                )}

                <div
                  style={{
                    color: "#fff",
                    fontSize: 14,
                    lineHeight: 1.35,
                    fontWeight: 500,
                    minHeight: 40,
                  }}
                >
                  {ep.title}
                </div>
              </Link>
            ))}
          </div>
        </section>
      ) : null}

      {/* BONUS */}
      {bonusTitle && bonusItems && bonusItems.length > 0 ? (
        <section style={{ marginTop: 36 }}>
          <h2
            style={{
              color: "#fff",
              fontSize: 20,
              fontWeight: 800,
              marginBottom: 8,
            }}
          >
            {bonusTitle}
          </h2>

          {bonusSummary ? (
            <p
              style={{
                color: "#d4af37",
                lineHeight: 1.5,
                fontSize: 15,
                maxWidth: 1000,
                marginBottom: 16,
                whiteSpace: "normal",
              }}
            >
              {bonusSummary}
            </p>
          ) : null}

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
              gap: 12,
            }}
          >
            {bonusItems.map((b, i) => {
              const content = (
                <div
                  style={{
                    backgroundColor: "rgba(0,0,0,0.4)",
                    borderRadius: 6,
                    border: "1px solid rgba(255,255,255,0.12)",
                    overflow: "hidden",
                  }}
                >
                  <img
                    src={b.imgSrc}
                    alt={b.alt}
                    style={{
                      width: "100%",
                      display: "block",
                      aspectRatio: "16/9",
                      objectFit: "cover",
                      backgroundColor: "#000",
                    }}
                  />
                  <div
                    style={{
                      padding: 10,
                      color: "#fff",
                      fontSize: 14,
                      fontWeight: 500,
                    }}
                  >
                    {b.alt}
                  </div>
                </div>
              );
              return b.href ? (
                <Link key={i} href={b.href} style={{ textDecoration: "none" }}>
                  {content}
                </Link>
              ) : (
                <div key={i}>{content}</div>
              );
            })}
          </div>
        </section>
      ) : null}
    </main>
  );
}
