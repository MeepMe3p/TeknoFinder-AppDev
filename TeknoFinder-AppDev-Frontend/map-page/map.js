
const NGE_F1_Waypoint = [
    ['A', PathNodes[0]],
    ['B', PathNodes[0]],
    ['C', PathNodes[0]],
    ['D', PathNodes[0]],
    ['E', PathNodes[0]],
    ['F', PathNodes[0]],
    ['G', PathNodes[0]],
    ['H', PathNodes[0]],
    ['I', PathNodes[0]],
    ['J', PathNodes[0]],
    ['K', PathNodes[0]],
    ['L', PathNodes[0]],
    ['M', PathNodes[0]],
]

const NGE_F1_edges = [
    ['A', 'B'],
    ['A', 'M'],
    ['B', 'C'],
    ['B', 'D'],
    ['D', 'E'],
    ['D', 'F'],
    ['F', 'G'],
    ['G', 'H'],
    ['H', 'I'],
    ['H', 'J'],
    ['J', 'K'],
    ['K', 'L'],
    ['L', 'M']
]



/*
class Graph {
    constructor(predefinedEdges = []) {
        this.adjacencyList = {};
        // If predefined edges are provided, initialize the graph with them
        if (predefinedEdges.length > 0) {
            predefinedEdges.forEach(([vertex1, vertex2, weight]) => {
                this.addVertex(vertex1);
                this.addVertex(vertex2);
                this.addEdge(vertex1, vertex2, weight);
            });
        }
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
        this.adjacencyList[vertex] = [];
        }
    }

    addEdge(vertex1, vertex2, weight) {
        this.adjacencyList[vertex1].push({ vertex: vertex2, weight });
        this.adjacencyList[vertex2].push({ vertex: vertex1, weight });
    }

    getNeighbors(vertex) {
        return this.adjacencyList[vertex];
    }
    
    
    dijkstra(start) {
        // Init
        const distances = {};
        const previous = {};
        const priorityQueue = new PriorityQueue();
        
        for (let vertex in this.adjacencyList) {
            distances[vertex] = 0;
            previous[vertex] = null;
            priorityQueue.enqueue(vertex, 0);
        }

        distances[start] = 0;
        priorityQueue.enqueue(start, 0);
        
        while (!priorityQueue.isEmpty()) {
            const { value: currentVertex } = priorityQueue.dequeue();

            // Check the neighbor
            this.getNeighbors(currentVertex).forEach(neighbor => {
                const { vertex, weight } = neighbor;
                const alternativePath = distances[currentVertex] + weight;

                //if shorter, follow path
                if (alternativePath < distances[vertex]) {
                    distances[vertex] = alternativePath;
                    previous[vertex] = currentVertex;
                    priorityQueue.enqueue(vertex, alternativePath);
                }
            });
        }

        return { distances, previous };
    }

    // Helper method to reconstruct the shortest path
    getShortestPath(start, end) {
        const { distances, previous } = this.dijkstra(start);
        const path = [];
        let currentVertex = end;

        while (currentVertex) {
            path.unshift(currentVertex);
            currentVertex = previous[currentVertex];
        }

        return path;
        //return path.length === 1 && path[0] === start ? [] : path;
    }
}

// Priority Queue to handle the queue in Dijkstra's algorithm
class PriorityQueue {
    constructor() {
        this.items = [];
    }

    enqueue(value, priority) {
        const newNode = { value, priority };
        this.items.push(newNode);
        this.items.sort((a, b) => a.priority - b.priority); // Sort by priority
    }

    dequeue() {
        return this.items.shift(); // Remove and return the first item (with the lowest priority)
    }

    isEmpty() {
        return this.items.length === 0;
    }

}

const NGE_1Edges = [
    ['A', 'B', 10],
    ['B', 'C', 10],
    ['C', 'A', 14],
    ['C', 'D', 7],
];



const g = new Graph(NGE_1Edges);
console.log('Adjacency List:', g.adjacencyList);


const path = g.getShortestPath('A', 'D');
console.log('Shortest path from C to A:', path);

const NGE_F1_vertex = [
    ['A', 'B'],
    ['A', 'M'],
    ['B', 'C'],
    ['D', 'E'],
    ['D', 'F'],
    ['F', 'G'],
    ['G', 'H'],
    ['H', 'I'],
    ['H', 'J'],
    ['J', 'K'],
    ['K', 'L'],
    ['L', 'M'],
]
*/
