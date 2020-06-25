# Re-implement string.indexOf()
### This was created during my time as a [Code Chrysalis](https://codechrysalis.io) Student

Write a function called `stringIndexOf` that takes in two strings.
If the first string contains the second string as a contiguous substring,
return the index where it occurs.

If the string cannot be found, return `-1`.

If the string occurs multiple times, return the location of the first occurence.

Since this is a logic exercise, you may NOT use the following built-in 
methods as part of your implementation:
* `string.indexOf()`
* `string.substr()`
* `string.substring()`
* regular expressions

## Examples:
* `stringIndexOf("abc", "ab") --> 0`
* `stringIndexOf("abc", "bc") --> 1`
* `stringIndexOf("abc", "") --> 0`
* `stringIndexOf("", "abc") --> -1`
* `stringIndexOf("abc", "abcd") --> -1`

All strings are valid input.

If an input is invalid, throw an Error.
