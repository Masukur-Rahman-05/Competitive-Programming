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

const findTriplet = (nums) => {
  if (nums.length < 3) return [];

  let result = [];

  nums.sort((a, b) => a - b);
  let length = nums.length;

  for (let i = 0; i < length - 2; i++) {
    let left = i + 1;
    let right = length - 1;

    if (i > 0 && nums[i] === nums[i - 1]) continue;

    while (left < right) {
      let sum = nums[i] + nums[left] + nums[right];

      if (sum === 0) {
        result.push([nums[i], nums[left], nums[right]]);
        while (left < right && nums[left] === nums[left + 1]) left++;
        while (left < right && nums[right] === nums[right + 1]) right--;
        left++;
        right--;
      } else if (sum < 0) {
        left++;
      } else {
        right--;
      }
    }
  }

  return result;
};

console.log(findTriplet([-1, 0, 1, 2, -1, -4]));
console.log(findTriplet([0, 0, 0]));
console.log(findTriplet([0, 0, 0, 0]));
console.log(findTriplet([1, 2, 3]));

/*
const findTriplet = (nums) => {
  if (nums.length < 3) return [];

  let length = nums.length;
  const isZero = nums.every((num) => num === 0);

  if (isZero === true) return [[0, 0, 0]];

  let result = [];

  for (let i = 2; i < length; i++) {
    let left = 0;
    let right = i - 1;

    while (left < right) {
      let sum = nums[i] + nums[left] + nums[right];

      if (sum === 0) {
        result.push([...[nums[i], nums[left], nums[right]]]);
      }
      left++;
    }
  }
  return result;
};
*/
