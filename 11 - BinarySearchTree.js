/* 
  For valid and sensible tree (not just a linked list in one direction) the big O complexity is O( log N )
  Too solid.
*/


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

  find(val) {
    if (!val) return 'Pass a value to search the tree';

    let node = this.root;

    while (true) {
      if (node.value === val) return node;
      else {
        if (val > node.value) {
          if (!node?.right) return 'Value not found :/';
          node = node.right;
        } else {
          if (!node?.left) return 'Value not found :/';
          node = node.left;
        } 
      }
    }
  }
}


let bst = new BinarySearchTree()

// console.log(bst)

bst.insert(42)

// console.log(bst)

bst.insert(20)

// console.log(bst)

bst.insert(10)

// console.log(bst)

bst.insert(21)

// console.log(bst)

bst.insert(64)

// console.log(bst)

bst.insert(53)

console.log(bst)

console.log(bst.find(42))



module.exports = BinarySearchTree;