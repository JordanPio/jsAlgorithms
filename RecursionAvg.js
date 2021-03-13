// /*
// Some more clarifications:

// - The resulting object should be the combined shape of the objects in the 
// function argument. _eg: for these objects..._

// `[{a:1, b:2}, {a:3, b:4, c:5}]`

// _...the result would be..._

// `{a:2, b:3, c:5}`

// - When getting the average of a value, divide the total by the number of 
// times that value is found as opposed to the total number of objects. _In the above example, 
// c is divided by 1, not 2 because it only appears once_

// */


// function recursionAvg(obj, avg=0) {

//   // how many items inside each array? which one is bigger ?

//   // it needs to be recursive because we need to get rid of whatever we've done and move to different array and see if there was any other value left

//   //helper function
//   let result = {}




//   //baseline

//   // new input

// for (let i = 0; i < obj.length; i++) {
//   // console.log(Object.keys(obj[i]))
  
//   result[Object.keys(obj[i])] = Object.values(obj[i])
  
// }

//   // for (let key in obj[1]) {
//   console.log(result)
    
//   // }


// }
const statsObjects = [
  {
    hits: 100,
    misses: 30,
    chillies: {
      jalapeno: 2,
      birdsEye: 4
    }
  },
  {
    hits: 20,
    misses: 10,
    jumps: 5,
    chillies: {
      jalapeno: 8,
      birdsEye: 7
    }
  }
];

// console.log(recursionAvg(statsObjects))


// Solution Complicated DELETE

function getParts(array, result) {
  function iter(o, r) {
      Object.keys(o).forEach(function (k) {
          if (o[k] && typeof o[k] === 'object') {
              return iter(o[k], r[k] = r[k] || {});
          }
          r[k] = (r[k] || 0) + o[k];
      });
  }

  function avr(o) {
      Object.keys(o).forEach(function (k) {
          if (o[k] && typeof o[k] === 'object') {
              return avr(o[k]);
          }
          o[k] = o[k] /statsObjects.length;
      });
  }

  statsObjects.forEach(function (a) {
      iter(a, result);
  });
  avr(result);
}

var data = [{ x: { x1: 1 }, y: { yt: 0, zt: 4, qa: 3, ft: 0, } }, { x: { x1: 5 }, y: { yt: 10, zt: 2, qa: 0, ft: 0, } }],
  result = {};

getParts(statsObjects, result);

console.log(result);



