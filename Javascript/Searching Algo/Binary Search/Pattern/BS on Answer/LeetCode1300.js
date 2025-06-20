/*
Given an integer array arr and a target value target, return the integer value such that when we change all the integers larger than value in the given array to be equal to value, the sum of the array gets as close as possible (in absolute difference) to target.

In case of a tie, return the minimum such integer.

Notice that the answer is not neccesarilly a number from arr.

 

Example 1:

Input: arr = [4,9,3], target = 10
Output: 3
Explanation: When using 3 arr converts to [3, 3, 3] which sums 9 and that's the optimal answer.

Example 2:

Input: arr = [2,3,5], target = 10
Output: 5

Example 3:

Input: arr = [60864,25176,27249,21296,20204], target = 56803
Output: 11361

*/

const subCloseToTarget = (arr, target) => {
  let len = arr.length;
  let left = 0;
  let right = Math.max(...arr);

  let prevDiff = Infinity;
  let result = 0;

  const findClosest = (value) => {
    let sum = 0;

    for (let i = 0; i < len; i++) {
      if (arr[i] > value) {
        sum += value;
      } else {
        sum += arr[i];
      }
    }

    return sum;
  };

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let sum = findClosest(mid);
    let currDiff = Math.abs(sum - target);

    if (currDiff < prevDiff || (currDiff === prevDiff && mid < result)) {
      result = mid;
      prevDiff = currDiff;
    }

    if (sum < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return result;
};

console.log(subCloseToTarget([4, 9, 3], 10));
console.log(subCloseToTarget([2, 3, 5], 10));
console.log(subCloseToTarget([60864, 25176, 27249, 21296, 20204], 56803));
