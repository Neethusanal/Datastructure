class Node{
    constructor(value)
    {
        this.value=value
        this.next=null
    }
}
class Linkedlist{
    constructor()
    {
        this.head=null
        this.tail=null
        this.length=0
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
    print()
    {
        const data=[]
        let current = this.head
        while(current)
        {
            data.push(current.value)
            current=current.next
        }
        console.log(data .join("->"))
    }
}
const list= new Linkedlist()
list.addFirst(20)
list.addFirst(30)
list.addFirst(50)
list.addFirst(90)
list.print()
