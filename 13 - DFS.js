
/* 
  Start traversing from root all the way to the left, once leaf node found....keep going 1 node back and if that node has right node add it to the array.

*/

const BinarySearchTree = require("./11 - BinarySearchTree")

let bst = new BinarySearchTree()

bst.DFSPreorder = function () {
  let data = [];
  function traverse(node) {
    data.push(node.value)
    if (node.left) traverse(node.left);
    if (node.right) traverse(node.right);
  }

  traverse(this.root)

  return data
}

bst.DFSPostorder = function () {
  let data = [];
  
  function tarverse(node) {

    if (node.left) tarverse(node.left)
    if (node.right) traverse(node.right)

    data.push(node.value)
    return
  }

  tarverse(this.root)

  return data

}

bst.DFSInorder = function () {
  let data = [];

  function tarverse(node) {

    if (node.left) tarverse(node.left)
    
    data.push(node.value)
    
    if (node.right) traverse(node.right)

    return;
  }

  tarverse(this.root)

  return data

}

bst.insert(10)

bst.insert(12)

bst.insert(6)

bst.insert(15)

bst.insert(2)

bst.insert(7)

console.log(bst.DFSPreorder())