# Is Palindrome?

Write a function that takes in a string and returns a boolean for
whether or not it is a palindrome.

A palindrome is a string that is identical to its reverse.

## Examples:
* `isPalindrome("abcba") --> true`
* `isPalindrome("aabbaa") --> true`
* `isPalindrome("ABCcba") --> false`
* `isPalindrome("hannah") --> true`
* `isPalindrome("hana") --> false`

Note that all the reversed characters must match, not just letters.
* `isPalindrome("Race Car") --> false`
* `isPalindrome("racecar") --> true`
* `isPalindrome("Hannah") --> false`
* `isPalindrome("A man, a plan, a canal, panama.") --> false`

Since this is a logic exercise, you may NOT use any built in reverse function
as part of your implementation.

All strings are valid input.

If an input is invalid, throw an Error.
