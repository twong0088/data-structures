var Tree = function(value) {
  var newTree = {};
  _.extend(newTree, treeMethods);
  newTree.value = value;

  // your code here
  newTree.children = []; // fix me

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  newTree = Tree(value);
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




/*
 * Complexity: What is the time complexity of the above functions?
 */
