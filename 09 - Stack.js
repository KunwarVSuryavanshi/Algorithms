// Could simply use array and use its push pop feature

class SingleStack {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.last = null;
    this.size = 0;
  }

  push(val) {
    const stack = new SingleStack(val)

    if (!this.top) {
      this.top = stack;
      this.last = stack;
    } else {
      let temp = this.top;
      this.top = stack;
      this.top.next = temp;
    }

    return ++this.size;
  }

  pop() {
    if (this.size === 0) return false
    let temp = this.top.next;
    this.top = temp;
    --this.size;
    return temp
  }

}


const stack = new Stack();

console.log(stack.push(12))

console.log(stack.push(121))

console.log(stack.push(162))

console.log(stack.push(142))

// console.log(stack.push(143))


console.log(stack.pop())

console.log(stack)