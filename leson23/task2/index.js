const arenaElem = document.querySelector('.arena');
const boardElem = document.querySelector('.board__selected-seat');

const consrtuct = (sector, line, seat) => {
  for (let s = 1; s <= sector; s++) {
    const divSectorAdd = document.createElement('div');
    divSectorAdd.setAttribute('class', 'sector');
    divSectorAdd.setAttribute('data-sector', `S ${s}`);
    arenaElem.append(divSectorAdd);
    for (let l = 1; l <= line; l++) {
      const divSectorLineAdd = document.createElement('div');
      divSectorLineAdd.setAttribute('class', 'sector__line');
      divSectorLineAdd.setAttribute('data-line', `L ${l}`);
      divSectorAdd.append(divSectorLineAdd);
      for (let i = 1; i <= seat; i++) {
        const divSectorSeatAdd = document.createElement('div');
        divSectorSeatAdd.setAttribute('class', 'sector__seat');
        divSectorSeatAdd.setAttribute('data-seat', `S ${i}`);
        divSectorLineAdd.append(divSectorSeatAdd);
      }
    }
  }
};
consrtuct(3, 10, 10);
//const showSelectedSeat = () => {};
const seatEl = document.querySelectorAll('.sector__seat');
const showSelectedSeat = e => {
  const selectEl = e.target;
  const getSet = e.target.dataset.seat;
  const getLine = selectEl.parentNode.dataset.line;
  const getSector = selectEl.parentNode.parentNode.dataset.sector;

  boardElem.innerHTML = `${getSector} ${getLine} ${getSet}`;
};
seatEl.forEach(el => {
  el.addEventListener('click', showSelectedSeat);
});
