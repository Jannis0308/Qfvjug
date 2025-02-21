document.addEventListener("DOMContentLoaded", () => {
    // Dark Mode umschalten
    const darkModeStyle = document.getElementById("dark-mode-style");
    const darkModeEnabled = localStorage.getItem("darkMode") === "enabled";

    if (darkModeEnabled) {
        darkModeStyle.removeAttribute("disabled");
    }

    // Animationen starten
    document.querySelectorAll(".fade-in, .slide-in").forEach(el => {
        el.style.animationDelay = "0.3s";
    });
});
