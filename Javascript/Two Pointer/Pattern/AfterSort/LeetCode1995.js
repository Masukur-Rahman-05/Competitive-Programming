/*
Given a 0-indexed integer array nums, return the number of distinct quadruplets (a, b, c, d) such that:

    nums[a] + nums[b] + nums[c] == nums[d], and
    a < b < c < d

 

Example 1:

Input: nums = [1,2,3,6]
Output: 1
Explanation: The only quadruplet that satisfies the requirement is (0, 1, 2, 3) because 1 + 2 + 3 == 6.

Example 2:

Input: nums = [3,3,6,4,5]
Output: 0
Explanation: There are no such quadruplets in [3,3,6,4,5].

Example 3:

Input: nums = [1,1,1,3,5]
Output: 4
Explanation: The 4 quadruplets that satisfy the requirement are:
- (0, 1, 2, 3): 1 + 1 + 1 == 3
- (0, 1, 3, 4): 1 + 1 + 3 == 5
- (0, 2, 3, 4): 1 + 1 + 3 == 5
- (1, 2, 3, 4): 1 + 1 + 3 == 5

*/

const findUniqueQuadruple = (nums) => {
  if (nums.length < 4) return 0;

  let count = 0;
  const length = nums.length;

  for (let a = 0; a < length - 3; a++) {
    for (let b = a + 1; b < length - 2; b++) {
      for (let c = b + 1; c < length - 1; c++) {
        for (let d = c + 1; d < length; d++) {
          if (nums[a] + nums[b] + nums[c] === nums[d]) {
            count++;
          }
        }
      }
    }
  }

  return count;
};

console.log(findUniqueQuadruple([1, 2, 3, 6]));
console.log(findUniqueQuadruple([1, 1, 1, 3, 5]));
