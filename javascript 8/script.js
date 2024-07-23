// array method
// for each ek ek ko call krta hai

// let arr = [1, 2, 3, 4, 5]  
// let print = function (el) {
//   console.log(el);
// };
// arr.forEach(print);

// arr.forEach(function(el) {
//   console.log(el);
// });
//el means element of array

// let arr1 = [{name : "aman",marks : 23},
//  {name : "jhon",marks : 24 },
// {name : "rancho",marks : 25}
// ]
// arr1.forEach((student)=>{
//   console.log(student.name,student.marks);
// })

// map function 
let num = [1, 2, 3, 4, 5];
// num ke under ki value ko element ki trah lega or usko ek new array mein return kr dega
let double = num.map((el) => {
  console.log(el * 2);
});

let arr1 = [
  { name: "aman", marks: 23 },
  { name: "jhon", marks: 24 },
  { name: "rancho", marks: 25 }
];
let gpa = arr1.map((el) => {
  return el.marks / 10
})
// console.log(gpa)

// filter function
// // filter ek new array mein return krta hai
// if callback function return true then that element will be added in new array wrna false dedeta hai 
let arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let ans = arr2.filter((el) => {
  return el % 2 == 0;
});
// console.log(ans)

// every function
// every function return true if all the element of array satisfy the condition otherwise return false
// some function 
// some function return true if any one element of array satisfy the condition otherwise return false

let x = [2, 3, 4, 6].every((el) => {
  return el % 2 == 0;
})
console.log(x)
let y = [2, 4, 6].every((el) => {
  return el % 2 == 0;
})
console.log(y)

// reduce method                     
// reduce the aaray to a single value
// arr.reduce(reducer function with two arguments accumulator and current value))
// accumulator is the value which is returned from previous iteration
let nums = [1, 2, 3, 4, 5]
let sum = nums.reduce((res, el) => {// phele 1+2=3
  console.log(res) // phele hi res store ho jata hai
  return res + el;
})
console.log(sum);
// max element 
// using for loop 
                                          
let array = [1, 2, 3, 9, 8, 7, 6, 5, 4]
// let max = 0;
// for (let i = 0; i < array.length; i++) {
//   if (max < array[i]) {
//     max = array[i];
//   }
// }
// console.log(max);
// using reduce method
// (0,1)=>1
// (1,2)=>2
// (2,3)=>3
// (3,9)=>9
// (9,8)=>9
// (9,7)=>9
let max = arr.reduce((max, el) => {
  if (max < el) {
    max = el;
  }
  return max;
})
console.log(max)
// means that if max is less than el then max will be equal to el otherwise max will be same
// (0,1)=>1
// (1,2)=>2
// (2,3)=>3
// (3,9)=>9
// (9,8)=>9
// (9,7)=>9

//q1 every element multiple of 10
let arr3 = [10, 20, 30, 40, 50]
let answer = arr3.every((el) => {
  return el % 10 == 0;
})
console.log(answer)
// q2 minimum Value
let min = arr3.reduce((min, el) => {
  if (min < el) {
    return min;
  } else {
    return el;
  }
})
// console.log(min)

// using function
function getMin(arr3) {
  let min = arr3.reduce((min, el) => {
    if (min < el) {
      return min;
    } else {
      return el;
    }
  });
  return min;
}
// go to chrome console and try it call getMin
