# Longest Increasing Subsequence

A sub-sequence is like a sub-set, except when order matters.
For example, `[2, 3, 5]` is a subsequence of `[1, 2, 3, 4, 5]` because the latter
contains the former, in order.

Write a function called `longestCommonSubsequence` that takes in two arrays of strings.

Find the longest possible array that is a valid subsequence of both input arrays.

## Examples:
```
  longestCommonSubsequence(
    ["A", "B", "D", "E", "G", "H"],
    ["A", "E", "B", "D", "C", "G", "H"]
  ) --> ["A", "B", "D", "G", "H"]
```

`longestCommonSubsequence(["A", "B", "C"], ["A", "C", "D"]) --> ["A", "D"]`
