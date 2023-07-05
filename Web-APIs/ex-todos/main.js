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
    event.target.closest("todos-row").remove();
  }
});

listEl.addEventListener('dblclick', (event) => {
  if (event.target.classList.contains("todos-value")) {
    event.target.replaceWith(createInput(event.target.innerText));
  }
});

listEl.addEventListener('keyup', (event) => {
  if (event.target.classList.contains("todos-value-edit") && event.code === 'Enter') {
    event.target.replaceWith(createSpan(event.target.value));
  }
});
