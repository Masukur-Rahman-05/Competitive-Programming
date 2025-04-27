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

const FindFastAndLastPosition = (nums, target) => {
  let length = nums.length;
  if (length === 0) return [-1, -1];
  if (length === 1 && nums[0] === target) return [0, 0];
  const findFirst = (arr, n) => {
    let start = 0;
    let end = length - 1;
    let result = -1;

    while (start <= end) {
      let mid = Math.floor((start + end) / 2);

      if (arr[mid] === n) {
        result = mid;
        end = mid - 1;
      } else if (arr[mid] < n) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }
    return result;
  };

  const findLast = (arr, n) => {
    let start = 0;
    let end = length - 1;
    let result = -1;

    while (start <= end) {
      let mid = Math.floor((start + end) / 2);

      if (arr[mid] === n) {
        result = mid;
        start = mid + 1;
      } else if (arr[mid] < n) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }
    return result;
  };

  let first = findFirst(nums, target);
  let last = findLast(nums, target);

  return [first, last];
};

console.log(FindFastAndLastPosition([5, 7, 7, 8, 8, 10], 8));
console.log(FindFastAndLastPosition([5, 7, 7, 8, 8, 10], 6));
console.log(FindFastAndLastPosition([], 0));
