/*
You are given a non-negative integer array nums. In one operation, you must:

    Choose a positive integer x such that x is less than or equal to the smallest non-zero element in nums.
    Subtract x from every positive element in nums.

Return the minimum number of operations to make every element in nums equal to 0.

 

Example 1:

Input: nums = [1,5,0,3,5]
Output: 3
Explanation:
In the first operation, choose x = 1. Now, nums = [0,4,0,2,4].
In the second operation, choose x = 2. Now, nums = [0,2,0,0,2].
In the third operation, choose x = 2. Now, nums = [0,0,0,0,0].

Example 2:

Input: nums = [0]
Output: 0
Explanation: Each element in nums is already 0 so no operations are needed.

*/

//Without any Built in Set
/*
const minCount = (nums) => {
  let length = nums.length;
  let count = 0;
  let prev = 0;
  nums.sort((a, b) => a - b);

  for (let i = 0; i < length; i++) {
    if (nums[i] > 0 && nums[i] !== prev) {
      count++;
      prev = nums[i];
    }
  }

  return count;
};
*/

const minCount = (nums) => {
  const set = new Set();

  for (const num of nums) {
    if (num > 0) {
      set.add(num);
    }
  }

  return set.size;
};

console.log(minCount([1, 3, 0, 5, 5]));
console.log(minCount([1, 1, 1, 2, 2, 2]));
