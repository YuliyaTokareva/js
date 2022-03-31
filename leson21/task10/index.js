export const finishForm = () => {
  const toAddElem = document.querySelector('.login-form');
  let inputElem = document.createElement('input');
  inputElem.setAttribute('name', 'login');
  inputElem.setAttribute('type', 'text');
  toAddElem.prepend(inputElem);
  const toEditElem = document.querySelector('[name = "password"]');
  toEditElem.setAttribute('type', 'password');
};
finishForm();
