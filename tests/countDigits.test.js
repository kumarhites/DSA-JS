const countDigits = require("../code/countDigits.js");

describe("countDigits", () => {
  test("return number of digits in a positive integer", () => {
    expect(countDigits(12345)).toBe(5);
  });

  test("returns 1 for single digit numbers", () => {
    expect(countDigits(6)).toBe(1);
  });

  test("returns 0 for null input", () => {
    expect(countDigits(null)).toBe(0);
  });
});
