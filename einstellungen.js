// Dark Mode umschalten
document.addEventListener("DOMContentLoaded", () => {
    const themeButton = document.getElementById("toggle-theme");
    const currentTheme = localStorage.getItem("theme") || "light";

    if (currentTheme === "dark") {
        document.body.classList.add("dark-mode");
        themeButton.textContent = "White Mode aktivieren";
    }

    themeButton.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
        const newTheme = document.body.classList.contains("dark-mode") ? "dark" : "light";
        localStorage.setItem("theme", newTheme);
        themeButton.textContent = newTheme === "dark" ? "White Mode aktivieren" : "Dark Mode aktivieren";
    });
});

// Admin-Login (einfache Benutzername-Passwort-Prüfung)
function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const loginStatus = document.getElementById("login-status");

    if (username === "admin" && password === "passwort123") {
        loginStatus.textContent = "Erfolgreich eingeloggt!";
        loginStatus.style.color = "green";
        localStorage.setItem("isAdmin", "true");
        setTimeout(() => {
            window.location.href = "admin.html";
        }, 1500);
    } else {
        loginStatus.textContent = "Falsche Anmeldedaten!";
        loginStatus.style.color = "red";
    }
}

// Beim Laden prüfen, ob der Admin noch eingeloggt ist
if (localStorage.getItem("isAdmin") === "true") {
    document.getElementById("login-status").textContent = "Du bist bereits eingeloggt!";
}
