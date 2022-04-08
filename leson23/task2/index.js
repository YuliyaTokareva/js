const arenaElem = document.querySelector('.arena');
const generateNumbersRange = (from, to) => {
  const result = [];
  for (let i = from; i <= to; i++) {
    result.push(i);
  }
  return result;
};

const getlineSeats = () => {
  return generateNumbersRange(1, 10)
    .map(
      seatNumber => `
  <div 
  class="sector__seat" 
  data-seat-number="${seatNumber}"></div>`
    )
    .join('');
};

const getSectorLines = () => {
  const seatString = getlineSeats();
  return generateNumbersRange(1, 10)
    .map(
      lineNumber => `
  <div 
  class="sector__line" 
  data-line-number="${lineNumber}">${seatString}</div>`
    )
    .join('');
};

const renderArena = () => {
  const sectorString = getSectorLines();
  const sectorsString = generateNumbersRange(1, 3)
    .map(
      sectorNumber => `
  <div 
  class="sector" 
  data-sector-number="${sectorNumber}">${sectorString}</div>`
    )
    .join('');
  arenaElem.innerHTML = sectorsString;
};

const boardElem = document.querySelector('.board__selected-seat');
const onSeatSelect = event => {
  const isSeat = event.target.classList.contains('sector__seat');
  if (!isSeat) {
    return;
  }
  const getSeat = event.target.dataset.seatNumber;
  const getLine = event.target.closest('.sector__line').dataset.lineNumber;
  const getSector = event.target.closest('.sector').dataset.sectorNumber;
  boardElem.textContent = `S ${getSector} - L ${getLine} - S ${getSeat}`;
};
arenaElem.addEventListener('click', onSeatSelect);
renderArena();
