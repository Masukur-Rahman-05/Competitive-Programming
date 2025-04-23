/*
Given an array arr[] of n integers and an integer target, the task is to find a pair in arr[] such that it’s sum is closest to target.

Note: Return the pair in sorted order and if there are multiple such pairs return the pair with maximum absolute difference. If no such pair exists return an empty array.

Examples:

    Input: arr[] = [10, 30, 20, 5], target = 25
    Output: [5, 20]
    Explanation: Out of all the pairs, [5, 20] has sum = 25 which is closest to 25.

    Input: arr[] = [5, 2, 7, 1, 4], target = 10
    Output: [2, 7]
    Explanation: As (4, 7) and (2, 7) both are closest to 10, but absolute difference of (2, 7) is 5 and (4, 7) is 3. Hence,[2, 7] has maximum absolute difference and closest to target.

    Input: arr[] = [10], target = 10
    Output: []
    Explanation: As the input array has only 1 element, return an empty array.

*/

const closestSumPair = (arr, target) => {
  if (arr.length < 2) return [];
  if (arr.length === 2 && target !== undefined) return arr;
  arr.sort((a, b) => a - b);

  let length = arr.length;
  let left = 0;
  let right = length - 1;

  let minDiff = Infinity;
  let maxAbsDiff = -1;
  let result = [];

  while (left < right) {
    let sum = arr[left] + arr[right];

    let diff = Math.abs(sum - target);
    let absDiff = Math.abs(arr[left] - arr[right]);

    if (diff < minDiff || (diff === minDiff && absDiff > maxAbsDiff)) {
      minDiff = diff;
      maxAbsDiff = absDiff;

      result = [arr[left], arr[right]];
    }

    if (sum < target) {
      left++;
    } else {
      right--;
    }
  }

  return result;
};

console.log(closestSumPair([10, 30, 20, 5], 25));
console.log(closestSumPair([5, 2, 7, 1, 4], 10));
console.log(closestSumPair([10], 10));
console.log(closestSumPair([10, 20], 10));
