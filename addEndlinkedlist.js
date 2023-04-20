class Node{
    constructor(value)
    {
        this.value=value
        this.next=null;
    }
}
class Linkedlist{
    constructor()
    {
        this.head=null;
        this.tail=null;
    }
    addFirst(value)
    {
        const node =new Node(value)
        if(!this.head)
        {
            this.head=node
            this.tail=node
            return
        }
        node.next=this.head
        this.head=node
    }


    addEnd(value)
    {
        const node = new Node(value)
        if(!this.head)
        {
            this.head=node
            this.tail=node
            return
        }
        this.tail.next=node
        this.tail=node
    }

   
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

    const list=new Linkedlist()
    list.print();
    list.addFirst(99)
    list.addFirst(88)
    list.addEnd(111)
    
    list.print()
   
    list.print()

