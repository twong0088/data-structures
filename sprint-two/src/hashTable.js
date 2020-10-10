

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._size = 0;

};

HashTable.prototype.insert = function(key, value) {

  var index = getIndexBelowMaxForKey(key, this._limit);
  var bucket = this._storage.get(index);
  if (bucket === undefined) {
    bucket = [];
    this._storage.set(index, bucket);
  }
  var repeat = false;

  bucket.forEach(function(tuple) {
    if (tuple[0] === key) {
      tuple[1] = value;
      repeat = true;
    }
  });

  if (repeat === false) {
    var tuple = [key, value];
    bucket.push(tuple);
    this._size++;
    if (this._size > 0.75 * this._limit) {
      this.resize(this._limit * 2);
    }
  }
};

HashTable.prototype.retrieve = function(key) {
  var index = getIndexBelowMaxForKey(key, this._limit);
  var bucket = this._storage.get(index);
  var result = undefined;
  if (bucket) {
    bucket.forEach(function(tuple) {
      if (tuple[0] === key) {
        result = tuple[1];
      }
    });
  }
  return result;

};

HashTable.prototype.remove = function(key) {
  var index = getIndexBelowMaxForKey(key, this._limit);
  var bucket = this._storage.get(index);

  if (bucket) {
    for (var i = 0; i < bucket.length; i++) {
      var tuple = bucket[i];
      if (tuple[0] === key) {
        bucket.splice(i, 1);
        this._size--;
        if (this._size < this._limit * 0.25) {
          this.resize(this._limit / 2);
        }
      }
    }
  }
};

HashTable.prototype.resize = function(newSize) {
  var oldStorage = this._storage;
  this._limit = newSize;
  this._storage = LimitedArray(newSize);
  this._size = 0;
  var context = this;
  oldStorage.each(function(bucket) {
    if (bucket) {
      for (var i = 0; i < bucket.length; i++) {
        var tuple = bucket[i];
        context.insert(tuple[0], tuple[1]);
      }
    }
  });
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


