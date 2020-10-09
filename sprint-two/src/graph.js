

// Instantiate a new graph
var Graph = function() {
  this.graph = {};

};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  if (this.graph[node] === undefined) {
    this.graph[node] = [];
  }
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  for (var key in this.graph) {
    if (Number(key) === node) {
      return true;
    }
  }
  return false;
};



// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  for (key in this.graph) {
    for (var i = 0; i < this.graph[key].length; i++) {
      if (this.graph[key][i] === node) {
        var temp = this.graph[key].splice(i, 1);
        break;
      }
    }
  }

  delete this.graph[node];

};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  for (var i = 0; i < this.graph[fromNode].length; i++) {
    if (this.graph[fromNode][i] === toNode) {
      return true;
    }
  }

  return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.graph[fromNode].push(toNode);
  this.graph[toNode].push(fromNode);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  var index = this.graph[fromNode].indexOf(toNode);
  var memory = this.graph[fromNode].splice(index, 1);
  index = this.graph[toNode].indexOf(fromNode);
  memory = this.graph[toNode].splice(index, 1);
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var key in this.graph) {
    cb(key);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


