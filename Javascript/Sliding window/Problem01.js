// Find the maximum sum of a subarray of size k.

const FindMaxSum = (arr, k) => {
  let sum = 0;
  let max = 0;
  let length = arr.length;

  for (let i = 0; i < length; i++) {
    if (i < k) {
      sum += arr[i];
      if (i === k - 1) {
        max = sum;
      }
    } else {
      sum += arr[i] - arr[i - k];
      max = max > sum ? max : sum;
    }
  }

  return max;
};

console.log(FindMaxSum([1, 2, 3, 4, 5], 3)); //12
console.log(FindMaxSum([1, 12, -5, -6, 5, 3], 4)); //6
