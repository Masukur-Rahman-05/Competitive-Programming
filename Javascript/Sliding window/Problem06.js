/*
Given two strings S (length m) and P (length n), the task is to find the smallest substring in S that contains all characters of P, including duplicates. If no such substring exists, return “-1”. If multiple substrings of the same length are found, return the one with the smallest starting index.

Examples: 

    Input: S = “timetopractice”, P = “toc”
    Output: toprac
    Explanation: “toprac” is the smallest substring in which “toc” can be found.

    Input: S = “zoomlazapzo”, P = “oza”
    Output: apzo
    Explanation: “apzo” is the smallest substring in which “oza” can be found.

*/

const smallestWindow = (s, p) => {
  if (s.length < p.length) return -1;
  if (p.length === 0) return "";
  let pLength = p.length;
  let pMap = new Map();

  for (let char of p) {
    pMap.set(char, (pMap.get(char) || 0) + 1);
  }
  let left = 0;
  let start = 0;
  let length = s.length;
  let freqMap = new Map();
  let minLen = Infinity;
  let total = 0;

  for (let right = 0; right < length; right++) {
    let rightChar = s[right];

    if (pMap.has(rightChar)) {
      freqMap.set(rightChar, (freqMap.get(rightChar) || 0) + 1);
    }

    if (pMap.has(rightChar) && freqMap.get(rightChar) <= pMap.get(rightChar)) {
      total++;
    }

    while (total === pLength) {
      if (right - left + 1 < minLen) {
        minLen = right - left + 1;
        start = left;
      }

      let leftChar = s[left];

      if (pMap.has(leftChar)) {
        freqMap.set(leftChar, freqMap.get(leftChar) - 1);

        if (freqMap.get(leftChar) < pMap.get(leftChar)) {
          total--;
        }
      }

      left++;
    }
  }

  return minLen === Infinity ? -1 : s.slice(start, start + minLen);
};

console.log(smallestWindow("timetopractice", "toc")); // toprac
console.log(smallestWindow("zoomlazapzo", "oza")); // apzo
