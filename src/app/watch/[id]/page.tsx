// src/app/watch/[id]/page.tsx
import { redirect, notFound } from "next/navigation";

/**
 * Cette page sert juste à rediriger /watch/1 -> /watch/1/1
 * Elle ne rend rien elle-même, pour ne PAS casser le layout ni le style global.
 */
export default function WatchRedirectPage({
  params,
}: {
  params: { id: string };
}) {
  const seriesId = Number(params.id);

  if (!Number.isFinite(seriesId)) {
    return notFound();
  }

  // Premier épisode par défaut = 1
  redirect(`/watch/${seriesId}/1`);
}

