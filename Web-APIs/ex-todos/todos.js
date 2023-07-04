// <div class="todos-row">
//   <input type="checkbox" class="todos-status">
//   <span class="todos-value">Finir la théorie</span>
//   <button class="todos-btn-delete">-</button>
// </div>

/**
 * @param {object} todo
 * @param {number} todo.id
 * @param {string} todo.title
 * @param {boolean} todo.completed
 */
function createTodoRow(todo) {
  const divEl = document.createElement('div');
  divEl.className = 'todos-row';

  const spanEl = document.createElement('span');
  spanEl.className = 'todos-value';
  spanEl.innerText = todo.title;
  divEl.append(spanEl);

  return divEl;
}
