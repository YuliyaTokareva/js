"use strict";

console.log(`Hello, world!`);
// put your code here
let income = 10000;
let rent = 2500;
let otherExpenses = 5000;
let balanse = income - rent - otherExpenses;
console.log(balanse);

// Function declaretion
// put your code here
function sayWelcome(userName, currentDay) {
  console.log(`Hello, ` + userName + `! Have a good ` + currentDay + `!`);
}
sayWelcome(`Yuliya`, `friday`);

function getWelcomeMessage(userName, currentDay) {
  const message = `Hello, ` + userName + `! Have a good ` + currentDay + `!`;
  return message;
}

// Задание 3

function min(firstNumber, secondNumber) {
  // put your code here
  if (firstNumber > secondNumber) {
    return secondNumber;
  } else {
    return firstNumber;
  }
}
min(100, 40);
min(30, 50);

/** Function expression
 /**
/**
 * @param {number} firstNumber
 * @param {number} secondNumber
 * @return {number}
 */
const min = function (firstNumber, secondNumber) {
  // put your code here
  if (firstNumber > secondNumber) {
    return secondNumber;
  } else {
    return firstNumber;
  }
};
console.log(min(100, 40));
console.log(min(30, 50));

// Стрелочная ф-я

const min = (firstNumber, secondNumber) => {
  if (firstNumber > secondNumber) {
    return secondNumber;
  } else {
    return firstNumber;
  }
  // put your code here
};
min(100, 40);
min(30, 50);

("use strict");

/**
 * @param {number} amount
 * @param {string} currency
 * @return {number}
 */
function countCommision(amount, currency) {
  // put your code here
  if (currency == `UAH`) {
    if (amount <= 1000) {
      return (amount / 100) * 2;
    } else {
      return (amount / 100) * 1;
    }
  } else if (currency == `USD`) {
    if (amount <= 5000) {
      return (amount / 100) * 0.5;
    } else {
      return (amount / 100) * 0.25;
    }
  } else {
    if (amount <= 3000) {
      return (amount / 100) * 0.75;
    } else {
      return (amount / 100) * 0;
    }
  }
}

// examples
countCommision(20000, "USD"); // ===> 50
countCommision(500, "UAH"); // ===> 10
countCommision(2000, "EUR"); // ===> 20

// Задача со стрелочной функцией
("use strict");

/**
 * @param {number} chickens
 * @param {number} caws
 * @param {number} pigs
 * @return {number}
 */
const countAreaArrow = (chickens, caws, pigs) => {
  // put your code here
  if (countAreaArrow == chickens) {
    if (chickens <= 1000) {
      console.log((cchickens / 100) * 2);
    } else {
      console.log((chickens / 100) * 1);
    }
  } else if (countAreaArrow == caws) {
    if (caws <= 5000) {
      console.log((caws / 100) * 0.5);
    } else {
      console.log((caws / 100) * 0.25);
    }
  } else {
    if (pigs <= 3000) {
      console.log((pigs / 100) * 0.75);
    } else {
      console.log((pigs / 100) * 0);
    }
  }
};

// examples
countAreaArrow(10, 10, 10); // ===> 22
countAreaArrow(10, 0, 1); // ===> 2.5
countAreaArrow(6, 3, 5); // ===> 8.2

("use strict");

/**
 * @param {number} minutes
 * @param {number} seconds
 * @param {number} mills
 * @return {number}
 */
function convertMills(minutes, seconds, mills) {
  // put your code here
  return minutes * 60000 + seconds * 1000 + mills;
}

// examples
convertMills(1, 2, 100); // ===> 62100
convertMills(0, 2, 100); // ===> 2100
convertMills(5, 11, 230); // ===> 311230

("use strict");

/**
 * @param {number} price
 * @param {number} balance
 * @return {boolean}
 */
function canBuyProduct(price, balance) {
  // put your code here
  let result = balance - price;
  if (result >= 500) {
    return true;
  } else {
    return false;
  }
}

// examples
canBuyProduct(100, 600); // ===> true
canBuyProduct(150, 600); // ===> false
canBuyProduct(1000, 1290); // ===> false

//////////////////////////////

// Сравнить и вернуть большее из трех чисел
("use strict");

/**
 * @param {number} first
 * @param {number} second
 * @param {number} third
 * @return {number}
 */
function getMax(first, second, third) {
  // put your code here
  return Math.max(first, second, third);
}

// examples
getMax(10, 20, 30); // ===> 30
getMax(100, 20, 30); // ===> 100
getMax(0, 0, 0); // ===> 0

////// examples
countArea(10, 10, 10); // ===> 22
countArea(10, 0, 1); // ===> 2.5
countArea(6, 3, 5); // ===> 8.2

("use strict");

/**
 * @param {number} chickens
 * @param {number} caws
 * @param {number} pigs
 * @return {number}
 */
function countArea(chickens, caws, pigs) {
  // put your code here
  return chickens * 0.2 + caws * 1.5 + pigs * 0.5;
}

// examples
countArea(10, 10, 10); // ===> 22
countArea(10, 0, 1); // ===> 2.5
countArea(6, 3, 5); // ===> 8.2

/////////////////////
//предыдущая задача в стрелочной фц-ии
("use strict");

/**
 * @param {number} chickens
 * @param {number} caws
 * @param {number} pigs
 * @return {number}
 */
const countAreaArrow = (chickens, caws, pigs) =>
  chickens * 0.2 + caws * 1.5 + pigs * 0.5;

// examples
countAreaArrow(10, 10, 10); // ===> 22
countAreaArrow(10, 0, 1); // ===> 2.5
countAreaArrow(6, 3, 5); // ===> 8.2

//////ЦИКЛ for

/**
 * @param {number} num
 * @return {void}
 */
function printNumbers(num) {
  //put your code here
  for (let index = 0; index <= num; index += 1) {
    console.log(index);
  }
}
printNumbers(7);

//////ЦИКЛ while
//////////вывод чисел
/**
 * @param {number} num
 * @return {void}
 */
function printNumbers(num) {
  //put your code here
  let index = 0;
  while (index <= num) {
    console.log(index);
    index += 1;
  }
}
printNumbers(13);

("use strict");
/////сумма чисел
/**
 * @return {number}
 */
function sumOfMillions() {
  // put your code here
  let summa = 0;
  for (let index = 1; index <= 10000000; index += 1) {
    summa += index;
  }
  console.log(summa);
  return summa;
}

sumOfMillions();

// examples
// sumOfMillions function should calculate and return sum from 0 + 1 + 2 + ... + 10000000

///////ФАКТОРИАЛ
("use strict");

/**
 * @param {number} num
 * @return {number}
 */
function factorial(num) {
  // put your code here
  let result = 1;
  for (let i = 1; i <= num; i++) {
    result = result * i;
  }
  console.log(result);
  return result;
}

// examples
factorial(3); // ===> 6
factorial(5); // ===> 120
factorial(0); // ===> 1

("use strict");

/**
 * @param {number} from
 * @param {number} to
 * @return {number}
 */
function sum(from, to) {
  // put your code here
  let summa = 0;
  for (let index = from; index <= to; index += 1) summa += index;
  return summa;
}

/**
 * @param {number} firstFrom
 * @param {number} firstTo
 * @param {number} secondFrom
 * @param {number} secondTo
 * @return {boolean}
 */
function compareSums(firstFrom, firstTo, secondFrom, secondTo) {
  // hint: you should use sum function inside compareSums
  // put your code here

  let firstnumber = sum(firstFrom, firstTo);

  let secondnumber = sum(secondFrom, secondTo);
  if (firstnumber > secondnumber) {
    return true;
  } else {
    return false;
  }
}

// examples
sum(5, 10); // ===> 45
sum(11, 11); // ===> 11

compareSums(5, 10, 5, 10); // ===> false
compareSums(5, 15, 3, 5); // ===> true
compareSums(-2, 5, 5, 9); // ===> false

///////Вывести стороку 30 раз
function sendEmail() {
  console.log("Gromcode party invitation was sent!");
}

function sendEmailList() {
  // hint: you should use sendEmail function inside sendEmailList
  // put your code here

  for (let index = 1; index <= 30; index += 1) {
    sendEmail();
  }
}
sendEmailList();

/////////Рефакторинг кода
function sum(from, to) {
  let result = 0;

  for (let num = from; num <= to; num += 1) {
    result += num;
  }

  return result;
}

function compareSums(firstFrom, firstTo, secondFrom, secondTo) {
  return (firstFrom, firstTo) > sum(secondFrom, secondTo);
}
/////////////////////////////
("use strict");

const students = [
  "Andrey",
  "Denis",
  "Alex",
  "Nastya",
  "Ninja",
  "Skywoker",
  "Joda",
  "Leo",
];

// Получить третий эл-т массива
const thirdEl = students[2];
console.log(thirdEl);
// Получить шестой элт массива
const sixtEl = students[5];
console.log(sixtEl);
// Получить первый элт массива
const firstEl = students[0];
console.log(firstEl);
// Получить последний элт массива
const arrLenght = students.length;
console.log(students[arrLenght - 1]);
// Вывести  массив и вывести длинну массива
console.log(students);
console.log(students.length);

("use strict");

/**
 * @param {array} arr
 */
const playerNumber = [11, 22, 33, 44, 55];

function printArray(arr) {
  // put your code here
  for (let index = 0; index < arr.length; index += 1) {
    const elOne = arr[index];
    console.log(elOne);
  }
}
printArray(playerNumber);

/**
 * @param {array} arr
 */
function printArrayForOf(arr) {
  // put your code here
  for (let el of arr) {
    console.log(el);
  }
}
printArrayForOf(playerNumber);

("use strict");

/* ==================================== */
/* ===> мутирующие методы массивов <=== */
/* ===> изменяют исходный массив <===== */
/* ==================================== */

/* push - добавит элемент в конец массива */

/**
 * С помощью метода push добавь число 111 в конец массива arr
 * Выведи в консоль результат работы метода push, а так же массив arr после выполнения push
 */

const arr = [1, 2, 3, 4, 5];
const arrAdd = arr.push(111);
console.log(arrAdd);
console.log(arr);
// put your code here

/* pop - удалит из массива последний элемент и вернет его */

/**
 * С помощью метода pop удали последний элемент массива students
 * Выведи в консоль результат работы метода pop, а так же массив students после выполнения pop
 * */

const students = ["Alex", "Ann", "Jaz", "Viktor"];
const popRes = students.pop();
console.log(popRes);
console.log(students);
// put your code here

/* shift - удалит из массива первый элемент и вернет его */

/**
 * С помощью метода shift удали первый элемент массива points
 * Выведи в консоль результат работы метода shift, а так же массив points после выполнения shift
 * */

const points = [11, 24, 37, 40, 7];
const pointsDelete = points.shift();
console.log(pointsDelete);
console.log(points);
// put your code here

/* unshift - добавит элемент в начало массива */

/**
 * С помощью метода unshift добавь число 22 в начало массива ages
 * Выведи в консоль результат работы метода unshift, а так же массив ages после выполнения unshift
 * */

const ages = [18, 25, 31, 29, 50, 11, 1000000];
const agesAdd = ages.unshift(22);
console.log(agesAdd);
console.log(ages);
// put your code here

/* ======================================= */
/* ===> НЕ мутирующие методы массивов <=== */
/* ===> НЕ изменяют исходный массив <===== */
/* ======================================= */

/* includes - проверяет есть ли элемент в массиве */

/**
 * С помощью метода includes проверь есть ли числа 0 и 100 в массиве numbers. Результат проверок выведи в консоль
 */
const numbers = [5, 0, 8, 10, -4, 50, 220];
console.log(numbers.includes(0));
console.log(numbers.includes(100));
// put your code here

///////////////////////////////////
//////////////////////////////////
("use strict");

/**
 * @param {number[]} points
 * @param {number} homeTeam
 * @param {number} awayTeam
 * @param {string} result
 * @return {number[]}
 */
function addPoints(points, homeTeam, awayTeam, result) {
  // put your code here
  let copyPoint = points.slice();
  if (result === `win`) {
    copyPoint[homeTeam - 1] += 3;
  } else if (result === `lose`) {
    copyPoint[awayTeam - 1] += 3;
  } else {
    copyPoint[homeTeam - 1] += 1;
    copyPoint[awayTeam - 1] += 1;
  }
  console.log(points);
  console.log(copyPoint);
  return copyPoint;
}
// const points = [8, 6, 4, 1];
// const res = addPoints(points, 1, 2, "win");
// console.log(res);
// console.log(points);
// examples
addPoints([8, 6, 4, 1], 1, 2, "win"); // returns ==> [11, 6, 4, 1]
addPoints([18, 15, 8, 2, 1, 0], 1, 4, "lose"); // returns ==> [18, 15, 8, 5, 1, 0]
addPoints([18, 15, 8, 2, 1, 0], 5, 6, "draw"); // returns ==> [18, 15, 8, 2, 2, 1]

///////////////////////////////////
//////////////////////////////////
("use strict");

/**
 * @param {number[]} sales
 * @return {number}
 */
function getRevenue(sales) {
  // put your code here
  let sum = 0;
  for (let i = 0; i < sales.length; i++) {
    sum += sales[i];
    const salesSumm = sum;
  }
  console.log(sum);
  return sum;
}

/**
 * @param {number[]} sales
 * @param {number} plannedRevenue
 * @return {boolean}
 */
function checkRevenue(sales, plannedRevenue) {
  // hint: you should use getRevenue function inside checkRevenue function, to calculate revenue based on sales array
  // put your code here

  if (getRevenue(sales) >= plannedRevenue) {
    return true;
  } else {
    return false;
  }
}

// examples
getRevenue([25, 40, 10, 58]); // returns ==> 133
checkRevenue([25, 40, 10, 58], 100); // returns ==> true

///////////////////////////////////
//////////////////////////////////

("use strict");

function sendEmail(userName) {
  console.log("Gromcode party invitation was sent to " + userName + "!");
}
const userNames = ["Igor", "Boris", "Viktor"];

/**
 * @param {string[]} userNames
 * @return {undefined}
 */
function sendEmailList(userNames) {
  // hint: you should use sendEmail function inside sendEmailList function
  // put your code here
  for (let i = 0; i < userNames.length; i += 1) {
    const userName = userNames[i];
    sendEmail(userName);
  }
}
sendEmailList(userNames);

("use strict");

/**
//  * @param {number[]} arr
//  * @return {number[]}
//  */
function reverseArray(arr) {
  // put your code here
  let revers = [];
  let index;
  for (let i = arr.length; i > 0; i--) {
    index = arr.length - i;
    revers[i - 1] = arr[index];
  }
  console.log(revers);
  return revers;
}

// const arr = [11, 4, 8, 3];
// const res = reverseArray(arr);
// console.log(res);
// examples
reverseArray([11, 4, 8, 3]); // ==> [3, 8, 4, 11]
reverseArray([]); // ==> []
reverseArray([100, 50]); // ==> [50, 100]

/**
 * @param {array} arr
 * @param {number} numberOfElements
 * @return {array}
//  */
const getSubArray = (arr, numberOfElements) => {
  // put your code here
  let newArr = [];
  //let numberArr = numberOfElements - 1;
  for (var i = 0; i < numberOfElements; i++) {
    newArr[i] = arr[i];
  }
  console.log(newArr);
  return newArr;
};
//console.log(newArr);
// examples
getSubArray([11, 4, 8, 3], 2); // ==> [11, 4]
getSubArray([1, 2, 3, 4, 5], 3); // ==> [1, 2, 3]
getSubArray(["some string", "hello", "I am happy"], 1); // ==> ['some string']

// //

// examples
cloneArr([11, 4, 8, 3]); // returns ==> [11, 4, 8, 3]
cloneArr([]); // returns ==> []
cloneArr([0]); // returns ==> [0]

("use strict");

// /**
//  * @param {string} userName
//  * @param {string} email
//  * @param {number} tasksCount
//  * @return {string}
//  */
const getMessage = (userName, email, tasksCount) => {
  // put your code here
  //   const userName = `Mark`;
  //   const email = `mail@email.com`;
  //   const tasksCount = 4;

  console.log(
    `Hello again, ${userName}. Your email is ${email}. You have ${tasksCount} tasks for today`
  );
};
getMessage(`userName`, `email`, `tasksCount`);

("use strict");

function isLetter(c) {
  return c.toLowerCase() !== c.toUpperCase();
}

// /**
//  * @param {string} str
//  * @return {boolean}
//  */
function isValidWord(str) {
  // put your code here
  let splitRes = str.split(``);
  if (str.length <= 2) {
    return false;
  } else {
    for (let i = 0; i < str.length; i++) {
      if (!isLetter(splitRes[i])) {
        return false;
      }
    }
    return true;
  }
}
// examples
isLetter("h"); // ==> true
isLetter("W"); // ==> true
isLetter("@"); // ==> false
isLetter("1"); // ==> false

console.log(isValidWord("hello")); // ==> true
console.log(isValidWord("Hello")); // ==> true
console.log(isValidWord("Test@")); // ==> false
console.log(isValidWord("someName1")); // ==> false
console.log(isValidWord("It is me")); // ==> false

function capitalize(str) {
  var strToArray = str.split(``);
  var upperLetter = strToArray[0].toUpperCase();
  strToArray.splice(0, 1, upperLetter);
  let uperNewStr = strToArray.join(``);
  console.log(uperNewStr);
  return uperNewStr;
}
console.log(capitalize("trett"));

// ("use strict");

// /**
//  * @param {string} str
//  * @return {string}
//  */
function capitalize(str) {
  const strNew = str[0].toUpperCase() + str.slice(1);
  console.log(strNew);
  return strNew;
}

// // // examples
capitalize("cake"); // ==> Cake
capitalize("Monday"); // ==> Monday
capitalize("hello, it is me"); // ==> Hello, it is me
////////////////////////
///////////////////////

function getAbbreviation(str) {
  const splitStr = str.split(` `);
  let textAbbr = ``;
  for (let i = 0; i < splitStr.length; i++) {
    if (splitStr[i].length > 2) {
      textAbbr += splitStr[i].toUpperCase().substr(0, 1);
    }
  }
  console.log(textAbbr);
  return;
}

// // //examples;
getAbbreviation("some company name"); // ===> SCN
getAbbreviation("Union of Soviet Socialist Republics"); // ===> USSR
getAbbreviation("United States"); // ===> US
////////////////////
///////////////////
function camelCase(str) {
  const splitStr = str.split(` `);
  let text = ``;
  let newStr;
  for (let i = 0; i < splitStr.length; i++) {
    text += splitStr[i][0].toUpperCase() + splitStr[i].slice(1);
    newStr = text[0].toLowerCase() + text.slice(1);
  }

  return newStr;
}

// examples
//camelCase("user Name"); // ===> someFunctionName
camelCase("get message"); // ===> getMessage
camelCase("render tasks list"); // ===> renderTasksList

// ("use strict");

const product = {
  id: 1212,
  name: `IPhone 12 mini`,
  isAvailable: true,
  price: 22000,
  color: `Black`,
  storeAddress: null,
};
const productName = product[`name`];
const storeAddress = product[`storeAddress`];
console.log(productName);
console.log(storeAddress);
product[`deliveryOptions`] = [`Новая почта`, `Укр почта`, `Самовывоз`];
console.log(product);

// /**
//  * @param {object} obj
//  * @return {string[]}
//  */
function getKeys(obj) {
  const keys = Object.keys(obj);
  console.log(keys);
  return keys;
}

// /**
//  * @param {object} obj
//  * @return {array}
//  */
function getValues(obj) {
  const values = Object.values(obj);
  console.log(values);
  return values;
}

// ////////////////Копирование объекта//////////////
function copyObj(obj) {
  const res = {};
  for (const key in obj) {
    res[key] = obj[key];
  }
  return res;
}
//const copiedObj = copyObj(user);
