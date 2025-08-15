function palindrome(num) {
  const str = String(num); // Convert input to string
  for (let i = 0; i < str.length / 2; i++) {
    if (str[i] !== str[str.length - 1 - i]) {
      return "No";
    }
  }
  return "Yes";
}

module.exports = palindrome;
