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
}


const linkedList = new SinglyLinkedList()

// console.log(linkedList)

// linkedList.push("SOMETHING")

// console.log(linkedList)

// linkedList.push("Anything")

// console.log(linkedList)

// linkedList.push("nothing")

// console.log(linkedList)

// linkedList.push(99)

// console.log(linkedList)

// console.log("**************************")

// linkedList.pop()

// console.log(linkedList)

// linkedList.pop()

// console.log(linkedList)


// linkedList.pop()

// console.log(linkedList)


// linkedList.pop()

// console.log(linkedList)