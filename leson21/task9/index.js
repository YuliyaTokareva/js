export const finishList = () => {
  const toAddOneElem = document.querySelector('.list');
  let liElem = document.createElement('li');
  liElem.textContent = 1;
  //liElem.classList.add('list__item-checkbox');
  toAddOneElem.prepend(liElem);
  const toAddTwoElem = document.querySelector('.special');
  let liTwoElem = document.createElement('li');
  liTwoElem.textContent = 4;
  toAddTwoElem.before(liTwoElem);
  const toAddSexElem = document.querySelector('.special');
  let liSexElem = document.createElement('li');
  liSexElem.textContent = 6;
  toAddSexElem.after(liSexElem);
  const toAddLastElem = document.querySelector('.special >li:last-child');
  let liLastElem = document.createElement('li');
  liLastElem.textContent = 8;
  toAddLastElem.after(liLastElem);
  const toAddClassElem = document.querySelector('.list');
  toAddClassElem.setAttribute('class', 'alert-warning');
  //toAddClassElem.children.classList.add('special');
  //toAddClassElem.classList.add('special');
};
//finishList();
