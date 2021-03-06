var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(stackMethods);
  someInstance.storage = {};
  someInstance.counter = 0;

  return someInstance;
};

var stackMethods = {
  push: function(value) {
    this.storage[this.counter] = value;
    this.counter++;
  },
  pop: function() {
    if (this.counter > 0) {
      this.counter--;
      var memory = this.storage[this.counter];
      delete this.storage[this.counter];
      return memory;
    }
  },
  size: function() {
    return this.counter;
  }
};


