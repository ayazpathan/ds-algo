class Stack {
  constructor() {
    this.array = [];
  }

  peek() {
    return this.array[this.array.length - 1];
  }

  push(value) {
    this.array.push(value);
    return this;
  }

  pop() {
    this.array.pop();
    return this;
  }
  //isEmptycls
}

const myStack = new Stack();
myStack.push("Google");
myStack.push("Bing");
myStack.push("Stack Overflow");
console.log(myStack);
console.log("PEEK -> " + myStack.peek());
myStack.pop();
console.log(myStack);
