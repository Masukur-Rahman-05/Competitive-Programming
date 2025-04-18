/*
Given a 1-based indexing array arr[] of non-negative integers and an integer sum. You mainly need to return the left and right indexes(1-based indexing) of that subarray. In case of multiple subarrays, return the subarray indexes which come first on moving from left to right. If no such subarray exists return an array consisting of element -1.

Examples: 

    Input: arr[] = [15, 2, 4, 8, 9, 5, 10, 23], target = 23
    Output: [2, 5]
    Explanation: Sum of subarray arr[2…5] is 2 + 4 + 8 + 9 = 23.

    Input: arr[] = [1, 10, 4, 0, 3, 5], target = 7
    Output: [3, 5]
    Explanation: Sum of subarray arr[3…5] is 4 + 0 + 3 = 7.

    Input: arr[] = [1, 4], target = 0
    Output: [-1]
    Explanation: There is no subarray with 0 sum.

*/

const subArraySum = (arr, target) => {
  if (target === 0 || arr.length === 0) return [-1];
  let left = 0;
  let length = arr.length;
  let sum = 0;

  for (let right = 0; right < length; right++) {
    sum += arr[right];

    while (sum > target) {
      sum -= arr[left];
      left++;
    }

    if (sum === target && right >= left) {
      return [left + 1, right + 1];
    }
  }

  return [-1];
};

console.log(subArraySum([15, 2, 4, 8, 9, 5, 10, 23], 23));
console.log(subArraySum([1, 10, 4, 0, 3, 5], 7));
console.log(subArraySum([1, 4], 0));
