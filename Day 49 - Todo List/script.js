'use strict';
const form = document.querySelector('form');
const todoInput = document.querySelector('.input-todo');
const todosList = document.querySelector('.todos');

const todos = JSON.parse(localStorage.getItem('todos'));

if (todos) {
  todos.forEach(todo => {
    const listItem = document.createElement('li');
    if (todo.completed) listItem.classList.add('completed');
    listItem.classList.add('todo');
    listItem.innerHTML = todo.text;
    todosList.appendChild(listItem);
  });
}

function updateLS() {
  const todosEl = document.querySelectorAll('li');
  const todos = [];
  todosEl.forEach(todoEl => {
    todos.push({ text: todoEl.innerText, completed: todoEl.classList.contains('completed') });
  });
  localStorage.setItem('todos', JSON.stringify(todos));
}

function toggleTodo(e) {
  if (e.target.classList.contains('todo')) {
    e.target.classList.toggle('completed');
    updateLS();
  }
}

form.addEventListener('submit', function (e) {
  e.preventDefault();
  if (!todoInput.value) return;

  // Create todo element
  const listItem = document.createElement('li');
  listItem.classList.add('todo');
  listItem.innerHTML = todoInput.value;
  todosList.appendChild(listItem);
  updateLS();

  // Clear input
  todoInput.value = '';
});

todosList.addEventListener('click', toggleTodo);
todosList.addEventListener('contextmenu', function (e) {
  e.preventDefault();
  if (e.target.classList.contains('todo')) {
    e.target.remove();
    updateLS();
  }
});
