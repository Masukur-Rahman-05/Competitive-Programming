/*
Given a list of non-negative integers nums, arrange them such that they form the largest number and return it.

Since the result may be very large, so you need to return a string instead of an integer.

 

Example 1:

Input: nums = [10,2]
Output: "210"

Example 2:

Input: nums = [3,30,34,5,9]
Output: "9534330"

*/

const largestNumber = (nums) => {
  let str = nums.map(String);
  str.sort((a, b) => {
    let first = a + b;
    let second = b + a;
    return second > first ? 1 : -1;
  });

  let result = str.join("");

  if (result[0]) {
    return "0";
  }

  return result;
};

console.log(largestNumber([3, 30, 34, 5, 9]));
console.log(largestNumber([10, 2]));
console.log(largestNumber([120, 12]));
