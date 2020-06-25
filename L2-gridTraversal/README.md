# Grid Traversals

A two-dimensional grid is often represented in code as an array of 
arrays where all the inner arrays are of the same length.

In many ways a grid is just another type of graph where each cell is a 
graph node and the neighbors of each cell are mathematically dictated 
as the coordinates that are off by one in each direction.

Therefore, not only can we use depth-first and breadth-first traversals 
on them in much the way we do for graphs and trees, but because we know 
where all the nodes are and are able to access them arbitrarily, we can 
scan through them (i.e. start from one corner and just loop through each 
row, one by one)

Write a function called `gridTraversal` that takes in both a grid and a 
string. The string will be an instruction for what kind of grid traversal 
should be performed on the grid. The values can be any of the following:

* `SCAN` --> scan from left to right, top to bottom (since the words "top", "left", etc are arbitrary spatial concepts, let's consider the outer array to be vertically oriented and the inner arrays horizontally oriented.
* `DEPTH-FIRST` --> traverse the grid in a depth-first fashion.
* `BREADTH-FIRST` --> traverse the grid in a breadth-first fashion.

As you step through each cell in the traversal, add its value to an array 
and return that array.

## Example:

```
gridTraversal([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
], "BREADTH-FIRST");
```

This will yield the array `[1, 4, 2, 7, 5, 3, 8, 6, 9]` OR 
`[1, 2, 4, 3, 5, 7, 6, 8, 9]` depending on how you loop through each 
cell's neighbor when enqueuing nodes.

