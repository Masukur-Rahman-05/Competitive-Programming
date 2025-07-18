/*
Nearly everyone has used the Multiplication Table. The multiplication table of size m x n is an integer matrix mat where mat[i][j] == i * j (1-indexed).

Given three integers m, n, and k, return the kth smallest element in the m x n multiplication table.

 

Example 1:

Input: m = 3, n = 3, k = 5
Output: 3
Explanation: The 5th smallest number is 3.

Example 2:

Input: m = 2, n = 3, k = 6
Output: 6
Explanation: The 6th smallest number is 6.

*/

const findKSmallest = (m, n, k) => {
  let left = 1,
    right = m * n;

  const countElement = (mid) => {
    let count = 0;
    for (let i = 1; i <= m; i++) {
      count += Math.min(Math.floor(mid / i), n);
    }

    return count;
  };

  while (left < right) {
    let mid = Math.floor((left + right) / 2);

    if (countElement(mid) < k) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  return left;
};

console.log(findKSmallest(3, 3, 5));
console.log(findKSmallest(2, 3, 6));
