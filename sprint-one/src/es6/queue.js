class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.counter = 0;
    this.start = 0;
  }

  enqueue(value) {
    this.storage[this.counter] = value;
    this.counter++;
  }
  dequeue() {
    if (this.counter > this.start) {
      var memory = this.storage[this.start];
      delete this.storage[this.start];
      this.start++;
      return memory;
    }
  }
  size() {
    return this.counter - this.start;
  }

}
