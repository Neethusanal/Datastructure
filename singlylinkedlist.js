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
}
const list=new Linkedlist()
console.log("List is Empty? ",list.isEmpty())
console.log("List size" ,list.getSize())