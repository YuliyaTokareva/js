'use strict';

export const getTitleElement = () => {
  const titleElem = document.querySelector('.title');
  console.dir(titleElem);
  return titleElem;
};
export const getInputElement = () => {
  const inputElem = document.querySelector('input[type="text"]')[0].value;
  console.dir(inputElem);
  return inputElem;
};
getTitleElement();
getInputElement();
