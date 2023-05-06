class Node
{
    constructor()
    {
        this.value=this.value
        this.left=null
        this.right=null
    }
}
class BinarysearchTree{
    constructor()
    {
        this.root=null
    }
    isEmpty()
    {
        return this.root==null
    }
}
const bst=new BinarysearchTree()
console.log("Tree is Empty?",bst.isEmpty())