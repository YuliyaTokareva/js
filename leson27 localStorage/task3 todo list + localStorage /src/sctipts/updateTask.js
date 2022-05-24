import { renderTasks } from './render.js';
import { getItem, setItem } from './storage.js';

export const onToggleTask = e => {
  const isСheckbox = e.target.classList.contains('list__item-checkbox');

  if (!isСheckbox) {
    return;
  }
  const taskList = getItem('taskList');
  const newTaskList = taskList.map(task => {
    if (task.id === e.target.dataset.id) {
      const done = e.target.checked;
      console.log(task.id);
      return {
        ...task,
        done,
        finishDate: done ? new Date().toISOString() : null,
      };
    }
    console.log(getItem('taskList'));
    return task;
  });

  setItem('taskList', newTaskList);
  renderTasks();
};
