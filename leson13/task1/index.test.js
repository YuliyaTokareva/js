import { GetEvenNumbers } from "./calculator";

it("shuld get squared numbers", () => {
  const result = GetEvenNumbers([1, 2, 3, 4]);
  expect(result).toEqual([2, 4]);
});

it("it's 17", () => {
  expect(17).toEqual(17);
});
it("it's 18", () => {
  expect(17).toEqual(17);
});
