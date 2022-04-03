'use strict';

const btntEl = document.querySelector('.search__btn');

const getTxt = () => {
  const inputEl = document.querySelector('.search__input');
  console.log(inputEl.value);
};

btntEl.addEventListener('click', getTxt);
