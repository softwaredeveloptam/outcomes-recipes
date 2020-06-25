# Is the Binary Tree Balanced?

Write a function called isBalancedTree that takes in the root node
of a binary tree and returns a boolean indicating whether or not the
binary tree is balanced.

## Examples:

```
let tree1 = ...
                A
            /       \
          B          C
        /   \      /   \
       D     E    F     G
```

```
isBalancedTree(tree1) --> true
```

```
let tree2 = ...
                A
            /       \
          B          C
        /   \          \
       D     E          G
```

```
isBalancedTree(tree2) --> false

isBalancedTree(null) -> true // an empty tree
```
