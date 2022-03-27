export const clearList = buttonText => {
  const getText = document.querySelector('.categories');
  //const newHtml = getText.innerHTML;
  getText.innerHTML = ' ';
  //console.dir(getText);
  //return getText;
};
clearList();
