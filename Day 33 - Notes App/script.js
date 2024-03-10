'use strict';

const addNoteBtn = document.getElementById('add');
const notes = JSON.parse(localStorage.getItem('notes')).filter(note => note !== '');
console.log(notes);

if (notes !== '[]') notes.forEach(note => addNote(note));

function addNote(note = '') {
  const noteHTML = `
  <div class="note">
    <div class="tools">
      <button class="edit"><i class="fas fa-edit"></i></button>
      <button class="delete"><i class="fas fa-trash-alt"></i></button>
    </div>
    <div class="main ${note ? '' : 'hidden'}">${note}</div>
    <textarea class="${note ? 'hidden' : ''}">${note}</textarea>
  </div>`;
  document.body.insertAdjacentHTML('afterbegin', noteHTML);
}

function editNote(note) {
  const textarea = note.querySelector('textarea');
  const main = note.querySelector('.main');
  // toggle classes
  textarea.classList.toggle('hidden');
  main.classList.toggle('hidden');
}

const deleteNote = note => {
  note.remove();
  updateLS();
};

function onInputChange(e) {
  e.target.previousElementSibling.innerHTML = e.target.value;
  updateLS();
}

addNoteBtn.addEventListener('click', () => addNote());
document.body.addEventListener('click', function (e) {
  if (e.target.type === 'textarea') e.target.addEventListener('input', onInputChange);
  if (e.target.closest('button')?.className === 'edit') editNote(e.target.closest('.note'));
  else if (e.target.closest('button')?.className === 'delete') deleteNote(e.target.closest('.note'));
  else return;
});

function updateLS() {
  const notesText = [...document.querySelectorAll('textarea')];
  const notes = notesText.map(textarea => textarea.value);
  console.log(notes);
  localStorage.setItem('notes', JSON.stringify(notes));
}
