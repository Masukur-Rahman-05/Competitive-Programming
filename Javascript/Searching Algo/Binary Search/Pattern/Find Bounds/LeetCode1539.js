/*
Given an array arr of positive integers sorted in a strictly increasing order, and an integer k.

Return the kth positive integer that is missing from this array.

 

Example 1:

Input: arr = [2,3,4,7,11], k = 5
Output: 9
Explanation: The missing positive integers are [1,5,6,8,9,10,12,13,...]. The 5th missing positive integer is 9.

Example 2:

Input: arr = [1,2,3,4], k = 2
Output: 6
Explanation: The missing positive integers are [5,6,7,...]. The 2nd missing positive integer is 6.

*/

const findMissingValue = (arr, k) => {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    let numOfMissing = arr[mid] - (mid + 1);

    if (numOfMissing < k) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return left + k;
};

console.log(findMissingValue([2, 3, 4, 7, 11], 5));
console.log(findMissingValue([1, 2, 3, 4], 2));
