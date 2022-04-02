'use strict';

const inputEl = document.querySelector('.task-status');

const getTxt = () => {
  console.log(inputEl.checked);
};

inputEl.addEventListener('checked', getTxt);
getTxt();
