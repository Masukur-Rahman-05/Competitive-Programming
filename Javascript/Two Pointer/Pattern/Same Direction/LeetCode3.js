/*
Given a string s, find the length of the longest

without duplicate characters.

 

Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.

Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.

Example 3:

Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

*/

const uniqueSubarray = (s) => {
  let length = s.length;
  let left = 0;
  let max = 0;

  let map = new Map();

  for (let right = 0; right < length; right++) {
    let rightChar = s[right];

    map.set(rightChar, (map.get(rightChar) || 0) + 1);

    while (map.get(rightChar) > 1) {
      let leftChar = s[left];
      map.set(leftChar, map.get(leftChar) - 1);

      left++;
    }

    max = Math.max(max, right - left + 1);
  }

  return max;
};

console.log(uniqueSubarray("abcabcbb"));
console.log(uniqueSubarray("bbbbb"));
console.log(uniqueSubarray("pwwkew"));
