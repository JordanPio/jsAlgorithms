//Stacks - Array Implementation
//STACK is just an abstract concept that can be modeled and implemented using an array or singleLinked List

/*
let stack = [] // think about this the LAST IN IS THE FIRST OUT LIFO

stack.push("google", "instagram", "youtube")
debugger
console.log(stack)
console.log(stack.pop()) // u get youtube and than the last item of the array
// or alternatively you can use unshift to add things and shift to remove and get the last added item - Push and Pop
// the single LinkedList is the official way of implementing it, see below
*/

//create a singleLinkedList
//The code is similar to shift and unshift in linkedlist but a bit different
// in this case we are adding the new item as the first and removing the first always first. last in first out

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  push(val) {
    let newItem = new Node(val);

    if (this.size === 0) {
      this.first = newItem;
      this.last = newItem;
      return this.size++;
    } else {
      let temp = this.first;
      this.first = newItem;
      this.first.next = temp;
    }
    return this.size++;
  }
  pop() {
    if (!this.first) return null;
    const temp = this.first; // save the first item into a variable
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next; // replacing the first with second value
    this.size--; // decrement the list

    return temp.value; // return the first item saved into variable
  }
}

let stack = new Stack(); // remember to initialize the object first
stack.push("test01");
stack.push("test02");
stack.push("test03");
debugger;
