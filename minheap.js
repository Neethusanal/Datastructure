
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
            while (index > 0 && this.heap[parent] > this.heap[index]) {
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
      let smallest = index;
      if (left < this.heap.length && this.heap[left] < this.heap[smallest]) {
        smallest = left;
      }
      if (right < this.heap.length && this.heap[right] < this.heap[smallest]) {
        smallest = right;
      }
      if (smallest !== index) {
        const temp = this.heap[index];
        this.heap[index] = this.heap[smallest];
        this.heap[smallest] = temp;
        this._heapifyDown(smallest);
      }
    }
  }


const minHeap = new Heap();

minHeap.insert(4);
minHeap.insert(3);
minHeap.insert(2);
minHeap.insert(1);

console.log(minHeap.heap); // [1, 3, 4, 7]

minHeap.remove();

console.log(minHeap.heap); // [3, 4, 7]
