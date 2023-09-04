class Node{
    constructor()
    {
        this.children=new Map()
        this.isEnd=false;

    }
}
class Trie{
    constructor()
    {
        this.root=new Node()
    }
   
insert(word)
{
    
    let currNode=this.root
    for(let letter of word)
    {
        if(!currNode.children.has(letter))
        {
            currNode.children.set(letter,new Node())
        }
       currNode= currNode.children.get(letter)
      

    }
    currNode.isEnd=true
}
search(word)
{
    if(!word)
    {
        return false
    }
    let currNode=this.root
    for (let letter of word)
    {
        if(!currNode.children.has(letter))
        {
            return false
        }
        currNode=currNode.children.get(letter)
       

} return currNode.isEnd
}
startswith(prefix)
{
    let currNode=this.root
    for(let letter of prefix)
    {
        if(!currNode.children.has(letter))
        {
            return false
        }
        currNode=currNode.children.get(letter)
    }
    return true
}
}
const trie=new Trie()
trie.insert("apple")

console.log(trie.search("apple"))
console.log(trie.search("app"))
console.log(trie.startswith("app"))