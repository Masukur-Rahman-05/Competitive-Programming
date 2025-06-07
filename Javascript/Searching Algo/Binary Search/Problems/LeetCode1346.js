/*
Given an array arr of integers, check if there exist two indices i and j such that :

    i != j
    0 <= i, j < arr.length
    arr[i] == 2 * arr[j]

 

Example 1:

Input: arr = [10,2,5,3]
Output: true
Explanation: For i = 0 and j = 2, arr[i] == 10 == 2 * 5 == 2 * arr[j]

Example 2:

Input: arr = [3,1,7,11]
Output: false
Explanation: There is no i and j that satisfy the conditions.

*/

const isDoubleExist = (arr) => {
  let length = arr.length;
  arr = new Int32Array(arr).sort();

  const set = new Set();

  for (let i = 0; i < length; i++) {
    let n = arr[i];

    if (set.has(2 * n) || (n % 2 === 0 && set.has(n / 2))) {
      return true;
    }

    set.add(n);
  }

  return false;
};

console.log(isDoubleExist([10, 2, 5, 3]));
console.log(isDoubleExist([3, 1, 7, 11]));
