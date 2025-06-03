/*
Given two integer arrays nums1 and nums2, return an array of their

. Each element in the result must be unique and you may return the result in any order.

 

Example 1:

Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2]

Example 2:

Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [9,4]
Explanation: [4,9] is also accepted.

 
*/

const intersection = (nums1, nums2) => {
  let length = nums1.length;

  let set = new Set(nums2);
  let result = new Set();

  for (let i = 0; i < length; i++) {
    if (set.has(nums1[i])) {
      result.add(nums1[i]);
    }
  }

  return Array.from(result);
};

console.log(intersection([1, 2, 2, 1], [2, 2]));
console.log(intersection([4, 9, 5], [9, 4, 9, 8, 4]));
