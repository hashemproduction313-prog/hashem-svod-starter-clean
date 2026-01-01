// src/lib/mux.ts
import Mux from "@mux/mux-node";

/**
 * Client Mux côté serveur uniquement.
 * Utilise les clés secrètes .env.local :
 *   MUX_TOKEN_ID
 *   MUX_TOKEN_SECRET
 *
 * ⚠ Ne jamais importer ça dans un composant React "use client".
 */

const TOKEN_ID = process.env.MUX_TOKEN_ID;
const TOKEN_SECRET = process.env.MUX_TOKEN_SECRET;

if (!TOKEN_ID || !TOKEN_SECRET) {
  throw new Error(
    "MUX_TOKEN_ID ou MUX_TOKEN_SECRET est manquant dans .env.local"
  );
}

// On garde un seul client Mux en mémoire
let muxSingleton: Mux | null = null;

export function getMuxClient() {
  if (muxSingleton) return muxSingleton;

  muxSingleton = new Mux({
    tokenId: TOKEN_ID,
    tokenSecret: TOKEN_SECRET,
  });

  return muxSingleton;
}

/**
 * Raccourci pratique : renvoie l'API vidéo de Mux
 * (uploads, assets, playback IDs, etc.)
 */
export function getMuxVideo() {
  return getMuxClient().video;
}
