class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  // print all the items inside
  transverse() {
    let current = this.head;
    while (current.next) {
      console.log("HEAD", current);
      console.log("TAIL", this.tail);
      current = current.next;
    }
  }

  pop() {
    if (!this.head) return undefined;
    let current = this.head;
    let newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }
  shift() {
    if (!this.head) return undefined;

    let current = this.head;
    this.head = current.next;
    this.length--;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    return current;
  }

  unshift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;
    return this;
  }
  get(index) {
    if (index < 0 || index >= this.length) return null;
    let counter = 0;
    let current = this.head;

    while (counter !== index) {
      current = current.next;
      counter++;
    }
    return current;
  }

  set(index, value) {
    let foundNode = this.get(index);
    // console.log(foundNode);
    if (foundNode) {
      foundNode.val = value;
      return true;
    } else {
      return false;
    }
  }

  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    else if (index === this.length) {
      this.push(val);
      return true;
    } else if (index === 0) {
      this.unshift(val);
      return true;
    } else {
      let newNode = new Node(val);
      let prevNode = this.get(index - 1);
      let temp = prevNode.next;
      newNode.next = temp;
      prevNode.next = newNode;
      this.length++;
      return true;
    }
  }

  remove(index) {
    if (index < 0 || index > this.length) return undefined;
    if (index === this.length - 1) return this.pop();
    if (index === 0) return this.shift();
    let prevNode = this.get(index - 1);
    let nodeToRemove = prevNode.next;
    prevNode.next = nodeToRemove.next;
    this.length--;
    return nodeToRemove; // retorna o que remove BURRO voce confundiu aqui
  }

reverse() { // always used in code challenge
  let node = this.head
  this.head = this.tail
  this.tail = node
  let prev = null
  let next
  for (let i = 0; i < this.length; i++) {
    next = node.next
    node.next = prev
    prev = node
    node = next
  }
  return this


}

print() {
  let arr = []
  var current = this.head
  while(current) {
    arr.push(current.val)
    current = current.next
  }
  console.log(arr)
}

}

// var first = new Node("Hi"); //
// first.next = new Node("How");
// first.next.next = new Node("are");

var list = new SinglyLinkedList();
list.push("Hello");
list.push("GoodBye");
list.push("See u again");
list.push("arribeterte");
console.log("FULL LIST --->", list);
// list.transverse();
// list.unshift("FIRST");
// console.log("List after unshift", list);
// console.log("Get POSITION", list.get(2));
// console.log(list.set(2, "I Love you"));
// console.log(list.get(2));
// list.insert(2, "I Love you");
// console.log("FULL LIST --->", list);
// console.log("Get POSITION", list.get(2));
// list.remove(2);
list.reverse()
console.log("FULL LIST --->", list);

