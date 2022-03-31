export const setButton = buttonText => {
  const getText = document.querySelector('body');
  const buttonElem = document.createElement('button');
  getText.prepend(buttonElem);
  const newHtml = buttonElem.innerHTML;
  buttonElem.innerHTML = buttonText;
  return newHtml;
};
setButton('button text');
