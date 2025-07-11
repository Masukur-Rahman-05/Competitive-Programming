/*
Given two strings s1 and s2, return true if s2 contains a

of s1, or false otherwise.

In other words, return true if one of s1's permutations is the substring of s2.

 

Example 1:

Input: s1 = "ab", s2 = "eidbaooo"
Output: true
Explanation: s2 contains one permutation of s1 ("ba").

Example 2:

Input: s1 = "ab", s2 = "eidboaoo"
Output: false

*/

const FindPermutationInString = (s1, s2) => {
  let firstLength = s1.length,
    secondLength = s2.length;

  if (firstLength > secondLength) return false;

  let freqMap = new Map();
  let windowMap = new Map();

  const isEqual = (map1, map2) => {
    if (map1.size !== map2.size) return false;

    for (let [key, value] of map2) {
      if (map1.get(key) !== value) return false;
    }

    return true;
  };

  for (let i = 0; i < firstLength; i++) {
    let char = s1[i];
    freqMap.set(char, (freqMap.get(char) || 0) + 1);
  }

  for (let i = 0; i < secondLength; i++) {
    let rightChar = s2[i];

    windowMap.set(rightChar, (windowMap.get(rightChar) || 0) + 1);

    if (i >= firstLength) {
      let leftChar = s2[i - firstLength];

      if (windowMap.get(leftChar) === 1) {
        windowMap.delete(leftChar);
      } else {
        windowMap.set(leftChar, windowMap.get(leftChar) - 1);
      }
    }

    if (i >= firstLength - 1 && isEqual(freqMap, windowMap)) {
      return true;
    }
  }

  return false;
};

console.log(FindPermutationInString("ab", "eidbaooo"));
console.log(FindPermutationInString("ab", "eidboaoo"));
