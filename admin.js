import { db, ref, push } from "./firebase.js";

// Funktion zur Umwandlung eines OneDrive-Freigabelinks in einen direkten Download-Link
function convertOneDriveLink(shareLink) {
    let match = shareLink.match(/s![A-Za-z0-9_-]+/);
    if (!match) {
        console.error("❌ Ungültiger OneDrive-Link!");
        alert("❌ Ungültiger OneDrive-Link! Bitte überprüfe den Link.");
        return null;
    }

    let fileId = match[0]; // z.B. "s!AqA1sKER9JlfhYd-kNakXDDMmgbTMw"
    return `https://api.onedrive.com/v1.0/shares/u!${fileId}/root/content`;
}

// Programm hinzufügen
export function addProgramm() {
    const titel = document.getElementById("programm-titel").value;
    const beschreibung = document.getElementById("programm-beschreibung").value;
    let download = document.getElementById("programm-download").value;

    // OneDrive-Link umwandeln (falls nötig)
    if (download.includes("onedrive.live.com") || download.includes("1drv.ms")) {
        let convertedLink = convertOneDriveLink(download);
        if (convertedLink) {
            download = convertedLink;
        } else {
            return;
        }
    }

    if (titel && beschreibung && download) {
        push(ref(db, "programme"), { titel, beschreibung, download })
            .then(() => {
                console.log(`✅ Programm hinzugefügt: ${titel}`);
                alert("✅ Programm erfolgreich hinzugefügt!");
            })
            .catch(error => {
                console.error("❌ Fehler beim Hinzufügen eines Programms:", error);
                alert("❌ Fehler: " + error.message);
            });
    } else {
        alert("❌ Bitte alle Felder ausfüllen!");
    }
}

// Spiel hinzufügen
export function addSpiel() {
    const titel = document.getElementById("spiel-titel").value;
    const beschreibung = document.getElementById("spiel-beschreibung").value;
    let download = document.getElementById("spiel-download").value;

    // OneDrive-Link umwandeln (falls nötig)
    if (download.includes("onedrive.live.com") || download.includes("1drv.ms")) {
        let convertedLink = convertOneDriveLink(download);
        if (convertedLink) {
            download = convertedLink;
        } else {
            return;
        }
    }

    if (titel && beschreibung && download) {
        push(ref(db, "spiele"), { titel, beschreibung, download })
            .then(() => {
                console.log(`✅ Spiel hinzugefügt: ${titel}`);
                alert("✅ Spiel erfolgreich hinzugefügt!");
            })
            .catch(error => {
                console.error("❌ Fehler beim Hinzufügen eines Spiels:", error);
                alert("❌ Fehler: " + error.message);
            });
    } else {
        alert("❌ Bitte alle Felder ausfüllen!");
    }
}

// Video hinzufügen
export function addVideo() {
    const titel = document.getElementById("video-titel").value;
    let url = document.getElementById("video-url").value;

    // YouTube-URL in Embed-Format umwandeln
    url = url.replace("watch?v=", "embed/");

    if (titel && url) {
        push(ref(db, "videos"), { titel, url })
            .then(() => {
                console.log(`✅ Video hinzugefügt: ${titel}`);
                alert("✅ Video erfolgreich hinzugefügt!");
            })
            .catch(error => {
                console.error("❌ Fehler beim Hinzufügen eines Videos:", error);
                alert("❌ Fehler: " + error.message);
            });
    } else {
        alert("❌ Bitte alle Felder ausfüllen!");
    }
}

// Event Listener für die Buttons hinzufügen
document.getElementById("addVideoButton").addEventListener("click", addVideo);
document.getElementById("addProgrammButton").addEventListener("click", addProgramm);
document.getElementById("addSpielButton").addEventListener("click", addSpiel);
