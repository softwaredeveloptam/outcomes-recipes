# Tree Traversal Orders

Write a function called traverseTree. This function that takes in
a binary tree and a string that will be one of the following 
values: `"PRE"`, `"POST"`, or `"IN"`.

You should return an array that contains all the values of all the
nodes of the tree. This array should be built in pre-order, post-order,
and in-order traversals, which correspond to the string passed in.

## Examples:
```
let tree = ...
              A
          /       \
        B          C
      /   \      /   \
     D     E    F     G
```

* `traverseTree(tree, 'PRE') --> [A, B, D, E, C, F, G]`
* `traverseTree(tree, 'POST') --> [D, E, B, F, G, C, A]`
* `traverseTree(tree, 'IN') --> [D, B, E, A, F, C, G]`

Remember that a tree may not necessarily be balanced.
