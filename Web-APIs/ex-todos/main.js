// ATTENTION
// Ces lignes s'exécutent au chargement de la page
// Vous ne pouvez sélectionner que des éléments
// qui existent au chargement

/** @type {HTMLFormElement} */
const formEl = document.querySelector('.todos-form');

/** @type {HTMLInputElement} */
const inputEl = document.querySelector('.todos-form-value');

/** @type {HTMLDivElement} */
const listEl = document.querySelector('.todos-list');

formEl.addEventListener('submit', (event) => {
  event.preventDefault();
  const todoRowEl = createTodoRow({
    id: Math.random(),
    title: inputEl.value,
    completed: false,
  });
  listEl.append(todoRowEl);
});
