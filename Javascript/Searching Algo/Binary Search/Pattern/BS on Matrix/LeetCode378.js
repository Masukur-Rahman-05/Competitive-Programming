/*
Given an n x n matrix where each of the rows and columns is sorted in ascending order, return the kth smallest element in the matrix.

Note that it is the kth smallest element in the sorted order, not the kth distinct element.

You must find a solution with a memory complexity better than O(n2).

 

Example 1:

Input: matrix = [[1,5,9],[10,11,13],[12,13,15]], k = 8
Output: 13
Explanation: The elements in the matrix are [1,5,9,10,11,12,13,13,15], and the 8th smallest number is 13

Example 2:

Input: matrix = [[-5]], k = 1
Output: -5

*/

const findSmallestK = (matrix, k) => {
  let n = matrix.length;

  let left = matrix[0][0];
  let right = matrix[n - 1][n - 1];

  const countElement = (mid) => {
    let count = 0;
    let row = n - 1;
    let col = 0;

    while (row >= 0 && col < n) {
      if (matrix[row][col] <= mid) {
        count += row + 1;
        col++;
      } else {
        row--;
      }
    }
    return count;
  };

  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    let count = countElement(mid);

    if (count < k) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  return left;
};

console.log(
  findSmallestK(
    [
      [1, 5, 9],
      [10, 11, 13],
      [12, 13, 15],
    ],
    8
  )
);
console.log(findSmallestK([[-5]], 1));

// const FindKSmallest = (matrix, k) => {
//   const newArray = matrix.flat();

//   newArray = new Int32Array(newArray).sort();

//   return newArray[k - 1];
// };
