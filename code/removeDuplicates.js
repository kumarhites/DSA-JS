function removeDuplicates(num) {
  let i = 0;
  for (let j = 1; j < num.length; j++) {
    if (num[j] != num[i]) {
      i++;
      num[i] = num[j];
    }
  }
  return i + 1;
}

console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
module.exports = removeDuplicates;
