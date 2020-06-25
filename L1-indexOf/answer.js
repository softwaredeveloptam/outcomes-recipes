/*
  "Re-implement string.indexOf()"

  Write a function called stringIndexOf that takes in two strings.
  If the first string contains the second string as a contiguous substring,
  return the index where it occurs.

  If the string cannot be found, return -1.

  If the string occurs multiple times, return the location of the first occurence.

  Since this is a logic exercise, you may NOT use the following built-in 
  methods as part of your implementation:
  * string.indexOf()
  * string.substr()
  * string.substring()
  * regular expressions

  Examples:
    stringIndexOf("abc", "ab") --> 0
    stringIndexOf("abc", "bc") --> 1
    stringIndexOf("abc", "") --> 0
    stringIndexOf("", "abc") --> -1
    stringIndexOf("abc", "abcd") --> -1
  
  All strings are valid input.

  If an input is invalid, throw an Error.
*/

/**
 * Find the location of the given needle string within the haystack string.
 * If the string can't be found, return -1.
 * @param {string} haystack string to search through
 * @param {string} needle string to find
 * @returns {number} index of the first occurrence of the needle or -1
 */
const stringIndexOf = (haystack, needle) => {
  if (typeof haystack !== 'string' || typeof needle !== 'string') {
    throw new Error("Invalid input");
  }

  if (haystack.length < needle.length) return -1;
  if (needle.length === 0) return 0;
  if (haystack === needle) return 0;

  let maxPossibleIndex = haystack.length - needle.length;
  for (let i = 0; i <= maxPossibleIndex; ++i) {
    
    let found = true;
    for (let j = 0; j < needle.length; ++j) {
      if (needle.charAt(j) !== haystack.charAt(i + j)) {
        found = false;
        break;
      }
    }

    if (found) {
      return i;
    }
  }

  return -1;
};

module.exports = { stringIndexOf };
