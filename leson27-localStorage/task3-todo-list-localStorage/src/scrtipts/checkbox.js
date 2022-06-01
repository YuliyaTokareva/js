// import { renderTasks } from './renderer.js';
// import { getItem, setItem } from './storage.js';
// ///isInputEmpty
// export const createCheckboxElem = done => {
//   const taskTitleInputElem = document.querySelector('.task-input');
//   const checkboxElem = document.createElement('input');
//   checkboxElem.setAttribute('type', 'checkbox');
//   //checkbox.setAttribute('data-id', id);
//   checkboxElem.checked = done;
//   checkboxElem.classList.add('list__item-checkbox');

//   const text = taskTitleInputElem.value;
//   console.log(text);
//   if (!text) {
//     return;
//   }
//   taskTitleInputElem.value = '';
//   const taskList = getItem('taskList') || [];
//   const newTaskList = taskList.concat({
//     text,
//     done: false,
//     createDate: new Date().toISOString(),
//     id: Math.random().toString(),
//   });
//   setItem('taskList', newTaskList);
//   renderTasks();
//   return checkboxElem;
// };
