const posts = [
  { title: "Post One", body: "This is post One" },
  { title: "Post two", body: "This is post two" },
  { title: "Post 3", body: "This is post 3" }
];

function getPosts() {
  setTimeout(() => {
    posts.forEach((post, index) => {
      console.log(post.title)
    });
  }, 1000);
}


function createPost(post, callback) {
  setTimeout(() => {
    posts.push(post)
    callback() // it will run after posts.push

  }, 2000)
}

// getPosts(); // happen in one sec

createPost({title: "Post 4", body: "This is post 4"}, getPosts) // happen in 2 sec