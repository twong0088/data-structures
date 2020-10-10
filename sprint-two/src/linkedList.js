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
      list.tail.next.previous = list.tail;
      list.tail = list.tail.next;
    }
  };

  list.removeHead = function() {
    if (list.head !== null) {
      var removedValue = list.head.value;
      var newHead = list.head.next;
      if (newHead !== null) {
        newHead.previous = null;
      }
      list.head = newHead;
      return removedValue;
    }
  };

  list.addToHead = function (value) {
    // input: value
    //create a node with the value
    var node = Node(value);
    //if list is empty, add the node
    //make node's next property point to original head
    if (list.head === null) {
      list.head = node;
      list.tail = list.head;
    } else {
      var originalHead = list.head;
      list.head = node;
      //make original head's previous point to new node
      originalHead.previous = list.head;
      list.head.next = originalHead;
    }
    // no output
  };

  list.removeTail = function() {
    //if there is only one item in list,
    if (list.head !== list.tail) {
      var removed = list.tail.value;
      list.tail = list.tail.previous;
      list.tail.next = null;
      return removed;
    } else {
      var removed = list.tail.value;
      list = {};
      list.head = null;
      list.tail = null;
      return removed;
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
  node.previous = null;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 O(n)
 */

/*Write in a plan before coding
  leave comments for yourself to review

*/