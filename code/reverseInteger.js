function reverseInteger(x) {
  let reverse = 0;
  let sign = x < 0;
  let tempNum = Math.abs(x);

  while (tempNum > 0) {
    let digit = tempNum % 10;
    reverse = reverse * 10 + digit;
    tempNum = Math.floor(tempNum / 10);
  }
  return sign ? -reverse : reverse;
}

console.log(reverseInteger(123));
console.log(reverseInteger(-123));
console.log(reverseInteger(3));
module.exports = reverseInteger;
