// function averagePair(arr, avg) {
//   let left = 0;
//   let right = arr.length - 1;

//   while (left < right) {
//     let resultado = (arr[left] + arr[right]) / 2;
//     if (resultado === avg) {
//       return true;
//     } else if (resultado > avg) {
//       right--;
//     }
//     left++;
//   }
//   return false;
// }

// console.log(averagePair([1, 2, 3], 2.5)); // true
// console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)); // true
// console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1)); // false
// console.log(averagePair([], 4)); // false

// function isSubsequence(first, second) {
//   if (second.length < first.length) {
//     return false;
//   }
//   for (let values in first) {
//     if (!second[values]) {
//       return false;
//     }
//   }
//   return true;
// }

// function isSubsequence(first, second) {
//   if (second.length < first.length) {
//     return false;
//   }

//   let j = 0;

//   for (let i = 0; i < first.length; i++) {
//     if (first[i] !== second[j]) {
//       j++;
//     }
//   }
// }

// function isSubsequence(first, second) {
//   if (second.length < first.length) {
//     return false;
//   }

//   let j = 0;

//   for (let i = 0; i < second.length; i++) {
//     if (first[j] === second[i]) {
//       j++;
//     }
//     if (j === first.length) return true;
//   }
//   return false;
// }

function isSubsequence(first, second) {
  if (second.length < first.length) {
    return false;
  }

  let j = 0;

  for (let i = 0; i < second.length; i++) {
    if (second[i] === first[j]) {
      j++;
    }
    if (j === first.length) {
      return true;
    }
  }
  return false;
}

console.log(isSubsequence("hello", "hello world")); // true
console.log(isSubsequence("sing", "sting")); // true
console.log(isSubsequence("abc", "abracadabra")); // true
console.log(isSubsequence("abc", "acb")); // false
