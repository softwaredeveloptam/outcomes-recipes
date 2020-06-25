# Breadth First Search on a Graph

Suppose you are provided a directed graph as a list of node connections.

Write a function called `solveGraph()` that takes in the list of connections,
a starting node, and an ending node, and returns a list of node names that
represent the *shortest* path.

## Example:
```
let arcs = [
  { start: "A", end: "B" },
  { start: "A", end: "C" },
  { start: "C", end: "D" },
  { start: "B": end: "E" },
  { start: "E": end: "F" },
  { start: "C": end: "F" },
];
```

This graph would look something like this:

```
          A --> B --> E
          |           |
          v           v
  D <---- C --------> F 
```

As you can see, there are multiple paths that go from **A** to **F**.

If there is no valid path or if the start or end nodes do not exist, return `null`.
