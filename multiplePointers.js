/*
Write a function called sumZero which accepts a sorted array of integers.
The function should find the first pair where the sum is 0.
Return an array that includes both value that sum to zero
or undefined if a pair does not exist

sorted = in order
find the first pair where the sum is 0
return an array that includes both values that sum to zero

*/

// function sumZero(arr) {
//   let left = 0; // set pointer at the beginning of array
//   let right = arr.length - 1; // set pointer at the end of array

//   while (left < right) {
//     let sum = arr[left] + arr[right];

//     if (sum === 0) {
//       return [arr[left], arr[right]];
//     } else if (sum > 0) {
//       right--;
//     } else {
//       left++;
//     }
//   }
// }

//find the first pairs that adds to zero
// well you know its a sorted array with negative numbers at the beginning
// and positive numbers at the end
// so set a cursor at the end and another at the beginning and start adding the numbers

function sumZero(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let sum = arr[left] + arr[right];

    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}

// remmeber right always goes down first

console.log(sumZero([-4, -3, -2, -1, 0, 1, 2, 3, 10]));

/* 
function sumZero(arr) {
  // the index left and right refer to array index or item position!!!!
  let left = 0; // set to start of the array - this is the index number position and zero is the beginning
  let right = arr.length - 1; // set to end of array - index position

  while (left < right) {
    // sum the first item of the array with the last one!!!!
    let sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      // move the right to left position
      // this is making move index position
      right--;
    } else {
      // move left to right position since it started in position 0
      left++;
    }
  }
}

console.log(sumZero([-4, -3, -2, -1, 0, 1, 2, 3, 10]));

*/

/* Example 2
Implement a function called countIniqueValues,
which accepts a sorted array, and counts the the amount of unique values in the array.
there can be negative numbers in the array, but it will always be sorted.

Its not about find the unique value and count
 how many times they appear (This WRONG) - Remember ask questions to understand the problem - give an example of the solution so you can understand the problem
-- its about count how many values are different in the array and not really returning them
so we are pretty much getting rid of repetitive values
sorted array
negative numbers are accepted
what if the array is empty? return 0

*/

// function countUniqueValues(arr) {
//   if (arr.length === 0) return 0; // in case the array is empty, this will prevent to return 1
//   var i = 0;
//   for (var j = 1; j < arr.length; j++) {
//     if (arr[i] !== arr[j]) {
//       i++; // if they are not equal we move i up and set it up to j  value
//       arr[i] = arr[j]; // we setup i value = whatever is j
//     }
//     console.log(i, j); // when you log u will see that i is at position 4 but remember the total number of items is 5 since array index started at 0
//   }
//   return i + 1; // this is returning the index and since all arrays start at 0 we need to add +1 to reflect the real number
// }

function countUniqueValues(arr) {
  if (arr.length === 0) {
    return 0;
  }

  let i = 0;
  for (j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
}

console.log(countUniqueValues([-1, -1, 1, 2, 2, 3, 3, 4, 4]));


