'use strict';

const inputEl = document.querySelector('.task-status');

const getStatus = e => {
  console.log(e.target.checked);
};

inputEl.addEventListener('change', getStatus);
