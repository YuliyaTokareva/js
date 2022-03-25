'use strict';

export const getItemsList = () => {
  const elementsList = document.querySelectorAll('.technology');
  console.dir(elementsList);
  return elementsList;
};
export const getItemsArray = () => {
  const elementsArray = [...document.querySelectorAll('.tool')];
  console.dir(elementsArray);
  return elementsArray;
};
