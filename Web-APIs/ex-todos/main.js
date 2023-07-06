// ATTENTION
// Ces lignes s'exécutent au chargement de la page
// Vous ne pouvez sélectionner que des éléments
// qui existent au chargement

/** @type {HTMLFormElement} */
const formEl = document.querySelector(".todos-form");

/** @type {HTMLInputElement} */
const inputEl = document.querySelector(".todos-form-value");

/** @type {HTMLDivElement} */
const listEl = document.querySelector(".todos-list");

/** @type {HTMLInputElement} */
const toggleEl = document.querySelector(".todos-global-checkbox");

formEl.addEventListener("submit", (event) => {
  event.preventDefault();
  inputEl.classList.remove('error');

  if (inputEl.value === '') {
    inputEl.classList.add('error');
    return;
  }

  const todoRowEl = createTodoRow({
    id: Math.random(),
    title: inputEl.value,
    completed: false,
  });
  listEl.append(todoRowEl);
});

toggleEl.addEventListener("click", () => {
  /** @type {NodeListOf<HTMLInputElement>} */
  const checkboxesNodeList = listEl.querySelectorAll(".todos-status");

  for (const checkboxEl of checkboxesNodeList) {
    checkboxEl.checked = toggleEl.checked;
  }
});

listEl.addEventListener("click", (event) => {
  if (event.target.classList.contains("todos-btn-delete")) {
    event.target.closest(".todos-row").remove();
  }
});

listEl.addEventListener("dblclick", (event) => {
  if (event.target.classList.contains("todos-value")) {
    event.target.replaceWith(createInput(event.target.innerText));
  }
});

listEl.addEventListener("keyup", (event) => {
  if (
    event.target.classList.contains("todos-value-edit") &&
    event.code === "Enter"
  ) {
    event.target.replaceWith(createSpan(event.target.value));
  }
});

// Exercice 6
// Au chargement de la page envoyer une requête GET à l'URL
// https://jsonplaceholder.typicode.com/todos/
// Boucler sur le tableau reçu en JSON et afficher
// les données en appelant createTodoRow
fetch("https://jsonplaceholder.typicode.com/todos", {
  method: "GET",
})
  .then((res) => res.json())
  .then((todos) => {
    for (const todo of todos) {
      const todoRowEl = createTodoRow(todo);
      listEl.append(todoRowEl);
    }
  });

// Exercice 7
// Au submit du formulaire afficher la bordure
// du champs en rouge si aucune valeur n'a été saisie
// et ne pas ajouter la ligne


// Exercice 8
// Ecouter l'événément input sur le champ
// Stocker la saisie dans le localStorage
// Au chargement de la page reremplir le champ avec
// le contenu du localStorage
inputEl.addEventListener('input', () => {
  localStorage.setItem('todo-value', inputEl.value);
});

if (localStorage.getItem('todo-value')) {
  inputEl.value = localStorage.getItem('todo-value');
}
