export const finishList = () => {
  const toAddElem = document.querySelector('.list');
  // const addEl = document.createElement('button');
  // addEl.textContent = buttonText;
  // toAddElem.append(addEl);
  let liElem = document.createElement('li');
  liElem.textContent = 1;
  //liElem.classList.add('list__item-checkbox');
  toAddElem.prepend(liElem);
  const toAddSecondElem = document.querySelector('.special');
  let liSecondElem = document.createElement('li');
  liSecondElem.textContent = 4;
  toAddSecondElem.prepend(liSecondElem);
  liSecondElem.textContent = 6;
  toAddSecondElem.append(liSecondElem);
};
finishList();
