/**
 * Find the longest common subsequence of two lists of strings.
 * @param {Array<string>} arr1 The first array of strings
 * @param {Array<string>} arr2 The second array of strings.
 * @returns {Array<string>} the longest common subsequence of arr1 and arr2.
 */
const longestCommonSubsequence = (arr1, arr2) => {
  
  // This is the Levenshtein Algorithm, aka text-diffing
  // Create a grid whose width is the length of one sequence and height
  // is the length of the other sequence (+1 for each dimension).
  // Imagine having two pointers starting at the beginning of each sequence.
  // When the pointers are pointing at the same item, you can advance them 
  // both. If they're pointing at different items, then you must choose which
  // to advance, but either way, you give yourself 1 penalty point.
  // The maximum number of penalty points is the sum of the lengths of the two
  // sequences (imagine if you move the pointer forward for one sequence and then
  // move the pointer forward for the other sequence). The minimum number of
  // penalty points is 0 (imagine having two identical sequences and you can move
  // both of the pointers in lock-step).
  // The goal is to create a path that goes from the top left corner of the grid
  // to the bottom right corner of the grid. Moving to the right represents moving
  // the pointer for one string and moving down a cell represents moving the other
  // pointer. In each cell of the grid, note that cumulative sum of penalty points.
  // Once you get to the bottom right corner, trace backwards to see which path
  // gave the fewest possible penalty points.
  let len1 = arr1.length;
  let len2 = arr2.length;

  if (len1 === 0 || len2 === 0) return [];

  let grid = makeGrid(len1 + 1, len2 + 1);
  let source = makeGrid(len1 + 1, len2 + 1);

  for (let x = 0; x <= len1; ++x) {
    grid[x][0] = x;
  }

  for (let y = 0; y <= len2; ++y) {
    grid[0][y] = y;
  }

  for (let y = 1; y <= len2; ++y) {
    let c2 = arr2[y - 1];
    for (let x = 1; x <= len1; ++x) {
      let c1 = arr1[x - 1];
      if (c1 === c2) {
        grid[x][y] = grid[x - 1][y - 1];
        source[x][y] = 'aboveLeft';
      } else {
        if (grid[x - 1][y] < grid[x][y - 1]) {
          source[x][y] = 'left';
          grid[x][y] = grid[x - 1][y] + 1;
        } else {
          source[x][y] = 'above';
          grid[x][y] = grid[x][y - 1] + 1;
        }
      }
    }
  }

  let x = len1;
  let y = len2;
  let output = [];

  while (x > 0 && y > 0) {
    switch (source[x][y]) {
      case 'aboveLeft':
        output.push(arr1[x - 1]);
        x--;
        y--;
        break;

      case 'above':
        y--;
        break;
      
      case 'left':
        x--;
        break;
    }
  }

  return output.reverse();
};

const makeGrid = (width, height) => {
  let cols = [];
  while (width --> 0) {
    let col = [];
    for (let i = 0; i < height; ++i) {
      col.push(0);
    }
    cols.push(col);
  }
  return cols;
};

module.exports = { longestCommonSubsequence };
