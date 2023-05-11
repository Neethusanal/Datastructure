class Heap {
    constructor() {
      this.heap = [];
    }
  
    buildHeap(arr) {
      this.heap = arr;
      for (let i = Math.floor((this.heap.length-2)/2); i >= 0; i--) {
        this._heapifyDown(i);
      }
    }
  
    insert(value) {
      this.heap.push(value);
      this._heapifyUp(this.heap.length-1);
    }
  
    remove() {
      if (this.heap.length <= 0) {
        return null;
      }
      if (this.heap.length === 1) {
        return this.heap.pop();
      }
      const root = this.heap[0];
      this.heap[0] = this.heap.pop();
      this._heapifyDown(0);
      return root;
    }
  
    _heapifyUp(index) {
      let parent = Math.floor((index-1)/2);
      while (index > 0 && this.heap[parent] < this.heap[index]) {
        const temp = this.heap[parent];
        this.heap[parent] = this.heap[index];
        this.heap[index] = temp;
        index = parent;
        parent = Math.floor((index-1)/2);
      }
    }
  
    _heapifyDown(index) {
      let left = 2*index + 1;
      let right = 2*index + 2;
      let largest = index;
      if (left < this.heap.length && this.heap[left] > this.heap[largest]) {
        largest = left;
      }
      if (right < this.heap.length && this.heap[right] > this.heap[largest]) {
        largest = right;
      }
      if (largest !== index) {
        const temp = this.heap[index];
        this.heap[index] = this.heap[largest];
        this.heap[largest] = temp;
        this._heapifyDown(largest);
      }
    }
  }
  const maxHeap = new Heap();

maxHeap.insert(4);
maxHeap.insert(1);
maxHeap.insert(7);
maxHeap.insert(3);

console.log(maxHeap.heap); // [7, 4, 1, 3]


maxHeap.remove();

console.log(maxHeap.heap); // [4, 3, 1]
