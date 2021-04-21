class Node {
  constructor(value) {
    this.val = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  insert(val) {
    let newValue = new Node(val);
    if (!this.root) {
      this.root = newValue;
      return this; // dont forget to get out of it
    } else {
      let current = this.root;
      while (true) {
        if (val === current.val) return undefined; // edgeCase for duplicates to avoid eternal loop
        if (val < current.val) {
          // go to left
          if (current.left === null) {
            current.left = newValue;
            return this;
          } else {
            current = current.left;
          }
        } else if (val > current.val) {
          // go to right
          if (current.right === null) {
            current.right = newValue;
            return this;
          } else {
            current = current.right;
          }
        }
      }
    }
  }

  find(val) {
    //check for edge case, list is empty?
    if (!this.root) {
      return false;
    } else if (this.root.val === val) {
      return true;
    }
    let current = this.root;
    while (true) {
      if (val > current.val) {
        current = current.right;
        if (current === null) return false;
        else if (current.val === val) return current;
      } else {
        current = current.left;
        if (current === null) return false;
        else if (current.val === val) return current;
      }
    }
  }

  BFS() {
    // breadth first search
    let q = []; // Model a QUEUE using an array with push and shift
    let visited = [];
    let current = this.root;

    // QUEUE the root
    q.push(current);

    // While queue is not empty (check the length of array) - You can test this in the debugger
    while (q.length !== 0) {
      let dq = q.shift(); // DEQUEU the first value (FIFO) into a new variable by using the array method SHIFT
      visited.push(dq.val); // push the value into visited array
      if (dq.left) q.push(dq.left); // check if we have the left and push that into the queue
      if (dq.right) q.push(dq.right); // check if we do have right and push that into the queue
    }
    return visited;
  }
  DFSPreOrder() {
    // depth first search - pre order type
    let visited = [];
    let current = this.root;
    const traverse = function (current) {
      // create a helper function that traverse the lists and push all the values
      visited.push(current.val); // save the current value inside the visited list - this means pre order
      if (current.left) traverse(current.left); // if the node has left we call traverse again
      if (current.right) traverse(current.right); // if the node has right we can traverse again
    };
    traverse(current);
    return visited;
  }
  DPSPostOrder() {
    let visited = [];
    let current = this.root;
    const traverse = (current) => {
      // create a helper function that traverse the lists and push all the values
      if (current.left) traverse(current.left); // traverse all the left
      if (current.right) traverse(current.right); // traverse all the right
      visited.push(current.val); // at the end we save the values - which means we start saving from botton
    };
    traverse(current);
    return visited;
  }
  DPSInOrder() {
    // this means traverse left, saved values and than traverse right
    let visited = [];
    let current = this.root;
    const traverse = (current) => {
      if (current.left) traverse(current.left);
      visited.push(current.val);
      if (current.right) traverse(current.right);
    };
    traverse(current);
    return visited;
  }
}

let tree = new BST();
// tree.root = new Node(10)
// tree.root.right = new Node(15)
// tree.root.left = new Node(7)
// tree.root.left.right = new Node(9)
tree.insert(10);
tree.insert(5);
tree.insert(2);
tree.insert(13);
tree.insert(11);
tree.insert(16);
tree.insert(7);
tree.insert(3);
debugger;
