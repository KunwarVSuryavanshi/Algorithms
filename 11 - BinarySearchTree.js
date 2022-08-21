class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(val) {
    let newNode = new Node(val)
    
    if (!this.root) {
      this.root = newNode;
      return this
    }

    let currentNode = this.root;
    if(val === currentNode.val) return 'Same value can not be inserted :/'
    while (true) {
      if (currentNode.value > newNode.value) {
        if (currentNode.left == null) {                 // One observation, undefined == null -> true, undefined === null -> false; Since null is object
          currentNode.left = newNode;
          return this;
        }
        currentNode = currentNode.left
      } else {
        if (currentNode.right == null) {
          currentNode.right = newNode;
          return this;
        }
        currentNode = currentNode.right
      }
    }
  }
}