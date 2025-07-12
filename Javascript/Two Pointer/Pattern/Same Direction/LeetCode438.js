/*
Given two strings s and p, return an array of all the start indices of p's

in s. You may return the answer in any order.

 

Example 1:

Input: s = "cbaebabacd", p = "abc"
Output: [0,6]
Explanation:
The substring with start index = 0 is "cba", which is an anagram of "abc".
The substring with start index = 6 is "bac", which is an anagram of "abc".

Example 2:

Input: s = "abab", p = "ab"
Output: [0,1,2]
Explanation:
The substring with start index = 0 is "ab", which is an anagram of "ab".
The substring with start index = 1 is "ba", which is an anagram of "ab".
The substring with start index = 2 is "ab", which is an anagram of "ab".

*/

const FindAnagram = (s, p) => {
  let sLen = s.length;
  let pLen = p.length;
  let result = [];

  let pMap = new Map();
  let windowMap = new Map();

  const isEqual = (map1, map2) => {
    if (map1.size !== map2.size) return false;

    for (let [key, value] of map2) {
      if (map1.get(key) !== value) return false;
    }

    return true;
  };

  for (let i = 0; i < pLen; i++) {
    let char = p[i];
    pMap.set(char, (pMap.get(char) || 0) + 1);
  }

  for (let i = 0; i < sLen; i++) {
    let rightChar = s[i];

    windowMap.set(rightChar, (windowMap.get(rightChar) || 0) + 1);

    if (i >= pLen) {
      let leftChar = s[i - pLen];
      if (windowMap.get(leftChar) === 1) {
        windowMap.delete(leftChar);
      } else {
        windowMap.set(leftChar, windowMap.get(leftChar) - 1);
      }
    }

    if (i >= pLen - 1) {
      if (isEqual(pMap, windowMap)) {
        result.push(i - pLen + 1);
      }
    }
  }

  return result;
};

console.log(FindAnagram("cbaebabacd", "abc"));
console.log(FindAnagram("abab", "ab"));
