class Node{
    constructor(value)
    {
        this.value=value;
        this.next=null
    }
}
class Linkedlist{
    constructor(){
        this.head=null
        this.size=0
    }
    isEmpty()
    {
        return this.size==0
    }
    getSize()
    {
        return this.size
    }

    addData(value)
    {
        const node=new Node(value)
        if(this.isEmpty())
        {
            this.head=node
        }
        else{
            node.next=this.head
            this.head=node
        }
        this.size++
    }
    print() {
        if (this.isEmpty()) {
          console.log("List is empty");
        } else {
          let curr = this.head;
          let listvalues = "";
          while (curr != null) {
            listvalues += `${curr.value}`;
            curr = curr.next;
          }
          console.log(listvalues);
        }
      }
}
const list=new Linkedlist()
// console.log("List is Empty? ",list.isEmpty())
// console.log("List size" ,list.getSize())
list.print()
list. addData(100)
list.print()
list.addData(20)
list.addData(30)
list.print()
