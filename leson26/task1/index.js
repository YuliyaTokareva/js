const tasks = [
  { text: 'Buy milk', done: false, id: `0` },
  { text: 'Pick up Tom from airport', done: false, id: `1` },
  { text: 'Visit party', done: false, id: `2` },
  { text: 'Visit doctor', done: true, id: `3` },
  { text: 'Buy meat', done: true, id: `4` },
];

const listElem = document.querySelector('.list');

const renderTasks = tasksList => {
  const tasksElems = tasksList
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

renderTasks(tasks);

// put your code here
const inputElem = document.querySelector('.task-input');
const btnElem = document.querySelector('.create-task-btn');
const isInputEmpty = () => {
  const getInputTxt = inputElem.value;

  if (getInputTxt.length === 0) {
    return;
  }
  const idObj = Math.floor(Math.random() * (4000456000 - 456000)) + 456000;
  const taskNew = { text: `${getInputTxt}`, done: false, id: `${idObj}` };
  tasks.push(taskNew);
  listElem.textContent = '';
  renderTasks(tasks);
  inputElem.value = '';
};

btnElem.addEventListener('click', isInputEmpty);

const updateArr = (num, status) => {
  if (status === false) {
    tasks[num].done = true;
  }
  if (status === true) {
    tasks[num].done = false;
  }
};

const editStatus = e => {
  const getId = e.target.parentNode.dataset.id;
  const isСheckbox = e.target.classList.contains('list__item-checkbox');
  if (!isСheckbox) {
    return;
  }
  const changeStatus = tasks.map(el => {
    if (el.id === getId) {
      updateArr(tasks.indexOf(el), el.done);
    }
  });
  listElem.innerHTML = '';
  renderTasks(tasks);
  // console.log(tasks);
};

listElem.addEventListener('click', editStatus);
