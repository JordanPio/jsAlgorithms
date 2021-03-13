// Write a function which takes in a string and returns counts of
// each character in the string

// Version 1
function charCount1(str) {
  // make object to return at the end
  var result = {};
  // loop over string, for each character
  for (let i = 0; i < str.length; i++) {
    var char = str[i].toLowerCase();
    // if char is a number / letter AND is a key in object, add one to count
    if (result[char] > 0) {
      result[char]++;
    }
    // if char is a number / letter and not in object, add to object and set value to 1
    else {
      result[char] = 1;
    }
  }
  // if character is something else (space, period, etc.) dont do anything
  return result;
  // return object at the end
}

console.log(charCount1("ello There!"));

// Version 2

function charCount(str) {
  let obj = {}; // make the object to return at the end
  for (let char of str) {
    // loop over string for each character
    if (isAlphaNumeric(char)) {
      char = char.toLowerCase(); // make it lowercase
      obj[char] = ++obj[char] || 1;
    }
  }
  return obj;
}

// checking for alpha Numeric
function isAlphaNumeric(char) {
  let code = char.charCodeAt(0);
  if (
    !(code > 47 && code < 58) && //numeric (0-9)
    !(code > 64 && code < 91) && //upper alpha (A-Z)
    !(code > 96 && code < 123) // lower alpha (a-z)
  ) {
    return false;
  }
  return true;
}

console.log(charCount("ello There!"));
