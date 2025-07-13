/*
You are given a string s and an integer k. You can choose any character of the string and change it to any other uppercase English character. You can perform this operation at most k times.

Return the length of the longest substring containing the same letter you can get after performing the above operations.

 

Example 1:

Input: s = "ABAB", k = 2
Output: 4
Explanation: Replace the two 'A's with two 'B's or vice versa.

Example 2:

Input: s = "AABABBA", k = 1
Output: 4
Explanation: Replace the one 'A' in the middle with 'B' and form "AABBBBA".
The substring "BBBB" has the longest repeating letters, which is 4.
There may exists other ways to achieve this answer too.

*/

const charReplace = (s, k) => {
  let length = s.length;
  let map = new Map();
  let maxFreq = 0;
  let maxWindow = 0;
  let left = 0;

  for (let right = 0; right < length; right++) {
    let rightChar = s[right];

    map.set(rightChar, (map.get(rightChar) || 0) + 1);

    maxFreq = Math.max(maxFreq, map.get(rightChar));

    while (right - left + 1 - maxFreq > k) {
      let leftChar = s[left];
      map.set(leftChar, map.get(leftChar) - 1);
      left++;
    }

    maxWindow = Math.max(maxWindow, right - left + 1);
  }

  return maxWindow;
};

console.log(charReplace("AABABBA", 1));
console.log(charReplace("ABAB", 2));
