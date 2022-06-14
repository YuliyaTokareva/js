const promiseNumber1 = Promise.resolve(67);
const promiseNumber2 = Promise.resolve(23);
const promiseNumber3 = Promise.resolve(8);

/*
 * создай промис и присвой переменной resultPromise
 * чтобы в консоль вывелась сумма всех чисел из трех промисов
 */

// update code below

export const resultPromise = Promise.all([promiseNumber1, promiseNumber2, promiseNumber3]);
console.log(resultPromise);
// (...list) => {
//   const pr = Promise.all(list);
//   console.log(pr);
//   new Promise(resolve => {
//     console.log(pr);
//     resolve(pr);
//   });
//   return pr;
// };
resultPromise
  .then(numbersList => {
    console.log(numbersList);
    const sum = numbersList.reduce((acc, num) => acc + num, 0);
    return sum;
  })
  .then(result => {
    console.log(result); // 98
  });

//resultPromise(promiseNumber1, promiseNumber2, promiseNumber3);
//.then(result => {
//   console.log(result); // 98
// });
// console.log(resultPromise(promiseNumber1, promiseNumber2));
