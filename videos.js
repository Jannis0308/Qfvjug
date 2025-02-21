// Firebase-Datenbank importieren
import { db, ref, onValue } from './firebase.js';  

const videoListe = document.getElementById("video-liste");

// Prüfen, ob `video-liste` existiert
if (!videoListe) {
    console.error("Element mit ID 'video-liste' nicht gefunden!");
}

// Videos aus Firebase laden
onValue(ref(db, "videos"), snapshot => {
    videoListe.innerHTML = "";  // Liste leeren
    snapshot.forEach(childSnapshot => {
        const video = childSnapshot.val();
        const li = document.createElement("li");
        li.innerHTML = `<h3>${video.titel}</h3><iframe width="560" height="315" src="${video.url}" frameborder="0" allowfullscreen></iframe>`;
        videoListe.appendChild(li);
    });
}, error => {
    console.error("Fehler beim Abrufen der Videos:", error);
});
