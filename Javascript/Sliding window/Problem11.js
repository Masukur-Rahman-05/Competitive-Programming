/*
Given two strings txt and pat having lowercase letters, the task is to check if any permutation of pat is a substring of txt.

Examples:

    Input: txt = "geeks", pat = "eke"
    Output: true
    Explanation: "eek" is a permutation of "eke" which exists in "geeks".

    Input: txt = "programming", pat = "rain"
    Output: false
    Explanation: No permutation of "rain" exists as a substring in "programming".

*/

const isMapsAreSame = (map1, map2) => {
  if (map1.size !== map2.size) return false;

  for (let [key, value] of map2) {
    if (map1.get(key) !== value) return false;
  }

  return true;
};

const SubstringPattern = (str, pattern) => {
  if (str.length < pattern.length) return false;
  if (str.length === 0 || pattern.length === 0) return false;

  let sLen = str.length;
  let pLen = pattern.length;

  let pMap = new Map();
  let windowMap = new Map();

  for (let char of pattern) {
    pMap.set(char, (pMap.get(char) || 0) + 1);
  }

  for (let i = 0; i < sLen; i++) {
    let rightChar = str[i];
    windowMap.set(rightChar, (windowMap.get(rightChar) || 0) + 1);

    if (i >= pLen) {
      let leftChar = str[i - pLen];

      if (windowMap.get(leftChar) === 1) {
        windowMap.delete(leftChar);
      } else {
        windowMap.set(leftChar, windowMap.get(leftChar) - 1);
      }
    }

    if (i >= pLen - 1) {
      if (isMapsAreSame(pMap, windowMap)) return true;
    }
  }

  return false;
};

console.log(SubstringPattern("geeks", "eke"));
console.log(SubstringPattern("programming", "rain"));
