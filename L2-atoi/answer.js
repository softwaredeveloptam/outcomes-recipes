/**
 * Converts a string into an integer
 * @param {string} str a string that contains an integer
 * @returns {number?} an integer that corresponds to the input string or 
 *     null if no valid integer exists.
 */
const atoi = str => {
  validateInput(str);

  // check invalid combinations that don't contain invalid characters.
  if (str === '' || str === '-' || str === '-0') return null;

  let sign = 1;
  let startingIndex = 0;
  if (str.charAt(0) === '-') {
    sign = -1;
    startingIndex = 1;
  }

  let sum = 0;
  let zero = '0'.charCodeAt(0);
  for (let i = startingIndex; i < str.length; ++i) {
    let digit = str.charCodeAt(i) - zero;
    if (digit < 0 || digit > 9) return null;
    let prev = sum;
    sum = sum * 10 + digit;

    // If integer overflow clipping occurs, reversing the
    // previous equation will not produce the expected result.
    if ((sum - digit) / 10 !== prev) {
      return null;
    }
  }

  return sum * sign;
};

const validateInput = str => {
  if (typeof str !== 'string') throw new Error("Input must be a string.");
};

module.exports = { 
  atoi,
};
