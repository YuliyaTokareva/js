import { renderTasks } from './renderer.js';
import { getItem, setItem } from './storage.js';

export const onToggleTask = e => {
  const getId = e.target.parentNode.dataset.id;
  const isCheckbox = e.target.classList.contains('list__item-checkbox');
  console.log(getId);
  if (!isCheckbox) {
    return;
  }
  const taskList = getItem('tasksList');
  const newTasksList = taskList.map(task => {
    if (task.id === e.target.parentNode.dataset.id) {
      console.log(e.target.parentNode.dataset.id);
      const done = e.target.checked;

      return {
        ...task,
        done,
        finishDate: done ? new Date().toISOString() : null,
      };
    }

    return task;
  });

  setItem('tasksList', newTasksList);
  console.log(getItem('tasksList'));
  renderTasks();
};
