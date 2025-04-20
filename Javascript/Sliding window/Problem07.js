/*
Given a string s having lowercase characters, find the length of the longest substring without repeating characters. 

Examples:

    Input: s = “geeksforgeeks”
    Output: 7 
    Explanation: The longest substrings without repeating characters are “eksforg” and “ksforge”, with lengths of 7.

    Input: s = “aaa”
    Output: 1
    Explanation: The longest substring without repeating characters is “a”

    Input: s = “abcdefabcbb”
    Output: 6
    Explanation: The longest substring without repeating characters is “abcdef”.


*/

const LongestNonRepeatingSubstring = (s) => {
  if (s.length === 0) return 0;

  let left = 0;
  let start = 0;
  let maxLen = 0;
  let length = s.length;
  let freqMap = new Map();

  for (let right = 0; right < length; right++) {
    let rightChar = s[right];

    freqMap.set(rightChar, (freqMap.get(rightChar) || 0) + 1);

    while (freqMap.get(rightChar) > 1) {
      let leftChar = s[left];
      freqMap.set(leftChar, freqMap.get(leftChar) - 1);
      left++;
    }

    if (right - left + 1 > maxLen) {
      maxLen = right - left + 1;
      start = left;
    }
  }

  return [maxLen, s.slice(start, start + maxLen)];
};

console.log(LongestNonRepeatingSubstring("geeksforgeeks"));
console.log(LongestNonRepeatingSubstring("aaa"));
console.log(LongestNonRepeatingSubstring("abcdefabcbb"));
