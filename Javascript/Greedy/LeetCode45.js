/*
You are given a 0-indexed array of integers nums of length n. You are initially positioned at nums[0].

Each element nums[i] represents the maximum length of a forward jump from index i. In other words, if you are at nums[i], you can jump to any nums[i + j] where:

    0 <= j <= nums[i] and
    i + j < n

Return the minimum number of jumps to reach nums[n - 1]. The test cases are generated such that you can reach nums[n - 1].

 

Example 1:

Input: nums = [2,3,1,1,4]
Output: 2
Explanation: The minimum number of jumps to reach the last index is 2. Jump 1 step from index 0 to 1, then 3 steps to the last index.

Example 2:

Input: nums = [2,3,0,1,4]
Output: 2

*/

const minJump = (nums) => {
  let length = nums.length;

  if (length === 1) {
    return 0;
  }
  let furthest = 0;
  let jump = 0;
  let end = 0;

  for (let i = 0; i < length - 1; i++) {
    furthest = Math.max(furthest, i + nums[i]);
    if (i === end) {
      jump++;
      end = furthest;
    }
  }

  return jump;
};

console.log(minJump([2, 3, 1, 1, 4]));
console.log(minJump([2, 3, 0, 1, 4]));
