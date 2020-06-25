# Remove Duplicates in an Array

Write a function called removeDuplicates that takes in an array of 
primitives (string, number, etc) and returns a new array that contains only unique values.

The output should include all the elements in the same order as their first
occurrence. For example, if the input is `[5, 7, 4, 4, 7, 6, 7, 4]`, the output
will be `[5, 7, 4, 6]` which removes the latter duplicate instances of 7's and 4's.

## Examples:
* `removeDuplicates([4, 5, 6, 5, 6, 7, 6, 7, 8]) --> [4, 5, 6, 7, 8]`
* `removeDuplicates(['a', 'a', 'b', 'b', 'c', 'c']) --> ['a', 'b', 'c']`
* `removeDuplicates([]) --> []`
* `removeDuplicates([])`

Your solution must run in **O(n)** (linear) time. Do not modify the original input.

## Bonus challenge - mixed types:
* `removeDuplicates([1, "1", 2, "2", 3, "3"]) --> [1, "1", 2, "2", 3, "3"]`
