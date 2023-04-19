function displayArray(arr, index) {
    // base case
    if (index === arr.length) {
      return;
    }
  
    // display current element
    console.log(arr[index]);
  
    // recursive case
    displayArray(arr, index + 1);
  }
  
  // example usage
  const myArray = [1, 2, 3, 4, 5];
  displayArray(myArray, 0);
  