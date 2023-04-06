// Dijkstra's algorithm is a classic shortest path algorithm that is used to find the shortest path between two vertices in a graph with non-negative edge weights. It is an example of a greedy algorithm that repeatedly selects the vertex with the smallest distance from a source vertex, and relaxes its outgoing edges to update the distances of its neighbors.

function dijkstra(graph, start) {
    const distances = new Array(graph.length).fill(Infinity);
    distances[start] = 0;
  
    const pq = new PriorityQueue();
    pq.enqueue(start, 0);
  
    while (!pq.isEmpty()) {
      const u = pq.dequeue().element;
  
      for (let [v, weight] of graph[u]) {
        const newDistance = distances[u] + weight;
        if (newDistance < distances[v]) {
          distances[v] = newDistance;
          pq.enqueue(v, newDistance);
        }
      }
    }
  
    return distances;
  }

// The function takes a graph represented as an array of adjacency lists, where graph[u] is an array of [v, weight] tuples representing the edges from u to its neighbors v with edge weights weight. It also takes a start vertex representing the source of the shortest path algorithm. The function returns an array of shortest distances from the start vertex to all other vertices in the graph.
// The algorithm starts by initializing an array of distances with infinite distances to all vertices except the start vertex, which is set to zero. The algorithm also initializes a priority queue pq containing only the start vertex with a priority of zero.
// The algorithm then repeatedly dequeues the vertex u with the smallest distance from the pq, and for each of its neighbors v with edge weight w, it computes the new distance newDistance from the start vertex to v through u. If this new distance is less than the current distance of v, the distances array is updated and the neighbor v is added to the pq with its new priority newDistance.
// Once all reachable vertices have been dequeued from the pq, the distances array contains the shortest distances from the start vertex to all other vertices in the graph.
// Note that this implementation uses a priority queue to efficiently select the vertex with the smallest distance. The implementation of PriorityQueue is not included here, but you can find a sample implementation online or use an existing library.

