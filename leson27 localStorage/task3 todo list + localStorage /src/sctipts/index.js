import { initTodoListHandlers } from './todoList.js';
import { renderTasks } from './render.js';

document.addEventListener('DOMContentLoaded', () => {
  renderTasks();
  initTodoListHandlers();
});

// const updateArr = (num, status) => {
//   if (status === false) {
//     tasks[num].done = true;
//   }
//   if (status === true) {
//     tasks[num].done = false;
//   }
// };

// listElem.addEventListener('click', editStatus);
