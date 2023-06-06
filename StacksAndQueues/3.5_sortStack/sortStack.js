class SortStack {
  stack = [];
  tempStack = [];

  pop() {
    return this.stack.pop();
  }

  push(value) {
    /**impementation
     * if push value is < top stack value, push
     * if push value > top stack value, push stack value into temp stack until push value <= top stack value
     * --> then pop temp stack values back into stack
     */

    while (value > this.peek() && this.stack.length !== 0) {
      this.tempStack.push(this.stack.pop());
    }

    this.stack.push(value);

    while (this.tempStack.length !== 0) {
      this.stack.push(this.tempStack.pop());
    }
  }

  peek() {
    return this.stack[this.stack.length - 1];
  }

  isEmpty() {
    return this.stack.length === 0;
  }
}

const sortedStack = new SortStack();

// out of order stack insertion
console.log("***********out of order stack insertion*************");
sortedStack.push(40);
sortedStack.push(28);
sortedStack.push(31);
sortedStack.push(27);
sortedStack.push(16);
sortedStack.push(1);
sortedStack.push(3);
sortedStack.push(2);

console.log(sortedStack.peek());

console.log(sortedStack.pop());
console.log(sortedStack.pop());
console.log(sortedStack.pop());
console.log(sortedStack.pop());

// in order stack insertion
console.log("***********in order stack insertion*************");
sortedStack.push(40);
sortedStack.push(33);
sortedStack.push(31);
sortedStack.push(27);
sortedStack.push(16);
sortedStack.push(10);
sortedStack.push(3);
sortedStack.push(2);

console.log(sortedStack.peek());

console.log(sortedStack.pop());
console.log(sortedStack.pop());
console.log(sortedStack.pop());
console.log(sortedStack.pop());
