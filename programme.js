import { db, ref, onValue } from "./firebase.js";

const programmListe = document.getElementById("programme-liste");

// Programme aus Firebase laden
onValue(ref(db, "programme"), snapshot => {
    programmListe.innerHTML = "";
    snapshot.forEach(childSnapshot => {
        const programm = childSnapshot.val();
        const li = document.createElement("li");
        li.innerHTML = `<h3>${programm.titel}</h3><p>${programm.beschreibung}</p><a href="${programm.download}" target="_blank">Download</a>`;
        programmListe.appendChild(li);
    });
});
