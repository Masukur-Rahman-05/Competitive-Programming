/*
Given an array of integers, you have to find three numbers such that the sum of two elements equals the third element.

Examples:

    Input: arr[] = [1, 2, 3, 4, 5]
    Output: True
    Explanation: The pair (1, 2) sums to 3.

    Input: arr[] = [3, 4, 5]
    Output: True
    Explanation: No triplets satisfy the condition.

    Input: arr[] = [2, 7, 9, 15]
    Output: True
    Explanation: The pair (2, 7) sums to 9.

*/

const equalToThird = (arr) => {
  let length = arr.length;

  for (i = 2; i < length; i++) {
    let left = 0;
    let right = i - 1;

    while (left < right) {
      let sum = arr[left] + arr[right];

      if (sum === arr[i]) {
        return true;
      } else if (sum < arr[i]) {
        left++;
      } else {
        right--;
      }
    }
  }

  return false;
};

console.log(equalToThird([1, 1, 1, 1, 1, 1, 1]));
