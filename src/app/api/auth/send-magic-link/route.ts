// src/app/api/auth/send-magic-link/route.ts
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import crypto from "crypto";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Signe la chaîne query avec un secret partagé (HMAC)
function sign(query: string, secret: string) {
  return crypto.createHmac("sha256", secret).update(query).digest("hex");
}

// Anti-spam simple (mémoire)
const bucket = new Map<string, { count: number; ts: number }>();
function rateLimit(key: string, limit = 5, windowMs = 60_000) {
  const now = Date.now();
  const rec = bucket.get(key);
  if (!rec || now - rec.ts > windowMs) {
    bucket.set(key, { count: 1, ts: now });
    return true;
  }
  if (rec.count >= limit) return false;
  rec.count++;
  return true;
}

// Sécurise la cible de redirection (évite open redirect)
function sanitizeTarget(raw: unknown, fallback = "/subscribe/create-password") {
  const s = typeof raw === "string" ? raw.trim() : "";
  if (!s) return fallback;
  if (s.startsWith("http://") || s.startsWith("https://")) return fallback;
  if (!s.startsWith("/")) return fallback;
  return s;
}

export async function GET() {
  return NextResponse.json({ ok: true, route: "send-magic-link" });
}

export async function POST(req: NextRequest) {
  try {
    const { email, redirectTo } = await req.json().catch(() => ({} as any));

    // 1) Validation
    if (!email || typeof email !== "string" || !EMAIL_RE.test(email.trim())) {
      return NextResponse.json(
        { ok: false, error: "Adresse e-mail invalide." },
        { status: 400 }
      );
    }
    const cleanEmail = email.trim().toLowerCase();

    // 2) Rate limit
    const ip =
      (req.headers.get("x-forwarded-for") || "").split(",")[0].trim() || "local";
    if (!rateLimit(`${ip}:${cleanEmail}`)) {
      return NextResponse.json(
        { ok: false, error: "Trop de tentatives. Réessayez dans une minute." },
        { status: 429 }
      );
    }

    // 3) Construit le lien signé
    const appUrl = process.env.NEXT_PUBLIC_APP_URL || req.nextUrl.origin;
    const secret = process.env.MAGIC_SECRET || "CHANGE_ME_DEV_SECRET";
    const exp = Math.floor(Date.now() / 1000) + 15 * 60; // 15 minutes

    const target = sanitizeTarget(redirectTo, "/subscribe/create-password");
    const baseQuery = `email=${encodeURIComponent(cleanEmail)}&exp=${exp}`;
    const sig = sign(baseQuery, secret);
    const magicLink = `${appUrl}${target}?${baseQuery}&sig=${sig}`;

    // 4) Envoi réel si Resend est configuré, sinon on renvoie le lien (DEV)
    if (process.env.RESEND_API_KEY && process.env.EMAIL_FROM) {
      const { Resend } = await import("resend");
      const resend = new Resend(process.env.RESEND_API_KEY);
      await resend.emails.send({
        from: process.env.EMAIL_FROM!,
        to: cleanEmail,
        subject: "Votre lien d’inscription — Hashem Productions",
        html: `
          <p>Bonjour,</p>
          <p>Finalisez votre inscription Hashem Productions en cliquant ici :</p>
          <p><a href="${magicLink}">Confirmer mon e-mail</a></p>
          <p>Ce lien expire dans 15 minutes.</p>
        `,
      });
      // En prod (avec Resend) on renvoie ok sans exposer le lien
      return NextResponse.json({ ok: true });
    } else {
      // DEV : on expose le lien pour que l’UI puisse l’utiliser
      console.log("[DEV] Magic link pour", cleanEmail, "=>", magicLink);
      return NextResponse.json({ ok: true, magicLink });
    }
  } catch (err) {
    console.error("send-magic-link error:", err);
    return NextResponse.json(
      { ok: false, error: "Erreur serveur. Réessayez dans un instant." },
      { status: 500 }
    );
  }
}
