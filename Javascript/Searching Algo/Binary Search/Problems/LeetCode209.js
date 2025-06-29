/*
Given an array of positive integers nums and a positive integer target, return the minimal length of a

whose sum is greater than or equal to target. If there is no such subarray, return 0 instead.

 

Example 1:

Input: target = 7, nums = [2,3,1,2,4,3]
Output: 2
Explanation: The subarray [4,3] has the minimal length under the problem constraint.

Example 2:

Input: target = 4, nums = [1,4,4]
Output: 1

Example 3:

Input: target = 11, nums = [1,1,1,1,1,1,1,1]
Output: 0

*/

const minSubarrayLen = (target, nums) => {
  let length = nums.length;

  let left = 0;
  let minLen = Infinity;
  let sum = 0;

  for (let i = 0; i < length; i++) {
    sum += nums[i];

    while (sum >= target) {
      minLen = Math.min(minLen, i - left + 1);
      sum -= nums[left];
      left++;
    }
  }

  return minLen === Infinity ? 0 : minLen;
};

console.log(minSubarrayLen(7, [2, 3, 1, 2, 4, 3]));
console.log(minSubarrayLen(4, [1, 4, 4]));
console.log(minSubarrayLen(11, [1, 1, 1, 1, 1, 1, 1, 1]));
