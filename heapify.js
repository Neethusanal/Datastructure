class MaxHeap {
    constructor() {
      this.heap = [];
    }
  
    push(value) {
      this.heap.push(value);
      this.heapifyUp();
     
    }
    pop(){
  if(this.heap.length===0){
      return false
  }else{
      let maxValue=this.heap[0]
      let lastValue=this.heap.pop()
      if(this.heap.length>0){
          this.heap[0]=lastValue
          this.heapifyDown(0)
      }
     return maxValue
  }
      
     
    }
    
  
    heapifyUp() {
      let currentIndex = this.heap.length - 1;
      while (currentIndex > 0) {
        let parentIndex = Math.floor((currentIndex - 1) / 2);
        if (this.heap[parentIndex] >= this.heap[currentIndex]) {
          break;
        }
        [this.heap[parentIndex], this.heap[currentIndex]] = [
          this.heap[currentIndex],
          this.heap[parentIndex],
        ];
        currentIndex = parentIndex;
      }
    }
    heapifyDown(index) {
      let childIndex = 2 * index + 1;
      while (childIndex < this.heap.length) {
        if (
          childIndex + 1 < this.heap.length &&
          this.heap[childIndex + 1] > this.heap[childIndex]
        ) {
          childIndex += 1;
        }
        if (this.heap[index] >= this.heap[childIndex]) break;
  
        [this.heap[index], this.heap[childIndex]] = [this.heap[childIndex], this.heap[index]];
        index = childIndex;
        childIndex = 2 * index + 1;
      }
    }
  }
  
  const maxHeap = new MaxHeap();
  maxHeap.push(10);
  maxHeap.push(5);
  maxHeap.push(17);
  maxHeap.push(8);
  maxHeap.push(25);
  console.log(maxHeap.heap);
  console.log(maxHeap.pop()); 
  console.log(maxHeap.pop());
  console.log(maxHeap.heap);