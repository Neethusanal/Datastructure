//Define the Node class
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
//Define the linkedlist class
class Linkedlist
 {
  constructor() {
    this.head = null;
    this.tail = null;
  }


// Add a node to the beginning of the list
addFirst(value)
{
  const node = new Node(value);
  if (!this.head) {
    this.head = node;
    this.tail = node;
    return;
  }
  node.next = this.head;
  this.head = node;
}

// Print the list to the console
print()
{
  const data = [];
  let current = this.head;
  while (current) {
    data.push(current.value);
    current = current.next;
  }
  console.log(data.join(" -> "));
}

 }
const list = new Linkedlist();
list.print();
list.addFirst(10)
list.addFirst(20)
list.addFirst(30)
list.addFirst(40)
list.print();
