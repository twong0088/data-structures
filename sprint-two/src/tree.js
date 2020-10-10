var Tree = function(value) {
  var newTree = {};
  _.extend(newTree, treeMethods);
  newTree.value = value;

  // your code here
  newTree.children = []; // fix me
  newTree.parent = null;
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  newTree = Tree(value);
  newTree.parent = this;
  this.children.push(newTree);
};

treeMethods.contains = function(target) {
  var exists = false;
  if (this.value === target) {
    return true;
  }
  var search = function(children) {
    for (var i = 0; i < children.length; i++) {
      if (children[i].value === target) {
        exists = true;
      }
      search(children[i].children);
    }
    return exists;
  };
  return search(this.children);
};

treeMethods.removeFromParent = function(parent) {
  if (this.value === parent) {
    var removedChildren = this.children;
    this.children = null;
    for (var i = 0; i < removedChildren.length; i++) {
      removedChildren[i].parent = null;
    }
  }
  var search = function(children) {
    if (children) {
      for (var i = 0; i < children.length; i++) {
        if (children[i].value === parent) {
          var removedChildren = children[i].children;
          children[i].children = null;
          for (var j = 0; j < removedChildren.length; j++) {
            removedChildren[j].parent = null;
          }
        }
        search(children[i].children);
      }
    }
  };

  search(this.children);
};




/*
 * Complexity: What is the time complexity of the above functions?
 O(n^2)
 */
