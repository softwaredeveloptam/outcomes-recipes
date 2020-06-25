/**
 * Converts a number into a binary integer as a string
 * @param {number} num a number to convert to binary
 * @returns {string} a binary representation of the number
 */
const decimalToBinary = num => {
  validateInput(num);

  let output = [];
  while (num > 0) {
    
    // Nit: It is technically correct to use "% 2" and "/ 2" here.
    // Using bitwise functions emphasize the binary nature of the problem and
    // the bit shift operator has the advantage of only producing integers, and
    // so Math.floor is not needed here and is preferred for this problem.
    // For other base changes, % and / are more appropriate.
    let digit = num & 1;
    num = num >>> 1;

    output.push(digit + '');
  }
  
  if (output.length === 0) {
    output.push('0');
  }

  return output.reverse().join('');
};

const validateInput = num => {
  if (typeof num !== 'number' || isNaN(num) || num % 1 !== 0 || num < 0) {
    throw new Error("Input must be a valid positive integer.");
  }
};

module.exports = {
  decimalToBinary,
};
