// Given an array of positive integers nums and a positive integer target, return the length of the smallest contiguous subarray such that the sum is greater than or equal to target.
// If no such subarray exists, return 0.

/*
Example:
minSubArrayLen(7, [2,3,1,2,4,3])   // Output: 2
Explanation: The subarray [4,3] has a sum of 7 and is the smallest valid subarray.

minSubArrayLen(15, [1,2,3,4,5])    // Output: 5
Explanation: The subarray [1,2,3,4,5] has a sum of 15 and is the smallest valid subarray.
*/

const MinSubArrayLen = (arr, target) => {
  let left = 0;
  let length = arr.length;
  let sum = 0;
  let minLen = Infinity;

  for (let right = 0; right < length; right++) {
    sum += arr[right];

    while (sum >= target) {
      minLen = Math.min(minLen, right - left + 1);
      sum -= arr[left];
      left--;
    }
  }

  return minLen === Infinity ? 0 : minLen;
};

console.log(MinSubArrayLen([2, 3, 1, 2, 4, 3], 7)); //2
console.log(MinSubArrayLen([1, 2, 3, 4, 5], 15)); //5
