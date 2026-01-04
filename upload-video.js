// upload-video.js
// ENVOI D'UNE VIDÉO DEPUIS TON PC VERS MUX AVEC L'URL TEMPORAIRE (upload.url)

const fs = require("fs"); // pour lire le fichier vidéo sur ton disque
const path = require("path"); // pour construire le chemin du fichier
const fetch = require("node-fetch"); // pour envoyer le fichier à Mux

// 1. METS ICI l'URL EXACTE "upload.url" que Mux t'a donnée
const UPLOAD_URL = "https://direct-uploads.oci-us-ashburn-1-vop1.production.mux.com/upload/zP1Cu5KbLkzutb02neW5osHzkmd7TXtsaHuGh9WUCS4g?token=eyJhbGciOiJSUzI1NiIsImtpZCI6Ijg5MTg4MjMwOTIyNzA1NjMwMTMiLCJ0eXAiOiJKV1QifQ.eyJhdWQiOiJkdSIsImV4cCI6MTc2MjE5NjIxMSwic3ViIjoielAxQ3U1S2JMa3p1dGIwMm5lVzVvc0h6a21kN1RYdHNhSHVHaDlXVUNTNGcifQ.hR0sP_9UDFwF9T-Riz71OzDn7UMB5Ut869yMdROXYHd7AsYw99Q082MaLdZapIzZU5-doGsOMFyAHMZHW-29LJsHq6Q-OUbQLtJc7L6oK5SomuCrvrMsSJPARDYizBjwDBQs9vZOYNhY-F1EQwDUBlxxPJJ8IZHcyeA366---2Epe0rYGIAHxUZIdOlwi0-UrZ8PoX1k7blR8cQ5r47iKWawM127KhImE606x6yrBIc3MtFC90G58TW3cA6ufm7Ocnusnkxb3o-jhuBxdgwQBBJH1FgxHX6zFwOlndvoN9DVw-iB8dYInLJALppVH42HaQWWeUcrxP34aKjhK5X1VA";

// 2. METS ICI le chemin exact de ta vidéo locale
const LOCAL_VIDEO_PATH = path.join(
  __dirname,
  "public",
  "videos",
  "video9-1.mp4"
  // si le fichier a un autre nom tu changes ici
);

async function run() {
  console.log("== UPLOAD VERS MUX ==");
  console.log("Fichier local :", LOCAL_VIDEO_PATH);

  // Vérifions que le fichier existe bien
  if (!fs.existsSync(LOCAL_VIDEO_PATH)) {
    console.error("❌ Le fichier vidéo local est introuvable !");
    return;
  }

  // On lit le contenu du fichier vidéo en binaire
  const fileStream = fs.createReadStream(LOCAL_VIDEO_PATH);

  console.log("Envoi en cours vers Mux...");
  try {
    const res = await fetch(UPLOAD_URL, {
      method: "PUT", // très important: PUT (Mux attend un PUT binaire direct)
      headers: {
        "Content-Type": "video/mp4", // on dit à Mux "c'est une vidéo mp4"
      },
      body: fileStream, // on envoie le flux vidéo
    });

    console.log("Réponse statut HTTP:", res.status);

    const txt = await res.text(); // Mux renvoie parfois du JSON, parfois rien
    console.log("Réponse brute de Mux:");
    console.log(txt);

    console.log("✅ Si status est 200 ou 201, l'upload est parti. Mux va encoder la vidéo.");
    console.log(
      "➡ Après ça, la vidéo devient un 'asset' chez Mux, avec un playback_id."
    );
  } catch (err) {
    console.error("❌ ERREUR lors de l'upload vers Mux:", err);
  }
}

run();
