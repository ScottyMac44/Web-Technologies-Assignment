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

    if (themeToggleButton.innerText == 'Dark Theme') {
        themeToggleButton.innerText = 'Light Theme';
    } else {
        themeToggleButton.innerText = 'Dark Theme';
    }
});

const cancelButton = document.getElementById('cancel')
const saveButton = document.getElementById('save')

cancelButton.addEventListener('click', () => {
    textArea.classList.toggle('hidden');
    cancelButton.classList.toggle('hidden');
    saveButton.classList.toggle('hidden'); 
});

const newNoteButton = document.getElementById('newNote')

newNoteButton.addEventListener('click', () => {
    if (textArea.classList.contains('hidden')) {
        textArea.classList.toggle('hidden');
        cancelButton.classList.toggle('hidden');
        saveButton.classList.toggle('hidden'); 
    } else {
        textArea.value = '';
    }
});

let notesArray = {
    title:'note one', body:'this is my first note'
};