function bellmanFord(graph, start) {
    const distances = new Array(graph.length).fill(Infinity);
    distances[start] = 0;
  
    for (let i = 0; i < graph.length - 1; i++) {
      for (let [u, neighbors] of graph.entries()) {
        for (let [v, weight] of neighbors) {
          if (distances[u] + weight < distances[v]) {
            distances[v] = distances[u] + weight;
          }
        }
      }
    }
  
    // Check for negative cycles
    for (let [u, neighbors] of graph.entries()) {
      for (let [v, weight] of neighbors) {
        if (distances[u] + weight < distances[v]) {
          throw new Error("Graph contains a negative-weight cycle");
        }
      }
    }
  
    return distances;
  }

  
  const graph = [
    [[1, 5], [2, 3]],  // edges from vertex 0
    [[3, 6]],          // edges from vertex 1
    [[1, 2], [3, 7]],  // edges from vertex 2
    [[4, -2]],         // edges from vertex 3
    [[2, 1]],          // edges from vertex 4
  ];
  
  const start = 0;
  
// Bellman-Ford algorithm is a classic shortest path algorithm that can handle graphs with negative edge weights. It is an example of a dynamic programming algorithm that relaxes edges repeatedly and updates the distances of vertices until convergence.
// The function takes a graph represented as an array of adjacency lists, where graph[u] is an array of [v, weight] tuples representing the edges from u to its neighbors v with edge weights weight. It also takes a start vertex representing the source of the shortest path algorithm. The function returns an array of shortest distances from the start vertex to all other vertices in the graph.
// The algorithm starts by initializing an array of distances with infinite distances to all vertices except the start vertex, which is set to zero.
// The algorithm then repeatedly relaxes all edges in the graph n-1 times, where n is the number of vertices in the graph. During each relaxation step, it loops through all edges in the graph and updates the distance of the destination vertex v if the distance to the source vertex u plus the edge weight is less than the current distance of v.
// After n-1 relaxation steps, the distances array contains the shortest distances from the start vertex to all other vertices in the graph, assuming there are no negative-weight cycles.
// To check for negative-weight cycles, the algorithm performs one more relaxation step and checks if any distances can be further improved. If so, the graph contains a negative-weight cycle and an error is thrown.
// Note that the time complexity of the Bellman-Ford algorithm is O(nm), where n is the number of vertices and m is the number of edges in the graph. This is slower than Dijkstra's algorithm, but it can handle graphs with negative edge weights.

