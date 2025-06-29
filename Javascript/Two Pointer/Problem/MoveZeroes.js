/*
Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.

 

Example 1:

Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]

Example 2:

Input: nums = [0]
Output: [0]

*/

const MoveZeros = (nums) => {
  let left = 0;
  let length = nums.length;

  for (let right = 0; right < length; right++) {
    if (nums[right] !== 0) {
      if (left !== right) {
        [nums[left], nums[right]] = [nums[right], nums[left]];
      }
      left++;
    }
  }
  return nums;
};

console.log(MoveZeros([0, 1, 0, 3, 12]));
console.log(MoveZeros([0]));
