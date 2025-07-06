/*
Given a string s and an integer k, return the maximum number of vowel letters in any substring of s with length k.

Vowel letters in English are 'a', 'e', 'i', 'o', and 'u'.

 

Example 1:

Input: s = "abciiidef", k = 3
Output: 3
Explanation: The substring "iii" contains 3 vowel letters.
Example 2:

Input: s = "aeiou", k = 2
Output: 2
Explanation: Any substring of length 2 contains 2 vowels.
Example 3:

Input: s = "leetcode", k = 3
Output: 2
Explanation: "lee", "eet" and "ode" contain 2 vowels.

*/

const maxVowels = (s, k) => {
  let length = s.length;
  const isVowel = (char) => {
    return (
      char === "a" ||
      char === "e" ||
      char === "i" ||
      char === "o" ||
      char === "u"
    );
  };

  let = count = 0;
  for (let i = 0; i < k; i++) {
    if (isVowel(s[i])) {
      count++;
    }
  }

  let max = count;

  for (let i = k; i < length; i++) {
    if (isVowel(s[i - k])) {
      count--;
    }

    if (isVowel(s[i])) {
      count++;
    }

    max = Math.max(max, count);
  }
  return max;
};

console.log(maxVowels("abciiidef", 3));
console.log(maxVowels("aeiou", 2));
console.log(maxVowels("leetcode", 3));
