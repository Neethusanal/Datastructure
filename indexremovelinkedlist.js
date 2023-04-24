class Node{
    constructor(value)
    {
        this.value=value
        this.next=value
    }
}
class Linkedlist{
    constructor()
    {
        this.head=null
        this.tail=null
        this.size=0
    }

addFirst(value)
{   const node=new Node(value)
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
    const node=new Node(value)
    if(!this.head)
    {
        this.head=node
        this.tail=node
        
    }
    this.tail.next = node
    this.tail=node
    return
    
}
insert(value,index)
{
    if(index==0)
    {
        this.addFirst(value)
        return
    }
    const node=new Node(value)
    let current=this.head
    let i=0
    while(current)
    {
        if(i===index-1)
        {
            node.next=current.next
            current.next=node
            if(current.next==null)
            {
                this.tail=node
            }
            this.size++
            return
        }
        current=current.next
        i++
    }
}
removeIndex(index) {
    if (index < 0 || index >= this.size) {
      return;
    }
    if (index === 0) {
      this.head = this.head.next;
      if (!this.head) {
        this.tail = null;
      }
      this.size--;
      return;
    }
    let current = this.head;
    let i = 0;
    while (current.next) {
      if (i === index - 1) {
        current.next = current.next.next;
        if (!current.next) {
          this.tail = current;
        }
        this.size--;
        return;
      }
      current = current.next;
      i++;
    }
  }
  
print()
{
    let datas=[]
    let current=this.head
    while (current)
    {
        datas.push(current.value)
        current=current.next
    }
    console.log(datas .join("->"))
}


}
const list=new Linkedlist()
list.addFirst(22)
list.addFirst(33)
list.addEnd(66)
list.insert(77,2)
list.removeIndex(4)
list.print()