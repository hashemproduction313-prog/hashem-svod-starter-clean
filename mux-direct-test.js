// mux-direct-test.js
// ⚠ Ceci ne passe PAS par Next.js. On parle directement à Mux depuis Node.
// Objectif : vérifier que nos clés Mux fonctionnent bien.

const Mux = require("@mux/mux-node");

// On lit les variables d'environnement depuis .env.local
// Node ne charge pas .env.local tout seul, donc on va utiliser dotenv.
require("dotenv").config({ path: ".env.local" });

async function run() {
  console.log("== Test direct Mux ==");

  // 1. Vérifions que les clés existent
  const tokenId = process.env.MUX_TOKEN_ID;
  const tokenSecret = process.env.MUX_TOKEN_SECRET;

  console.log("MUX_TOKEN_ID =", tokenId);
  console.log("MUX_TOKEN_SECRET présent ?", tokenSecret ? "oui" : "non");

  if (!tokenId || !tokenSecret) {
    console.error(
      "❌ Les clés MUX ne sont pas trouvées dans .env.local. Vérifie MUX_TOKEN_ID et MUX_TOKEN_SECRET."
    );
    return;
  }

  // 2. On crée un client Mux
  const mux = new Mux({
    tokenId,
    tokenSecret,
  });

  const video = mux.video;

  try {
    // 3. On demande à Mux de créer un 'direct upload'
    const upload = await video.uploads.create({
      new_asset_settings: {
        playback_policy: ["public"], // public pour test
      },
      cors_origin: "*", // on simplifie pour le test
    });

    console.log("✅ Mux a répondu !");
    console.log("upload.id   =", upload.id);
    console.log("upload.url  =", upload.url);
    console.log("--------------");
    console.log(
      "Tu pourrais envoyer une vidéo vers cette URL (upload.url) dans un 2e temps."
    );
  } catch (err) {
    console.error("❌ Erreur Mux :", err);
  }
}

// On lance le test
run();
