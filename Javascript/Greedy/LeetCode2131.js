/*
You are given an array of strings words. Each element of words consists of two lowercase English letters.

Create the longest possible palindrome by selecting some elements from words and concatenating them in any order. Each element can be selected at most once.

Return the length of the longest palindrome that you can create. If it is impossible to create any palindrome, return 0.

A palindrome is a string that reads the same forward and backward.

 

Example 1:

Input: words = ["lc","cl","gg"]
Output: 6
Explanation: One longest palindrome is "lc" + "gg" + "cl" = "lcggcl", of length 6.
Note that "clgglc" is another longest palindrome that can be created.

Example 2:

Input: words = ["ab","ty","yt","lc","cl","ab"]
Output: 8
Explanation: One longest palindrome is "ty" + "lc" + "cl" + "yt" = "tylcclyt", of length 8.
Note that "lcyttycl" is another longest palindrome that can be created.

Example 3:

Input: words = ["cc","ll","xx"]
Output: 2
Explanation: One longest palindrome is "cc", of length 2.
Note that "ll" is another longest palindrome that can be created, and so is "xx".

*/

const maxPalindrome = (words) => {
  let map = new Map();
  let count = 0;
  let length = words.length;

  for (let i = 0; i < length; i++) {
    let word = words[i];

    let reversed = word[1] + word[0];

    if (map.get(reversed) > 0) {
      count += 4;
      map.set(reversed, map.get(reversed) - 1);
    } else {
      map.set(word, (map.get(word) || 0) + 1);
    }
  }

  for (let [word, c] of map.entries()) {
    if (word[0] === word[1] && c > 0) {
      count += 2;
      break;
    }
  }

  return count;
};

console.log(maxPalindrome(["lc", "cl", "gg"]));
console.log(maxPalindrome(["ab", "ty", "yt", "lc", "cl", "ab"]));
console.log(maxPalindrome(["cc", "ll", "xx"]));
