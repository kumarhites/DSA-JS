const { secondLargest } = require("../code/SecondLargest");

describe("secondLargest", () => {
  test("returns the second largest number in a normal array", () => {
    expect(secondLargest([4, 9, 0, 2, 8, 7, 1])).toBe(8);
  });

  test("returns null for array with one element", () => {
    expect(secondLargest([5])).toBeNull();
  });

  test("returns null for array with all same elements", () => {
    expect(secondLargest([3, 3, 3])).toBeNull();
  });

  test("handles negative numbers", () => {
    expect(secondLargest([-1, -5, -3, -2])).toBe(-2);
  });

  test("handles array with two elements", () => {
    expect(secondLargest([10, 20])).toBe(10);
  });
});
