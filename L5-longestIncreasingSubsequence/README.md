# Longest Increasing Subsequence Problem

Write a function that takes a list of integers and returns the
longest subsequence of increasing integers.

A subsequence is a subset of an ordered list whose elements appear
in the same order as the original list.

## Examples:
`findLongestSubsequence([2, 3, 1, 4, 5]) --> [2, 3, 4, 5]` is the longest increasing subsequence `[1, 4, 5]` is also a valid increasing subsequence, but it is not the longest.

```
findLongestSubsequence([
  14, 10, 13, 5, 8, 3, 1, 11, 15, 9, 19, 17, 7, 6, 18, 2, 12, 20, 4, 16
]) --> [5, 8, 11, 15, 17, 18, 20]
```

You should aim for **O(n^2)** complexity.

It is possible to get **O(n log n)** complexity.

**O(2^n)** solutions will not work.
