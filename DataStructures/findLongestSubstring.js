/*
return the length of the longest substring with all distinct characters
*/
function findLongestSubString(str) {
    let longest = 0;
    let seen = {};
    let start = 0;
   
    for (let i = 0; i < str.length; i++) {
      let char = str[i];
      if (seen[char]) {
        start = Math.max(start, seen[char]);
        console.log(start, 'start');
      }
      // index - beginning of substring + 1 (to include current in count)
      longest = Math.max(longest, i - start + 1);
      console.log(longest,'longest');
      // store the index of the next char so as to not double count
      seen[char] = i + 1;
      console.log(seen, 'seen')
    }
    return longest;
}


// console.log(findLongestSubString('')) // 0
// console.log(findLongestSubString('rithmschool')) // 7
// console.log(findLongestSubString('thisisawesome')) // 5
// console.log(findLongestSubString('thecatinthehat')) // 5
// console.log(findLongestSubString('bbbbbb')) // 1
console.log(findLongestSubString('longestsubstring')) // 7