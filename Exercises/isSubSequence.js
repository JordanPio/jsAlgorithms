/*
write a function called isSubsequence which take in two strings and checks wheather the characters in the first string form a subsequence of the characters in the second string.
In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing.
*/

function isSubSequence(str1, str2) {
  // check if str2 is at least same size as str1 since we are comparing otherwise return false
  // what happends if str1 is empty ?  return false
  if (str2.length < str1.length || str1.length <= 0) {
    return false;
  }
  // are both strings lower case? are we checking for that ? // ignore that

  // create two pointers since str1 is always smaller than str2 we will loop through the second one

  let k = 0;
  for (let i = 0; i < str2.length; i++) {
    console.log(str1[k], "compared with ", str2[i]);

    if (str1[k] === str2[i]) {
      k += 1;
    }
    if (k === str1.length) {
      return true;
    }
  }
  return false;
}
// some inputs and outputs
// console.log(isSubSequence('hello', 'hello world')) // true
// console.log(isSubSequence('sing', 'sting')) // true
// console.log(isSubSequence('abc', 'abracadabra')) // true
// console.log(isSubSequence('abc', 'acb')) // false (order matters)
// console.log(isSubSequence("", "ac")); // false (order matters)
