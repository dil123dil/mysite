let menuOpen = false;
let sortDirection = 'desc';

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

function sortPostsByDate() {
    const container = document.querySelector('.container');
    if (!container) return;

    const posts = Array.from(container.querySelectorAll('.post'));
    if (posts.length === 0) return;

    posts.sort((a, b) => {
        const dateA = new Date(a.querySelector('.post-date').getAttribute('data-date'));
        const dateB = new Date(b.querySelector('.post-date').getAttribute('data-date'));
        return sortDirection === 'desc' ? dateB - dateA : dateA - dateB;
    });

    posts.forEach(post => post.remove());
    posts.forEach(post => container.appendChild(post));
    sortDirection = sortDirection === 'desc' ? 'asc' : 'desc';
}

function closeNotice() {
    const rulesNotice = document.getElementById('rules-notice');
    if (rulesNotice) rulesNotice.style.display = 'none';
}

document.addEventListener('DOMContentLoaded', () => {
    sortPostsByDate();
    const rulesNotice = document.getElementById('rules-notice');
    if (rulesNotice) {
        rulesNotice.style.display = 'block';
        setTimeout(closeNotice, 10000);
    }
});