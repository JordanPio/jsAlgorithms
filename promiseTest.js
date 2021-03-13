// const recursiveCall = index => {
//   return new Promise(resolve => {
//     console.log(index);
//     if (index < 3) {
//       return resolve(recursiveCall(++index));
//     } else {
//       return resolve();
//     }
//   });
// };

// recursiveCall(0).then(() => console.log("done"));

const recursiveCall = (arr, n) => {
  // console.log(arr[n]);
  let counter = arr.length - 1;
  console.log(n);
  console.log(arr[n]);

  if (n < arr.length) {
    return recursiveCall(arr, n + 1);
  } else {
    return arr[n].then(() => console.log("done"));
  }
};

const asynchronousFunction = (value, timeout) => () =>
  new Promise(resolve => {
    const delay = Math.round(timeout || Math.random() * 1000);

    setTimeout(() => {
      const result = `${value}-${delay}`;
      resultsInOrder.push(result);
      // result;
      resolve(console.log("test"));
    }, delay);
  });

const items = [asynchronousFunction("1", 10), asynchronousFunction("2", 4), asynchronousFunction("3", 6)];

// recursiveCall(items, 0).then(() => console.log("done")); // quase la Executar depois
// asynchronousFunction("1", 10).then((value) => console.log(value))
asynchronousFunction("1", 10)

// console.log(asynchronousFunction("1", 10).then((value)=> console.log(value)))
Promise.resolve(asynchronousFunction("1", 10))