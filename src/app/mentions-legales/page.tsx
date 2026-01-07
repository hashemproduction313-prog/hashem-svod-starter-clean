export const metadata = {
  title: "Mentions légales | Hashem Productions",
  description: "Informations légales et conditions d’utilisation",
};

export default function MentionsLegalesPage() {
  return (
    <section className="legal-page">
      <h1>Mentions légales</h1>

      <p>
        Conformément aux dispositions légales en vigueur, les présentes mentions
        légales définissent les conditions d’utilisation de la plateforme
        Hashem Productions.
      </p>

      <h2>Éditeur du site</h2>
      <p>
        <strong>Hashem Productions</strong><br />
        Plateforme de streaming spirituel<br />
        Responsable de publication : Hashem Productions
      </p>

      <h2>Hébergement</h2>
      <p>
        Le site est hébergé par Render.com.
      </p>

      <h2>Propriété intellectuelle</h2>
      <p>
        L’ensemble des contenus présents sur ce site (vidéos, textes, images,
        logos) est protégé par le droit d’auteur. Toute reproduction est
        interdite sans autorisation.
      </p>
    </section>
  );
}
