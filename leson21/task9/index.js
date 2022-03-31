export const finishList = () => {
  const toAddOneElem = document.querySelector('.list');
  let liElem = document.createElement('li');
  liElem.textContent = 1;
  toAddOneElem.prepend(liElem);
  const toAddTwoElem = document.querySelector('.special');
  let liTwoElem = document.createElement('li');
  liTwoElem.textContent = 4;
  toAddTwoElem.before(liTwoElem);
  const toAddSexElem = document.querySelector('.special');
  let liSexElem = document.createElement('li');
  liSexElem.textContent = 6;
  toAddSexElem.after(liSexElem);
  const toAddLastElem = document.querySelector('.list');
  let liLastElem = document.createElement('li');
  liLastElem.textContent = 8;
  toAddLastElem.append(liLastElem);
};
//finishList();
