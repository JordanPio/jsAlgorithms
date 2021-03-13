function search(arr, val) {
  let min = 0;
  let max = arr.length - 1;
  console.log(max);

  while (min <= max) {
    let middle = Math.floor((min + max) / 2);
    let currentElement = arr[middle];

    if (arr[middle] < val) {
      min = middle + 1;
      console.log(min);
    } else if (arr[middle] > val) {
      max = middle - 1;
      console.log(max);
    } else {
      return middle;
    }
  }
  return -1;
}

let test = [1, 2, 3, 4, 5, 25, 35, 36, 38, 41, 42, 45, 62, 73, 81, 90];
let test2 = [1, 2, 3, 4, 7, 9];
console.log(search(test2, 9));
