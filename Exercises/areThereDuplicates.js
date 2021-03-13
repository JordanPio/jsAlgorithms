/*
Implement a function called areThereDuplicates which accepts a variable number of arguments, and checks wether there are any duplicates among the arguments passed in.
You can solve this using the frequency counter pattern OR the multiple pointers pattern.
*/

function areThereDuplicates(...args) {
  args.sort();
  let startPointer = 0;
  let secondPointer = 1;
  while (secondPointer < args.length) {
    if (args[startPointer] != args[secondPointer]) {
      startPointer = secondPointer;
      secondPointer += 1;
    } else {
      return true;
    }
  }
  return false;
  // good luck. (supply any arguments you deem necessary.)
}

console.log(areThereDuplicates(1, 2, 3)); // false
console.log(areThereDuplicates(1, 2, 2)); // true
console.log(areThereDuplicates("a", "b", "c", "a", "b", "d")); // true
