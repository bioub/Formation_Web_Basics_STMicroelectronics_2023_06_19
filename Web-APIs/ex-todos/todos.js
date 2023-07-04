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

  /* Exercice 1
  Compléter cette fonction de façon a créer les balises manquantes :
  <input type="checkbox"> et <button class="todos-row-delete">-</button>
  Comme dans l'exemple suivant :
  <div class="todos-row" data-todo-id="12">
    <input type="checkbox">
    <span class="todos-row-text">Acheter du pain</span>
    <button class="todos-row-delete">-</button>
  </div>
  */

  /* Exercice 2
  Au click du bouton moins, supprimer la balise <div class="todos-row"...
  Attention il faut supprimer la balise parent du bouton sur lequel on a cliqué
  */

  /* Exercice 4
  Au double click de spanEl
  Remplacer spanEl par une balise <input type="text" dont la valeur sera
  le contenu de spanEl
  Ecouter ensuite l'événement keyup de cette balise input, si
  cela correspond à la touche ENTREE revenir à la balise span
  */

  return divEl;
}
