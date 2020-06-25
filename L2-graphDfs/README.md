# Graph DFS

Return true if the end node can be reached from the start node, using 0 or more arcs.
Return false if it is not possible.

The graph is defined by a list of arcs, where each arc is an object that has two properties, start and end, representing the start and end nodes, respectively.
Each arc is unidirectional, in other words it goes from a start node to an end node, and not the other way around.

Note that the `solveGraph()` method doesn't take a list of nodes as input: for simplicity's sake,
let's assume that all nodes present in arcs are valid.
However, the start or end node may not be in arcs.

solveGraph(start, end, arcs);
start: String
end: String
arcs: Array: [{ 'start' : String, 'end' : String }, ...]

## Examples:
const arcs = [{ start : "a", end : "b" }, { start : "a", end : "a"}];

solveGraph("a", "b", arcs);
=> true, because "b" can be reached from "a"
solveGraph("a", "c", arcs);
=> false, because "c" can never be reached from "a"
