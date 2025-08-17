// function removeElements(nums, val) {
//   let i = 0;
//   let newArr = [];
//   for (let j = 0; j < nums.length; j++) {
//     if (nums[j] !== val) {
//       newArr[i] = nums[j];
//       i++;
//     }
//   }
//   return newArr.length;
// }

// console.log(removeElements([1, 2, 3, 4, 5, 5, 5, 4, 3, 3, 2], 2));

// module.exports = removeElements;

function removeElements(nums, val) {
  let i = 0;
  for (let j = 0; j < nums.length; j++) {
    if (nums[j] !== val) {
      nums[i] = nums[j];
      i++;
    }
  }
  return i;
}
console.log(removeElements([1, 2, 3, 4, 5, 5, 5, 4, 3, 3, 2], 2));
module.exports = removeElements;
