'use strict';

const btnEl = [...document.querySelectorAll('.btn')];

const handleClick = el => {
  //btnEl.target.textContent;
  console.log(el.event.target.textContent);
};

const showName = btnEl.forEach(item => {
  item.addEventListener('click', handleClick);
});
showName();
