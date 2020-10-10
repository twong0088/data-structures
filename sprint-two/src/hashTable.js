

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
    this.size++;
  }
};

HashTable.prototype.retrieve = function(key) {
  var index = getIndexBelowMaxForKey(key, this._limit);
  var bucket = this._storage.get(index);
  var result = undefined;
  bucket.forEach(function(tuple) {
    if (tuple[0] === key) {
      result = tuple[1];
    }
  });
  return result;

};

HashTable.prototype.remove = function(key) {
  var index = getIndexBelowMaxForKey(key, this._limit);
  var bucket = this._storage.get(index);

  bucket.forEach(function(tuple, i) {
    if (tuple[0] === key) {
      bucket.splice(i, 1);
      this.size--;
    }
  });
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


