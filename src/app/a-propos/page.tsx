// src/app/a-propos/page.tsx

import Link from "next/link";

export const metadata = {
  title: "À propos — Hashem Productions",
  description:
    "Découvrez la plateforme de streaming spirituel Hashem Productions et sa mission.",
};

export default function AboutPage() {
  return (
    <main className="container" style={{ maxWidth: 1100 }}>
      {/* HERO */}
      <section
        className="hero-modern"
        style={{ paddingTop: 50, paddingBottom: 80 }}
      >
        <div className="hero-overlay" />

        <div className="hero-content" style={{ maxWidth: 960, margin: "0 auto" }}>
          <div
            className="glass-panel"
            style={{
              background: "rgba(0,0,0,.80)",
              borderRadius: 22,
              padding: "32px 28px",
            }}
          >
            <h1 className="auth-title">À propos de Hashem Productions</h1>

            <p className="auth-sub" style={{ marginBottom: 24 }}>
              Une plateforme de streaming spirituel dédiée à la transmission de
              la connaissance divine.
            </p>

            <div style={{ display: "grid", gap: 18, lineHeight: 1.7 }}>
              <p>
                <strong>Hashem Productions</strong> est une plateforme de
                streaming spirituel consacrée à la diffusion des enseignements
                du <strong>Qa’im Abdullah Hashem Aba Al-Sadiq (de Lui est la Paix)</strong>,
                ainsi qu’aux œuvres éducatives et spirituelles inspirées de son
                Appel.
              </p>

              <p>
                Cette plateforme a été conçue pour rendre accessibles, à un large
                public, les enseignements authentiques transmis par le Qa’im,
                ainsi que les productions des <strong>Ansars</strong>, ses compagnons
                et soutiens, qui œuvrent à la transmission de cette connaissance
                à travers des formats modernes et immersifs.
              </p>

              <h2 style={{ marginTop: 20 }}>Une transmission par des formats modernes</h2>

              <p>
                Hashem Productions propose une diversité de contenus permettant
                à chacun d’accéder à la connaissance spirituelle selon sa
                sensibilité et son parcours :
              </p>

              <ul style={{ paddingLeft: 18 }}>
                <li>
                  Enseignements et conférences du Qa’im Abdullah Hashem Aba
                  Al-Sadiq (de Lui est la Paix)
                </li>
                <li>
                  Vidéos des Ansars, tirées directement des enseignements du
                  Qa’im
                </li>
                <li>
                  Films et documentaires spirituels
                </li>
                <li>
                  Dessins animés et contenus éducatifs à portée spirituelle
                </li>
                <li>
                  Musique spirituelle favorisant la contemplation et
                  l’élévation de l’âme
                </li>
              </ul>

              <h2 style={{ marginTop: 20 }}>Un Appel fondé sur les prophéties</h2>

              <p>
                Les enseignements diffusés sur cette plateforme s’inscrivent
                dans l’Appel du <strong>Qa’im de la Famille de Mohammed</strong>,
                annoncé dans les récits et traditions des religions
                abrahamiques pour la fin des temps.
              </p>

              <p>
                Cet Appel invite l’humanité à revenir vers la souveraineté
                exclusive de Dieu, à la justice divine et à la vérité, en
                rejetant l’oppression, la tyrannie et la domination des hommes
                sur les hommes.
              </p>

              <h2 style={{ marginTop: 20 }}>Une mission spirituelle</h2>

              <p>
                Hashem Productions n’est pas un simple site de divertissement.
                C’est un outil de transmission et de préparation spirituelle,
                dont la mission est de diffuser la connaissance divine par des
                moyens contemporains, sans en altérer le message.
              </p>

              <p>
                La plateforme s’adresse à toutes les personnes en quête de sens,
                sans distinction d’origine, de culture ou de parcours, et
                reflète l’universalité de l’Appel du Qa’im.
              </p>

              <div style={{ marginTop: 30 }}>
                <Link href="/contact" className="btn-primary">
                  Nous contacter
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
