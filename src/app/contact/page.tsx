"use client";

import Link from "next/link";

export default function ContactPage() {
  return (
    <section
      className="hero-modern"
      style={{
        paddingTop: 80,
        paddingBottom: 100,
        minHeight: "100vh",
      }}
    >
      {/* CONTENU */}
      <div
        className="hero-content"
        style={{
          maxWidth: 900,
          margin: "0 auto",
          position: "relative",
          zIndex: 2,
        }}
      >
        <div
          className="glass-panel"
          style={{
            background: "rgba(0,0,0,.85)",
            borderRadius: 22,
            padding: "36px 32px",
          }}
        >
          <h1 className="auth-title">Contact & Ressources</h1>

          <p className="auth-sub" style={{ marginBottom: 32 }}>
            Retrouvez ici l’ensemble des ressources officielles, enseignements,
            chaînes et moyens de contact liés à la Religion Ahmadi et à
            l’enseignement du Qa’im Abdullah Hashem Aba Al-Sadiq (de Lui est la
            Paix).
          </p>

          {/* LIVRES */}
          <section style={{ marginBottom: 32 }}>
            <h2 style={{ color: "var(--gold)", marginBottom: 10 }}>
              📚 Ouvrages en libre téléchargement
            </h2>
            <p>
              Lisez les ouvrages du Qa’im :
              <strong>
                {" "}
                Le Manifeste du Mahdi, Le But du Sage, La Jurisprudence Divine
              </strong>
              .
            </p>
            <p>
              <a
                href="https://theahmadireligion.org/library/"
                target="_blank"
                rel="noopener noreferrer"
                className="link-gold"
              >
                https://theahmadireligion.org/library/
              </a>
            </p>
          </section>

          {/* VIDÉOS */}
          <section style={{ marginBottom: 32 }}>
            <h2 style={{ color: "var(--gold)", marginBottom: 10 }}>
              🎥 Vidéos officielles
            </h2>
            <p>
              Retrouvez les vidéos originales d’Aba Al-Sadiq (de Lui est la Paix)
              sur la chaîne officielle anglophone :
            </p>
            <p>
              <a
                href="https://www.youtube.com/@themahdihasappeared"
                target="_blank"
                rel="noopener noreferrer"
                className="link-gold"
              >
                https://www.youtube.com/@themahdihasappeared
              </a>
            </p>
          </section>

          {/* TELEGRAM */}
          <section style={{ marginBottom: 32 }}>
            <h2 style={{ color: "var(--gold)", marginBottom: 10 }}>
              📣 Chaîne Telegram
            </h2>
            <p>Rejoignez notre chaîne Telegram officielle :</p>
            <p>
              <a
                href="https://t.me/LaReligionAhmadi"
                target="_blank"
                rel="noopener noreferrer"
                className="link-gold"
              >
                https://t.me/LaReligionAhmadi
              </a>
            </p>
          </section>

          {/* CHAÎNE ARABE */}
          <section style={{ marginBottom: 32 }}>
            <h2 style={{ color: "var(--gold)", marginBottom: 10 }}>
              🌍 Chaîne arabophone
            </h2>
            <p>Découvrez la chaîne arabophone officielle :</p>
            <p>
              <a
                href="https://www.youtube.com/@themahdihasappearedtvchannel"
                target="_blank"
                rel="noopener noreferrer"
                className="link-gold"
              >
                https://www.youtube.com/@themahdihasappearedtvchannel
              </a>
            </p>
          </section>

          {/* CONTACT */}
          <section style={{ marginBottom: 32 }}>
            <h2 style={{ color: "var(--gold)", marginBottom: 10 }}>
              ✉️ Nous contacter
            </h2>

            <p>Depuis la plateforme officielle :</p>
            <p>
              <a
                href="https://theahmadireligion.org/outreach/"
                target="_blank"
                rel="noopener noreferrer"
                className="link-gold"
              >
                https://theahmadireligion.org/outreach/
              </a>
            </p>

            <p style={{ marginTop: 10 }}>
              Par email :
              <br />
              <a
                href="mailto:outreach@theahmadireligion.com"
                className="link-gold"
              >
                outreach@theahmadireligion.com
              </a>
            </p>
          </section>

          {/* DON */}
          <section>
            <h2 style={{ color: "var(--gold)", marginBottom: 10 }}>
              🤍 Soutenir l’État de Justice Divine
            </h2>
            <p>
              Faites un don aujourd’hui et soutenez l’État de Justice Divine :
            </p>
            <p>
              <a
                href="https://theahmadireligion.org/donations-and-contributions/"
                target="_blank"
                rel="noopener noreferrer"
                className="link-gold"
              >
                https://theahmadireligion.org/donations-and-contributions/
              </a>
            </p>
          </section>

          {/* RETOUR */}
          <div style={{ marginTop: 36 }}>
            <Link href="/" className="btn-ghost">
              ← Retour à l’accueil
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
