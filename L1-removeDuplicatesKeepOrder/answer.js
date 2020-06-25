/**
 * Creates a copy of an array with duplicate values removed.
 * @param {Array<any>} arr array to copy
 * @returns {Array<any>} version of the array with duplicates removed.
 */
const removeDuplicates = arr => {
  validateInput(arr);

  let duplicateCheck = {};
  let output = [];
  for (let item of arr) {
    // All dictionary keys are canonicalized into strings. For 
    // example, 42 and "42" get treated as the same value. Therefore
    // we must disambiguate the original type. Using a prefix of the type
    // (or, alternatively, using JSON.stringify(item)) will prevent these
    // sorts of erroneous collisions.
    let key = typeof item + ':' + item;
    if (duplicateCheck[key] === undefined) {
      output.push(item);
      duplicateCheck[key] = true;
    }
  }
  return output;
};

const validateInput = arr => {
  if (!Array.isArray(arr)) throw new Error("Input must be an array");
  arr.forEach(item => {
    switch (typeof item) {
      case 'number':
      case 'string':
      case 'boolean':
        break; // OK!
      default:
        throw new Error("Input array can only contain numbers, strings, and booleans");
    }
  });
};

module.exports = {
  removeDuplicates,
};
