class Node{
    constructor(value)
    {
        this.value=value
        this.next=null
    }
}
class linkedlist{
    constructor()
    {
        this.head=null
        this.size=0
    }
    isEmpty()
    {
        return this.size==0
    }
    getsize()
    {
        return this.size
    }
    addFirst(value)
    {
        const node=new Node(value)
        if(this.isEmpty())
        {
            this.head=node
            
        }
        else
        {
            node.next=this.head
            this.head=node;

        }this.size++
    }
    print()
    {
        if(this.isEmpty())
        {
            console.log("list is empty")
        }else{
            let arr=[]
            let curr=this.head
            while(curr)
            {
                arr.push(curr.value)
                curr=curr.next
            }
            console.log(arr.join(" -> "));
        }
    }
    addLast(value)
    {    const node=new Node(value)
        if(this.isEmpty())
        {
            this.head=node
        }
        else{
            let curr=this.head
            while(curr.next)
            {
                curr=curr.next
            }
            curr.next=node
        }
    }
    insert(value,index)
    {
        const node=new Node(value)
        if(index==0)
        {
            this.addFirst(value)
        }
        else if(index>this.size)
        {
            this.addLast(value)
        }
      
        else{
            let curr=this.head
            let i=0;
            while(curr)
            {
               if(i==index-1)
               {
                node.next=curr.next
                curr.next=node
            
                return
               }       
            }curr=curr.next
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
            this.head=this.head.next
            
            return
        }
        let curr=this.head
        while(curr.next)
        {
            if(curr.next.value==value)
            {
                curr.next=curr.next.next
                
            }
            curr=curr.next
            this.size--
            return
        }

    }
    removeEnd()
    {
       if(!this.head)
       {
        return "list is empty"
       }

       
        if(this.head.next==null)
        {
            this.head=null
        }
        else{
            let curr=this.head
            while(curr.next.next!==null)
            {
                curr=curr.next
            }
            curr.next=null
        }
       
       }
    }

const list=new linkedlist()
list.print()
list.addFirst(10)
list.addFirst(30)
list.print()
list.addLast(90)
list.print()
list.insert(44,4)
list.print()
//  list.remove(10)
list.removeEnd()
list.print()
