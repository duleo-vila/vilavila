// =========================
// SETTINGS SIDEBAR
// =========================

const settingsWindow = document.getElementById('settings-window');
const settingsBtn = document.getElementById('settingsBtn');
const closeBtn = document.getElementById('closeBtn');

// hap sidebar
settingsBtn.addEventListener('click', () => {
    settingsWindow.classList.add('active');
});

// mbyll sidebar
closeBtn.addEventListener('click', () => {
    settingsWindow.classList.remove('active');
});


// =========================
// LANGUAGE SYSTEM
// =========================

let translations = {};

async function loadLanguage(lang) {
    const res = await fetch(`lang/${lang}.json`);
    translations = await res.json();

    document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.getAttribute("data-i18n");

        if (translations[key]) {
            el.textContent = translations[key];
        }
    });

    localStorage.setItem("lang", lang);
}


// radio buttons
document.querySelectorAll('input[name="lang"]').forEach(radio => {
    radio.addEventListener("change", (e) => {
        loadLanguage(e.target.value);
    });
});


// language on page load
const savedLang = localStorage.getItem("lang") || "en";
loadLanguage(savedLang);