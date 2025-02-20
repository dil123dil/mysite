/* script.js */
// Глобальные переменные
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

// Установка светлой темы
function setLightTheme() {
    document.body.setAttribute('data-theme', 'light');
    document.getElementById('themeSlider').setAttribute('data-theme', 'light');
}

// Установка темной темы
function setDarkTheme() {
    document.body.setAttribute('data-theme', 'dark');
    document.getElementById('themeSlider').setAttribute('data-theme', 'dark');
}

// Переключение темы
function toggleTheme() {
    const currentTheme = document.getElementById('themeSlider').getAttribute('data-theme');
    if (currentTheme === 'dark') {
        setLightTheme();
    } else {
        setDarkTheme();
    }
}

// Открытие/закрытие меню
function toggleMenu() {
    menuOpen = !menuOpen;
    const menu = document.getElementById('menu');
    menu.classList.toggle('active', menuOpen);
}

// Открытие модального окна с постом
function openModal(index) {
    const post = document.querySelector(`.post[data-index="${index}"]`);
    const title = post.querySelector('.post-title').innerText;
    const content = post.querySelector('.post-content').innerText;
    const date = post.querySelector('.post-date').innerText;

    document.getElementById('modalPostTitle').innerText = title;
    document.getElementById('modalPostContent').innerText = content;
    document.getElementById('modalPostDate').innerText = date;

    const modal = document.getElementById('postModal');
    modal.classList.add('active');
}

// Закрытие модального окна
function closeModal() {
    const modal = document.getElementById('postModal');
    modal.classList.remove('active');
}

// Инициализация при загрузке страницы
window.onload = function () {
    applySystemTheme(); // Применяем системную тему

    // Закрытие модального окна при клике на крестик
    document.querySelector('.close').addEventListener('click', closeModal);

    // Закрытие модального окна при клике вне его области
    window.addEventListener('click', (event) => {
        const modal = document.getElementById('postModal');
        if (event.target === modal) {
            closeModal();
        }
    });
};