export const setButton = buttonText => {
  const getText = document.querySelector('body');
  getText.textContent = buttonText;
  //getText.innerHTML = buttonText;
  //console.dir((getText.innetHTML = buttonText));
  return getText.textContent;
};
setButton('<button>button text</button>');