class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  function arrayToLinkedList(arr) {
    let head = null;
    let tail = null;
  
    for (let i = 0; i < arr.length; i++) {
      const newNode = new Node(arr[i]);
  
      if (head === null) {
        head = newNode;
        tail = newNode;
      } else {
        tail.next = newNode;
        tail = newNode;
      }
    }
  
    return head;
  }
  
  // Example usage:
  const arr = [1, 2, 3, 4, 5];
  const linkedList = arrayToLinkedList(arr);
  console.log(linkedList); // Node { value: 1, next: Node { value: 2, next: Node { value: 3, next: Node { value: 4, next: Node { value: 5, next: null } } } } } }
  