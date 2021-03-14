/**
 
Node
-val
-next
-prev

Double Linked List
-head
-tail
-length
 */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoubleLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    // add item at the beginning of the list
    let newNode = new Node(val);

    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode; // we get previous last item that was there already and add the new value into its next
      newNode.prev = this.tail; // we point the new node.prev to the old tail
      this.tail = newNode; // we make the old tail the new node
    }
    this.length++;
    return this; // return the list
  }

  pop() {
    // remove a node at end of the list
    if (!this.head) return undefined; // check if object is not empty otherwise return null
    let poppedTail = this.tail; // store current tail into variable
    if (this.length === 1) {
      // check if object is size one and clear everything
      this.head = null;
      this.tail = null;
    } else {
      this.tail = poppedTail.prev; // set the tail to be the prev node
      this.tail.next = null; // clear the connection with old tail
      poppedTail.prev = null; // clear the old variable connection so it doesnt keep hanging and as we will return it
    }
    this.length--; // decrease length
    return poppedTail; // return
  }
  shifting() {
    // remove a node from beginning of list
    if (this.length === 0) return undefined;

    let oldHead = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = oldHead.next;
      this.head.prev = null;
      oldHead.next = null;
    }
    this.length--;
    return oldHead;
  }

  unshif(val) {
    // add node to the beginning of a list

    let newItem = new Node(val);
    if (this.length === 0) {
      this.head = newItem;
      this.tail = newItem;
    } else {
      let oldHead = this.head;
      oldHead.prev = newItem;
      newItem.next = oldHead;
      this.head = newItem;
    }
    this.length++;
    return this; // return entire list
  }

  get(index) {
    if (index < 0 || index >= this.length) return null;

    if (index <= this.length / 2) {
      // loop through start
      let counter = 0;
      let current = this.head;
      while (counter !== index) {
        counter++;
        current = current.next;
      }
      return current;
    } else {
      // loop backwards
      let counter = this.length - 1;
      let current = this.tail;
      while (counter !== index) {
        counter--;
        current = current.prev;
      }
      return current;
    }
  }

  set(index, value) {
    let node = this.get(index);
    if (node) {
      node.val = value;
      return true;
    } else {
      return false;
    }
  }
  insert(index, value) {
    if (index < 0 || index > this.length) return false;
    else if (index === 0) return this.unshif(value);
    else if (index === this.length) return this.push(value);
    else {
      let oldNode = this.get(index - 1);
      let newNode = new Node(value);
      newNode.next = oldNode.next;
      oldNode.next = newNode;
      newNode.prev = oldNode;
      this.length++;
    }

    return true;
  }
  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    else if (index === 0) return this.shifting();
    else if (index === this.length - 1) return this.pop();
    else {
      console.log("HEAD BEFORE GET ", this.head);
      let itemRemoved = this.get(index);
      console.log("THIS IS UR ITEM REMOVED", itemRemoved);
      console.log("HEAD AFTER GET ", this.head);

      let prevNode = itemRemoved.prev;
      let nextNode = itemRemoved.next;
      console.log("NODESSS PRev first", prevNode, nextNode);
      //   prevNode.next = itemRemoved.next
      //   nextNode.prev = itemRemoved.prev
      console.log("CURRENT HEAD", this.head);
      itemRemoved.prev.next = itemRemoved.next;
      itemRemoved.next.prev = itemRemoved.prev;
      console.log("THIS LIST!!!!!!!!!", this.head);
      itemRemoved.next = null;
      itemRemoved.prev = null;
      this.length--;
      return itemRemoved;
    }
  }
  reverse() {
    let oldHead = this.head; // saved current head
    //invert head and tail
    this.head = this.tail;
    this.tail = oldHead;
    // invert next and prev on head and tail

    let oldPrevHead = this.head.prev;
    let oldPrevTail = this.tail.prev;
    this.head.prev = this.head.next;
    this.tail.prev = this.tail.next;

    this.head.next = oldPrevHead;
    this.tail.next = oldPrevTail;

    //transverse the list
    let counter = 1;
    let current = this.head.next;

    while (counter !== this.length - 1) {
      counter++;

      let oldNext = current.next;
      current.next = current.prev;
      current.prev = oldNext;

      current = current.next;
    }
    return this;
  }
}

//  let first = new Node(12)
//  first.next = new Node(13)
//  first.next.prev = first // go to the next and reference the previous
//  console.log(first)
//  console.log(first.next)

/**
 the push method
 1,2,3

 1 - head=self, next=2 prev=null
 2 - next=3 prev=1
 3- next=null prev=2 tail=self head=1 

 */

let list = new DoubleLinkedList();
list.push("Alicia"); // head
list.push("Erin"); // next
list.push("Jordan"); // next
list.push("Liv"); // prev   // next
list.push("Liam"); // tail  // head
debugger;
// console.log(list);
// list.pop()
// console.log(list.shifting())
// list.unshif(99)
console.log("BEFORE", list);
// console.log(list.insert(2, "NEW VALUE AT 1"));
// console.log(list.set(0, "love"))
// console.log(list.remove(1))
list.reverse();
console.log("After TESTTT", list);
