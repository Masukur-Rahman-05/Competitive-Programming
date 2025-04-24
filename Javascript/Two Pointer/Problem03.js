/*
Given an array arr[] of size n and an integer sum, the task is to check if there is a triplet in the array which sums up to the given target sum.

Examples: 

    Input: arr[] = [1, 4, 45, 6, 10, 8], target = 13
    Output: true 
    Explanation: The triplet [1, 4, 8] sums up to 13

    Input: arr[] = [1, 2, 4, 3, 6, 7], target = 10 
    Output: true 
    Explanation: The triplets [1, 3, 6] and [1, 2, 7] both sum to 10. 

    Input: arr[] = [40, 20, 10, 3, 6, 7], sum = 24 
    Output: false
    Explanation: No triplet in the array sums to 24.

*/

const TripleSum = (arr, target) => {
  arr.sort((a, b) => a - b);
  let length = arr.length;

  for (let i = 0; i < length - 2; i++) {
    let left = i + 1;
    let right = length - 1;

    while (left < right) {
      let sum = arr[i] + arr[left] + arr[right];

      if (sum === target) {
        return true;
      } else if (sum < target) {
        left++;
      } else {
        right--;
      }
    }
  }
  return false;
};

console.log(TripleSum([1, 4, 45, 6, 10, 8], 13));
console.log(TripleSum([1, 2, 4, 3, 6, 7], 10));
console.log(TripleSum([40, 20, 10, 3, 6, 7], 24));
