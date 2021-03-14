// // Old Naive Implementation of QUEUES - no good performance as it uses an array
// class PriorityQueue {
//   constructor() {
//     this.values = [];
//   }
//   enqueue(val, priority) {
//     this.values.push({ val, priority });
//     this.sort();
//   }
//   dequeue() {
//     return this.values.shift();
//   }
//   sort() {
//     this.values.sort((a, b) => a.priority - b.priority);
//   }
// }

class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.values = []; // cheat to no have to add lot of stuff
  }

  enqueue(val, priority) {
    let newNode = new Node(val, priority);
    this.values.push(newNode); // add to the end
    this.bubbleUp();
  }
  bubbleUp() {
    let idx = this.values.length - 1; // find the last index number
    const element = this.values[idx]; // find the element value
    while (idx > 0) {
      // because if its =0, its already on the top of the HEAP
      let parentIdx = Math.floor((idx - 1) / 2); // find the parent index
      let parent = this.values[parentIdx]; // find parent value
      if (element.priority >= parent.priority) break; // break from loop if the element is less than parent
      this.values[parentIdx] = element;
      this.values[idx] = parent;
      idx = parentIdx;
    }
  }

  dequeue() {
    //swap first value with last one in the array
    let firstIndex = 0;
    let root = this.values[firstIndex];

    let lastIndex = this.values.length - 1;
    this.values[0] = this.values[lastIndex];
    this.values[lastIndex] = root;

    root = this.values.pop();
    this.sinkDown();

    return root;
  }
  sinkDown() {
    let idx = 0; // find the first index number
    const element = this.values[idx]; // find the root
    let MinPriorityIdx = 0;

    while (idx < this.values.length - 1) {
      // from top to bottom now
      // let parentIdx = Math.floor((idx -1) /2) // find the parent index
      // let parent = this.values[parentIdx] // find parent value
      let leftIndex = 2 * idx + 1;
      let rightIndex = 2 * idx + 2;
      debugger;
      if (
        (this.values[leftIndex] &&
          this.values[rightIndex] &&
          this.values[leftIndex].priority < this.values[rightIndex].priority) ||
        (this.values[rightIndex] === undefined &&
          this.values[leftIndex].priority)
      ) {
        MinPriorityIdx = leftIndex;
      } else if (this.values[rightIndex].priority) {
        MinPriorityIdx = rightIndex;
      } else break;

      if (element.priority <= this.values[MinPriorityIdx].priority) break; // break from loop if the element is bigger than any of its childs
      this.values[idx] = this.values[MinPriorityIdx];
      this.values[MinPriorityIdx] = element;
      idx = MinPriorityIdx;
    }
  }
}

class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (this.adjacencyList[vertex])
      return console.log("Value is already there");
    else this.adjacencyList[vertex] = [];
  }

  addEdge(vertex1, vertex2, weight) {
    // this super simple without error handling if there is no key
    this.adjacencyList[vertex1].push({ node: vertex2, weight });
    this.adjacencyList[vertex2].push({ node: vertex1, weight });
    return this;
  }

  shortestPath(start, finish) {
    const queue = new PriorityQueue();
    const distances = {};
    const previous = {};
    let smallest;
    let path = [];

    // build up initial state
    for (const vertex in this.adjacencyList) {
      if (vertex === start) {
        distances[vertex] = 0;
        queue.enqueue(vertex, 0);
      } else {
        distances[vertex] = Infinity;
        queue.enqueue(vertex, Infinity);
      }
      previous[vertex] = null;
    }

    while (queue.values.length) {
      smallest = queue.dequeue().val;
      //   console.log(smallest, "Log Smallest");
      if (smallest === finish) {
        // so we are finish
        // Build up path to return
        while (previous[smallest]) {
          path.push(smallest);
          smallest = previous[smallest];
        }
        // debugger;
        break; // because we've reached our endPoint
      }
      // loop though all items in the adjecency vertex
      if (smallest || distances[smallest] !== Infinity) {
        for (const neighbor in this.adjacencyList[smallest]) {
          let nextNode = this.adjacencyList[smallest][neighbor];
          // Caculate new distance to neighboring node
          let candidate = distances[smallest] + nextNode.weight;
          let nextNeighbor = nextNode.node;
          //   debugger;
          if (candidate < distances[nextNeighbor]) {
            //   updating new smallest distance to neighbor
            distances[nextNeighbor] = candidate;
            // updating previous - How we got to neighbor
            previous[nextNeighbor] = smallest;
            // enqueue in priority queue with new priority
            queue.enqueue(nextNeighbor, candidate);
          }
        }
      }
    }
    return console.log(path.concat(smallest).reverse());
  }
}

var graph = new WeightedGraph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A", "B", 4);
graph.addEdge("A", "C", 2);
graph.addEdge("B", "E", 3);
graph.addEdge("C", "D", 2);
graph.addEdge("C", "F", 4);
graph.addEdge("D", "E", 3);
graph.addEdge("D", "F", 1);
graph.addEdge("E", "F", 1);

graph.shortestPath("A", "E");

// ["A", "C", "D", "F", "E"]
debugger;
