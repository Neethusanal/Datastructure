class Node{
    constructor(value)
    {
        this.value=value
        this.next=null

    }
    
}
class queue{
    constructor()
    {
        this.front=null
        this.rear=null
        this.size=0
    }
    isEmpty()
        {
            return this.front===null
        }
    getsize()
    {
        return this.size
    }
    enqueue(value)
    {
        const node=new Node(value)
        if(this.isEmpty())
        {
            this.front=node
            this.rear=node
        }
        else{
            this.rear.next =node 
            this.rear=node
        }this.size++
    }
    dequeue()
    {
        if(this.isEmpty())
        {
            return null
        }
        const value=this.front
        this.front=this.front.next
        if(this.front===null)
        {
            this.rear=null
        }
        this.size--
        return value
    }
    peek()
    {
        if(!this.front)
        {
            return null
        }
        return this.front.value
    }

    
    

}
const q = new queue();

q.enqueue(1);
q.enqueue(2);
q.enqueue(3);

console.log(q.peek()); // 1
console.log(q.dequeue()); // 1
console.log(q.getsize()); // 2

q.enqueue(4);
console.log(q.isEmpty()); // false

while (!q.isEmpty()) {
  console.log(q.dequeue()); // 2 3 4
}

console.log(q.isEmpty())