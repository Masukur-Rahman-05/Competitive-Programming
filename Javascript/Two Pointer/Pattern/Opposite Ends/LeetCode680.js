/*
Given a string s, return true if the s can be palindrome after deleting at most one character from it.

 

Example 1:

Input: s = "aba"
Output: true

Example 2:

Input: s = "abca"
Output: true
Explanation: You could delete the character 'c'.

Example 3:

Input: s = "abc"
Output: false

 */

const CanBePalindrome = (s) => {
  let left = 0;
  let right = s.length - 1;

  const isPalindrome = (s, left, right) => {
    while (left < right) {
      if (s[left] !== s[right]) return false;

      left++;
      right--;
    }

    return true;
  };

  while (left < right) {
    if (s[left] !== s[right]) {
      return (
        isPalindrome(s, left + 1, right) || isPalindrome(s, left, right - 1)
      );
    }

    left++;
    right--;
  }

  return true;
};

console.log(CanBePalindrome("abca"));
console.log(CanBePalindrome("aba"));
console.log(CanBePalindrome("abc"));
