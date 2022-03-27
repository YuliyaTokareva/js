export const createButton = buttonText => {
  const toAddElem = document.querySelector('body');
  const addEl = document.createElement('button');
  addEl.textContent = buttonText;
  toAddElem.append(addEl);
};
//createButton('Send');
