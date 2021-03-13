/*

Given two strings, write a function to determine if the second string
is an anagram of the first. an anagram is a word, phrase or named formed by
rearranging the letters of another, such as cinema, formed from iceman.

You may assume the string contains only lowercase alphabets


*/

function checkAana(str1, str2) {}

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
countUniqueValues
Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted.
use 2 Pointers
*/

function countUniqueValues(params) {}

countUniqueValues([1, 1, 1, 1, 1, 2]); // 2
countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]); // 7
countUniqueValues([]); // 0
countUniqueValues([-2, -1, -1, 0, 1]); // 4

/*
Write a function called maxSubarraySum which accepts an array of integers and a number called n. The function should calculate the maximum sum of n consecutive elements in the array.
use SLidingWindow
*/

maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2); // 10
maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4); // 17
maxSubarraySum([4, 2, 1, 6], 1); // 6
maxSubarraySum([4, 2, 1, 6, 2], 4); // 13
maxSubarraySum([], 4); // null

