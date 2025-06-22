/*
A peak element in a 2D grid is an element that is strictly greater than all of its adjacent neighbors to the left, right, top, and bottom.

Given a 0-indexed m x n matrix mat where no two adjacent cells are equal, find any peak element mat[i][j] and return the length 2 array [i,j].

You may assume that the entire matrix is surrounded by an outer perimeter with the value -1 in each cell.

You must write an algorithm that runs in O(m log(n)) or O(n log(m)) time.

 

Example 1:

Input: mat = [[1,4],[3,2]]
Output: [0,1]
Explanation: Both 3 and 4 are peak elements so [1,0] and [0,1] are both acceptable answers.

Example 2:

Input: mat = [[10,20,15],[21,30,14],[7,16,32]]
Output: [1,1]
Explanation: Both 30 and 32 are peak elements so [1,1] and [2,2] are both acceptable answers.

*/

const findPeakFrom2D = (mat) => {
  let len = mat.length;
  let colLen = mat[0].length;

  let left = 0;
  let right = colLen - 1;

  while (left <= right) {
    let midCol = Math.floor((left + right) / 2);

    let maxRow = 0;
    for (let i = 1; i < len; i++) {
      if (mat[i][midCol] > mat[maxRow][midCol]) {
        maxRow = i;
      }
    }

    let element = mat[maxRow][midCol];

    let leftNeighbor =
      mat[maxRow][midCol - 1] !== undefined ? mat[maxRow][midCol - 1] : -1;
    let rightNeighbor =
      mat[maxRow][midCol + 1] !== undefined ? mat[maxRow][midCol + 1] : -1;
    if (element > leftNeighbor && element > rightNeighbor) {
      return [maxRow, midCol];
    } else if (element < leftNeighbor) {
      right = midCol - 1;
    } else if (element < rightNeighbor) {
      left = midCol + 1;
    }
  }

  return [-1, -1];
};

console.log(
  findPeakFrom2D([
    [10, 20, 15],
    [21, 30, 14],
    [7, 16, 32],
  ])
);

console.log(
  findPeakFrom2D([
    [1, 4],
    [3, 2],
  ])
);

/*
for (let row = 0; row < len; row++) {
    let left = 0;
    let right = colLen - 1;

    while (left <= right) {
      let col = Math.floor((left + right) / 2);
      let element = mat[row][col];

      let leftVal = mat[row][col - 1] !== undefined ? mat[row][col - 1] : -1;
      let rightVal = mat[row][col + 1] !== undefined ? mat[row][col + 1] : -1;
      let upVal = mat[row - 1]?.[col] !== undefined ? mat[row - 1][col] : -1;
      let downVal = mat[row + 1]?.[col] !== undefined ? mat[row + 1][col] : -1;

      if (
        element > leftVal &&
        element > rightVal &&
        element > upVal &&
        element > downVal
      ) {
        return [row, col];
      } else if (element < leftVal) {
        right = col - 1;
      } else if (element < rightVal) {
        left = col + 1;
      } else {
        break;
      }
    }
  }
  return [-1, -1];
  */
