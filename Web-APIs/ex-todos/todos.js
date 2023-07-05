// <div class="todos-row">
//   <input type="checkbox" class="todos-status">
//   <span class="todos-value">Finir la théorie</span>
//   <button class="todos-btn-delete">-</button>
// </div>

/**
 * @param {boolean} checked
 */
function createCheckbox(checked) {
  const checkboxEl = document.createElement('input');
  checkboxEl.type = 'checkbox';
  checkboxEl.className = 'todos-status';
  checkboxEl.checked = checked;
  return checkboxEl;
}

function createInput(title) {
  const inputEl = document.createElement('input');
  inputEl.type = 'text';
  inputEl.className = 'todos-value-edit';
  inputEl.value = title;
  inputEl.addEventListener('keyup', (event) => {
    if (event.code === 'Enter') {
      inputEl.replaceWith(createSpan(inputEl.value));
    }
  });
  return inputEl;
}

/**
 * @param {string} title
 */
function createSpan(title) {
  const spanEl = document.createElement('span');
  spanEl.className = 'todos-value';
  spanEl.innerText = title;
  spanEl.addEventListener('dblclick', () => {
    spanEl.replaceWith(createInput(spanEl.innerText));
  });
  return spanEl;
}

function createDeleteButton() {
  const btnDeleteEl = document.createElement('button');
  btnDeleteEl.className = 'todos-btn-delete';
  btnDeleteEl.innerText = '-';
  btnDeleteEl.addEventListener('click', () => {
    btnDeleteEl.parentElement.remove();
  });
  return btnDeleteEl;
}

/**
 * @param {object} todo
 * @param {number} todo.id
 * @param {string} todo.title
 * @param {boolean} todo.completed
 */
function createTodoRow(todo) {
  const divEl = document.createElement('div');
  divEl.className = 'todos-row';
  divEl.dataset.todoId = todo.id;

  divEl.append(createCheckbox(todo.completed));
  divEl.append(createSpan(todo.title));
  divEl.append(createDeleteButton());

  return divEl;
}
