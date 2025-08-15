function countDigits(num) {
  if (typeof num !== "number" || num === null) return 0;
  let count = 0;
  for (let i = num; i != 0; i = Math.floor(i / 10)) {
    count++;
  }
  return count;
}
module.exports = countDigits;
