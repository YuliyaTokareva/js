import { getMinSquaredNumber } from "./getMinSquaredNumber.js";

it("shuld get squared min number", () => {
  const result = getMinSquaredNumber([-777, 3, -2, 6, 45, -20]);
  expect(result).toEqual(4);
});
