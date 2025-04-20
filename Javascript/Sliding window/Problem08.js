/*
Given an array and a positive integer k, find the first negative integer for each window(contiguous subarray) of size k. If a window does not contain a negative integer, then print 0 for that window.

Examples:  

    Input: arr[] = [-8, 2, 3, -6, 1] , k = 2
    Output: [-8, 0, -6, -6]
    Explanation: First negative integer for each window of size k
                            [-8, 2] = -8
                            [2, 3]= 0 (does not contain a negative integer)
                            [3, -6] = -6
                            [-6, 10] = -6

    Input: arr[] = [12, -1, -7, 8, -15, 30, 16, 28], k = 3
    Output: [-1, -1, -7, -15, -15, 0]
    Explanation: First negative integer for each window of size k
                           [ 12,-1] = -1
                          [-1,-7] = -1
                         [-7,8] = -7
                        [8,-15] = -15
                       [-15,30] = -15
                      [30,16] = 0

*/

const negativeInteger = (arr, k) => {
  let left = 0;
  let negative = [];
  let result = [];
  let length = arr.length;

  for (let right = 0; right < length; right++) {
    if (arr[right] < 0) {
      negative.push(right);
    }

    if (right - left + 1 === k) {
      if (negative.length !== 0) {
        result.push(arr[negative[0]]);
      } else {
        result.push(0);
      }

      if (negative.length !== 0 && negative[0] === left) {
        negative.shift();
      }
      left++;
    }
  }
  return result;
};

console.log(negativeInteger([12, -1, -7, 8, -15, 30, 16, 28], 3));
console.log(negativeInteger([-8, 2, 3, -6, 1], 2));
