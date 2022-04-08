'use strict';

const btnEl = [...document.querySelectorAll('.btn')];

const handleClick = e => {
  console.log(e.target.textContent);
};
btnEl.forEach(el => {
  el.addEventListener('click', handleClick);
});
