import { getItem } from './storage.js';

const listElem = document.querySelector('.list');

export const renderTasks = () => {
  const taskList = getItem('taskList') || [];
  listElem.InnerHTML = '';
  const tasksElems = taskList
    .sort((a, b) => a.done - b.done)
    .map(({ text, done, id }) => {
      const listItemElem = document.createElement('li');
      listItemElem.classList.add('list__item');
      listItemElem.setAttribute('data-id', `${id}`);
      const checkbox = document.createElement('input');
      checkbox.setAttribute('type', 'checkbox');
      checkbox.checked = done;
      checkbox.classList.add('list__item-checkbox');
      if (done) {
        listItemElem.classList.add('list__item_done');
      }
      listItemElem.append(checkbox, text);

      return listItemElem;
    });

  listElem.append(...tasksElems);
};

//renderTasks();
