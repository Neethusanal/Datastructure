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
        this.length++

    }
    addEnd(value)
    {   const node=new Node(value)
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
                if(current.next==null)
                {
                    this.tail=node
                } this.length++
                return
            }current=current.next
            i++
        }
    }
    // findmiddle()
    // { let fast=this.head
    //     let slow=this.head
    //     if(fast && fast.next)
    //     {
    //         slow=slow.next
    //         fast=fast.next.next
    //     }
    //     console.log(slow.value)
    // }


    remove(value)
    {
        if(!this.head)
        {
            return "linkedlist is empty"
        }
        if(this.head.value===value)
        {
            this.head=this.head.next
            if(this.head==null)
            {
                this.tail=null
            }
            this.size--
            return
        }
        const node=new Node(value)
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
                }
                currrent=current.next
        }

    }
    //works only for sorted linkedlist
    removeduuplicate()
    {
        if(this.head)
        {
            return
        }
        let current=this.head
        while(current.next)
        {
            if(current.value==current.next.value)
            {
                current.next=current.next.next
            }
            else
            {
                current=current.next
            }
        }
    }



    print()
    {
        const data=[]
        let current=this.head
        while(current)
        {
            data.push(current.value)
            current=current.next
        }
        console.log(data.join("->"))
    }
}
const list= new Linkedlist()
list.addFirst(99)
list.addFirst(88)
list.addFirst(55)
list.addEnd(55)
list.insert(44,3)
list.remove(88)

list.print()
list.removeduuplicate()
list.print()
//list.findmiddle()