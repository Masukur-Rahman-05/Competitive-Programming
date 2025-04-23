/*
Given two arrays arr1[0…m-1] and arr2[0..n-1], and a number x, the task is to find the pair arr1[i] + arr2[j] such that absolute value of (arr1[i] + arr2[j] – x) is minimum.

Example: 


    Input:  arr1[] = {1, 4, 5, 7};
                arr2[] = {10, 20, 30, 40};
                x = 32
    Output:  1 and 30
    Input:  arr1[] = {1, 4, 5, 7};
                arr2[] = {10, 20, 30, 40};
                x = 50      
    Output:  7 and 40

*/

const findClosestPair = (arr1, arr2, x) => {
  if (arr1.length === 0 || arr2.length === 0) return [];

  let m = arr1.length;
  let n = arr2.length;
  let diff = Infinity;
  let result = [];

  let i = 0;
  let j = n - 1;

  while (i < m && j >= 0) {
    let sum = arr1[i] + arr2[j];

    let currentDiff = Math.abs(sum - x);

    if (currentDiff < diff) {
      diff = currentDiff;
      result = [arr1[i], arr2[j]];
    }
    if (sum > x) {
      j--;
    } else {
      i++;
    }
  }

  return result;
};

console.log(findClosestPair([1, 4, 5, 7], [10, 20, 30, 40], 32));
console.log(findClosestPair([1, 4, 5, 7], [10, 20, 30, 40], 50));
console.log(findClosestPair([], [10, 20, 30, 40], 50));
