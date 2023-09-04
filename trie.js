class Node {
    constructor() {
      this.children = new Map();
      this.isEnd = false;
    }
  }
  
  class Trie {
    constructor() {
      this.root = new Node();
    }
  
    insert(word) {
      let currentNode = this.root;
      for (let letter of word) {
        if (!currentNode.children.has(letter)) {
          currentNode.children.set(letter, new Node());
        }
        currentNode = currentNode.children.get(letter);
      }
      currentNode.isEnd = true;
    }
  
    search(word) {
      if (!word) return false;
      let currentNode = this.root;
      for (const letter of word) {
        if (!currentNode.children.has(letter)) {
          return false;
        }
        currentNode = currentNode.children.get(letter);
      }
      return currentNode.isEnd;
    }
  
    startsWith(prefix) {
      let currentNode = this.root;
      for (let letter of prefix) {
        if (!currentNode.children.has(letter)) {
          return false;
        }
        currentNode = currentNode.children.get(letter);
      }
      return true;
    }
  }
  
  const trie = new Trie();
  trie.insert("apple");
  
  console.log(trie.search("apple")); // true
  console.log(trie.search("app")); // false
  console.log(trie.startsWith("app")); // true
  