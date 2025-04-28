/*
Given a positive integer n, find its square root. If n is not a perfect square, then return floor of √n.

Examples : 

    Input: n = 4
    Output: 2
    Explanation: The square root of 4 is 2.

    Input: n = 11
    Output: 3
    Explanation: The square root of 11 lies in between 3 and 4 so floor of the square root is 3.


*/

const findSquareRoot = (x) => {
  if (x === 0 || x === 1) {
    return x;
  }
  let start = 0;
  let end = x;
  let result = 0;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (mid * mid === x) {
      return mid;
    } else if (mid * mid > x) {
      end = mid - 1;
    } else {
      start = mid + 1;
      result = mid;
    }
  }

  return result;
};

console.log(findSquareRoot(9));
console.log(findSquareRoot(30));
console.log(findSquareRoot(1));
console.log(findSquareRoot(0));
