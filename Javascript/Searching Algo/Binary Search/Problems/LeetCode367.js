/*
Given a positive integer num, return true if num is a perfect square or false otherwise.

A perfect square is an integer that is the square of an integer. In other words, it is the product of some integer with itself.

You must not use any built-in library function, such as sqrt.

 

Example 1:

Input: num = 16
Output: true
Explanation: We return true because 4 * 4 = 16 and 4 is an integer.

Example 2:

Input: num = 14
Output: false
Explanation: We return false because 3.742 * 3.742 = 14 and 3.742 is not an integer.

 
*/

const validSquare = (num) => {
  if (num === 1 || num === 0) {
    return true;
  }
  let low = 0;
  let high = num;

  while (low < high) {
    let mid = Math.floor((low + high) / 2);

    let square = mid * mid;

    if (square === num) {
      return true;
    } else if (square > num) {
      high = mid;
    } else {
      low = mid + 1;
    }
  }

  return false;
};

console.log(validSquare(16));
console.log(validSquare(14));
