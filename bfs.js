class Node{
    constructor(value)
    {
        this.value=value
        this.left=null
        this.right=null

    }
}
class BinarysearchTree
{
    constructor()
    {
        this.root=null
    }
    isEmpty()
    {
       return  this.root===null
    }
    insert(value)
    {
        const node=new Node(value)
        if(this.isEmpty())
        {
            this.root=node
        }
        else
        {
            this.insertNode(this.root,node)
        }
    }
    insertNode(root,node)
    {
        if(node.value<root.value)
        {
            if(root.left==null)
            {
                root.left=node
            }
            else{
                this.insertNode(root.left,node)
            }
        }
        else
        {
            if(root.right==null)
            {
                root.right=node
            }
            else
            {
                this.insertNode(root.right,node)
            }
        }

    }
    search(root,value)
    {
        if(!root)
        {
            return "no elements"
        }
        else
        {
            if(root.value==value)
            {
                return true
            }
            else if(value<root.value)
            {
                return this.search(root.left,value)
            }
            else
            {
                return this.search(root.right,value)
            }
        }
    }
    levelorder()
    {
        const queue=[]
        queue.push(this.root)
        while(queue.length)
        {
            let curr=queue.shift()
            //console.log(curr.value)
            if(curr.left)
            {
                queue.push(curr.left)
            }
            if(curr.right)
            {
                queue.push(curr.right)
            }
        }
    }
    min(root)
    {
        if(!root.left)
        {
            return root.value
        }
        else{
            return this.min(root.left)
        }
    }
    max(root)
    {
        if(!root.right)
        {
            return root.value
        }
        else{
            return this.max(root.right)
        }
    }
    delete(value)
    {
        this.root=this.deleteNode(this.root,value)
    }
    deleteNode(root,value){
        this.root=this.deleteNode(this.root,value)
    }
    deleteNode(root,value)
    {
        if(root==null)
        {
            return root
        }
        if(value<root.value)
        {
            root.left=this.deleteNode(root.left,value)
        }
        else if(value>root.value)
        {
            root.right=this.deleteNode(root.right,value)
        }
        else{
            if(!root.left && !root.right)
            {
                return null
            }
            if(!root.left)
            {
                return root.right
            }
            else if(!root.right)
            {
                return root.left
            }
            root.value=this.min(root.right)
            root.right=this.deleteNode(root.right,value)
        }

    }
}
const bfs=new BinarysearchTree()
bfs.insert(10)
bfs.insert(3)
bfs.insert(15)
bfs.insert(5)
bfs.insert(7)
bfs.insert(9)
bfs.insert(20)
bfs.insert(11)
bfs.levelorder()
console.log("min",bfs.min(bfs.root))
console.log("max",bfs.max(bfs.root))
bfs.delete(10)
bfs.levelorder()
