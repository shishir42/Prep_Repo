function dfs(graph, startNode) {
    let visited = new Set(); // set of visited nodes
    let stack = [startNode]; // stack to keep track of nodes to visit

    while (stack.length > 0) {
        let currentNode = stack.pop(); // get the next node from the stack

        if (!visited.has(currentNode)) {
            visited.add(currentNode);
            console.log(currentNode); // do something with the node

            for (let neighbor of graph[currentNode]) {
                if (!visited.has(neighbor)) {
                    stack.push(neighbor); // add unvisited neighbors to the stack
                }
            }
        }
    }
}

let graph = {
    A: ['B', 'C'],
    B: ['A', 'D', 'E'],
    C: ['A', 'F'],
    D: ['B'],
    E: ['B', 'F'],
    F: ['C', 'E']
};

dfs(graph, 'A');

// In this example, graph is an object representing the graph using an adjacency list, where the keys are the node names and the values are arrays of the node's neighbors. startNode is the name of the node to start the traversal from.

// The function uses a Set to keep track of visited nodes and a stack to keep track of nodes to visit. It pops nodes from the stack, checks if they have been visited, and if not, adds them to the visited set, logs them to the console (or performs some other operation on the node), and adds their unvisited neighbors to the stack.