/*
A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.

 

Example 1:

Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.

Example 2:

Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.

Example 3:

Input: s = " "
Output: true
Explanation: s is an empty string "" after removing non-alphanumeric characters.
Since an empty string reads the same forward and backward, it is a palindrome.

*/

const validPalindrome = (s) => {
  s = s.replace(/[^a-z0-9]/gi, "").toLowerCase();

  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    if (s[left] !== s[right]) return false;
    left++;
    right--;
  }

  return true;
};

console.log(validPalindrome("A man, a plan, a canal: Panama"));
console.log(validPalindrome("race a car"));
console.log(validPalindrome(" "));

//If we dont want to use Regex

/*
const s = "A man, a plan, a canal: Panama";
let result = "";

for (let i = 0; i < s.length; i++) {
  const c = s[i];
  const code = c.charCodeAt(0);

  // Check if it's a digit (0-9)
  const isDigit = code >= 48 && code <= 57;

  // Check if it's an uppercase letter (A-Z)
  const isUpper = code >= 65 && code <= 90;

  // Check if it's a lowercase letter (a-z)
  const isLower = code >= 97 && code <= 122;

  if (isDigit || isUpper || isLower) {
    result += c.toLowerCase();
  }
}

console.log(result);

*/
