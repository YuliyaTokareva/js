'use strict';

const inputEl = document.querySelector('.text-input');

const getTxt = () => {
  console.log(inputEl.value);
};

inputEl.addEventListener('change', getTxt);
