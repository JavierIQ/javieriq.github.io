let currentTheme = 1;
const themes = ['theme1', 'theme2', 'theme3', 'theme4'];

function switchTheme() {
    document.body.classList.remove(themes[currentTheme - 1]);
    currentTheme = currentTheme % 4 + 1;
    document.body.classList.add(themes[currentTheme - 1]);
}

document.addEventListener('DOMContentLoaded', function() {
    const header = document.getElementById('header');
    const links = document.querySelectorAll('a[href^="#"]');
  
    for (const link of links) {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
  
        const headerHeight = header.offsetHeight; // Get the height of the header
        const targetPosition = targetElement.offsetTop - headerHeight; // Calculate the new scroll position
  
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      });
    }
  });