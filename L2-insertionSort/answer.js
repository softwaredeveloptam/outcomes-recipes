
const insertionSort = (array) => {
  
  let validateInput = arr => {
    if (!Array.isArray(arr)) return false;
    for (let n of arr) {
      if (typeof n !== 'number' || isNaN(n)) return false;
    }
    return true;
  };
  
  if (!validateInput(array)) throw new Error("Invalid input. Must be an array of numbers.");
  
  if (array.length < 2) return;

  let swap = (i, j) => {
    let t = array[i];
    array[i] = array[j];
    array[j] = t;
  };

  // track the maximum size of the portion of the array that is sorted.
  // By default, when you consider the first number alone, that is a sorted sub-array
  let sortedLength = 1; 

  while (sortedLength < array.length) {
    
    // increase the length of the sorted portion by one. The item at the end
    // that just got introduced to the sorted portion, is possibly not sorted. 
    let unsortedItem = sortedLength;
    sortedLength++;

    while (unsortedItem > 0 && array[unsortedItem - 1] > array[unsortedItem]) {
      swap(unsortedItem, unsortedItem - 1);
      unsortedItem--;
    }
  }
};


module.exports = { insertionSort };
