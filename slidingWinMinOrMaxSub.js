function maxSubaraaySum(arr, n) {
  // check for edge cases

  if (arr.length < n) {
    return null;
  }

  let tempSum = 0;
  let maxSum = 0;

  for (let i = 0; i < n; i++) {
    tempSum = tempSum + arr[i];
  }
  maxSum = tempSum;

  // console.log("first log", maxSum, tempSum);

  // loop through the whole array and subtract 1 position and add one position to the total value and update maxSum if tempSum is bigger

  for (let i = n; i < arr.length; i++) {
    tempSum = tempSum - arr[i - n] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}

// console.log(maxSubaraaySum([100, 200, 300, 400], 2)); // 700
// console.log(maxSubaraaySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)); // 39
// console.log(maxSubaraaySum([-3, 4, 0, -2, 6, -1], 2)); // 5
// console.log(maxSubaraaySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2)); // 5
// console.log(maxSubaraaySum([2, 3], 3)); // null

/*
write a function which accepts two paramentes an array of positive int and a positive int
this function should return the minimal length of a contiguous subarray of which the sum is great than or equal to the integer passed to the function. if there isnt one return 0
*/
// minimal sum of integers that is >= n, we want to return how many numbers we need to add to get to that specific n

function minSubArrayLen(arr, n) {
  if (!arr || arr.length <= 0) {
    return null;
  }

  /*
  complex conditions 
the idea is getting 2 pointers starting at the same position 1 called start and 1 called end
perform a while loop which will end only if start which is the last pointer to be updated hit arr.length

if total smaller than number and end smaller than arr.length
  we add to total, increment end pointer(first one to reach the end)

else we check if the total >= n
  if thats the case we update the minLen variable with the subtraction of end-total using max.min
  we subtract the start position number
  we increment the start position

  now if it doesnt satisfy any of the condition we break out of the loop because it means
  total < n and n hit the end of array // which means we cant keep subtracting with the start position as it will getlower and lower
  the last condition to be met is if the start arrive at the end as well in that case we exit the loop

we return min length and thats it



we finish the loop only if we satisfy the  condition in case the start reach the end of array or we break when we find the min length
//
*/

  let start = 0;
  let end = 0;
  let sum = 0;
  let minLen = Infinity;

  while (start < arr.length) {
    if (sum < n && end < arr.length) {
      sum += arr[end];
      end++;
    } else if (sum >= n) {
      minLen = Math.min(minLen, end - start); // do this first otherwise it will be zero
      sum -= arr[start];
      start++;
    } else {
      // break if sum < n and end = arr.length
      break;
    }
  }

  return minLen === Infinity ? 0 : minLen;
}

// console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7)); // 2
// console.log(minSubArrayLen([2, 3, 1,4, 3, 2, ], 7)); // 2
// console.log(minSubArrayLen([2, 1, 6, 5, 4], 9)); // 2
// console.log(minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52)); // 1
// console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39)); // 3
// console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 5)); // 5
// console.log(minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11)); // 2
// console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95)); // 0

function findLongestSubstring(str) {
  let longest = 0; // record longest
  let seen = {}; // used to record the index of each item
  let start = 0;

  for (let i = 0; i < str.length; i++) {
    let char = str[i]; // character
    if (seen[char]) {
      start = Math.max(start, seen[char]); // comparing which one is bigger the last start= index value or current one
      // we do this to move the start position to the new index position
    }
    
    longest = Math.max(longest, i - start + 1); // record the longest by getting the max between current longest and (index - start position+1)
    seen[char] = i + 1;
    // console.log(seen); // its index of each letter starting from 1 and not zero
  }
  return longest;
}

// console.log(findLongestSubstring("")); // 0
// console.log(findLongestSubstring("rithmschool")); // 7
console.log(findLongestSubstring("thisisawesome")); // 6
// console.log(findLongestSubstring("thecatinthehat")); // 6
