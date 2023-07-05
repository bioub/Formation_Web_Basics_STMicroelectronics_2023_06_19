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

/** @type {HTMLInputElement} */
const toggleEl = document.querySelector('.todos-global-checkbox');

formEl.addEventListener('submit', (event) => {
  event.preventDefault();
  const todoRowEl = createTodoRow({
    id: Math.random(),
    title: inputEl.value,
    completed: false,
  });
  listEl.append(todoRowEl);
});

toggleEl.addEventListener('click', () => {
  /** @type {NodeListOf<HTMLInputElement>} */
  const checkboxesNodeList = listEl.querySelectorAll('.todos-status');

  for (const checkboxEl of checkboxesNodeList) {
    checkboxEl.checked = toggleEl.checked;
  }
});

/*
Exercice 5
On souhaite déplacer les addEventListener de todos.js dans ce fichier
Comme les actions concernent des éléments qui n'existe pas au chargement
de la page (bouton moins, la balise span, la balise input) on va
écouter les mêmes événements sur l'élément listEl qui les contient.
En utilisant event.target, regarder la propriété className
si la classe est todos-btn-delete au clic supprimer la balise parent
si la classe est todos-value au dblclic remplacer la balise input
si la classe est todos-value-edit au keyup et que le code de la touche est Enter
remplacer la balise span

Attention vous n'aurez plus accès aux variables inputEl, spanEl, btnDeleteEl
déplacer vous dans l'arbre en utilisant parentElement, firstElementChild...
*/
