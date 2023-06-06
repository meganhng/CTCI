class QueueViaStack {
  stack = [];
  stackQueue = [];

  add(value) {
    this.stack.push(value);
  }

  remove() {
    if (this.isEmpty()) {
      throw new Error("Queue is empty");
    } else if (this.stackQueue.length === 0) {
      this.convertStackToQueue(this.stack, this.stackQueue);
    }

    return this.stackQueue.pop();
  }

  peek() {
    if (this.isEmpty()) {
      return undefined;
    } else if (this.stackQueue.length === 0) {
      convertStackToQueue(this.stack, this.stackQueue);
    }

    return this.stackQueue[this.stackQueue.length - 1];
  }

  isEmpty() {
    return this.stack.length === 0 && this.stackQueue.length === 0;
  }

  convertStackToQueue = function (stack, stackQueue) {
    while (stack.length > 0) {
      stackQueue.push(stack.pop());
    }
  };
}

const queue = new QueueViaStack();

queue.add(1);
queue.add(2);
queue.add(3);
queue.add(4);
queue.add(5);
queue.add(6);
queue.add(7);
queue.add(8);
queue.add(9);

console.log("remove:", queue.remove());
console.log("remove:", queue.remove());
console.log("remove:", queue.remove());
console.log("remove:", queue.remove());
console.log("remove:", queue.remove());

queue.add(10);
queue.add(11);
queue.add(12);

console.log("remove:", queue.remove());
console.log("peek: ", queue.peek());

console.log("remove:", queue.remove());
console.log("remove:", queue.remove());
console.log("remove:", queue.remove());
console.log("remove:", queue.remove());

console.log("peek:", queue.peek());
