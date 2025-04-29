/*
Given an array stalls[] which denotes the position of a stall and an integer k which denotes the number of aggressive cows. The task is to assign stalls to k cows such that the minimum distance between any two of them is the maximum possible.

Examples: 

    Input: stalls[] = [1, 2, 4, 8, 9], k = 3
    Output: 3
    Explanation: We can place cow 1 at position 1, cow 2 at position 4 and cow 3 at position 9. So, the maximum possible minimum distance between two cows is 3.

    Input: stalls[] = [6, 7,  9, 11, 13, 15], k = 4
    Output: 2
    Explanation: We can place cow 1 at position 6, cow 2 at position 9, cow 3 at position 11 and cow 4 at position 15. So, the maximum possible minimum distance between two cows is 2.

*/

const isValidPosition = (arr, k, min) => {
  let cowCount = 1;
  let lastPosition = arr[0];
  let length = arr.length;

  for (let i = 1; i < length; i++) {
    if (arr[i] - lastPosition >= min) {
      cowCount++;
      lastPosition = arr[i];

      if (cowCount >= k) {
        return true;
      }
    }
  }

  return false;
};

const aggressiveCows = (arr, k) => {
  if (arr.length < k) return -1;

  arr.sort((a, b) => a - b);

  let low = 1;
  let high = arr[arr.length - 1] - arr[0];
  let result = 0;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (isValidPosition(arr, k, mid)) {
      result = mid;
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return result;
};

console.log(aggressiveCows([1, 2, 4, 8, 9], 3));
console.log(aggressiveCows([6, 7, 9, 11, 13, 15], 4));
console.log(aggressiveCows([1, 2, 4, 8, 9], 2));
