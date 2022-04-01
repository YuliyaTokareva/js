'use strict';

const divEl = document.querySelector('.rect_div');
const pEl = document.querySelector('.rect_p');
const spanEl = document.querySelector('.rect_span');
const logTarget = (text, color) => {
  const eventsListElem = document.querySelector('.events-list');
  eventsListElem.innerHTML += `<span style="color: ${color}; margin-left: 8px">${text}</span>`;
};
const logGreenDiv = logTarget.bind(null, 'DIV', 'green');
const logGreenP = logTarget.bind(null, 'P', 'green');
const logGreenSpan = logTarget.bind(null, 'SPAN', 'green');

const logGreyDiv = logTarget.bind(null, 'DIV', 'grey');
const logGreyP = logTarget.bind(null, 'P', 'grey');
const logGreySpan = logTarget.bind(null, 'SPAN', 'grey');

const greenDiv = divEl.addEventListener('click', logGreenDiv);
const greenP = pEl.addEventListener('click', logGreenP);
const greenSpan = spanEl.addEventListener('click', logGreenSpan);

const greyDiv = divEl.addEventListener('click', logGreyDiv, true);
const greyP = pEl.addEventListener('click', logGreyP, true);
const greySpan = spanEl.addEventListener('click', logGreySpan, true);

const clearBtn = document.querySelector('.clear-btn');
const clearInput = () => {
  const eventsListElem = document.querySelector('.events-list');
  eventsListElem.innerHTML = ``;
};
clearBtn.addEventListener('click', clearInput);

const removeBtn = document.querySelector('.remove-handlers-btn');

const removeOn = () => {
  const greenDiv = divEl.addEventListener('click', event => {
    event.stopPropagation();
  });
  const greenP = pEl.addEventListener('click', event => {
    event.stopPropagation();
  });

  const greenSpan = spanEl.addEventListener('click', event => {
    event.stopPropagation();
  });
};
removeBtn.addEventListener('click', removeOn);

const attachBtn = document.querySelector('.attach-handlers-btn');
const removeOff = () => {
  greenDiv();
  greenP();
  greenSpan();
};
attachBtn.addEventListener('click', removeOff);
