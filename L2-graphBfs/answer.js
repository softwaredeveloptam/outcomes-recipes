/**
 * Finds the shortest path from one given point to another in a graph.
 * @param {Array<object>} arcs a list of connections with a `start` and `end` field
 * @param {string} start the name of the starting node
 * @param {string} end the name of the ending node
 * @returns {Array<string>} the names of the nodes along the shortest path starting
 *     with start and ending with end
 */
const solveGraph = (arcs, start, end) => {

  // The ideal data structure is a lookup table that lists the connection for each
  // as an array. This lookup table also includes a boolean flag to indicate if the node
  // has already been queued and which node queued it first.
  let nodesById = {};
  for (let arc of arcs) {
    for (let id of [arc.start, arc.end]) {
      if (!nodesById[id]) {
        nodesById[id] = {
          neighbors: [],
          visited: false,
          breadcrumb: null,
        };
      }
    }
    nodesById[arc.start].neighbors.push(arc.end);
  }

  if (!nodesById[start] || !nodesById[end]) return null;

  let queue = [start];
  nodesById[start].visited = true;

  for (let i = 0; i < queue.length; ++i) {
    let currentId = queue[i];
    if (currentId === end) {
      // we found it. The breadcrumbs have been set all the way between start and end.
      break;
    }
    
    let current = nodesById[currentId];
    
    for (let neighborId of current.neighbors) {
      let neighbor = nodesById[neighborId];
      if (!neighbor.visited) {
        neighbor.visited = true;
        neighbor.breadcrumb = currentId;
        queue.push(neighborId);
      }
    }
  }

  // The end was never reached.
  if (!nodesById[end].visited) return null;

  // walk backwards starting from the end.
  let walker = end;
  let output = [];
  while (walker !== null) {
    output.push(walker);
    walker = nodesById[walker].breadcrumb;
  }

  // The list was built from finish to start. Reverse it.
  return output.reverse();
};

module.exports = { solveGraph };
