var BinarySearchTree = function(value) {

  var tree = Object.create(BinarySearchMethods);
  tree.value = value;
  tree.left = null;
  tree.right = null;
  return tree;

};

var BinarySearchMethods = {
  insert: function(value) {
    if (value < this.value) {
      if (this.left === null) {
        this.left = BinarySearchTree(value);
      } else {
        this.left.insert(value);
      }
    } else if (value > this.value) {
      if (this.right === null) {
        this.right = BinarySearchTree(value);
      } else {
        this.right.insert(value);
      }
    }
  },
  contains: function(target) {
    if (this.value === target) {
      return true;
    } else if (this.left !== null && target < this.value) {
      return this.left.contains(target);
    } else if (this.right !== null && target > this.value) {
      return this.right.contains(target);
    } else {
      return false;
    }
  },
  depthFirstLog: function(func) {
    func(this.value);
    if (this.left !== null) {
      this.left.depthFirstLog(func);
    }
    if (this.right !== null) {
      this.right.depthFirstLog(func);
    }
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */

