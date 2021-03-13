/*
Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits
o(N)

*/

function sameFrequency(int1, int2) {
  // variables null or not same lentgh?
  // false
  int1 = int1.toString();
  int2 = int2.toString();
  if (int1.length != int2.length) {
    return false;
  }
  // how we break the int into smaller numbers?
  // create an object that represents the frequency of each
  let fqCounter1 = {};
  let fqCounter2 = {};
  for (let i = 0; i < int1.length; i++) {
    fqCounter1[int1[i]] = (fqCounter1[int1[i]] || 0) + 1;
    fqCounter2[int2[i]] = (fqCounter2[int2[i]] || 0) + 1;
  }

  // console.log(fqCounter1);
  // console.log(fqCounter2);
  for (let key in fqCounter1) {
    // console.log(key);
    if (!(key in fqCounter2)) {
      return false;
    }
    if (fqCounter2[key] !== fqCounter1[key]) {
      return false;
    }
  }

  return true;
}

// console.log(sameFrequency(34, 14)) // false
// console.log(sameFrequency(182, 281)) // true
// console.log(sameFrequency(3589578, 5879385)); // true
// console.log(sameFrequency(22, 222)); // False
