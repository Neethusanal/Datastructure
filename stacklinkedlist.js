class Node{
    constructor(value)
    {
        this.value=value
        this.next=null
    }
}
class stack{
    constructor()
    {
        this.top=null
        this.size=0
    }
    push(value)
    {
        const node=new Node(value)
        node.next=this.top
        this.top=node
        this.size++
    }
    pop()
    {
        if(this.top==null)
        {
            return null
        }
        const value=this.top.value
        this.top=this.top.next
        this.size--
        return value
    }
    peek()
    {
        if(this.top==null)
        {
            return null
        }
        return this.top.value
    }
    isEmpty()
    {
        if(this.top==null)
        {
            return true
        }
    }
    getsize()
    {
        return this.size
    }
    printmiddleelement(){
        let slow=this.top
        let fast=this.top

        while(fast &&fast.next)
        {
            slow=slow.next
            fast=fast.next.next
        }console.log("middle element",slow.value)
    }
}
let s = new stack();

console.log(s.isEmpty()); // true

s.push(10);
s.push(20);
s.push(30);


console.log(s.getsize()); // 3
console.log(s.peek()); // 30

// s.pop();

// console.log(s.getsize()); // 2
// console.log(s.peek()); // 20
s.printmiddleelement()
