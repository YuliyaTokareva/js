//export { dayOfWeek };
const weekDay = [`Su`, `Mo`, `Tu`, `We`, `Th`, `Fr`, `St`];
const dayOfWeek = (date, days) => {
  const day = new Date(date).getDate();
  const dayFeauture = new Date(date).setDate(day + days);
  return weekDay[new Date(dayFeauture).getDay()];
};
const result = dayOfWeek(new Date(2019, 0, 1), 14);
console.log(result);
