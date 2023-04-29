class queue{
    constructor()
    {
        this.items=[]
    }
     
    enqueue(element)
    {
        this.items.push(element)
    }
    dequeue()
    {
        return this.items.shift()
    }
    isEmpty()
    {
        return this.items.length==0
    }
    peek()
    {   if(this.items){
        return this.items[0]
    }
    return null
      
    }
    size()
    {
        return this.items.length
    }
    print()
    {
        console.log(this.items.toString())
    }



}
const q=new queue()
console.log(q.isEmpty())
q.enqueue(10)
q.enqueue(20)
q.enqueue(30)
console.log(q.size())
console.log(q.isEmpty())
console.log(q.peek())
console.log(q.dequeue())