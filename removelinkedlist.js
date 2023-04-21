class Node{
    constructor(value)
    {
        this.value=value
        this.next=null
    }
}
class Linkedlist{
    constructor(){
        this.head=null
        this.tail=null
        this.size=0
    }
    addFirst(value)
    {   const node=new Node(value)
        if(!this.head)
        {
            this.head=node;
            this.tail=node
            return;
        } node.next = this.head;
        this.head = node;
        this.size++
       
    }
    addEnd(value)
    {const node=new Node(value)
        if(!this.head)
        {
            this.head=node
            this.tail=null
        }
            this.tail.next=node
            this.tail=node
            this.size++
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
                if(i==index-1)
                {
                    node.next=current.next
                    current.next=node
                    if(node.next==null)
                    {
                        this.tail=node
                    } this.size++
                    return
                   
                }current=current.next
                i++
            }


        }

        remove(value)
        {
            if(!this.head)
            {
                return
            }
            if(this.head.value==value)
            {
                this.head= this.head.next
                if(this.head==null)
                {
                    this.tail=null
                } 
                this.size--
                return
            }
            let current=this.head
            while(current.next)
            {
                if(current.next.value==value)
                {
                    current.next=current.next.next
                    if(current.next==null)
                    {
                        this.tail=current
                    }
                    this.size--
                    return
                }current=current.next
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
    }
}
const list=new Linkedlist()
list.addFirst(100)
list.addFirst(500)
list.addFirst(10)
list.addEnd(333)
list.insert(442,1)
list.insert(444,2)
list.print()
list.remove(442)
list.print()