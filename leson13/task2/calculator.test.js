import getSum, { getSguaredArray, getOddNumbers } from "./calculator.js";

it("shuld get squared numbers", () => {
  const result = getSguaredArray([1, 2, 3]);
  expect(result).toEqual([1, 4, 9]);
});

it("shuld get odd numbers", () => {
  const result = getOddNumbers([1, 2, 3, 4, 5]);
  expect(result).toEqual([1, 3, 5]);
});
it("shuld get sum numbers", () => {
  const result = getSum(2, 8);
  expect(result).toEqual(10);
});
