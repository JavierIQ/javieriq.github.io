let currentTheme = 1;
const themes = ['theme1', 'theme2', 'theme3', 'theme4'];

function switchTheme() {
    document.body.classList.remove(themes[currentTheme - 1]);
    currentTheme = currentTheme % 4 + 1;
    document.body.classList.add(themes[currentTheme - 1]);
}