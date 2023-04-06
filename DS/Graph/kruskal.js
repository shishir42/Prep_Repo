// Kruskal's algorithm is a greedy algorithm that finds the minimum spanning tree (MST) of a connected, undirected graph. The minimum spanning tree is a subgraph that connects all the vertices in the graph with the minimum total edge weight.

// Here are the steps of Kruskal's algorithm:

// 1. Create a set of all the edges in the graph and sort them in non-decreasing order of their weights.

// 2. Initialize an empty set of edges called the minimum spanning tree.

// 3. Iterate over the sorted edges, and for each edge:
    // a. If the edge connects two different sets of vertices in the minimum spanning tree, add it to the tree and merge the two sets.
    // b. If the edge connects two vertices in the same set, skip it to avoid creating a cycle.

// 4. Return the minimum spanning tree.

// Define the input graph as an adjacency list
const graph = {
    'A': { 'B': 3, 'D': 1 },
    'B': { 'A': 3, 'C': 1, 'D': 3 },
    'C': { 'B': 1, 'D': 1 },
    'D': { 'A': 1, 'B': 3, 'C': 1 }
  };
  
  // Define the edges of the graph as an array of objects
  const edges = [
    { 'vertices': ['A', 'B'], 'weight': 3 },
    { 'vertices': ['A', 'D'], 'weight': 1 },
    { 'vertices': ['B', 'C'], 'weight': 1 },
    { 'vertices': ['B', 'D'], 'weight': 3 },
    { 'vertices': ['C', 'D'], 'weight': 1 }
  ];
  
  // Define a helper function to find the parent of a vertex in a set
  const findParent = (vertex, parent) => {
    while (parent[vertex] !== vertex) {
      vertex = parent[vertex];
    }
    return vertex;
  };
  
  // Implement Kruskal's algorithm to find the minimum spanning tree
  const kruskal = (graph, edges) => {
    // Sort the edges in non-decreasing order of their weights
    edges.sort((a, b) => a.weight - b.weight);
  
    // Initialize an empty set of edges called the minimum spanning tree
    const mst = [];
  
    // Create a parent object to keep track of the sets for each vertex
    const parent = {};
    Object.keys(graph).forEach(vertex => parent[vertex] = vertex);
  
    // Iterate over the sorted edges
    for (let edge of edges) {
      const [u, v] = edge.vertices;
      const parentU = findParent(u, parent);
      const parentV = findParent(v, parent);
  
      // If the edge connects two different sets of vertices in the minimum spanning tree, add it to the tree and merge the two sets
      if (parentU !== parentV) {
        mst.push(edge);
        parent[parentU] = parentV;
      }
    }
  
    // Return the minimum spanning tree
    return mst;
  };
  
  // Call the kruskal function with the input graph and edges
  const minimumSpanningTree = kruskal(graph, edges);
  
  console.log(minimumSpanningTree); // Output: [ { vertices: [ 'A', 'D' ], weight: 1 }, { vertices: [ 'C', 'D' ], weight: 1 }, { vertices: [ 'B', 'C
  