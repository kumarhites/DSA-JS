const reverseInteger = require("../code/reverseInteger.js");

describe("reverseInteger", () => {
  test("reverses a positive integer", () => {
    expect(reverseInteger(123)).toBe(321);
  });

  test("reverses a negative integer", () => {
    expect(reverseInteger(-456)).toBe(-654);
  });

  test("handles input 0", () => {
    expect(reverseInteger(0)).toBe(0);
  });

  test("removes leading zeros in reversed number", () => {
    expect(reverseInteger(1200)).toBe(21);
  });

  test("handles single digit numbers", () => {
    expect(reverseInteger(7)).toBe(7);
    expect(reverseInteger(-8)).toBe(-8);
  });
});
