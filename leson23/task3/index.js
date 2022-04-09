const tasks = [
  { text: 'Buy milk', done: false },
  { text: 'Pick up Tom from airport', done: false },
  { text: 'Visit party', done: false },
  { text: 'Visit doctor', done: true },
  { text: 'Buy meat', done: true },
];

const listElem = document.querySelector('.list');

const renderTasks = tasksList => {
  const tasksElems = tasksList
    .sort((a, b) => a.done - b.done)
    .map(({ text, done }) => {
      const listItemElem = document.createElement('li');
      listItemElem.classList.add('list__item');
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

renderTasks(tasks);

// put your code here
const inputElem = document.querySelector('.task-input');
const btnElem = document.querySelector('.create-task-btn');

const isInputEmpty = () => {
  const getInputTxt = inputElem.value;

  if (getInputTxt.length === 0) {
    return;
  }
  const taskNew = { text: `${getInputTxt}`, done: false };
  tasks.push(taskNew);
  listElem.textContent = '';
  renderTasks(tasks);
  inputElem.value = '';
  console.log(tasks);
};
btnElem.addEventListener('click', isInputEmpty);
