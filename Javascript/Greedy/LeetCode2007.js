/*
An integer array original is transformed into a doubled array changed by appending twice the value of every element in original, and then randomly shuffling the resulting array.

Given an array changed, return original if changed is a doubled array. If changed is not a doubled array, return an empty array. The elements in original may be returned in any order.

 

Example 1:

Input: changed = [1,3,4,2,6,8]
Output: [1,3,4]
Explanation: One possible original array could be [1,3,4]:
- Twice the value of 1 is 1 * 2 = 2.
- Twice the value of 3 is 3 * 2 = 6.
- Twice the value of 4 is 4 * 2 = 8.
Other original arrays could be [4,3,1] or [3,1,4].

Example 2:

Input: changed = [6,3,0,1]
Output: []
Explanation: changed is not a doubled array.

Example 3:

Input: changed = [1]
Output: []
Explanation: changed is not a doubled array.

*/
/*
const originalArray = (changed) => {
  if (changed.length % 2 !== 0) return [];

  changed.sort((a, b) => a - b);
  const map = new Map();
  const result = [];

  for (let num of changed) {
    map.set(num, (map.get(num) || 0) + 1);
  }

  for (let num of changed) {
    if (map.get(num) === 0) continue;

    const double = num * 2;
    if ((map.get(double) || 0) === 0) return [];

    result.push(num);
    map.set(num, map.get(num) - 1);
    map.set(double, map.get(double) - 1);
  }

  return result;
};
*/

const originalArray = (changed) => {
  if (changed.length % 2 !== 0) return [];

  changed = new Int32Array(changed).sort();

  const map = new Map();
  let result = [];
  let length = changed.length;

  for (let i = 0; i < length; i++) {
    map.set(changed[i], (map.get(changed[i]) || 0) + 1);
  }

  for (let i = 0; i < length; i++) {
    if (map.get(changed[i]) === 0) continue;

    const double = changed[i] * 2;
    let num = changed[i];

    if ((map.get(double) || 0) === 0) {
      return [];
    }

    result.push(num);
    map.set(num, map.get(num) - 1);
    map.set(double, map.get(double) - 1);
  }

  return result;
};

console.log(originalArray([1, 3, 4, 2, 6, 8]));
console.log(originalArray([6, 3, 0, 1]));
console.log(originalArray([1]));
