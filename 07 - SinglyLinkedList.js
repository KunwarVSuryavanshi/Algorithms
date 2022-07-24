/* A NODE has a current value and next property */

class Node{
  
  constructor(val, next) {
    this.val = val;
    this.next = next;
  }

}

/* A LINKEDLIST (which consist of collection of NODES) has a head, tail and length property. */

class SinglyLinkedList{

  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0
  }

  push(val) {
    const node = new Node(val)

    if (!this.head) {
      this.head = node;
      this.tail = node;
    }
    else {
      this.tail.next = node   //  Change Previous node block's next property
      this.tail = node        // Reassign tail to the new Node block and again use this to change the next property with new node in new push call.
    }

    this.length++;
    return this;
  }

  pop() {
    if (this.length > 0) {
      let obj = this.head

      if (this.length === 1) {
        this.head = null;
        this.tail = null;
        this.length = 0
        return this
      }

      for (let i = 1; i < this.length; i++){
        if (i === this.length - 1) {
          this.tail = obj
          obj.next = null
          this.length--;
        }
        else {
          obj = obj.next
        }
      }
      return this;
    }
  }

  shift() {
    let headCopy = this.head;
    
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
      this.length = 0;
      return headCopy;
    }

    this.head = this.head.next;
    this.length--;
    return headCopy;

  }

  unshift(val) {
    let prevHead = this.head;
    this.head = new Node(val);
    this.head.next = prevHead;
    if (this.length === 0) {
      this.tail = this.head;
    }
    this.length++;
    return this
  }

  get(index) {
    if (index < 0 || index >= this.length) return null
    let currentNode = this.head;
    let i = 0;
    while (i !== index) {
      currentNode = currentNode.next;
      i++;
    }
    return currentNode;
  }

  set(index, val) {
    let node = this.get(index)
    if (node) {
      node.val = val
      this.length++
      return this;  
    }
    return
  }

  insert(index, val) {
    if (index < 0 || index > this.length)  return false
    
    if (this.length === 0 || index === this.length) { //length = 0 or length = index...simply create new node or push new node 
      this.push(val)
      return true
    }

    if (index === 0){ 
      this.unshift(val)   //since insert at 0 === unshift
      return true
    }

    let node = new Node(val)

    let currentNode = this.get(index - 1) // -1 because we are inserting before that current node

    let tempNextNode = currentNode.next

    currentNode.next = node

    node.next = tempNextNode

    this.length++

    return true
  }


}


const linkedList = new SinglyLinkedList()

console.log(linkedList)

linkedList.push("SOMETHING")

console.log(linkedList)

linkedList.push("Anything")

console.log(linkedList)


// console.log("************PUSHING**************")

// linkedList.push("nothing")

// console.log(linkedList)

// linkedList.push(99)

// console.log(linkedList)

// console.log("************POPPING**************")

// linkedList.pop()

// console.log(linkedList)

// linkedList.pop()

// console.log(linkedList)

// linkedList.pop()

// console.log(linkedList)

// console.log("************SHIFTING***************")

// linkedList.shift()

// console.log(linkedList)

// console.log("************UNSHIFTING**************")

// linkedList.unshift('69')

// console.log("*************GETTING****************")

// console.log(linkedList.get(0))

// console.log(************SETTING******************)

// console.log(linkedList.set(0, "HELLO"))

linkedList.insert(1, "bazinga")

console.log(linkedList)