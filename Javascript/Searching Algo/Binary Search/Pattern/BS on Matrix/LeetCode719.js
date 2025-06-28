/*
The distance of a pair of integers a and b is defined as the absolute difference between a and b.

Given an integer array nums and an integer k, return the kth smallest distance among all the pairs nums[i] and nums[j] where 0 <= i < j < nums.length.

 

Example 1:

Input: nums = [1,3,1], k = 1
Output: 0
Explanation: Here are all the pairs:
(1,3) -> 2
(1,1) -> 0
(3,1) -> 2
Then the 1st smallest distance pair is (1,1), and its distance is 0.

Example 2:

Input: nums = [1,1,1], k = 2
Output: 0

Example 3:

Input: nums = [1,6,1], k = 3
Output: 5

*/

const smallestKPair = (nums, k) => {
  let len = nums.length;

  nums = new Int32Array(nums).sort();

  let left = 0;
  let right = nums[len - 1] - nums[0];

  const pairCount = (maxDist) => {
    let count = 0;
    let j = 0;

    for (let i = 0; i < len; i++) {
      while (j < len && nums[j] - nums[i] <= maxDist) {
        j++;
      }
      count += j - i - 1;
    }

    return count;
  };

  while (left < right) {
    let mid = Math.floor((left + right) / 2);

    let count = pairCount(mid);

    if (count < k) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return left;
};

console.log(smallestKPair([1, 6, 1], 3));
console.log(smallestKPair([1, 1, 1], 2));
console.log(smallestKPair([1, 3, 1], 1));
