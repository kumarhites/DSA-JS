const removeDuplicates = require("../code/removeDuplicates.js");

describe("removeDuplicates", () => {
  test("removes duplicates and gives the count", () => {
    expect(removeDuplicates([1, 2, 3, 3, 3, 4, 5, 5, 5])).toBe(5);
  });
});
