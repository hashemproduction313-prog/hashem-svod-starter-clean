// mux-check-upload.js
// Objectif : demander à Mux "où en est l'upload ? et quel asset a été créé ?"

const Mux = require("@mux/mux-node");
require("dotenv").config({ path: ".env.local" });

// ⚠ Mets ici l'ID d'upload que tu as eu juste avant dans mux-direct-test.js
const UPLOAD_ID = "zP1Cu5KbLkzutb02neW5osHzkmd7TXtsaHuGh9WUCS4g";

async function run() {
  console.log("== CHECK UPLOAD / ASSET ==");

  const tokenId = process.env.MUX_TOKEN_ID;
  const tokenSecret = process.env.MUX_TOKEN_SECRET;

  if (!tokenId || !tokenSecret) {
    console.error("❌ Pas de clés Mux dans .env.local");
    return;
  }

  const mux = new Mux({
    tokenId,
    tokenSecret,
  });

  const video = mux.video;

  try {
    // 1. On demande les infos de l'upload
    const upload = await video.uploads.retrieve(UPLOAD_ID);

    console.log("📦 Info upload :");
    console.log({
      id: upload.id,
      status: upload.status, // 'asset_created' ou 'processing' ou 'errored' etc.
      asset_id: upload.asset_id, // <-- super important
    });

    if (!upload.asset_id) {
      console.log(
        "ℹ Pas encore d'asset_id. Mux n'a peut-être pas fini d'encoder. Réessaie dans quelques secondes."
      );
      return;
    }

    // 2. On va chercher l'asset lui-même
    const asset = await video.assets.retrieve(upload.asset_id);

    console.log("🎬 Asset retourné par Mux :");
    console.log({
      id: asset.id,
      status: asset.status, // ready / preparing / errored
      playback_ids: asset.playback_ids,
    });

    if (asset.playback_ids && asset.playback_ids.length > 0) {
      const playbackId = asset.playback_ids[0].id;
      console.log("✅ Playback ID =", playbackId);
      console.log(
        "➡ URL HLS (lecture streaming) : https://stream.mux.com/" +
          playbackId +
          ".m3u8"
      );
      console.log(
        "➡ Player <mux-player playback-id=\"" +
          playbackId +
          "\"></mux-player>"
      );
    } else {
      console.log(
        "⏳ Pas encore de playback_id. L'asset est peut-être encore en préparation."
      );
    }
  } catch (err) {
    console.error("❌ Erreur en parlant à Mux :", err);
  }
}

run();
