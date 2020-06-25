# Parse an integer

Write a function called `atoi`. This function should take in a string
that depicts an integer and should return that integer value.

## Examples:
* `atoi("10") --> 10`
* `atoi("289") --> 289`
* `atoi("-30") --> -30`

If the string does not contain a valid integer, return `null`.
* `atoi("8.2") --> null`
* `atoi("eleven") --> null`

## Bonus objective:
return `null` for values that exceed the maximum
size of integers that JavaScript is capable of handling.

Because this is a logical exercise, you may not use `parseInt()` in
your solution.

### Fun Fact:
> "atoi" is the name of the built-in function in C that does 
> the same thing as `parseInt()` and stands for "ASCII to Integer".
> Occasionally, older programmers will refer to any function that
> accomplishes this task as "atoi" regardless of what its actual
> name is.
