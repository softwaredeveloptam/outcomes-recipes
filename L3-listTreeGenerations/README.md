# List Tree Generations

Write a function called `listTreeGenerations`. This takes in a binary
tree and returns a list of each horizontal "slice" of the tree as a
separate array. The elements in each individual array should be in
the same order as they appear in that "generation" of the tree, left
to right.

## Examples:
```
  let tree = ...
              1
            /   \
          /       \
        2        "kitties"
      /  \       /   \
      4    4.2   5     6
      \          \
        7          8
```

`listTreeGenerations(tree) --> [[1], [2, "kitties"], [4, 4.2, 5, 6], [7, 8]]`
