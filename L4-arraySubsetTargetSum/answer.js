/**
 * Checks whether the list ofnumbers has a subset that equals a target sum
 * @param {Array<number>} nums a set of integers
 * @param {number} targetSum a target sum value
 * @returns {boolean} true if it's possible to add a subset of numbers to get the target sum 
 */
const hasSubsetSum = (nums, targetSum) => {
  let possibleSums = { "0": true };
  for (let num of nums) {
    for (let existingSum of Object.keys(possibleSums)) {
      let newPossibility = parseInt(existingSum) + num; // keys are always auto-converted to strings, so we use parseInt here to get the integer value.
      possibleSums[newPossibility] = true;
    }
  }

  return !!possibleSums[targetSum];
};

module.exports = { hasSubsetSum };
