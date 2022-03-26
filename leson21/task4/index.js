export const getTitle = () => {
  console.dir(document.querySelector('.title').textContent);
  return document.querySelector('.title').textContent;
};
getTitle();
export const getDescription = () => {
  console.dir(document.querySelector('.about').innerText);
  return document.querySelector('.about').innerText;
};
getDescription();
export const getPlans = () => {
  console.dir(document.querySelector('.getPlans').innerHTML);
  return document.querySelector('.getPlans').innerHTML;
};
getPlans();
export const getGoal = () => {
  console.dir(document.querySelector('.goal').outerHTML);
  return document.querySelector('.goal').outerHTML;
};
getGoal();
