/*
 * ф-ция makePromise должна вернуть промис со значением переданным в ф-цию
 */

const makePromise = num => {
  const request = new Promise(resolve => {
    resolve(num);
  });
  return request;
};

/*
 * пример использования
 */
makePromise(17).then(number => {
  console.log(number); // 17
});
