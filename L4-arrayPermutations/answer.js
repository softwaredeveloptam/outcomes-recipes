/**
 * Generates a list of all permutations of the given array.
 * @param {Array<any>} arr array to find permutations of
 * @returns {Array<Array<any>>} a list of all permutations of the input array
 */
const arrayPermutations = (arr) => {
  if (!Array.isArray(arr)) {
    throw new Error("Invalid input");
  }

  let isUsed = arr.map(() => false);
  let output = [];
  let builder = [];

  let permuteImpl = () => {
    for (let i = 0; i < arr.length; ++i) {
      if (!isUsed[i]) {
        builder.push(arr[i]);
        if (builder.length === arr.length) {
          output.push(builder.slice(0));
        } else {
          isUsed[i] = true;
          permuteImpl();
          isUsed[i] = false;
        }
        builder.pop();
      }
    }
  };

  permuteImpl();

  return output;
};

module.exports = { arrayPermutations };
