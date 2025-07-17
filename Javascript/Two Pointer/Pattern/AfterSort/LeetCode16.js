/*
Given an integer array nums of length n and an integer target, find three integers in nums such that the sum is closest to target.

Return the sum of the three integers.

You may assume that each input would have exactly one solution.

 

Example 1:

Input: nums = [-1,2,1,-4], target = 1
Output: 2
Explanation: The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).

Example 2:

Input: nums = [0,0,0], target = 1
Output: 0
Explanation: The sum that is closest to the target is 0. (0 + 0 + 0 = 0).

*/

const ClosestSum = (nums, target) => {
  let length = nums.length;

  nums.sort((a, b) => a - b);

  let closest = nums[0] + nums[1] + nums[2];

  for (let left = 0; left < length - 2; left++) {
    let mid = left + 1;
    let right = length - 1;

    while (mid < right) {
      let sum = nums[left] + nums[mid] + nums[right];

      let diff = Math.abs(sum - target);
      let closestDiff = Math.abs(closest - target);
      if (diff < closestDiff) {
        closest = sum;
      }

      if (sum === target) {
        return sum;
      } else if (sum < target) {
        mid++;
      } else {
        right--;
      }
    }
  }

  return closest;
};

console.log(ClosestSum([-1, 2, 1, -4], 1));
console.log(ClosestSum([0, 0, 0], 1));
