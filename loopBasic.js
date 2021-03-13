/* Loops are for repeating an action
 
example log console 5 times saying something

 */

/* 
// basic for loop

for (let i = 0; i < 5; i++) {
  console.log("loop " + i);
}

// we could also decrement instead by starting at 5

for (let i = 5; i > 2; i--) {
  console.log("loop" + i);
}

// we can also use a break

for (let i = 0; i < 5; i++) {
  console.log("loop " + i);
  if (i === 3) {
    break;
  }
}

*/

const names = ["john", "bec", "sex", "test"];

let lookup = {};
for (let i = 0; i < names.length; i++) {
  lookup[names[i]] = lookup[names[i]]++ | 1;

  if (condition) {
  }
  console.log(names[i]);
}

//this will desconstruct the array
// it is a little bit slower than the normal for loop
for (name of names) {
  console.log(name);
}

/*

// FOR OBJECTS we can use a for loop or for In

const user = { firstName: "John", lastName: "Doe" };

for (key in user) {
  console.log(user[key]);
}


*/

// While Loop
// break condition also available

// let i = 0;

// // while (i < 10) {
// //   console.log(i);
// //   i++;
// //   if (i === 5) break;
// // }

// // do while loop
// // the difference is that this one will always run first time since it check the condition later
// // if you RUN the code below you will see that it still prints one
// // do {
// //   i++;
// //   if (i === 5) continue;
// //   console.log(i);
// // } while (i < 0);

// // for each loops througn an array and it needs to pass a callback function always
// const animals = ["cat", "dog", "horse", "sheep", "bird"];
// animals.forEach(animal => {
//   console.log(animal);
// });
