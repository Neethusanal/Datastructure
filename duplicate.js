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
     {
        const node=new Node(value)
        if(!this.head)
        {
            this.head=node
            this.tail=node
            return
        }
        node.next=this.head
        this.head=node
        this.size++
       
     }
     addEnd(value)
     {  const node=new Node(value)
        if(!this.head)
        {
            this.head=node
            this.tail=node
        }
        this.tail.next=node
        this.tail=node
        this.size++
        
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
            if(i===index-1)
            {
                node.next=current.next
                current.next=node
                if(current.next==null)
                {
                    this.tail=node

                }
                this.size++
                return
            } current=current.next
                i++
        }
     }
     remove(value)
     {
        if(!this.head)
        {
            return "no elements in linkedlist"
        }
        if(this.head.value==value)
        {
            this.head=this.head.next
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
            } current=current.next
        }

     }
     find_duplicates() {
        const duplicates = []; // Create an empty array to hold the duplicate values
        let current = this.head; // Start at the beginning of the linked list
      
        while (current !== null) { // Iterate through the linked list
          if (duplicates.includes(current.value)) { // If the current value is already in the duplicates array
            console.log("Duplicate found:", current.value);
             // Print the duplicate value
          } else { // If the current value is not yet in the duplicates array
            duplicates.push(current.value); // Add it to the duplicates array
          }
          current = current.next; // Move to the next node in the linked list
        }
      }

      printMiddle() {
        let slow = this.head;
        let fast = this.head;
    
        while (fast && fast.next) {
          slow = slow.next;
          fast = fast.next.next;
        }
    
        console.log("Middle element:", slow.value);
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
        console.log(data.join ("->"))
        console.log(this.size)
     }
    }
const list=new Linkedlist()
list.addFirst(10)
list.addFirst(20)
list.addFirst(20)
list.addFirst(33)

list.insert(55,2)
list.print()
// list.remove(33)
list.find_duplicates()
list.print()
list.printMiddle()
