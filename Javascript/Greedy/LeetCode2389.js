/*
You are given an integer array nums of length n, and an integer array queries of length m.

Return an array answer of length m where answer[i] is the maximum size of a subsequence that you can take from nums such that the sum of its elements is less than or equal to queries[i].

A subsequence is an array that can be derived from another array by deleting some or no elements without changing the order of the remaining elements.

 

Example 1:

Input: nums = [4,5,2,1], queries = [3,10,21]
Output: [2,3,4]
Explanation: We answer the queries as follows:
- The subsequence [2,1] has a sum less than or equal to 3. It can be proven that 2 is the maximum size of such a subsequence, so answer[0] = 2.
- The subsequence [4,5,1] has a sum less than or equal to 10. It can be proven that 3 is the maximum size of such a subsequence, so answer[1] = 3.
- The subsequence [4,5,2,1] has a sum less than or equal to 21. It can be proven that 4 is the maximum size of such a subsequence, so answer[2] = 4.

Example 2:

Input: nums = [2,3,4,5], queries = [1]
Output: [0]
Explanation: The empty subsequence is the only subsequence that has a sum less than or equal to 1, so answer[0] = 0.

 
*/

const longestSubsequence = (nums, queries) => {
  let numsLength = nums.length;
  let queryLength = queries.length;
  let sum = 0;
  let prefixSum = [];
  let answer = [];

  nums.sort((a, b) => a - b);

  for (let i = 0; i < numsLength; i++) {
    sum += nums[i];
    prefixSum.push(sum);
  }

  const binarySearch = (arr, target) => {
    let left = 0;
    let right = arr.length - 1;
    let answer = -1;

    while (left <= right) {
      let mid = Math.floor((left + right) / 2);

      if (arr[mid] <= target) {
        answer = mid;
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }

    return answer;
  };

  for (let i = 0; i < queryLength; i++) {
    let index = binarySearch(prefixSum, queries[i]);

    if (index !== -1) {
      answer.push(index + 1);
    } else {
      answer.push(0);
    }
  }

  return answer;
};

console.log(longestSubsequence([4, 5, 2, 1], [3, 10, 21]));
