// Bruteforce approach to find the second largest number in an array
// function secondLargest(arr) {
//   let largest = -Infinity;
//   let secondLargest = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (largest < arr[i]) {
//       largest = arr[i];
//     }
//   }
//   for (let i = 0; i < arr.length; i++) {
//     if (largest - arr[i] === 1) {
//       secondLargest = arr[i];
//     }
//   }

//   return secondLargest;
// }

// console.log(secondLargest([4, 9, 0, 2, 8, 7, 1]));

// optimized approach to find the second largest number in an array
function secondLargest(arr) {
  let largest = -Infinity;
  let secondLargest = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      secondLargest = largest;
      largest = arr[i];
    } else if (arr[i] > secondLargest && arr[i] != largest) {
      secondLargest = arr[i];
    }
  }
  return secondLargest === -Infinity ? null : secondLargest;
}

console.log(secondLargest([4, 9, 0, 2, 8, 7, 1]));

module.exports = { secondLargest };
