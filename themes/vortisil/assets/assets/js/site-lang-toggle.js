const langToggleBtn = document.getElementById('lang-toggle-btn');

const currentTheme = document.documentElement.getAttribute('lang');
langToggleBtn.innerHTML = currentTheme === 'en' ? 'தமிழ்' : 'English';

langToggleBtn.addEventListener('click', () => {
    const currentLang = document.documentElement.getAttribute('lang');
    const newLang = currentLang === 'en' ? 'ta' : 'en'; 
    const currentPath = window.location.pathname;
    const newPath = currentPath.replace(`/${currentLang}/`, `/${newLang}/`);
    if (newPath !== currentPath) {
        window.location = newPath;
    }
});
