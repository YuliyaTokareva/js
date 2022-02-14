import { withdraw } from "./withdraw.js";

it("shuld get plus result", () => {
  const result = withdraw(["Ann", "John", "User"], [1400, 87, -6], "John", 50);
  expect(result).toEqual(37);
});

it("shuld get plus result", () => {
  const result = withdraw(["Ann", "John", "User"], [1400, 87, -6], "User", 10);
  expect(result).toEqual(-1);
});
