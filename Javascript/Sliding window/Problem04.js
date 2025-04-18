/*
    Given a string, find the smallest window length with all distinct characters of the given string. For eg. str = “aabcbcdbca”, then the result would be 4 as of the smallest window will be “dbca” .

Examples: 

Input: aabcbcdbca
Output: dbca
Explanation: 
Possible substrings= {aabcbcd, abcbcd, 
bcdbca, dbca....}
Of the set of possible substrings 'dbca' 
is the shortest substring having all the 
distinct characters of given string. 

Input: aaab
Output: ab
Explanation: 
Possible substrings={aaab, aab, ab}
Of the set of possible substrings 'ab' 
is the shortest substring having all 
the distinct characters of given string.    
*/

const findMinWindow = (str) => {
  let totalUniqueChar = new Set(str).size;
  let left = 0;
  let validWindow = 0;
  let start = 0;
  let minLen = Infinity;
  let length = str.length;
  let freqMap = new Map();

  for (let right = 0; right < length; right++) {
    let rightChar = str[right];
    freqMap.set(rightChar, (freqMap.get(rightChar) || 0) + 1);

    if (freqMap.get(rightChar) === 1) {
      validWindow++;
    }

    while (validWindow === totalUniqueChar) {
      if (right - left + 1 < minLen) {
        minLen = right - left + 1;
        start = left;
      }

      let leftChar = str[left];
      freqMap.set(leftChar, freqMap.get(leftChar) - 1);

      if (freqMap.get(leftChar) === 0) {
        validWindow--;
      }

      left++;
    }
  }
  return str.slice(start, start + minLen);
};

console.log(findMinWindow("aabcbcdbca")); // "dbca"
console.log(findMinWindow("aaab")); // "ab"
