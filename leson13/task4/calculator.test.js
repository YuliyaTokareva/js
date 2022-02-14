import { calc } from "./calculator.js";

it("shuld get plus result", () => {
  const result = calc("3 + 3");
  expect(result).toEqual("3 + 3 = 6");
});
it("shuld get minus result", () => {
  const result = calc("9 - 3");
  expect(result).toEqual("9 - 3 = 6");
});
it("shuld get division result", () => {
  const result = calc("9 / 3");
  expect(result).toEqual("9 / 3 = 3");
});
it("shuld get multiplication result", () => {
  const result = calc("3 * 3");
  expect(result).toEqual("3 * 3 = 9");
});
