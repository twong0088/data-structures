var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var node = Node(value);
    if (list.head === null) {
      list.head = node;
      list.tail = list.head;
    } else {
      list.tail.next = node;
      list.tail = list.tail.next;
    }
  };

  list.removeHead = function() {
    if (list.head !== null) {
      var removedValue = list.head.value;
      list.head = list.head.next;
      return removedValue;
    }
  };

  list.contains = function(target) {
    var current = list.head;
    while (current) {
      if (current.value === target) {
        return true;
      } else {
        current = current.next;
      }
    }
    return false;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

