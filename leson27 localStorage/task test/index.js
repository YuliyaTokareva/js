const storage = {};
const setItem = (key, value) => {
  Object.assign(storage, { [key]: value });
};

const getItem = key => JSON.parse(localStorage.getItem(key));

const listElem = document.querySelector('.list');

const renderTasks = () => {
  const tasksList = getItem('tasksListk') || [];

  listElem.innerHTML = '';
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

// put your code here
const inputElem = document.querySelector('.task-input');
const btnElem = document.querySelector('.create-task-btn');
const isInputEmpty = () => {
  //const getInputTxt = inputElem.value;
  const taskTitleInputElem = document.querySelector('.task-input');

  const text = taskTitleInputElem.value;
  console.log(text);
  if (text.length === 0) {
    return;
  }

  //const idObj = Math.floor(Math.random() * (4000456000 - 456000)) + 456000;
  const tasksList = getItem('tasksList') || [];

  const newTaskList = tasksList.concat({
    text,
    done: false,
    createDate: new Date().toISOString(),
    id: Math.random().toString(),
  });
  setItem('taskList', newTaskList);
  renderTasks();
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
  //const getId = e.target.parentNode.dataset.id;
  const isCheckbox = e.target.classList.contains('list__item-checkbox');
  if (!isCheckbox) {
    return;
  }
  const taskList = getItem('tasksList');
  const newTaskList = tasksList.map(el => {
    if (el.id === e.target.dataset.id) {
      const done = e.target.checked;

      return {
        ...task,
        done,
        finishDate: done ? new Date().toISOString() : null,
      };
    }

    return task;
  });
  setItem('taskList', newTaskList);
  renderTasks();
};
console.log(storage);
listElem.addEventListener('click', editStatus);
