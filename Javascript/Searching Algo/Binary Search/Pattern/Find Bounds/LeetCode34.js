/*
Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.

If target is not found in the array, return [-1, -1].

You must write an algorithm with O(log n) runtime complexity.

 

Example 1:

Input: nums = [5,7,7,8,8,10], target = 8
Output: [3,4]

Example 2:

Input: nums = [5,7,7,8,8,10], target = 6
Output: [-1,-1]

Example 3:

Input: nums = [], target = 0
Output: [-1,-1]

*/

const findFirstAndLast = (nums, target) => {
  if (nums.length === 0) return [-1, -1];
  if (nums.length === 1 && nums[0] === target) return [0, 0];

  const findFirst = (arr, n) => {
    let left = 0;
    let right = arr.length - 1;
    let result = -1;

    while (left <= right) {
      let mid = Math.floor((left + right) / 2);
      if (nums[mid] === n) {
        result = mid;
        right = mid - 1;
      } else if (nums[mid] > n) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }

    return result;
  };
  const findLast = (arr, n) => {
    let left = 0;
    let right = arr.length - 1;
    let result = -1;

    while (left <= right) {
      let mid = Math.floor((left + right) / 2);
      if (nums[mid] === n) {
        result = mid;
        left = mid + 1;
      } else if (nums[mid] > n) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }

    return result;
  };

  let fast = findFirst(nums, target);
  let last = findLast(nums, target);

  return [fast, last];
};

console.log(findFirstAndLast([5, 7, 7, 8, 8, 10], 8));
console.log(findFirstAndLast([5, 7, 7, 8, 8, 10], 6));
console.log(findFirstAndLast([], 0));
