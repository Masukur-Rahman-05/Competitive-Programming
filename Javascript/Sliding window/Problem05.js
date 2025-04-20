/*
Given an array arr[] of size n containing integers, the task is to find the length of the longest subarray having sum equal to the given value k.

Note: If there is no subarray with sum equal to k, return 0.

Examples: 

    Input: arr[] = [10, 5, 2, 7, 1, -10], k = 15
    Output: 6
    Explanation: Sub arrays with sum = 15 are [5, 2, 7, 1], [10, 5] and [10, 5, 2, 7, 1, -10]. The length of the longest subarray with a sum of 15 is 6.

    Input: arr[] = [-5, 8, -14, 2, 4, 12], k = -5
    Output: 5
    Explanation: Only subarray with sum = 15 is [-5, 8, -14, 2, 4] of length 5.

    Input: arr[] = [10, -10, 20, 30], k = 5
    Output: 0
    Explanation: No subarray with sum = 5 is present in arr[].

*/

const LongestSubArray = (arr, k) => {
  let sum = 0;
  let maxLen = 0;
  let length = arr.length;
  let freqMap = new Map();

  for (let right = 0; right < length; right++) {
    sum += arr[right];

    if (sum === k) {
      maxLen = right + 1;
    }

    if (freqMap.has(sum - k)) {
      {
        let prevIndex = freqMap.get(sum - k);
        maxLen = Math.max(maxLen, right - prevIndex);
      }
    }

    if (freqMap.has(sum)) {
      freqMap.set(sum, right);
    }
  }

  return maxLen;
};

console.log(LongestSubArray([10, 5, 2, 7, 1, -10], 15));
console.log(LongestSubArray([-5, 8, -14, 2, 4, 12], -5));
console.log(LongestSubArray([10, -10, 20, 30], 5));
