import { NextRequest, NextResponse } from "next/server";
import { createClient, type User } from "@supabase/supabase-js";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// --- Supabase Admin (nécessite URL + SERVICE_ROLE) ---
const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

// Email simple check (évite les typos grossières)
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Recherche d'un utilisateur par e-mail via listUsers (pagination).
 * Evite l'exception "User not found" en utilisant des pages raisonnables.
 */
async function findUserByEmail(email: string): Promise<User | null> {
  const PER_PAGE = 1000;
  const MAX_PAGES = 20;

  for (let page = 1; page <= MAX_PAGES; page++) {
    const { data, error } = await supabaseAdmin.auth.admin.listUsers({ page, perPage: PER_PAGE });
    if (error) throw new Error(`listUsers error (page ${page}): ${error.message}`);
    const users = data?.users ?? [];
    const found = users.find((u) => u.email?.toLowerCase() === email.toLowerCase());
    if (found) return found;
    if (users.length < PER_PAGE) break;
  }
  return null;
}

export async function POST(req: NextRequest) {
  try {
    // --- 1) Body JSON ---
    let body: any;
    try {
      body = await req.json();
    } catch {
      return NextResponse.json(
        { ok: false, error: "Body JSON invalide. Attendu: { email, password }." },
        { status: 400 }
      );
    }

    const email = String(body?.email || "").trim().toLowerCase();
    const password = String(body?.password || "");

    if (!EMAIL_RE.test(email) || password.length < 8) {
      return NextResponse.json(
        { ok: false, error: "E-mail ou mot de passe invalide (min 8 caractères)." },
        { status: 400 }
      );
    }

    // --- 2) Variables d'env requises ---
    if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.SUPABASE_SERVICE_ROLE_KEY) {
      return NextResponse.json(
        { ok: false, error: "Config serveur incomplète (URL ou SERVICE_ROLE_KEY manquant)." },
        { status: 500 }
      );
    }

    // --- 3) Existe déjà ? ---
    let existing: User | null = null;
    try {
      existing = await findUserByEmail(email);
    } catch (e: any) {
      console.error(e);
      return NextResponse.json(
        { ok: false, error: "Erreur Supabase lors de la recherche utilisateur (listUsers)." },
        { status: 500 }
      );
    }

    let createdUserId: string | null = null;

    if (existing) {
      // --- 4) Update password + confirme l’email ---
      const { error: updErr } = await supabaseAdmin.auth.admin.updateUserById(existing.id, {
        password,
        email_confirm: true,
      });
      if (updErr) {
        console.error("updateUserById error:", updErr);
        return NextResponse.json({ ok: false, error: updErr.message }, { status: 500 });
      }
      createdUserId = existing.id;
    } else {
      // --- 5) Créer l’utilisateur confirmé ---
      const { data: created, error: createErr } = await supabaseAdmin.auth.admin.createUser({
        email,
        password,
        email_confirm: true,
      });
      if (createErr) {
        console.error("createUser error:", createErr);
        return NextResponse.json({ ok: false, error: createErr.message }, { status: 500 });
      }
      createdUserId = created.user?.id ?? null;
    }

    // --- 6) Déclenche l'email de bienvenue (plan par défaut: "standard") ---
    // On appelle l'endpoint interne pour réutiliser le même template/logic.
    try {
      const baseUrl =
        process.env.NEXT_PUBLIC_APP_URL /* prod */ || req.nextUrl.origin /* fallback dev */;
      const resp = await fetch(`${baseUrl}/api/email/welcome`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ to: email, plan: "standard" }),
      });
      // On ne bloque pas l’inscription si l’email échoue, mais on log l’erreur.
      if (!resp.ok) {
        const err = await resp.text().catch(() => "");
        console.warn("welcome email failed", resp.status, err);
      }
    } catch (e) {
      console.warn("welcome email request error:", (e as any)?.message);
    }

    return NextResponse.json({
      ok: true,
      created: !existing,
      userId: createdUserId,
    });
  } catch (e: any) {
    console.error("register route fatal:", e);
    return NextResponse.json({ ok: false, error: "Erreur serveur (fatal)." }, { status: 500 });
  }
}
