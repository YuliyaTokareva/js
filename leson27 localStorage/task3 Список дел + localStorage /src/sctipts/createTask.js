import { renderTasks } from './render.js';
import { getItem, setItem } from './storage.js';
///isInputEmpty
export const onCreateTask = () => {
  const taskTitleInputElem = document.querySelector('.task-input');

  const text = taskTitleInputElem.value;

  if (!text) {
    return;
  }
  taskTitleInputElem.value = '';
  const taskList = getItem('taskList') || [];
  //   const idObj = Math.floor(Math.random() * (4000456000 - 456000)) + 456000;
  //   const taskNew = { text: `${getInputTxt}`, done: false, id: `${idObj}` };
  //   tasks.push(taskNew);
  //   listElem.textContent = '';
  //   renderTasks(tasks);
  //   inputElem.value = '';
  const NewTaskList = taskList.concat({
    text,
    done: false,
    createDate: new Date().toISOString(),
    id: Math.random().toString(),
  });
  setItem('taskList', NewTaskList);
  renderTasks();
};
