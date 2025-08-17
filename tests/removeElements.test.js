const removeELements = require("../code/removeElements.js");

describe("removeElements", () => {
  test("return number of elements in an array after val is removed", () => {
    expect(removeELements([1, 2, 3, 4, 4, 5, 0], 4)).toBe(5);
  });

  test("handles empty array", () => {
    expect(removeELements([], 1)).toBe(0);
  });
});
