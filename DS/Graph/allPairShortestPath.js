//  All-pairs shortest path is a well-known problem in graph theory that involves finding the shortest path between all pairs of vertices in a weighted graph. In JavaScript, we can use various algorithms such as Floyd-Warshall or Johnson's Algorithm to solve this problem. Here's an example implementation of Floyd-Warshall algorithm to find all-pair shortest path in a weighted graph in JavaScript:

function allPairShortestPath(graph) {
    const n = graph.length;
    const dist = Array(n).fill().map(() => Array(n).fill(0));
  
    // Initialize the distance matrix
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        dist[i][j] = graph[i][j];
      }
    }
  
    // Compute the shortest path for all pairs of vertices
    for (let k = 0; k < n; k++) {
      for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
          if (dist[i][k] + dist[k][j] < dist[i][j]) {
            dist[i][j] = dist[i][k] + dist[k][j];
          }
        }
      }
    }
  
    // Return the distance matrix
    return dist;
  }
  
  // Example input
  const graph = [  [0, 5, 999, 10],
    [999, 0, 3, 999],
    [999, 999, 0, 1],
    [999, 999, 999, 0],
  ];
  
  console.log(allPairShortestPath(graph));
  
// In the above code, we first initialize a distance matrix dist of size n x n, where n is the number of vertices in the graph. We then copy the weight values of the input graph into dist.

// We then use three nested loops to iterate over all possible pairs of vertices in the graph and update the dist matrix accordingly. The outermost loop iterates over the intermediate vertices, while the inner loops iterate over the source and destination vertices. If the distance from the source vertex to the intermediate vertex plus the distance from the intermediate vertex to the destination vertex is less than the current distance between the source and destination vertices, we update the dist matrix.

// Finally, we return the dist matrix, which contains the shortest path between all pairs of vertices in the input graph. The example input graph is a 4x4 matrix, where each entry graph[i][j] represents the weight of the edge from vertex i to vertex j. The value 999 is used to represent infinity, which indicates that there is no edge between the vertices.