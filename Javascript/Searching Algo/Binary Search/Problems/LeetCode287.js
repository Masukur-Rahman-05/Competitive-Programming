/*
Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive.

There is only one repeated number in nums, return this repeated number.

You must solve the problem without modifying the array nums and using only constant extra space.

 

Example 1:

Input: nums = [1,3,4,2,2]
Output: 2

Example 2:

Input: nums = [3,1,3,4,2]
Output: 3

Example 3:

Input: nums = [3,3,3,3,3]
Output: 3

*/

// const findDuplicate = (nums) => {
//   let left = 1;
//   let right = nums.length - 1;
//   let len = nums.length;

//   while (left < right) {
//     let mid = Math.floor((left + right) / 2);

//     let count = 0;
//     for (let i = 0; i < len; i++) {
//       if (nums[i] <= mid) {
//         count++;
//       }
//     }

//     if (count > mid) {
//       right = mid;
//     } else {
//       left = mid + 1;
//     }
//   }

//   return left;
// };
const findDuplicate = (nums) => {
  let len = nums.length;

  for (let i = 0; i < len; i++) {
    let index = Math.abs(nums[i]) - 1;

    if (nums[index] < 0) return Math.abs(nums[i]);
    nums[index] = -nums[index];
  }
};

console.log(findDuplicate([1, 3, 4, 2, 2]));
console.log(findDuplicate([3, 1, 3, 4, 2]));
console.log(findDuplicate([3, 3, 3, 3, 3]));
