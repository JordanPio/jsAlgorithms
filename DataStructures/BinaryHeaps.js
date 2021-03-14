/*

class MaxBinaryHeap {
  constructor() {
    this.values = [41, 39, 33, 18, 27, 12]; // cheat to no have to add lot of stuff
  }

  insert(element) {
    this.values.push(element); // add to the end
    this.bubbleUp();
  }
  bubbleUp() {
    let idx = this.values.length - 1; // find the last index number
    const element = this.values[idx]; // find the element value
    while (idx > 0) {
      // because if its =0, its already on the top of the HEAP
      let parentIdx = Math.floor((idx - 1) / 2); // find the parent index
      let parent = this.values[parentIdx]; // find parent value
      if (element <= parent) break; // break from loop if the element is less than parent
      this.values[parentIdx] = element;
      this.values[idx] = parent;
      idx = parentIdx;
    }
  }

  extractMax() {
    //swap first value with last one in the array
    let firstIndex = 0;
    let root = this.values[firstIndex];

    let lastIndex = this.values.length - 1;
    this.values[0] = this.values[lastIndex];
    this.values[lastIndex] = root;

    root = this.values.pop();
    this.sinkDown()

    return root;
  }
  sinkDown() {
    let idx = 0; // find the first index number
    const element = this.values[idx]; // find the root
    let largerIdx = 0;

    while (idx < this.values.length - 1) {
      // from top to bottom now
      // let parentIdx = Math.floor((idx -1) /2) // find the parent index
      // let parent = this.values[parentIdx] // find parent value
      let leftIndex = 2 * idx + 1;
      let rightIndex = 2 * idx + 2;

      if (this.values[leftIndex] && this.values[rightIndex] && this.values[leftIndex] > this.values[rightIndex] || this.values[rightIndex] === undefined && this.values[leftIndex]) {
        largerIdx = leftIndex;
      } else if (this.values[rightIndex]){
        largerIdx = rightIndex;
      } else break

      if (element >= this.values[largerIdx]) break; // break from loop if the element is bigger than any of its childs
      this.values[idx] = this.values[largerIdx];
      this.values[largerIdx] = element;
      idx = largerIdx;
    }
  }
}

let heap = new MaxBinaryHeap();
// heap.insert(55);
// heap.insert(99);
heap.extractMax()
heap.extractMax()
heap.extractMax()
heap.extractMax()
heap.extractMax()

debugger;

*/

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

let ER = new PriorityQueue();
ER.enqueue("common cold", 5);
ER.enqueue("gun shot", 1);
ER.enqueue("concussion", 2);
ER.enqueue("high fever", 3);
ER.dequeue();
debugger;

//Note there is no order if elements have the same priority.
// you could create another variable inside node called time = Date.now() and use that inside the logic if you want to
