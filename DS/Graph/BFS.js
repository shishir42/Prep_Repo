// Define a graph class
class Graph {
    constructor() {
      this.vertices = [];
      this.adjacencyList = new Map();
    }
    
    addVertex(v) {
      this.vertices.push(v);
      this.adjacencyList.set(v, []);
    }
    
    addEdge(v, w) {
      this.adjacencyList.get(v).push(w);
      this.adjacencyList.get(w).push(v);
    }
    
    bfs(startingVertex) {
      // Mark all vertices as not visited
      const visited = {};
      this.vertices.forEach(v => visited[v] = false);
      
      // Create a queue for BFS
      const queue = [];
   
      // Mark the current node as visited and enqueue it
      visited[startingVertex] = true;
      queue.push(startingVertex);
   
      // Loop until the queue is empty
      while (queue.length !== 0) {
        // Dequeue a vertex from queue and print it
        const s = queue.shift();
        console.log(s);
   
        // Get all adjacent vertices of the dequeued vertex s
        // If a adjacent has not been visited, then mark it visited and enqueue it
        const adj = this.adjacencyList.get(s);
        adj.forEach(v => {
          if (!visited[v]) {
            visited[v] = true;
            queue.push(v);
          }
        });
      }
    }
  }
  
  // Create a new graph
  const g = new Graph();
  
  // Add vertices to the graph
  g.addVertex('A');
  g.addVertex('B');
  g.addVertex('C');
  g.addVertex('D');
  g.addVertex('E');
  g.addVertex('F');
  
  // Add edges to the graph
  g.addEdge('A', 'B');
  g.addEdge('A', 'D');
  g.addEdge('B', 'C');
  g.addEdge('C', 'E');
  g.addEdge('D', 'E');
  g.addEdge('D', 'F');
  g.addEdge('E', 'F');
  
  // Perform Breadth First Search from vertex 'A'
  console.log('BFS starting from vertex A:');
  g.bfs('A');
  