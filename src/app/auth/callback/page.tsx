"use client";

export const dynamic = "force-dynamic";

// src/app/auth/callback/page.tsx

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase/browser";

export default function AuthCallbackPage() {
  const [msg, setMsg] = useState("Validation en cours…");

  useEffect(() => {
    (async () => {
      try {
        const href =
          typeof window !== "undefined" ? window.location.href : undefined;

        let data: any, error: any;
        const authAny = supabase.auth as any;

        if (authAny.exchangeCodeForSession && href) {
          ({ data, error } = await authAny.exchangeCodeForSession(href));
        } else if (authAny.setSessionFromUrl) {
          ({ data, error } = await authAny.setSessionFromUrl({
            storeSession: true,
          }));
        } else {
          ({ data, error } = await supabase.auth.getSession());
        }

        if (error) {
          setMsg("Erreur : " + (error.message ?? String(error)));
          return;
        }

        const email = data?.session?.user?.email ?? "inconnu";
        setMsg(`Connecté : ${email}. Redirection…`);

        setTimeout(() => {
          window.location.replace("/");
        }, 800);
      } catch (e: any) {
        setMsg("Erreur inattendue : " + (e?.message ?? String(e)));
      }
    })();
  }, []);

  return (
    <main className="container" style={{ paddingTop: 40 }}>
      <h1>Connexion</h1>
      <p>{msg}</p>
    </main>
  );
}
