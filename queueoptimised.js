class queue{
    constructor()
    {
        this.items={}
        this.rear=0
        this.front=0
    }
    enqueue(element)
    {
        this.items[this.rear]=element
        this.rear++
    }
    dequeue()
    {
        const items=this.items[this.front]
        delete this.items[this.front]
        this.front++
        return items
    }
    isEmpty()
    {
        return this.rear-this.front==0
    }
    peek()
    {
        return this.items[this.front]
    }

    size()
    {
    return this.rear-this.front
    }
    print()
    {
        console.log(this.items)
    }

    
}
const q=new queue()
console.log(q.isEmpty())
q.enqueue(90)
q.enqueue(80)
q.enqueue(77)
q.print()
console.log(q.size())
console.log(q.peek())
console.log(q.dequeue())
q.print()

