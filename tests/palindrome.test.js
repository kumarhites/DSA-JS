const palindrome = require("../code/palindrome.js");

describe("palindrome", () => {
  test("returns 'Yes' for a numeric palindrome (number type)", () => {
    expect(palindrome(12321)).toBe("Yes");
  });

  test("returns 'No' for a numeric non-palindrome (number type)", () => {
    expect(palindrome(12345)).toBe("No");
  });
});
