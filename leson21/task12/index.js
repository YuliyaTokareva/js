export const squaredNumbers = () => {
  const listElems = document.querySelectorAll('.number');
  const arrListElems = [...listElems];
  arrListElems.forEach(el => {
    const getData = Math.pow(el.dataset.number, 2);
    let newData = el.dataset.squaredNumber;
    el.dataset.squaredNumber = getData;
  });
};
squaredNumbers();
