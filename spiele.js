import { db, ref, onValue } from "./firebase.js";

document.addEventListener("DOMContentLoaded", () => {
    const spieleListe = document.getElementById("spiele-liste");

    if (!spieleListe) {
        console.error("❌ Element mit ID 'spiele-liste' wurde nicht gefunden!");
        return;
    }

    onValue(ref(db, "spiele"), snapshot => {
        spieleListe.innerHTML = "";  // Liste leeren

        if (snapshot.exists()) {
            console.log("📥 Geladene Spiele:", snapshot.val()); // Debugging

            snapshot.forEach(childSnapshot => {
                const spiel = childSnapshot.val();
                try {
                    const li = document.createElement("li");
                    li.innerHTML = `<h3>${spiel.titel}</h3><p>${spiel.beschreibung}</p>
                        <a href="${spiel.download}" target="_blank">Download</a>`;
                    spieleListe.appendChild(li);
                } catch (error) {
                    console.error("⚠️ Fehler beim Rendern eines Spiels:", error, spiel);
                }
            });
        } else {
            console.warn("⚠️ Keine Spiele gefunden!");
        }
    }, (error) => {
        console.error("❌ Fehler beim Laden der Spiele:", error);
    });
});
