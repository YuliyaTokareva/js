export const getTitle = () => {
  const getText = document.querySelector('.title');
  console.dir(getText.textContent);
  return getText.textContent;
};
getTitle();

export const getDescription = () => {
  const getDescriptionText = document.querySelector('.about');
  console.dir(getDescriptionText.innerText);
  return getDescriptionText.innerText;
};
getDescription();

export const getPlans = () => {
  const getPlansText = document.querySelector('.getPlans');
  console.dir(getPlansText.innerHTML);
  return getPlansText.innerHTML;
};
getPlans();

export const getGoal = () => {
  const getGoal = document.querySelector('.goal');
  console.dir(getGoal.outerHTML);
  return getGoal.outerHTML;
};
getGoal();
