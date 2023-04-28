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
        node.next = this.head;
        this.head = node;
        this.size++
     
    }
    addEnd(value)
    {const node=new Node(value)
        if(!this.head)
        {
            this.head=node
            this.tail=node
            return
       
        }
        this.tail.next=node
        this.tail=node
        this.length++
        
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
            if(i==index-1)
            {
               node.next=current.next
               current.next=node
               if(node.next==null)
               {
                this.tail=node
               }
               this.size++
               return
                
            }current=current.next
            i++
        }
    }

    

    
    print()
    {
        const data=[]
        let current=this.head
        while (current)
        {
            data.push(current.value)
            current=current.next
        }
        console.log(data.join("->"))
        console.log(this.size)
    }
    
    }
   


const list=new Linkedlist()
list.addFirst(10)
list.addEnd(20)
list.insert(22,2)
list.print()
