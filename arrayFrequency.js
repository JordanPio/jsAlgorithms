// Write a function called same, which accepts two arrays.
// the function should return true if every value in the array has its corresponding value square in the second array.
// the frequency of values must be the same

//version 1 not the best solution because we are using indexOf which is an inside
// Loop

/*
function same1(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    // loop over the first array
    let correctIndex = arr2.indexOf(arr1[i] ** 2); // call indexOf and pass the square of each vale on array 1 (we are asking what is the square of index 1)
    if (correctIndex === -1) {
      // (-1) meaning its not in there!!! so we are checking if it is not in there
      return false; // return false and we are done
    }
    arr2.splice(correctIndex, 1); // if true that removes the index from the second array so we are not comparing it anymore
  }
  return true;
}


// problem with the first solution is nested loop which makes it o(n²)

console.log(same1([1, 2, 3, 2], [9, 1, 4, 4]));
*/

/*
//version 2

function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    // check the length is the same
    return false;
  }

  let frequencyCounter1 = {};
  let frequencyCounter2 = {};

  for (let val of arr1) {
    // for each value in array 1
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1; // we are adding one to frequency counter if it is already in there or we are initializing to one
    // it actually shows each time each element occur in that list
  }
  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }
  console.log(frequencyCounter1);
  console.log(frequencyCounter2);

  for (let key in frequencyCounter1) {
    if (!(key ** 2 in frequencyCounter2)) {
      // will check if each key on counter 1 is not a square on counter 2
      return false; // deny
    }
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      // check if the values correspond. Example, do we have 2 twos? do we have 2 4s? and so on
      return false;
    }
  }
  return true;
}

console.log(same([1, 2, 3, 2], [9, 1, 4, 4]));
*/
// Write a function called same, which accepts two arrays.
// the function should return true if every value in the array has its corresponding value square in the second array.
// the frequency of values must be the same

// Write a function called same, which accepts two arrays.
// the function should return true if every value in the array has its corresponding value square in the second array.
// the frequency of values must be the same

// function same(arr1, arr2) {
//   // check if the number of items are equall so we know each value has a pair
//   if (arr1.length !== arr2.length) {
//     return false;
//   }

//   // check for frequency of values
//   //create 2 placeholders which will count the frequency of each value

//   let fqc1 = {};
//   let fqc2 = {};

//   //interate over each array and count the frequency of each value on it

//   for (let value of arr1) {
//     fqc1[value] = ++fqc1[value] || 0;
//   }

//   for (let value of arr2) {
//     fqc2[value] = ++fqc2[value] || 0;
//   }
//   // check if we can find the squared value in arr1 placeholder in arr2

//   for (let key in fqc1) {
//     if (!(key ** 2 in fqc2)) {
//       return false;
//     }
//     if (fqc2[key ** 2] !== fqc1[key]) {
//       return false;
//     }
//   }
//   return true;
// }

function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  let fqc1 = {};
  let fqc2 = {};

  for (let i = 0; i < arr1.length; i++) {
    fqc1[arr1[i]] ? fqc1[arr1[i]]++ : (fqc1[arr1[i]] = 1);
  }

  for (let i = 0; i < arr2.length; i++) {
    fqc2[arr2[i]] ? fqc2[arr2[i]]++ : (fqc2[arr2[i]] = 1);
  }

  console.log(fqc1, fqc2);

  for (let i = 0; i < arr1.length; i++) {
    if (!(arr1[i] ** 2 in fqc2)) {
      return false;
    }
    if (fqc2[i ** 2] !== fqc1[i]) {
      return false;
    }
  }
  return true;
}

console.log(same([1, 2, 3, 2, 5, 2], [9, 1, 4, 4, 25, 4]));
console.log(same([1, 2, 3, 2], [9, 1, 4, 4]));
