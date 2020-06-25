/**
 * Reverses an array in place
 * @param {Array<any>} arr array to reverse
 */
const reverseArray = arr => {
  validateInput(arr);

  let len = arr.length;
  let mid = Math.floor(len / 2);
  for (let i = 0; i < mid; ++i) {
    let t = arr[i];
    arr[i] = arr[len - i - 1];
    arr[len - i - 1] = t;
  }
  // Do not return anything. 
  // The original reference has been modified.
};

const validateInput = arr => {
  if (!Array.isArray(arr)) throw new Error("Input must be an array");
};

module.exports = { reverseArray };
