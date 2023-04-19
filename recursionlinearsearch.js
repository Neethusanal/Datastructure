function recursiveLinearSearch(arr, x, index) {
    // Base case: element not found
    if (index >= arr.length) {
      return -1;
    }
    
    // Base case: element found
    if (arr[index] === x) {
      return index;
    }
    
    // Recursive case: search the next element
    return recursiveLinearSearch(arr, x, index + 1);
  }
  
  // Example usage:
  const arr = [1, 2, 3, 4, 5];
  const x = 3;
  const index = recursiveLinearSearch(arr, x, 0);
  console.log(index); // Output: 2
  