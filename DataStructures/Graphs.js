class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (this.adjacencyList[vertex])
      return console.log("Value is already there");
    else this.adjacencyList[vertex] = [];
  }

  addEdge(vertex1, vertex2) {
    // this super simple without error handling if there is no key
    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
    return this;
  }
  removeEdge(v1, v2) {
    this.adjacencyList[v1] = this.adjacencyList[v1].filter(
      (item) => item !== v2
    );
    this.adjacencyList[v2] = this.adjacencyList[v2].filter(
      (item) => item !== v1
    );
  }
  removeVertex(vertex) {
    this.adjacencyList[vertex].forEach((element) => {
      // console.log(element)
      this.removeEdge(vertex, element);
    });
    delete this.adjacencyList[vertex];
  }
  depthFirst(vertex) {
    let endResult = [];
    let visitedVertices = {};
    let list = this.adjacencyList; // Required to store in this variable because the meaning of this change when goes inside the helper function DFS
    // console.log(this.adjacencyList);

    const DFS = function (vertex) {
      if (list[vertex].length === 0) return null;
      visitedVertices[vertex] = true;
      endResult.push(vertex);
      list[vertex].forEach((element) => {
        if (!visitedVertices[element]) {
          DFS(element);
        }
      });
    };

    DFS(vertex);
    console.log("Tchau", endResult);
    return endResult;
  }
  depthFirstIterative(start) {
    let stack = [start];
    let endResult = [];
    let visitedVertices = {};
    let dequeue;

    visitedVertices[start] = true;

    while (stack.length) {
      console.log(stack, "this is ur stack");
      dequeue = stack.pop();
      endResult.push(dequeue);

      this.adjacencyList[dequeue].forEach((element) => {
        if (!visitedVertices[element]) {
          visitedVertices[element] = true;
          stack.push(element);
        }
      });
    }

    return console.log(endResult);
  }

  BFS(start) {
    const queue = [start];
    const results = [];
    const visited = {};
    let item;

    visited[start] = true;

    while (queue.length) {
      // console.log(queue);
      item = queue.shift();
      results.push(item);

      this.adjacencyList[item].forEach((element) => {
        if (!visited[element]) {
          visited[element] = true;
          queue.push(element);
        }
      });
    }

    return console.log(results);
  }
}

let g = new Graph();
// g.addVertex("Tokyo");
// // g.adjacencyList["Tokyo"].push("SOMETHING")
// g.addVertex("Brazil");
// g.addVertex("Colombia");
// // g.addVertex("Tokyo")
// g.addEdge("Tokyo", "Brazil");
// g.addEdge("Tokyo", "Colombia");
// g.addEdge("Colombia", "Brazil");
// // g.removeEdge("Tokyo", "Brazil")
// g.removeVertex("Brazil");

g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");

g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("B", "D");
g.addEdge("C", "E");
g.addEdge("D", "E");
g.addEdge("D", "F");
g.addEdge("E", "F");

// g.depthFirst("A");
// g.depthFirstIterative("A");
g.BFS("A");

debugger;
