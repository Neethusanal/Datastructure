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
        console.log(value[i])
        if (value[i] <= value[i - 1]) {
          return false;
        }
      }
    
      
    
      return true;
    }
  
  primenumber(){
    let curr=this.root
    let array=[]
    function primecheck(root) {
        let check=false
        if(root==null) return null
        let value=root.value
        for (let i = 2; i < value; i++) {
            if(value%i==0){
                check=true
                break
            }
        }
        if(check==false){
            array.push(value)
        }
        primecheck(root.left)
        primecheck(root.right)

    }
    primecheck(curr)
    return array
    }
    
  
 
//   isBST(root) {
//     return this.isBSTHelper(root, -Infinity, Infinity);
//   }
  
// isBSTHelper(node, min, max) {
//     if (node === null) {
//       // Empty node is considered as a valid BST
//       return true;
//     }
  
//     if (node.value <= min || node.value >= max) {
//       // Node value violates the BST property
//       return false;
//     }
  
//     // Recursively validate the left and right subtrees
//     return (
//       this.isBSTHelper(node.left, min, node.value) &&
//       this.isBSTHelper(node.right, node.value, max)
//      );
//     }
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
  // console.log(bst.root)
  // console.log(bst.search(bst.root,5))
  // console.log(bst.search(bst.root,20))
  // bst.preorder(bst.root)
  // bst.inorder(bst.root)
  bst.postorder(bst.root)
  console.log("LLL")
 bst.valid()
 console.log("kk")
 console.log(bst.primenumber())
  console.log("Second Largest Element:", bst.findSecondLargest());
  