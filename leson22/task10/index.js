'use strict';

const btnEl = document.querySelectorAll('.pagination__page');
const handleClick = e => {
  console.log(e.target.dataset.pageNumber);
};
btnEl.forEach(el => {
  el.addEventListener('click', handleClick);
});
