/*
Given an integer array nums, return the length of the longest strictly increasing

.

 

Example 1:

Input: nums = [10,9,2,5,3,7,101,18]
Output: 4
Explanation: The longest increasing subsequence is [2,3,7,101], therefore the length is 4.

Example 2:

Input: nums = [0,1,0,3,2,3]
Output: 4

Example 3:

Input: nums = [7,7,7,7,7,7,7]
Output: 1

 

*/

const LongestSubsequence = (nums) => {
  let sub = [];
  let len = nums.length;

  for (let i = 0; i < len; i++) {
    let left = 0,
      right = sub.length;

    while (left < right) {
      let mid = Math.floor((left + right) / 2);

      if (sub[mid] < nums[i]) {
        left = mid + 1;
      } else {
        right = mid;
      }
    }

    if (left < sub.length) {
      sub[left] = nums[i];
    } else {
      sub.push(nums[i]);
    }
  }
  return sub.length;
};

console.log(LongestSubsequence([10, 9, 2, 5, 3, 7, 101, 18]));
console.log(LongestSubsequence([0, 1, 0, 3, 2, 3]));
console.log(LongestSubsequence([7, 7, 7, 7, 7, 7, 7]));
