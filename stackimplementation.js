class stack{
    constructor()
    {
        this.item=[]
    }
    push(element)
    {
        this.item.push(element)
    }
    pop()
    {
        return this.item.pop()
    }
    peek()
    {
        return this.item[this.item.length-1]
    }
    isEmpty()
    {
        return this.item.length===0
    }
    size()
    {
        return this.item.length
    }
    print()
    {
        console.log(this.item.toString())
    }

}

const s=new stack()
console.log(s.isEmpty())
s.push(10)
s.push(20)
s.push(30)
console.log(s.size())
s.print()
console.log(s.pop())
console.log(s.peek())