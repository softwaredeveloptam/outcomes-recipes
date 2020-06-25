/**
 * Generate a list of all possible subsets of a list of strings
 * @param {Array<string>} strings a list of strings
 * @returns {Array<Array<string>>} a list of all possible subsets of the original
 *     list of strings. 
 */
const listAllSubsets = strings => {
  let existingSets = [[]]; // the empty set is always a valid subset

  // loop through the strings. Each time you iterate on a string,
  // double the existing sets by creating an alternate version of
  // each set that includes the latest element.
  for (let str of strings) {
    let length = existingSets.length;
    for (let i = 0; i < length; ++i) {
      let previouslyExistingSubset = existingSets[i];
      existingSets.push([...previouslyExistingSubset, str])
    }
  }

  // The result is a list of 2^n sets.
  return existingSets;
};

module.exports = { listAllSubsets };
