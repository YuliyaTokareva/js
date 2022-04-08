'use strict';

const inputEl = document.querySelector('.text-input');

const getTxt = e => {
  console.log(e.target.value);
};

inputEl.addEventListener('change', getTxt);
