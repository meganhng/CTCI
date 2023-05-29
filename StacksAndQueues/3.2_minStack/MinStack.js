class MinStack{
  stack = [];
  minStack=[];

  push(val){
    this.stack.push(val)
    if (this.minStack.length === 0){
      this.minStack.push(val);
    }
    else if (this.minStack[this.minStack.length-1]>=val){
      this.minStack.push(val);
    }
  }

  pop(){
    if (this.stack.length>0){
      const poppedVal = this.stack.pop();
      if (this.minStack[this.minStack.length-1] === poppedVal){
        this.minStack.pop();
      }
      return poppedVal;
    }
    return undefined
  }

  min(){
    return this.minStack[this.minStack.length-1]
  }
}

const minStack = new MinStack();

minStack.push(10);
console.log('min:',minStack.min())
minStack.push(8)
minStack.push(29);
console.log('min:',minStack.min())
minStack.push(8);
console.log('popped:',minStack.pop());
console.log('min:',minStack.min())
minStack.push(1);
console.log('min:',minStack.min())
console.log('popped:',minStack.pop());
console.log('min:',minStack.min())