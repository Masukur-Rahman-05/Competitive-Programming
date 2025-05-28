/*
You are given a string s and an integer repeatLimit. Construct a new string repeatLimitedString using the characters of s such that no letter appears more than repeatLimit times in a row. You do not have to use all characters from s.

Return the lexicographically largest repeatLimitedString possible.

A string a is lexicographically larger than a string b if in the first position where a and b differ, string a has a letter that appears later in the alphabet than the corresponding letter in b. If the first min(a.length, b.length) characters do not differ, then the longer string is the lexicographically larger one.

 

Example 1:

Input: s = "cczazcc", repeatLimit = 3
Output: "zzcccac"
Explanation: We use all of the characters from s to construct the repeatLimitedString "zzcccac".
The letter 'a' appears at most 1 time in a row.
The letter 'c' appears at most 3 times in a row.
The letter 'z' appears at most 2 times in a row.
Hence, no letter appears more than repeatLimit times in a row and the string is a valid repeatLimitedString.
The string is the lexicographically largest repeatLimitedString possible so we return "zzcccac".
Note that the string "zzcccca" is lexicographically larger but the letter 'c' appears more than 3 times in a row, so it is not a valid repeatLimitedString.

Example 2:

Input: s = "aababab", repeatLimit = 2
Output: "bbabaa"
Explanation: We use only some of the characters from s to construct the repeatLimitedString "bbabaa". 
The letter 'a' appears at most 2 times in a row.
The letter 'b' appears at most 2 times in a row.
Hence, no letter appears more than repeatLimit times in a row and the string is a valid repeatLimitedString.
The string is the lexicographically largest repeatLimitedString possible so we return "bbabaa".
Note that the string "bbabaaa" is lexicographically larger but the letter 'a' appears more than 2 times in a row, so it is not a valid repeatLimitedString.

*/

const stringConstruct = (s, repeatLimit) => {
  let length = s.length;

  let arr = Array(26).fill(0);

  for (let i = 0; i < length; i++) {
    arr[s[i].charCodeAt(0) - 97]++;
  }

  let i = 25;
  let result = "";

  while (i >= 0) {
    if (arr[i] === 0) {
      i--;
      continue;
    }

    let n = Math.min(arr[i], repeatLimit);
    let char = String.fromCharCode(i + 97);

    result += char.repeat(n);

    arr[i] -= n;

    if (arr[i] === 0) {
      i--;
      continue;
    }

    let j = i - 1;

    while (j >= 0 && arr[j] === 0) {
      j--;
    }

    if (j < 0) break;

    result += String.fromCharCode(j + 97);

    arr[j]--;
  }

  return result;
};

console.log(stringConstruct("cczazcc", 3));
console.log(stringConstruct("aababab", 2));
