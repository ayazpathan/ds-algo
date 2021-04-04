class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }
  peek() {
    return this.first;
    // Return peek
  }
  enqueue(value) {
    // Add an element in the queue

    const newNode = new Node(value);

    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.length++;
    return this;
  }
  dequeue() {
    // Remove the element from the queue
    if (!this.first) {
      return null;
    }
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.length--;
    return this;
  }
  //isEmpty;
}

const myQueue = new Queue();
myQueue.enqueue("Aiyazkhan");
myQueue.enqueue("Arbaz");
myQueue.enqueue("Shahbaz");
myQueue.enqueue("Mohsin");
myQueue.dequeue();
console.log(myQueue);
//Joy
//Matt
//Pavel
//Samir
