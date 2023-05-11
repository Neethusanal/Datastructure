function heapSort(arr) {
    let n = arr.length;
  
    // Build a max-heap from the array
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
      heapify(arr, n, i);
    }
  
    // Extract elements from the heap one by one
    for (let i = n - 1; i > 0; i--) {
      // Move current root to the end
      let temp = arr[0];
      arr[0] = arr[i];
      arr[i] = temp;
  
      // Heapify the reduced heap
      heapify(arr, i, 0);
    }
    
    return arr;
  }
  
  function heapify(arr, n, i) {
    let largest = i; // Initialize largest as root
    let left = 2 * i + 1;
    let right = 2 * i + 2;
  
    // If left child is larger than root
    if (left < n && arr[left] > arr[largest]) {
      largest = left;
    }
  
    // If right child is larger than largest so far
    if (right < n && arr[right] > arr[largest]) {
      largest = right;
    }
  
    // If largest is not root
    if (largest !== i) {
      let temp = arr[i];
      arr[i] = arr[largest];
      arr[largest] = temp;
  
      // Recursively heapify the affected sub-tree
      heapify(arr, n, largest);
    }
  }
  let arr = [12, 11, 13, 5, 6, 7];
let sortedArr = heapSort(arr);
console.log(sortedArr); // Output: [5, 6, 7, 11, 12, 13]