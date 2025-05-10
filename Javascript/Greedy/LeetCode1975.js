/*
You are given an n x n integer matrix. You can do the following operation any number of times:

    Choose any two adjacent elements of matrix and multiply each of them by -1.

Two elements are considered adjacent if and only if they share a border.

Your goal is to maximize the summation of the matrix's elements. Return the maximum sum of the matrix's elements using the operation mentioned above.

 

Example 1:

Input: matrix = [[1,-1],[-1,1]]
Output: 4
Explanation: We can follow the following steps to reach sum equals 4:
- Multiply the 2 elements in the first row by -1.
- Multiply the 2 elements in the first column by -1.

Example 2:

Input: matrix = [[1,2,3],[-1,-2,-3],[1,2,3]]
Output: 16
Explanation: We can follow the following step to reach sum equals 16:
- Multiply the 2 last elements in the second row by -1.

*/

const findMaxSum = (matrix) => {
  let total = 0;
  let negative = 0;
  let min = Infinity;

  for (let row of matrix) {
    for (let num of row) {
      total += Math.abs(num);

      if (num < 0) {
        negative++;
      }
      min = Math.min(min, Math.abs(num));
    }
  }

  if (negative % 2 === 0) {
    return total;
  } else {
    return total - 2 * min;
  }
};

console.log(
  findMaxSum([
    [1, -1],
    [-1, 1],
  ])
);

console.log(
  findMaxSum([
    [1, 2, 3],
    [-1, -2, -3],
    [1, 2, 3],
  ])
);
