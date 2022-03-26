export const setTitle = text => {
  const getText = document.querySelector('.title');
  getText.textContent = String(text);
  //console.dir((getText.textContent = String(text)));
  return (getText.textContent = String(text));
};
//setTitle('Hi!');
