// call stack
// last in first out means that the last function that was called is the first to be executed 
// stack is a data structure that stores the order of the function calls

function one() {
  return 1;
}
function two() {
  return one() + one();
}
function three() {
  let ans = two() + one();//function call mai build hota hai 
  console.log(ans)
}
three();

// Breakpoints 
// go browser inspect -> source -> script.js -> line no. -> click on the line no. -> click on the green arrow -> it will take 

// js is single threaded language
// single thread means that only one thing can be executed at a time

// synchrous nature -> one thing at a time and sequnce is followed
// asynchrous nature -> multiple things at a time and sequnce is not followed 
// js act as a asycnchrous nature language

// callback hell -> callback hell is a nested callback function 


// h1 = document.querySelector("h1")

// function changeColor(color, delay, nextColorChange) {
//   setTimeout(() => {
//     h1.style.color = color;
//     if (nextColorChange) nextColorChange();
//   }, delay)
// }
// changeColor("red", 1000, () => {
//   changeColor("orange", 1000, () => {
//     changeColor("yellow", 1000, () => {
//       changeColor("green", 1000, () => {
//         changeColor("blue", 1000, () => {
//           changeColor("purple", 1000)
//         })
//       })
//     })
//   })
// })

// using promise method
h1 = document.querySelector("h1")
function changeColor(color, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let num = Math.floor(Math.random() * 5) + 1;
      if (num > 3) {
        reject("promise rejected")//error lane ke liye use kr rhe hai h
      }

      h1.style.color = color;
      resolve("color changed!");
    }, delay)
  })
}

// try{
// changeColor("red", 1000)
//   .then(() => {
//     return changeColor("orange", 1000);
//   })
//   .then(() => {
//     return changeColor("green", 1000);
//   })
//   .then(() => {
//     return changeColor("blue", 1000);
//   })
//   .then(() => {
//     return changeColor("purple", 1000);
//   })
// }catch(err){
//    console.log('error caught')
//    console.log(err)
//  }

// another method use of async
async function demo() {
  try {
    await changeColor("red", 1000)
    await changeColor("orange", 1000)
    await changeColor("green", 1000)
    await changeColor("blue", 1000)
    changeColor("purple", 1000)
  } catch (err) {
    console.log('error caught')
    console.log(err)
  }

  console.log('apple')
  console.log('banana')
}
console.log(demo())

// callback very difficult to understand codes
// thats why we learn promises and async await

// promises -> promises are used to handle asynchrous nature of js
// the promise object represents the eventual completion or failure of an asynchronous operation and its resulting value.
// promises is object they have (resolve and reject )
// promises  methods are then() and catch()
// then() is used to handle the value of promises
// catch() is used to handle the error of promises


// function savatoDb(data) {
//   return new Promise((resolve, reject) => {
//     let internerSpeed = Math.floor(Math.random() * 10) + 1;
//     if (internerSpeed > 4) {
//       resolve("success: data was saved");
//     } else {
//       reject("failed: data was not saved")
//     }
//   });
// }

// savatoDb("hero zero")
//   .then((result) => {
//     console.log("data1 saved")
//     console.log("result of promise", result)
//     return savatoDb("sumama")
//   })
//   .then((result) => {
//     console.log("data2 saved")
//     console.log("result of promise", result)
//     return savatoDb("sharadah mam")
//   })
//   .then((result) => {
//     console.log("data3 saved")
//     console.log("result of promise", result)
//   })
//   .catch((error) => {
//     console.log("promise was rejected")
//     console.log("error of promise", error)

//   })


// async await -> async await is a special syntax that makes it easier to write promise-based code.
// await keyword is used to wait for the promise to resolve before moving on to the next line of code.