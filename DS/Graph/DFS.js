class Graph {
    constructor() {
      this.adjacencyList = new Map();
    }
  
    addVertex(vertex) {
      if (!this.adjacencyList.has(vertex)) {
        this.adjacencyList.set(vertex, []);
      }
    }
  
    addEdge(vertex1, vertex2) {
      this.adjacencyList.get(vertex1).push(vertex2);
      this.adjacencyList.get(vertex2).push(vertex1);
    }
  
    dfs(start) {
      const visited = new Map();
      this._dfs(start, visited);
    }
  
    _dfs(vertex, visited) {
      visited.set(vertex, true);
      console.log(vertex);
  
      const neighbors = this.adjacencyList.get(vertex);
  
      for (let neighbor of neighbors) {
        if (!visited.get(neighbor)) {
          this._dfs(neighbor, visited);
        }
      }
    }
  }
  
  // Example usage:
  const graph = new Graph();
  graph.addVertex('A');
  graph.addVertex('B');
  graph.addVertex('C');
  graph.addVertex('D');
  graph.addEdge('A', 'B');
  graph.addEdge('B', 'C');
  graph.addEdge('C', 'D');
  graph.addEdge('D', 'A');
  graph.dfs('A'); // prints A, B, C, D
  