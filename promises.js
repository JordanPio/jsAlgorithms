const { forEach } = require("lodash");
const { default: PQueue } = require("p-queue");

const queue = new PQueue({ concurrency: 6 });

let resultsInOrder = [];

const recursivelyExecutePromises = async promises => {
  // TODO: Complete the getAverageOfObjects function
  // await promises.reduce((promiseChain, currentFunction) => promiseChain.then(currentFunction), Promise.resolve())
  return await promises.reduce((promiseChain, currentFunction) => promiseChain.then(currentFunction), Promise.resolve()); // best CaseScenario

  // await promises.reduce((promiseChain, currentFunction) => promiseChain.then(currentFunction), Promise.resolve());
  // return console.log(resultsInOrder);
  // promises.reduce((series, task) => (series.then(task)), Promise.resolve()) // solution +-

  //
  // promises.reduce(function(series, task) {
  //   return(series.then(task))
  // }, Promise.resolve() )

  if (promises.length < 0) {
    return 0;
  }
  // await recursivelyExecutePromises(promises.slice(0, -1))
  // promises[0].then(console.log())
};

const asynchronousFunction = (value, timeout) => {
  return new Promise(resolve => {
    const delay = Math.round(timeout || Math.random() * 1000);

    setTimeout(() => {
      const result = `${value}-${delay}`;
      resultsInOrder.push(result);
      result;
      // console.log("test BIXA");

      resolve(resultsInOrder);
    }, delay);
  });
};

// const items = [asynchronousFunction("1", 10), asynchronousFunction("2", 4), asynchronousFunction("3", 6)];

function asyncTest(param1, param2) {
  console.log("test");
}

// recursivelyExecutePromises(items).then(console.log())
// console.log(recursivelyExecutePromises(items).then(console.log))
// recursivelyExecutePromises(items).then((console.log)); // Working well Printing last one
// recursivelyExecutePromises(items).then(console.log); // Working well Printing last one
// console.log(asynchronousFunction("1", 10));
// Promise.all(items).then(values => console.log(values)); // ok
asynchronousFunction("1", 10).then(value => console.log(value));

// asyncTest(0,123 )
