/**
 * Finds the length of the longest increasing subsequence from the given numbers.
 * @param {Array<number>} nums a list of numbers
 * @returns {Array<number>} the longest increasing subsequence
 */
const findLongestSubsequence = nums => {

  // If the array is empty or has one element, then it's its own increasing subsequence. 
  if (nums.length <= 1) return nums.slice(0);

  // This list will track the best length of the subsequence that specifically ends at a
  // given index.
  let bestLengthOfSubSeqThatEndsHere = nums.map(() => 0);

  // what is the index of the previous element of the longest sub sequence that specifically
  // ends at this index.
  let prevElement = nums.map(() => -1);

  bestLengthOfSubSeqThatEndsHere[0] = 1;

  for (let i = 1; i < nums.length; ++i) {
    let num = nums[i];
    let bestLength = 1;
    let bestIndex = -1;
    for (let j = i - 1; j >= 0; --j) {
      if (nums[j] < num && bestLengthOfSubSeqThatEndsHere[j] + 1 > bestLength) {
        bestLength = bestLengthOfSubSeqThatEndsHere[j] + 1;
        bestIndex = j;
      }
    }
    bestLengthOfSubSeqThatEndsHere[i] = bestLength;
    prevElement[i] = bestIndex;
  }

  let bestLength = bestLengthOfSubSeqThatEndsHere[0];
  let subSeqIndex = 0;
  for (let i = 0; i < nums.length; ++i) {
    if (bestLengthOfSubSeqThatEndsHere[i] > bestLength) {
      bestLength = bestLengthOfSubSeqThatEndsHere[i];
      subSeqIndex = i;
    }
  }

  let output = [];
  while (subSeqIndex !== -1) {
    output.push(nums[subSeqIndex]);
    subSeqIndex = prevElement[subSeqIndex];
  }

  return output.reverse();
};

module.exports = { findLongestSubsequence };
