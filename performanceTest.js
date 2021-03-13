const { performance } = require("perf_hooks");

// function addUpToLoop(n) {
//   let total = 0;
//   for (let i = 1; i <= n; i++) {
//     total += i;
//   }
//   return total;
// }

// Evaluating performance

// let time1 = performance.now();
// addUpToLoop(10000000000);
// let time2 = performance.now();
// console.log(`Time Elapsed ${time2 - time1 / 1000} seconds.`);

// function addUpToSimple(n) {
//   return (n * (n + 1)) / 2;
// }

// // console.log(addUpToLoop(10000));
// // check performance
// let time11 = performance.now();
// addUpToSimple(10000000000000000000000000);
// let time22 = performance.now();
// console.log(`Time Elapsed ${time22 - time11 / 1000} seconds.`);

// check performance

function addUpTo(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}

const t1 = performance.now();
addUpTo(10000000000000);
const t2 = performance.now();
console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`);
