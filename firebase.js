// firebase.js als ES-Modul nutzen
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getDatabase, ref, push, set, onValue } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-database.js";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBDDs5wiD29qBYU-G4BdfdA1dTH9ew9-AU",
    authDomain: "webseite-4e594.firebaseapp.com",
    databaseURL: "https://webseite-4e594-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "webseite-4e594",
    storageBucket: "webseite-4e594.firebasestorage.app",
    messagingSenderId: "753249403892",
    appId: "1:753249403892:web:4a65b138f69093508f2fa1",
    measurementId: "G-N3T8FD9FNC"
  };

// Firebase initialisieren
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// Damit `db` auch in anderen Dateien verfügbar ist
export { db, ref, push, set, onValue };
