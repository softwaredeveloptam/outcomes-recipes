/**
 * Returns true if the given value is a palindrome.
 * @param {string} value string to check
 * @returns {boolean} true if the given string is a palindrome
 */
const isPalindrome = (value) => {
  if (typeof value !== 'string') {
    throw new Error("Invalid input");
  }

  // Empty strings and single-character strings are identical when reversed.
  if (value.length < 2) return true;

  let left = 0;
  let right = value.length - 1;
  
  while (left < right) {
    if (value.charAt(left) !== value.charAt(right)) {
      return false;
    }
    left++;
    right--;
  }
  return true;
};

module.exports = { isPalindrome };
