import { db, ref, onValue } from "./firebase.js";

const programmeListe = document.getElementById("programme-liste");

onValue(ref(db, "programme"), (snapshot) => {
    programmeListe.innerHTML = ""; // Liste leeren
    if (snapshot.exists()) {
        const programme = snapshot.val();
        console.log("📥 Geladene Programme:", programme); // Debug-Ausgabe

        Object.entries(programme).forEach(([key, data]) => {
            try {
                const item = document.createElement("li");
                item.innerHTML = `<strong>${data.titel}</strong>: ${data.beschreibung} 
                    <a href="${data.download}" target="_blank">Download</a>`;
                programmeListe.appendChild(item);
            } catch (error) {
                console.error("⚠️ Fehler beim Rendern eines Programms:", error, data);
            }
        });
    } else {
        console.warn("⚠️ Keine Programme gefunden!");
    }
}, (error) => {
    console.error("❌ Fehler beim Laden der Programme:", error);
});
