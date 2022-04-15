const res = (end, start) => {
  if (end > start) {
    return end - start;
  }
  return start - end;
};
const getDiff = (startDate, endDate) => {
  const start = new Date(startDate);
  const end = new Date(endDate);
  //const res = new Date(start) - new Date(end);

  let msDiff = res(startDate, endDate),
    days = Math.floor(msDiff / (24 * 60 * 60 * 1000)),
    hours = Math.floor((msDiff / (1000 * 60 * 60)) % 24),
    mins = Math.floor((msDiff / 1000 / 60) % 60),
    secs = Math.floor((msDiff / 1000) % 60);
  console.log(msDiff);
  //document.write('<p>' + days + ' : ' + hours + ' : ' + mins + ' : ' + secs + '</p>');

  return days + 'd ' + hours + 'h ' + mins + 'm ' + secs + 's';
  //return newDate;
};
console.log(getDiff(new Date(2011, 0, 1, 0, 0, 0), new Date(2011, 0, 1, 0, 01, 0)));
console.log(Date.today().previous().monday());
