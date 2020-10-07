var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var start = 0;
  var counter = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[counter] = value;

    counter++;
  };

  someInstance.dequeue = function() {
    if (counter > start) {
      var memory = storage[start];
      delete storage[start];
      start++;

      return memory;
    }
  };

  someInstance.size = function() {
    return counter - start;
  };

  return someInstance;
};
