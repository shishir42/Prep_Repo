// Define the graph
const graph = {
    'A': ['B', 'C'],
    'B': ['D', 'E'],
    'C': ['F'],
    'D': [],
    'E': ['F'],
    'F': []
};

// Define the starting node
const startNode = 'A';

// BFS traversal function
function bfs(graph, startNode) {
    const visited = {};
    const queue = [startNode];

    while (queue.length > 0) {
        const currentNode = queue.shift();
        if (!visited[currentNode]) {
            visited[currentNode] = true;
            console.log(currentNode);

            const adjacentNodes = graph[currentNode];
            for (let i = 0; i < adjacentNodes.length; i++) {
                queue.push(adjacentNodes[i]);
            }
        }
    }
}

// Call the BFS function
bfs(graph, startNode);
