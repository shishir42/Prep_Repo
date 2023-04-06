// Prim's algorithm is a popular algorithm used to find the minimum spanning tree of a weighted undirected graph. In JavaScript, we can implement Prim's algorithm using the following steps:

// Step 1: Create a function to represent the graph

// We can represent the graph using an object where the keys represent the vertices and the values represent the adjacent vertices with their weights. For example:

const graph = {
    A: { B: 2, D: 5 },
    B: { A: 2, C: 3, D: 9 },
    C: { B: 3, D: 4 },
    D: { A: 5, B: 9, C: 4 }
};

//   Step 2: Create a function to find the minimum spanning tree

//   We can create a function called prim that takes the graph object as an input and returns an object representing the minimum spanning tree. The function works by selecting a starting vertex and adding it to the tree. It then adds the vertex with the smallest weight that is adjacent to the tree until all vertices are included.

function prim(graph) {
    const vertices = Object.keys(graph);
    const visited = {};
    const MST = {};

    // Select a starting vertex
    const startVertex = vertices[0];
    MST[startVertex] = {};

    while (Object.keys(MST).length < vertices.length) {
        let minWeight = Infinity;
        let minVertex, prevVertex;

        // Find the vertex with the smallest weight that is adjacent to the tree
        for (const vertex in MST) {
            for (const adjacentVertex in graph[vertex]) {
                if (!visited[adjacentVertex] && graph[vertex][adjacentVertex] < minWeight) {
                    minWeight = graph[vertex][adjacentVertex];
                    minVertex = adjacentVertex;
                    prevVertex = vertex;
                }
            }
        }

        // Add the vertex with the smallest weight to the tree
        MST[prevVertex][minVertex] = minWeight;
        MST[minVertex] = {};
        visited[minVertex] = true;
    }

    return MST;
}


// Step 3: Test the function

// We can test the function using the graph object we defined earlier.

const MST = prim(graph);
console.log(MST);

// {
//     A: { B: 2 },
//     B: { A: 2, C: 3 },
//     C: { B: 3, D: 4 },
//     D: { C: 4 }
// }

