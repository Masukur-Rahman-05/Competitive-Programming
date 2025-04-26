/*
Given an array of integers, check if there are four elements in the array with given sum.

Example:

    Input: arr = {10, 20, 30, 40, 1, 2}, target = 91 
    Output: True
    Explanation: Sum of 20 + 30 + 40 + 1 = 91

    Input: arr = {1, 2, 3, 4, 5, 9, 7, 8}, target = 16 
    Output: True
    Explanation: Sum of output is equal to 16, i.e. 1 + 3 + 5 + 7 = 16.

    Input: arr = {1, 1, 2, 2], target = 4 
    Output: False
    Explanation: There is no Quadruple with given target

*/

// const findFour = (arr, target) => {
//   let length = arr.length;
//   let pairMap = new Map();
//   let uniqueIndices = new Set();

//   for (let i = 0; i < length; i++) {
//     for (let j = i + 1; j < length; j++) {
//       let sum = arr[i] + arr[j];

//       if (!pairMap.has(sum)) {
//         pairMap.set(sum, []);
//       }
//       pairMap.get(sum).push([i, j]);
//     }
//   }

//   for (let [sum1, firstPair] of pairMap.entries()) {
//     let sum2 = target - sum1;

//     if (pairMap.has(sum2)) {
//       const secondPair = pairMap.get(sum2);

//       for (let [i, j] of firstPair) {
//         for (let [k, l] of secondPair) {
//           if (i !== k && i !== l && j !== k && j !== l) {
//             let quadruple = [i, j, k, l].sort((a, b) => a - b);
//             let key = quadruple.join(",");

//             if (!uniqueIndices.has(key)) {
//               uniqueIndices.add(key);
//             }
//           }
//         }
//       }
//     }
//   }
//   return Array.from(uniqueIndices).map((key) =>
//     key.split(",").map((num) => parseInt(num))
//   );
// };

// console.log(findFour([10, 20, 30, 40, 1, 2], 91));
// console.log(findFour([1, 2, 3, 4, 5, 9, 7, 8], 16));
// console.log(findFour([1, 1, 2, 2], 4));

const findFour = (nums, target) => {
  if (nums.length < 4) return [];
  if (target === undefined) return [];

  nums.sort((a, b) => a - b);
  let length = nums.length;
  let result = [];

  for (let i = 0; i < length - 3; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    for (let j = i + 1; j < length - 2; j++) {
      if (j > i + 1 && nums[j] === nums[j - 1]) continue;

      let left = j + 1;
      let right = length - 1;

      while (left < right) {
        let sum = nums[i] + nums[j] + nums[left] + nums[right];

        if (sum === target) {
          result.push([nums[i], nums[j], nums[left], nums[right]]);

          while (left < right && nums[left] === nums[left + 1]) left++;
          while (left < right && nums[right] === nums[right - 1]) right--;

          left++;
          right--;
        } else if (sum < target) {
          left++;
        } else {
          right--;
        }
      }
    }
  }

  return result;
};

console.log(findFour([10, 20, 30, 40, 1, 2], 91));
console.log(findFour([1, 2, 3, 4, 5, 9, 7, 8], 16));
console.log(findFour([1, 1, 2, 2], 4));
