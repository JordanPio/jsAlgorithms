const posts = [
  { title: "Post One", body: "This is post One" },
  { title: "Post two", body: "This is post two" },
  { title: "Post 3", body: "This is post 3" }
];

function getPosts() {
  setTimeout(() => {
    posts.forEach((post, index) => {
      console.log(post.title);
    });
  }, 1000);
}

function createPost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);
      // it will run after posts.push
      const error = false;
      if (!error) {
        resolve("Success");
      } else {
        reject("Error: Someting Wrong");
      }
    }, 2000);
  });
}

// createPost({ title: "Post 4", body: "This is post 4" }).then(getPosts).catch(err => console.log(err)); // happen in 2 sec
// createPost({ title: "Post 4", body: "This is post 4" }).then((value) => console.log(value))
// Promise.resolve(createPost({ title: "Post 4", body: "This is post 4" })).then()

//Promise.all

// const promise0 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 3000, "Goodbye 3000");
// });
// const promise1 = Promise.resolve("Hello World");
// const promise2 = 10;
// const promise3 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 2000, "Goodbye");
// });

const asynchronousFunction = (value, timeout) => () =>
  new Promise(resolve => {
    const delay = Math.round(timeout || Math.random() * 1000);

    setTimeout(() => {
      const result = `${value}-${delay}`;

      result;
      resolve(result);
    }, delay);
  });

const items = [asynchronousFunction("1", 10), asynchronousFunction("2", 4), asynchronousFunction("3", 6)];

const recursionPromise = async items => {
  // console.log(items);

  
  if (!items || items.length <= 0) {
    return console.log("done");
  }
  // Promise.resolve(items[2]).then(console.log); // work for printinng out to console.
  // Promise.resolve(items[0]).then(console.log) // work for printinng out to console.
  await Promise.resolve(items[0]).then(console.log);
  recursionPromise(items.slice(1)); // work for printinng out to console.
};

const promise0 = new Promise((resolve, reject) => {
  setTimeout(resolve, 3000, "Goodbye 3000");
});
const promise1 = Promise.resolve("Hello World");
const promise2 = 10;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 2000, "Goodbye");
});

let arr1 = [promise0, promise1, promise2, promise3];
// Promise.all(arr1).then(values => console.log(values)); // ok
// Promise.all(items).then(values => console.log(values)); // ok

recursionPromise(arr1);

// async function runPromise(arr) {
//   return await arr.reduce((series, task) => series.then(task), Promise.resolve()); // solution +-
// }

// // runPromise(arr1).then(values => console.log(values));
