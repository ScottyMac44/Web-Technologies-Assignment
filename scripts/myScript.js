const themeToggleButton = document.getElementById('themeToggle');
const cancelButton = document.getElementById('cancel')
const saveButton = document.getElementById('save')
const newNoteButton = document.getElementById('newNote')

const gridMenu = document.querySelector('.grid-menu');
const gridContainer = document.querySelector('.grid-container');
const textArea = document.querySelector('textarea');
const notesList = document.getElementById('notesList');

var notesArray = [
    {title:'note one', body:'this is my first note'}
];


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


cancelButton.addEventListener('click', () => {
    textArea.classList.toggle('hidden');
    cancelButton.classList.toggle('hidden');
    saveButton.classList.toggle('hidden'); 
});


newNoteButton.addEventListener('click', () => {
    if (textArea.classList.contains('hidden')) {
        textArea.classList.toggle('hidden');
        cancelButton.classList.toggle('hidden');
        saveButton.classList.toggle('hidden'); 
    } else {
        textArea.value = '';
    }
});


saveButton.addEventListener('click', () => {
    let title = prompt('Enter the title for this note:');
    notesArray.push({title: title, body: textArea.value})
    let newListElement = document.createElement('li');
    newListElement.textContent = title;
    notesList.appendChild(newListElement);
});


notesList.addEventListener('click', event => {
    let noteListName = event.target.textContent;
    noteListName.toString();
    for (let note of notesArray) {
        if (note.title == noteListName) {
            textArea.value = note.body;
        }
    }
});