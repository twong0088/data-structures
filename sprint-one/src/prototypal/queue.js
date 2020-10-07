var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstances = Object.create(queueMethods);
  someInstances.storage = {};
  someInstances.start = 0;
  someInstances.counter = 0;

  return someInstances;
};

var queueMethods = {
  enqueue: function(value) {
    this.storage[this.counter] = value;
    this.counter++;
  },
  dequeue: function() {
    if (this.counter > this.start) {

      var memory = this.storage[this.start];
      delete this.storage[this.start];
      this.start++;
      return memory;
    }
  },
  size: function() {
    return this.counter - this.start;
  }
};



