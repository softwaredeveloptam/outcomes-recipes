/**
 * Checks to see if a number is present in a sorted array, using a binary search.
 * @param {Array<number>} arr the array to search (already sorted)
 * @param {number} findMe the number to search for
 * @returns {boolean} true if the number is in the array.
 */
const arrayBinarySearch = (arr, findMe) => {
  let helper = (start, end) => {
    let length = end - start;
    if (length === 0) return false;
    if (length === 1) return arr[start] === findMe;

    let mid = start + Math.floor(length / 2);
    if (arr[mid] === findMe) return true;
    if (arr[mid] < findMe) return helper(mid + 1, end);
    return helper(start, mid);
  };
  return helper(0, arr.length);
};

module.exports = { arrayBinarySearch };
