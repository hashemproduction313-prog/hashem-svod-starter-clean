// test-mux-call.js
async function run() {
  try {
    const res = await fetch("http://localhost:3004/api/upload", {
      method: "POST",
    });

    const data = await res.json().catch(() => null);

    console.log("Status:", res.status);
    console.log("Réponse JSON:", data);
  } catch (err) {
    console.error("ERREUR LORS DE L'APPEL :", err);
  }
}

run();
