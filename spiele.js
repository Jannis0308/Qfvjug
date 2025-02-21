// spiele.js
import { db, ref, onValue } from './firebase.js';  // Importiere die benötigten Funktionen

const spieleListe = document.getElementById("spiele-liste");

// Spiele aus Firebase laden
onValue(ref(db, "spiele"), snapshot => {
    spieleListe.innerHTML = "";  // Liste leeren
    snapshot.forEach(childSnapshot => {
        const spiel = childSnapshot.val();
        const li = document.createElement("li");
        li.innerHTML = `<h3>${spiel.titel}</h3><p>${spiel.beschreibung}</p><a href="${spiel.download}" target="_blank">Download</a>`;
        spieleListe.appendChild(li);
    });
});
