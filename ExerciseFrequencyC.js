/*

Write a function called sameFrequency. Given two positive integers, find out if the 
two numbers have the same frequency of digits

output true or false

*/

/*

function sameFrequency(primeiro, segundo) {
  let first = primeiro.toString();
  let second = segundo.toString();

  if (first.length !== second.length) {
    return false;
  }

  let lookup = {};

  for (let i = 0; i < first.length; i++) {
    let count = first[i];
    lookup[count] ? (lookup[count] += 1) : (lookup[count] = 1);
  }

  for (let i = 0; i < second.length; i++) {
    let count = second[i];
    if (!lookup[count]) {
      return false;
    } else {
      lookup[count] -= 1;
    }
  }
  return true;
}

// let test1 = (182, 281); // true
// let test2 = (34, 14); // false
// let test1 = (3589578, 5879385); //true
// let test1 = (22, 222); // false

console.log(sameFrequency(34, 14));

*/

/*
implement a function called,
areThere duplicated which accepts a variable number of arguments, 
and checks whether there are any duplicates among the arguments passed in

*/

function areThereDuplicates() {
  if (arguments.length < 2) {
    return false;
  }
  let collection = {};
  for (let i = 0; i < arguments.length; i++) {
    let values = arguments[i];
    collection[values] ? collection[values]++ : (collection[values] = 1);
  }

  for (let args in collection) {
    if (collection[args] > 1) {
      return true;
    }
  }
  return false;
}

console.log(areThereDuplicates(1, 2, 2));
