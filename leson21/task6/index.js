export const setButton = buttonText => {
  const getText = document.querySelector('body');
  const newText = getText.textContent;
  getText.textContent = buttonText;
  const newHtml = getText.innerHTML;
  getText.innerHTML = buttonText;
  //console.dir((getText.innetHTML = buttonText));
  return newHtml;
};
//setButton('<button>button text</button>');
