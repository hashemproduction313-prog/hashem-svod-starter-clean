// src/lib/supabase/server.ts
import { createClient, type SupabaseClient } from "@supabase/supabase-js";

/**
 * Client Supabase côté serveur (API routes, actions, webhooks).
 * ⚠️ Utilise la SERVICE ROLE KEY – ne jamais importer ce fichier côté client.
 */

let _serverClient: SupabaseClient | null = null;

export function supabaseServer(): SupabaseClient {
  if (_serverClient) return _serverClient;

  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceRole = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!url || !serviceRole) {
    throw new Error(
      "Supabase (server): variables manquantes. " +
        "Vérifie NEXT_PUBLIC_SUPABASE_URL et SUPABASE_SERVICE_ROLE_KEY."
    );
  }

  _serverClient = createClient(url, serviceRole, {
    auth: { persistSession: false, autoRefreshToken: false },
  });

  return _serverClient;
}

export default supabaseServer;
