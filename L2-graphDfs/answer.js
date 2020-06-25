const solveGraph = (start, end, arcs) => {
  const graph = {};
  arcs.forEach(arc => {
    [arc.start, arc.end].forEach(node => {
      if (!graph[node]) graph[node] = { visited: false, arcs: [] };
    });
    graph[arc.start].arcs.push(arc.end);
  });

  const solveGraphImpl = (current, target) => {
    // did we find it?
    if (current === target) return true;
 
    // mark the node as visited
    graph[current].visited = true;
 
    for (let destination of graph[current].arcs) {
        if (!graph[destination].visited) {
          if (solveGraphImpl(destination, target)) {
            return true;
          }
        }
    }
    return false; // not reached
  };

  return solveGraphImpl(start, end);
};

module.exports = {
  solveGraph,
};