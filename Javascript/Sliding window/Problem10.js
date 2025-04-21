/*
Given an array and an integer k, the task is to find the sum of elements of a subarray containing at least k elements which has the largest sum. 

Examples: 

    Input : arr[] = {-4, -2, 1, -3}, k = 2
    Output : -1
    Explanation : The sub array is {-2, 1}.

    Input : arr[] = {1, 1, 1, 1, 1, 1} , k = 2
    Output : 6 
    Explanation : The sub array is {1, 1, 1, 1, 1, 1} 

*/

const maxSum = (arr, k) => {
  if (k > arr.length) return 0;
  if (arr.length === 0) return 0;
  if (arr.length === 1) return arr[0];

  let n = arr.length;
  let sum = 0;
  let currentMax = new Array(n);
  let result = sum;

  currentMax[0] = arr[0];

  for (let i = 1; i < n; i++) {
    currentMax[i] = Math.max(arr[i], currentMax[i - 1] + arr[i]);
  }

  for (let i = 0; i < k; i++) {
    sum += arr[i];
  }

  result = sum;

  for (let i = k; i < n; i++) {
    sum = sum - arr[i - k] + arr[i];
    result = Math.max(result, sum);

    result = Math.max(result, sum + currentMax[i - k]);
  }

  return result;
};

console.log(maxSum([-4, -2, 1, -3], 2));
console.log(maxSum([1, 1, 1, 1, 1, 1], 2));
