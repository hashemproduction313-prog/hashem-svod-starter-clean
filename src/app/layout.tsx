// src/app/layout.tsx
import "./globals.css";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "Hashem Productions",
  description: "Plateforme de Streaming Spirituel",
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const year = new Date().getFullYear();

  return (
    <html lang="fr">
      <body className={inter.className}>
        {/* Lien d'accès rapide (accessibilité) */}
        <a href="#main" className="skip-link">
          Passer au contenu
        </a>

        {/* HEADER */}
        <header className="navbar" role="banner" aria-label="En-tête du site">
          <div className="nav-left">
            <Link href="/" className="brand" aria-label="Accueil">
              <Image
                src="/logo.png"
                alt="Hashem Productions"
                width={64}
                height={64}
                priority
              />
            </Link>

            <nav className="nav-main" aria-label="Navigation principale">
              <Link href="/">Accueil</Link>
              <Link href="/categories/films-series">Films &amp; Séries</Link>
              <Link href="/watch/5/1">Documentaires</Link>
              <Link href="/categories/kids">Kids</Link>
            </nav>
          </div>

          <form
            role="search"
            action="/search"
            className="nav-search"
            aria-label="Recherche"
            style={{ flex: 1, display: "flex", justifyContent: "center" }}
          >
            <input
              type="search"
              name="q"
              className="search-input"
              placeholder="Rechercher un titre…"
              aria-label="Rechercher un titre"
            />
          </form>

          <nav className="nav-right" aria-label="Compte">
            <Link href="/subscribe">Abonnements</Link>
            <Link href="/account">Mon compte</Link>
          </nav>
        </header>

        {/* Effet d’ombre navbar */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(){
                var html = document.documentElement;
                function onScroll(){
                  html.classList.toggle('scrolled', window.scrollY > 10);
                }
                onScroll();
                window.addEventListener('scroll', onScroll, { passive: true });
              })();
            `,
          }}
        />

        {/* CONTENU */}
        <main id="main" className="container" role="main" aria-live="polite">
          {children}
        </main>

        {/* FOOTER */}
        <footer className="footer" role="contentinfo">
          <div className="footer-inner container">
            <p>© {year} Hashem Productions. Tous droits réservés.</p>
            <nav className="footer-nav" aria-label="Liens de pied de page">
              <Link href="/a-propos">À propos</Link>
              <Link href="/contact">Contact</Link>
              <Link href="/mentions-legales">Mentions légales</Link>
            </nav>
          </div>
        </footer>
      </body>
    </html>
  );
}
