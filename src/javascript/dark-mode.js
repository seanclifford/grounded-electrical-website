function loadDarkMode() {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark')
    } else {
        document.documentElement.classList.remove('dark')
    }
}

function toggleDarkMode()
{
    if (localStorage.theme === 'light' || !('theme' in localStorage)) {
        localStorage.theme = 'dark';
    } else {
        localStorage.theme = 'light';
    }
    loadDarkMode();
}

loadDarkMode(); //on script load