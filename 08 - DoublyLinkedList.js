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

  get(index) {
    if (index >= this.length || index < 0) return null;
    let count = 0;
    let currentNode = this.head;
    while (count !== index) {
      currentNode = currentNode.next;
      count++;
    }
    return currentNode;
  }

  set(index, val) {
    let node = this.get(index);

    if (node) {
      node.val = val
    }

    return node;
  }

  insert(index, val) {
    if (index === 0) {
      this.unshift(val)
      return this;
    }
    
    if (index === this.length) {
      this.push(val)
      return this;
    }

    let newNode = new Node(val)
    let node = this.get(index - 1)

    if (node) {
      let temp = node.next
      node.next = newNode;
      newNode.prev = node
      newNode.next = temp;
      temp.prev = newNode;
      this.length++;
    }
    return this
  }

  remove(index) {
    if (this.length <= 0 || index  < 0 || index >= this.length) return false;
    if (index === this.length-1) return !!this.pop();
    if (index === 1) return this.shift();

    let prevNode = this.get(index - 1);
    let nextNode = prevNode.next.next;
    prevNode.next = nextNode;
    nextNode.prev = prevNode;
    this.length--;

    return true;
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
