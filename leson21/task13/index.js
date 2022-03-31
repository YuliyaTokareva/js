export const getSection = num => {
  const listElems = document.querySelector(`span[data-number="${num}"]`);
  const getElClass = listElems.parentNode;
  const getData = getElClass.dataset.section;
  console.log(getData);
  return getData;
};
getSection(1);
