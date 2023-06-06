class SetOfStacks {
  stackAmount;

  stacks = [];
  stacksCount = [];

  constructor(maxStackNum = 20) {
    this.stackAmount = maxStackNum;
  }

  push(value) {
    if (
      this.stacksCount[this.stacksCount.length - 1] === undefined ||
      this.stacksCount[this.stacksCount.length - 1] % this.stackAmount === 0
    ) {
      this.stacksCount.push(1);
      this.stacks.push([value]);
    } else {
      this.stacks[this.stacks.length - 1].push(value);
      this.stacksCount[this.stacksCount.length - 1]++;
    }
  }

  pop() {
    if (this.stacksCount[this.stacksCount.length - 1] === 0) {
      this.stacks.pop();
      this.stacksCount.pop();
    }

    this.stacksCount[this.stacksCount.length - 1]--;
    return this.stacks[this.stacks.length - 1].pop();
  }

  popAt(index) {
    /**
     * Assumption: If a stack is empty it will be removed from the substack, similarly to how we would handle an empty stack of plates
     */
    if (index >= this.stacks.length || index < 0) {
      throw new Error(
        `Index ${index} is out of bounds, total stack amount is ${stacks.length}`
      );
    } else if (this.stacksCount[index] === 0) {
      this.stacksCount.splice(index, 1);
      this.stacks.splice(index, 1);
      if (index >= this.stacks.length) {
        throw new Error(
          `Index ${index} is out of bounds, total stack amount is ${stacks.length}`
        );
      }
    }

    this.stacksCount[index]--;
    return this.stacks[index].pop();
  }
}

const stacks = new SetOfStacks(3);

stacks.push(1);
stacks.push(2);
stacks.push(3);

stacks.push(4);
stacks.push(5);
stacks.push(6);

stacks.push(7);
stacks.push(8);
stacks.push(9);

stacks.push(10);
stacks.push(11);

console.log(stacks.pop());
console.log(stacks.popAt(3));

console.log(stacks.pop());
console.log(stacks.popAt(2));

stacks.push(100);
console.log(stacks.pop());
console.log(stacks.popAt(1));
console.log(stacks.pop());

console.log(stacks.popAt(2));
