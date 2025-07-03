/*
Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.

 

Example 1:

Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
Explanation: 
nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
The distinct triplets are [-1,0,1] and [-1,-1,2].
Notice that the order of the output and the order of the triplets does not matter.

Example 2:

Input: nums = [0,1,1]
Output: []
Explanation: The only possible triplet does not sum up to 0.

Example 3:

Input: nums = [0,0,0]
Output: [[0,0,0]]
Explanation: The only possible triplet sums up to 0.

*/

const FindTriplets = (nums) => {
  if (nums.length < 3) return [];

  nums.sort((a, b) => a - b);
  let len = nums.length;
  let result = [];

  for (let i = 0; i < len - 2; i++) {
    let mid = i + 1,
      right = len - 1;

    if (i > 0 && nums[i] === nums[i - 1]) continue;

    while (mid < right) {
      let sum = nums[i] + nums[mid] + nums[right];

      if (sum === 0) {
        result.push([nums[i], nums[mid], nums[right]]);

        while (mid < right && nums[mid] === nums[mid + 1]) mid++;
        while (mid < right && nums[right] === nums[right - 1]) right--;
        mid++;
        right--;
      } else if (sum < 0) {
        mid++;
      } else {
        right--;
      }
    }
  }

  return result;
};

console.log(FindTriplets([-1, 0, 1, 2, -1, -4]));
console.log(FindTriplets([0, 1, 1]));
console.log(FindTriplets([0, 0, 0]));
