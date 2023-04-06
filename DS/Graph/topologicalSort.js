// Topological sorting is an algorithm used to order nodes in a directed graph in such a way that every directed edge goes from earlier ordered node to later ordered node. In simpler terms, it's a linear ordering of the vertices of a directed acyclic graph (DAG) such that for every directed edge (u, v), vertex u comes before vertex v in the ordering.

// Here's an implementation of topological sort in JavaScript using Kahn's algorithm:

function topologicalSort(graph) {
    const inDegree = new Array(graph.length).fill(0);
    const result = [];
    const queue = [];

    // Calculate in-degree of each vertex
    for (let u = 0; u < graph.length; u++) {
        for (let v of graph[u]) {
            inDegree[v]++;
        }
    }

    // Add all vertices with in-degree 0 to the queue
    for (let u = 0; u < graph.length; u++) {
        if (inDegree[u] === 0) {
            queue.push(u);
        }
    }

    // Process vertices in topological order
    while (queue.length) {
        const u = queue.shift();
        result.push(u);

        for (let v of graph[u]) {
            if (--inDegree[v] === 0) {
                queue.push(v);
            }
        }
    }

    if (result.length !== graph.length) {
        throw new Error("Graph has a cycle!");
    }

    return result;
}


//   The function takes a graph represented as an array of adjacency lists, where graph[u] is an array of vertices that have an edge from u. The function returns an array containing the vertices in topological order.

// The algorithm first calculates the in-degree of each vertex in the graph. It then adds all vertices with in-degree 0 to the queue. The algorithm then processes the vertices in the queue, removing each vertex u from the queue and adding it to the result. For each vertex v adjacent to u, the algorithm decreases its in-degree by 1. If the in-degree of v becomes 0 as a result, v is added to the queue.

// If the resulting order doesn't include all vertices in the graph, it means that the graph contains a cycle, so the algorithm throws an error.

const graph = [
    [1, 2],
    [3],
    [3],
    []
];

console.log(topologicalSort(graph)); // [0, 1, 2, 3]


//   0 -> 1 -> 3
//  \-> 2 -/

function topologicalSort_(graph) {
    const visited = new Array(graph.length).fill(false);
    const result = [];

    function dfs(u) {
        visited[u] = true;
        for (let v of graph[u]) {
            if (!visited[v]) {
                dfs(v);
            }
        }
        result.unshift(u);
    }

    for (let u = 0; u < graph.length; u++) {
        if (!visited[u]) {
            dfs(u);
        }
    }

    return result;
}

//   This implementation also takes a graph represented as an array of adjacency lists, where graph[u] is an array of vertices that have an edge from u. The function returns an array containing the vertices in topological order.

// The function first initializes a visited array to keep track of which vertices have been visited during the DFS traversal, and an empty result array to hold the topological order.

// The dfs function performs a depth-first traversal of the graph, starting at vertex u. It marks u as visited, recursively visits all unvisited neighbors of u, and then adds u to the front of the result array.

// The main function performs a DFS traversal of the graph starting at each unvisited vertex, and concatenates the resulting topological orders for each connected component.

// Note that this implementation assumes that the input graph is a DAG, so it does not check for cycles. If the input graph contains a cycle, the function may enter an infinite loop.

