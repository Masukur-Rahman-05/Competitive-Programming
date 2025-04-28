/*
Given a binary array arr[] of size n, which is sorted in non-increasing order, count the number of 1’s in it. 

Examples: 

    Input: arr[] = [1, 1, 0, 0, 0, 0, 0]
    Output: 2
    Explanation: Count of the 1’s in the given array is 2.

    Input: arr[] = [1, 1, 1, 1, 1, 1, 1]
    Output: 7

    Input: arr[] = [0, 0, 0, 0, 0, 0, 0]
    Output: 0

*/

const CountingOnes = (arr) => {
  if (arr.length === 0) return 0;
  let length = arr.length;
  let start = 0;
  let end = length - 1;
  let result = -1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (arr[mid] === 1) {
      result = mid;
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  return result + 1;
};
console.log(CountingOnes([1, 1, 0, 0, 0, 0, 0])); // Output: 2
console.log(CountingOnes([1, 1, 1, 1, 1, 1, 1])); // Output: 7
console.log(CountingOnes([0, 0, 0, 0, 0, 0, 0])); // Output: 0
