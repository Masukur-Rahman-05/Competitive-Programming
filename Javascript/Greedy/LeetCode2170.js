/*
You are given a 0-indexed array nums consisting of n positive integers.

The array nums is called alternating if:

    nums[i - 2] == nums[i], where 2 <= i <= n - 1.
    nums[i - 1] != nums[i], where 1 <= i <= n - 1.

In one operation, you can choose an index i and change nums[i] into any positive integer.

Return the minimum number of operations required to make the array alternating.

 

Example 1:

Input: nums = [3,1,3,2,4,3]
Output: 3
Explanation:
One way to make the array alternating is by converting it to [3,1,3,1,3,1].
The number of operations required in this case is 3.
It can be proven that it is not possible to make the array alternating in less than 3 operations. 

Example 2:

Input: nums = [1,2,2,2,2]
Output: 2
Explanation:
One way to make the array alternating is by converting it to [1,2,1,2,1].
The number of operations required in this case is 2.
Note that the array cannot be converted to [2,2,2,2,2] because in this case nums[0] == nums[1] which violates the conditions of an alternating array.

 
*/

const minOperations = (nums) => {
  let length = nums.length;

  let evenFirst = [0, 0],
    evenSecond = [0, 0],
    oddFirst = [0, 0],
    oddSecond = [0, 0];

  const evenCount = new Map();
  const oddCount = new Map();

  for (let i = 0; i < length; i += 2) {
    let value = nums[i];
    let freq = (evenCount.get(value) || 0) + 1;
    evenCount.set(value, freq);

    if (value === evenFirst[0]) {
      evenFirst[1] = freq;
    } else if (freq > evenFirst[1]) {
      evenSecond = [...evenFirst];
      evenFirst = [value, freq];
    } else if (freq > evenSecond[1] && value !== evenFirst[0]) {
      evenSecond = [value, freq];
    }
  }
  for (let i = 1; i < length; i += 2) {
    let value = nums[i];
    let freq = (oddCount.get(value) || 0) + 1;
    oddCount.set(value, freq);

    if (value === oddFirst[0]) {
      oddFirst[1] = freq;
    } else if (freq > oddFirst[1]) {
      oddSecond = [...oddFirst];
      oddFirst = [value, freq];
    } else if (freq > oddSecond[1] && value !== oddFirst[0]) {
      oddSecond = [value, freq];
    }
  }

  if (evenFirst[0] !== oddFirst[0]) {
    return length - (evenFirst[1] + oddFirst[1]);
  } else {
    return Math.min(
      length - (evenFirst[1] + oddSecond[1]),
      length - (oddFirst[1] + evenSecond[1])
    );
  }
};

console.log(minOperations([3, 1, 3, 2, 4, 3]));
console.log(minOperations([1, 2, 2, 2, 2]));
