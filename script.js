/* script.js */
let editorOpen = false;
let menuOpen = false;

// Установка темы по системным предпочтениям
function applySystemTheme() {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (prefersDark) {
        setDarkTheme();
    } else {
        setLightTheme();
    }
}

function setLightTheme() {
    document.body.setAttribute('data-theme', 'light');
    document.getElementById('themeSlider').setAttribute('data-theme', 'light');
}

function setDarkTheme() {
    document.body.setAttribute('data-theme', 'dark');
    document.getElementById('themeSlider').setAttribute('data-theme', 'dark');
}

function toggleTheme() {
    const currentTheme = document.getElementById('themeSlider').getAttribute('data-theme');
    if (currentTheme === 'dark') {
        setLightTheme();
    } else {
        setDarkTheme();
    }
}

function toggleMenu() {
    menuOpen = !menuOpen;
    const menu = document.getElementById('menu');
    menu.style.display = menuOpen ? 'block' : 'none';
}

function closeModal() {
    const modal = document.getElementById('passwordModal');
    modal.classList.add('hidden');
}

function formatText(command) {
    document.execCommand(command, false, null);
}

function cancelEdit() {
    document.getElementById('postContentEditable').innerHTML = ''; // Очистка поля
    document.getElementById('editor').classList.add('hidden');
}
