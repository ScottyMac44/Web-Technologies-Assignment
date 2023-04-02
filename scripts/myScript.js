const themeToggleButton = document.getElementById('themeToggle');

const gridMenu = document.querySelector('.grid-menu');
const gridContainer = document.querySelector('.grid-container');
const textArea = document.querySelector('textarea');

themeToggleButton.addEventListener('click', () => {
    gridContainer.classList.toggle('light-theme'); 
    gridMenu.classList.toggle('light-theme2'); 
    textArea.classList.toggle('light-theme2');
    textArea.classList.toggle('lightThemeText');
    document.body.classList.toggle('lightThemeText');
});

themeToggleButton.addEventListener('click', () => {
    gridContainer.classList.toggle('grid-dark-theme');
    gridMenu.classList.toggle('grid-menu-dark-theme');
    textArea.classList.toggle('grid-menu-dark-theme');
    textArea.classList.toggle('darkThemeText');
    document.body.classList.toggle('darkThemeText');
});