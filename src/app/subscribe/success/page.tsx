"use client";

import { useSearchParams } from "next/navigation";

export default function SuccessPage() {
  const search = useSearchParams();
  const sessionId = search.get("session_id");

  return (
    <main style={{ padding: 40, textAlign: "center" }}>
      <h1>Paiement confirmé ✅</h1>
      <p>Merci pour votre abonnement.</p>

      {sessionId && (
        <p style={{ marginTop: 20, fontSize: 12, opacity: 0.6 }}>
          Session Stripe : {sessionId}
        </p>
      )}
    </main>
  );
}
