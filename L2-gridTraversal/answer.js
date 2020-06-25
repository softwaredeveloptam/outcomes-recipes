/**
 * Traverses a grid and returns the elements in the grid according to the order 
 * passed in. The orders supported are breadth first, depth first, and scan.
 * @param {Array<Array<any>>} grid a n by m grid
 * @param {string} order The order to traverse the grid. The values for this string
 *     can be "BREADTH-FIRST", "DEPTH-FIRST", or "SCAN"
 * @returns {Array<any>} the list of grid cell valuesin the order they were traversed.
 */
const gridTraversal = (grid, order) => {
  let dim1 = grid.length;
  let dim2 = grid[0].length;
  let output = [];
  let visited = {};

  let getNeighbors = (x, y) => {
    return [
      [x - 1, y],
      [x + 1, y],
      [x, y - 1],
      [x, y + 1],
    ].filter(([x1, y1]) => x1 >= 0 && y1 >= 0 && x1 < dim1 && y1 < dim2);
  };

  switch (order) {
    case "SCAN":
      for (let i = 0; i < dim1; ++i) {
        for (let j = 0; j < dim2; ++j) {
          output.push(grid[i][j]);
        }
      }
      break;

    case "DEPTH-FIRST":
      let dft = (i, j) => {
        let key = i + ',' + j;
        if (visited[key]) return;
        visited[key] = true;
        output.push(grid[i][j]);
        for (let [newX, newY] of getNeighbors(i, j)) {
          dft(newX, newY);
        }
      };
      dft(0, 0);
      break;

    case "BREADTH-FIRST":
      let bft = (startX, startY) => {
        let queue = [];
        let visited = {};

        let processCellIfNotVisitedYet = (x, y) => {
          let key = x + ',' + y;
          if (visited[key]) return;
          output.push(grid[x][y]);
          queue.push([x, y]);
          visited[key] = true;
        };

        processCellIfNotVisitedYet(startX, startY);

        for (let i = 0; i < queue.length; ++i) {
          let [currentX, currentY] = queue[i];
          for (let [newX, newY] of getNeighbors(currentX, currentY)) {
            processCellIfNotVisitedYet(newX, newY);
          }
        }
      };

      bft(0, 0);
      break;
  }
  return output;
};

module.exports = { gridTraversal };
