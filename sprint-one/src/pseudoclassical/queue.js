var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.counter = 0;
  this.start = 0;
};

Queue.prototype.enqueue = function(value) {
  this.storage[this.counter] = value;
  this.counter++;
};

Queue.prototype.dequeue = function() {
  if (this.counter > this.start) {
    var memory = this.storage[this.start];
    delete this.storage[this.start];
    this.start++;
    return memory;
  }
};

Queue.prototype.size = function () {
  return this.counter - this.start;
};


