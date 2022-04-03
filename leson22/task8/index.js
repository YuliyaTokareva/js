'use strict';

const inputEl = document.querySelector('.text-input');

const getTxt = () => {
  console.log(inputEl.target.nodeName);
};

inputEl.addEventListener('change', getTxt);
