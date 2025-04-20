/*
Given an array arr[] of size n and an integer k, return the count of distinct numbers in all windows of size k. 

Examples: 

    Input: arr[] = [1, 2, 1, 3, 4, 2, 3], k = 4
    Output: [3, 4, 4, 3]
    Explanation: First window is [1, 2, 1, 3], count of distinct numbers is 3.
                          Second window is [2, 1, 3, 4] count of distinct numbers is 4.
                          Third window is [1, 3, 4, 2] count of distinct numbers is 4.
                          Fourth window is [3, 4, 2, 3] count of distinct numbers is 3.

    Input: arr[] = [4, 1, 1], k = 2
    Output: [2, 1]
    Explanation: First window is [4, 1], count of distinct numbers is 2.
                          Second window is [1, 1], count of distinct numbers is 1.

*/

const distinctWindow = (arr, k) => {
  let left = 0;
  let length = arr.length;
  let freqMap = new Map();
  let result = [];

  for (let right = 0; right < length; right++) {
    let rightElement = arr[right];

    freqMap.set(rightElement, (freqMap.get(rightElement) || 0) + 1);

    if (right - left + 1 === k) {
      result.push(freqMap.size);

      let leftElement = arr[left];

      freqMap.set(leftElement, freqMap.get(leftElement) - 1);
      if (freqMap.get(leftElement) === 0) {
        freqMap.delete(leftElement);
      }
      left++;
    }
  }

  return result;
};

console.log(distinctWindow([1, 2, 1, 3, 4, 2, 3], 4));
console.log(distinctWindow([4, 1, 1], 2));
