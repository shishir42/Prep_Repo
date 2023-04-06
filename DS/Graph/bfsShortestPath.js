function bfsShortestPath(graph, start, end) {
    const queue = [start];
    const visited = new Set([start]);
    const path = new Map([[start, null]]);

    while (queue.length > 0) {
        const u = queue.shift();

        if (u === end) {
            // Found the end vertex, construct the path from start to end
            const result = [];
            let curr = end;
            while (curr !== null) {
                result.unshift(curr);
                curr = path.get(curr);
            }
            return result;
        }

        for (let v of graph[u]) {
            if (!visited.has(v)) {
                visited.add(v);
                queue.push(v);
                path.set(v, u);
            }
        }
    }

    // End vertex is not reachable from the start vertex
    return null;
}


const graph = [
    [1, 2],
    [0, 3],
    [0, 3],
    [1, 2, 4],
    [3]
];

console.log(bfsShortestPath(graph, 0, 4)); // [0, 2, 3, 4]

//The expected output is [0, 2, 3, 4], which is the shortest path from vertex 0 to vertex 4.

//   The function takes a graph represented as an array of adjacency lists, where graph[u] is an array of vertices that have an edge from u. It also takes two vertices start and end representing the start and end points of the path. The function returns an array of vertices representing the shortest path from start to end, or null if there is no such path.

// The algorithm starts by initializing a queue containing the start vertex, a set of visited vertices containing only the start vertex, and a map of vertex-to-parent mappings containing only the mapping of start to null.

// The algorithm then repeatedly dequeues the next vertex u from the queue, and checks if it is the end vertex. If u is the end vertex, the algorithm constructs and returns the shortest path from start to end using the parent mappings stored in the path map.

// If u is not the end vertex, the algorithm visits all unvisited neighbors v of u, adds them to the queue, marks them as visited, and records their parent as u in the path map.

// If the end vertex is not found after visiting all reachable vertices, the function returns null to indicate that there is no path from start to end.