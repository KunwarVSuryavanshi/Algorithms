/*

                    10
                  6    12
                2  7      15

queue = [10]
visited = []

element has left or right node? Yes, add it to queue while removing it from the tree

queue = [6, 12]
visited = [10]

check same for the 6, while removing and adding it to visited

queue = [12, 2, 7]
visited = [10, 6]

and so on.....

*/

// import { BinarySearchTree } from './11 - BinarySearchTree';

const BinarySearchTree = require('./11 - BinarySearchTree')

let bst = new BinarySearchTree()

bst.BFS = function () {
  let queue = [];
  let data = [];
  let node = this.root;
  
  queue.push(node);
  

  while (queue.length) {

    node = queue.shift();
    data.push(node.value);

    if (node.left) queue.push(node.left)
    if (node.right) queue.push(node.right)
    
  } 
  
  return data;
}

bst.insert(10)

bst.insert(12)

bst.insert(6)

bst.insert(15)

bst.insert(2)

bst.insert(7)

console.log("\n*************************************\n*************************************\n")

console.log(bst.BFS())


