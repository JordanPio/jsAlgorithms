/*

Given two strings, write a function to determine if the second string
is an anagram of the first. an anagram is a word, phrase or named formed by
rearranging the letters of another, such as cinema, formed from iceman.

You may assume the string contains only lowercase alphabets


*/

// function checkAna(arr1, arr2) {
//   // check length is the same

//   if (arr1.length !== arr2.length) {
//     return false;
//   }

//   let fqCounter1 = {};
//   let fqCounter2 = {};

//   // check each time an element appear on a list and increment +1
//   for (const val of arr1) {
//     fqCounter1[val] = (fqCounter1[val] || 0) + 1;
//   }

//   for (const val of arr2) {
//     fqCounter2[val] = (fqCounter2[val] || 0) + 1;
//   }

//   console.log(fqCounter1);
//   console.log(fqCounter2);

//   for (const key in fqCounter1) {
//     if (!key in fqCounter2) {
//       return false;
//     }
//     if (fqCounter2[key] !== fqCounter1[key]) {
//       return false;
//     }
//   }
//   return true;
// }

// console.log(checkAna("aaz", "zza"));
// console.log(checkAna("", ""));
// console.log(checkAna("anagram", "nagaram"));
// console.log(checkAna("texttwisttime", "timetwisttext"));

// validAnagram("", ""); // true
// validAnagram("aaz", "zza"); // false
// validAnagram("anagram", "nagaram"); // true
// validAnagram("rat", "car"); // false) // false
// validAnagram("awesome", "awesom"); // false
// validAnagram("qwerty", "qeywrt"); // true
// validAnagram("texttwisttime", "timetwisttext"); // true

/*

// SOLUTION 2 using Frequency Counter 

function validAnagram(first, second) {
  if (first.length !== second.length) {
    return false;
  }

  let lookup = {};

  for (let i = 0; i < first.length; i++) {
    let letter = first[i]; // add the first letter inside a variable - this will prevent to type first[i] all the time
    // if letter exists, increment, otherwise set to 1
    lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
  }

  for (let i = 0; i < second.length; i++) {
    let letter = second[i];
    // cant find letter or letter is zero then its not an anagram
    if (!lookup[letter]) {
      return false;
    } else {
      lookup[letter] -= 1;
    }
  }
  return true;
}

*/

/*

Given two strings, write a function to determine if the second string
is an anagram of the first. an anagram is a word, phrase or named formed by
rearranging the letters of another, such as cinema, formed from iceman.

You may assume the string contains only lowercase alphabets


*/

// function validAnagram(first, second) {
//   // to be able to be an anagram we must check the length since if the number of
//   //characters doesnt match its not an anagram

//   if (first.length !== second.length) {
//     return false;
//   }

//   let lookup = {};

//   // for (let i = 0; i < first.length; i++) {
//   //   let letter = first[i];
//   //   lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
//   // }

//   for (let value of first) {
//     lookup[value] = ++lookup[value] || 1;
//   }

//   // for (let i = 0; i < second.length; i++) {
//   //   let letter = second[i];
//   //   if (!lookup[letter]) {
//   //     return false;
//   //   } else {
//   //     lookup[letter] -= 1;
//   //   }
//   // }

//   for (let value of second) {
//     if (!lookup[value]) {
//       return false;
//     } else {
//       --lookup[value];
//     }
//   }
//   return true;
// }

function validAnagram(first, second) {
  if (first.length !== second.length) {
    return false;
  }

  console.log(first.length);

  let lookup = {};

  for (i = 0; i < first.length; i++) {
    let letter = first[i];
    lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
  }

  for (i = 0; i < second.length; i++) {
    letter = second[i];
    if (!lookup[letter]) {
      return false;
    } else {
      lookup[letter]--;
    }
  }
  return true;
}

console.log(validAnagram("aaz", "zza")); // false
console.log(validAnagram("", "")); // true
console.log(validAnagram("anagram", "nagaram")); // true
console.log(validAnagram("texttwisttime", "timetwisttext")); // true
console.log(validAnagram([1, 1, 2], [3, 2, 1])); // false
console.log(validAnagram([1, 1, 2, 5, 3], [3, 1, 2, 1, 5])); // true

// write a function that checks if there are duplicate numbers inside an array or duplicate name

// const pets = ['monkey', 'chipanzee', 'fish', 'cat', 'dog', 'cat']

// function double() {

//   let lookupValue = {}
//   for (let values of pets) {
//     lookup[values] = look[values]++ || 1

//   }
// }
