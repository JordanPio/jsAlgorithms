/*
This pattern involves creating a window which can be either be an array 
or a number from one position to another


Depending on a certain condition, the window either increases or closes ( and a new window is created)
very useful for keeping track of a subset of data in AN ARRAY OR STRING

*/

/*
The problem, write a function called maxSubarraySum which accepts
an array of integers and number called n. The function should calculate the maximum sum of n
consecutive elements in the array

*/

function maxSubarraySum(arr, num) {
  let maxSum = 0;
  let tempSum = 0;
  // check if the array is longer than number of numbers required to do the sum

  if (arr.length < num) return null;

  // sum the first 3 numbers of the array
  //enquanto I for menor que 3 continua interando, caso contratio pare
  for (let i = 0; i < num; i++) {
    // feit a some does numeros e nao index arr[i] - sigfinica index do array
    maxSum += arr[i];
  }
  tempSum = maxSum;

  // now we loop through the array but we skip the first 3
  for (let i = num; i < arr.length; i++) {
    // we are subtracting index 0 value and adding the index 4 value
    tempSum = tempSum - arr[i - num] + arr[i];
    // now we use a mathematical formula, its like a if condition to check which one
    // is higher and then we update the maxSum
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}


function maxSum(arr, num) {
  if (arr.length < num) {
    return null
  }

  let maxSum = 0
  let tempSum = 0

  for(let i = 0; i < num  ;i++) {
    maxSum += arr[i]
  }

  tempSum = maxSum

  for (i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i]
  
    maxSum = Math.max(maxSum, tempSum)
  }
return maxSum
}

console.log(maxSubarraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3));
