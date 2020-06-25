# Binary Search on a Sorted Array

We often associate binary search with a tree. However, the process of binary search simply means that each step you perform cuts your data set in half. Therefore, a binary search can be performed on a sorted array using this principle. 

This is much like how you looked information up in a dictionary or phone book in the 90's...

* Open the book somewhere in the middle
* Look at an entry on the page
* Based on that entry, decide if the information you're looking for is in the first half of the book or the second half
* Ignore the other half
* Repeat this process with the remaining half of the book, until you've narrowed down your search to one page.

Write a function called `arrayBinarySearch`. This function will take in a *sorted* array and an integer. Return `true` or `false` for whether or not the number is in the array.

*Use binary search to do this!* Do **NOT** loop through the list and check every entry. 
