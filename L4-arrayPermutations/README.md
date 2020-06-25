# Find All Permutations of an Array

Write a function called `arrayPermutations` that takes in an array.

This function will return an array containing all possible
permutations (orderings) of the array.

If the array has 3 items, this means the output will be an 
array with 6 items in it. Each of those 6 items are arrays
of the same original items but in different unique orders.

## Examples:
`arrayPermutations([1]) --> [[1]]`
`arrayPermutations([1, 2]) --> [[1, 2], [2, 1]]`
```
arrayPermutations([1, 2, 3]) --> [
  [1, 2, 3],
  [1, 3, 2],
  [2, 1, 3],
  [2, 3, 1],
  [3, 1, 2],
  [3, 2, 1]
]
```

If the original length of the array is *n*, then the output array
will, if done correctly, have a length of *n!* (n factorial).

Nested arrays are treated as opaque elements (i.e. don't recurse):
```
arrayPermutations([[1, 2, 3], [4, 5, 6]]) --> [
  [[1, 2, 3], [4, 5, 6]],
  [[4, 5, 6], [1, 2, 3]]
]
```

All arrays are valid input.

If an input is invalid, throw an Error.
