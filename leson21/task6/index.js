export const setButton = buttonText => {
  const getText = document.querySelector('body');
  const newHtml = getText.innerHTML;
  getText.innerHTML = buttonText;
  return newHtml;
};
setButton('<button>button text</button>');
