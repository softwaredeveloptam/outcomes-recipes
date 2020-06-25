/**
 * Returns the most common character in the string
 * @param {string} str a string to search
 * @returns {string} a single character string
 */
const mostCommonChar = str => {
  
  if (str.length === 0) return null;

  let counts = {};
  let highestCount = 0;
  let highestChar = '';

  for (let i = 0; i < str.length; ++i) {
    let c = str.charAt(i);
    if (counts[c]) {
      counts[c]++;
    } else {
      counts[c] = 1;
    }

    if (counts[c] > highestCount) {
      highestCount = counts[c];
      highestChar = c;
    }
  }

  return highestChar;
};

module.exports = { mostCommonChar };
