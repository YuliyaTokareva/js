'use strict';

const btntEl = document.querySelector('.single-use-btn');

const getTxt = () => {
  console.log('clicked');
  btntEl.removeEventListener('click', getTxt);
};

btntEl.addEventListener('click', getTxt);
