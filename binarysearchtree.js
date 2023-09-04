class Node{
    constructor(value){
      this.value=value
      this.left=null
      this.right=null
    }
  }
  
  class BinarysearchTree{
    constructor(){
      this.root=null
    }
    
    isEmpty(){
      return this.root==null
    }
    
    insert(value){
      const node=new Node(value)
      if(this.isEmpty()){
        this.root=node
      } else {
        this.insertNode(this.root, node)
      }
    }
  
    insertNode(root, node){
      if(node.value<root.value){
        if(root.left===null){
          root.left=node
        } else {
          this.insertNode(root.left,node)
        }
      } else {
        if(root.right===null){
          root.right=node
        } else {
          this.insertNode(root.right,node)
        }
      }
    }
  
    search(root, value){
      if(!root){
        return false
      } else {
        if(value === root.value){
          return true
        } else if(value < root.value){
          return this.search(root.left, value)
        } else  {
          return this.search(root.right, value)
        }
      }
    }

    preorder(root)
    {
      if(root)
      {
        console.log(root.value)
        this.preorder(root.left)
        this.preorder(root.right)
      }
    }
    inorder(root)
    {
      if(root)
      {
        this.inorder(root.left)
        console.log(root.value)
        this.inorder(root.right)
      }
    }
    postorder(root)
    {
      if(root)
      {
        this.postorder(root.left)
        this.postorder(root.right)
        console.log(root.value)
      }
        
        
    }
    valid() {
      let value = [];
      this.inorder(this.root, value);
      for (let i = 0; i < value.length; i++) {
        if (value[i] <= value[i - 1]) {
          return false;
        }
      }
      return true;
    }
  findSecondLargest() {
    if (!this.root) {
      console.log("The tree is empty");
      return null;
    }

    let current = this.root;
    let secondLargest = null;

    while (current.right) {
      if (!current.right.right && !current.right.left) {
        secondLargest = current.value;
        break;
      }
      current = current.right;
    }

    return secondLargest;
  }
    
      
  }
  
  const bst = new BinarysearchTree()
  console.log(bst.isEmpty())
  bst.insert(10)
  bst.insert(5)
  bst.insert(15)
  bst.insert(18)
  bst.insert(12)
  bst.insert(3)
  bst.insert(7)
  console.log(bst.root)
  console.log(bst.search(bst.root,5))
  console.log(bst.search(bst.root,20))
  // bst.preorder(bst.root)
  // bst.inorder(bst.root)
  bst.postorder(bst.root)
  console.log(bst.valid())
  console.log("Second Largest Element:", bst.findSecondLargest());
  