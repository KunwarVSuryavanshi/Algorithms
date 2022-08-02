class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    let newNode = new Node(val)
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    }
    else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;

    return this;
  }

  pop() {
    if (this.length === 0) return
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
      this.length = 0;
      return this;
    }
    let prevObj = this.tail.prev;
    prevObj.next = null;
    this.tail = prevObj;
    this.length--;
    return this;
  }

  shift() {
    if (!this.head) return;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
      this.length = 0;
      return this;
    }

    let nextNode = this.head.next;
    nextNode.prev = null;
    this.head = nextNode;
    this.length--;
    return this;
  }

  unshift(val) {
    let newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
      this.length = 1;
      return this;
    }

    let oldHead = this.head;
    
    this.head = newNode;
    this.head.next = oldHead
    oldHead.prev = this.head // Dont forget setting prev null to current head
    this.length++;
    
    return this;
  }
}

const linkedList = new DoublyLinkedList()

console.log(linkedList)

linkedList.push(12)

console.log(linkedList)

linkedList.push(23)

console.log(linkedList)

linkedList.push(69)

console.log(linkedList)

linkedList.pop()

console.log(linkedList)

linkedList.shift()

console.log(linkedList)

linkedList.unshift(79)

console.log(linkedList)
