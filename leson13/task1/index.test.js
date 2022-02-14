import getSum, { getSquaredArray, GetOddNumbers } from "./calculator.js";

it("shuld get squared numbers", () => {
  const result = getSquaredArray([1, 2, 3]);
  expect(result).toEqual([1, 4, 9]);
});

it("shuld get odd numbers", () => {
  const result = GetOddNumbers([1, 2, 3]);
  expect(result).toEqual([1, 3]);
});
it("shuld get sum numbers", () => {
  const result = getSum(2, 8);
  expect(result).toEqual(10);
});
