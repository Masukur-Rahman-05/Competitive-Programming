/*
Given an array nums of n integers, return an array of all the unique quadruplets [nums[a], nums[b], nums[c], nums[d]] such that:

    0 <= a, b, c, d < n
    a, b, c, and d are distinct.
    nums[a] + nums[b] + nums[c] + nums[d] == target

You may return the answer in any order.

 

Example 1:

Input: nums = [1,0,-1,0,-2,2], target = 0
Output: [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]

Example 2:

Input: nums = [2,2,2,2,2], target = 8
Output: [[2,2,2,2]]

*/

const fourSum = (nums, target) => {
  if (nums.length < 4) return [];

  let length = nums.length;
  nums.sort((a, b) => a - b);

  let result = [];

  for (let left = 0; left < length - 3; left++) {
    if (left > 0 && nums[left] === nums[left - 1]) continue;
    for (let leftMid = left + 1; leftMid < length - 2; leftMid++) {
      if (leftMid > left + 1 && nums[leftMid] === nums[leftMid - 1]) continue;

      let rightMid = leftMid + 1;
      let right = length - 1;

      while (rightMid < right) {
        let sum = nums[left] + nums[leftMid] + nums[rightMid] + nums[right];

        if (sum === target) {
          result.push([nums[left], nums[leftMid], nums[rightMid], nums[right]]);

          while (rightMid < right && nums[rightMid] === nums[rightMid + 1])
            rightMid++;
          while (right > rightMid && nums[right] === nums[right - 1]) right--;

          rightMid++;
          right--;
        } else if (sum < target) {
          rightMid++;
        } else {
          right--;
        }
      }
    }
  }

  return result;
};

console.log(fourSum([1, 0, -1, 0, -2, 2], 0));
console.log(fourSum([2, 2, 2, 2, 2], 8));
