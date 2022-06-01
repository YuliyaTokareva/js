import { initTodoListHandlers } from './todoList.js';
import { renderTasks } from './renderer.js';

document.addEventListener('DOMContentLoaded', () => {
  renderTasks();
  initTodoListHandlers();
});

const onStarageChange = e => {
  if (e.key !== 'tasksList') {
    return;
  }
  renderTasks();
};
window.addEventListener('storage', onStarageChange);
