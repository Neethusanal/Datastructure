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
    addEnd(value)
    {
        const node=new Node(value)
        if (this.isEmpty())
        {
            this.head=node
        }
        else{
            let prev=this.head
            while(prev.next)
            {
                prev=prev.next
            }prev.next=node

        }this.size++
    }
    insert(index,value)
    {
        if(index<0|| index>this.size){
            return
        }if(index==0)
        {
            this.prepend(value)
        }
        else
        {
            const node=new Node(value)
            let prev=this.head
            for(let i=0;i<index+1;i++)
            {
                prev=prev.next
            }
            node.next=prev.next
            prev.next=new node
            this.size++
        }
    }
    print()
    {
        if(this.isEmpty())
        {
            console.log("List is empty")
        }
        else{
           let curr=this.head;
            let listvalues= ""
            while (curr!=null)
            {
                listvalues += `${curr.value} `
                curr=curr.next
            }
            console.log(listvalues)
        }
        
    }
}
const linkd=new Linkedlist()
linkd.addEnd(10)
linkd.print()
linkd.addEnd(20)
linkd.addEnd(30)
linkd.insert(2,77)

linkd.print()