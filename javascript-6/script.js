/* function definition (telling JS)
function functionName() {
  //do something 
}
 function calling (using the function)
functionName();*/

function Name() {
  console.log("Hello World");
}
// Name();

function print() {
  for (i = 0; i < 5; i++) {
    console.log(i);
  }
}
// print();

function isAdult() {
  let age = 18;
  if (age >= 18) {
    console.log("adult");
  } else {
    console.log("not adult");
  }
}
// isAdult();
// q1
function printPoem() {
  console.log("Twinkle, twinkle, little star,")
  console.log("How I wonder what you are!")
}
// printPoem(),

// function with argument 
// function orderwise chlti hai 
function printInfo(name, age) {
  console.log(`My name is ${name} and I am ${age} years old.`);
}
// printInfo("ziadu", 23);
// printInfo("suzain", 18);
// printInfo("kunziro");
// q2
function avgCalcu(a, b, c) {
  let avg = (a + b + c) / 3;
  console.log(avg)
}
// avgCalcu(10, 20, 30)//20
// avgCalcu(3, 3, 3)//3
// q3
function printTable(n) {
  for (let i = n; i <= n * 10; i = i + n) {
    console.log(i);
  }
}
// printTable(4);

// return keyword is used to return the value of a function
function sum(a, b) {
  return a + b;
}
// console.log(sum(sum(1, 2), 3))
// q4
function getSum(n) {
  let sum = 0;

  for (let i = 1; i <= n; i++) {
    sum = sum + i
  }
  return sum;
}
console.log(getSum(5))
console.log(getSum(100))
// q5
let arr = ["hi", "hello", "bye", "goodbye", "welcome"]
function concat(arr) {
  let result = "";
  for (let i = 0; i < arr.length; i++) {
    result = result + arr[i]
  }
  return result;
}
console.log(concat(arr))

// scope
// function scope means the variable which is declared inside the function is only accessible inside the function
// global scope means the variable which is declared outside the function is accessible inside the function
// block scope means the variable which is declared inside the block is accessible inside the block only => {} <=
// lexical scope means a variable defined outside a function can be accesed inside the another function defined after the variable declaration.but the oppt not possible for the variable defined inside the function.

function outerFucn() {
  let x = 5;
  let y = 6;
  function innerFunc() {//function scope
    console.log(x)
    console.log(y)
  }
  innerFunc();
}
// q6
let greet = "hello";//global scope
function changeGreet() {
  let greet =
    "asslam walikum";//function block
  console.log(greet);
  function innerGreet() {
    console.log("how are you")//lexical scope
  } innerGreet()
}
console.log("greet")
changeGreet();

// function expression is a way to create a function and assign it to a variable. nameless function
let sum1 = function (a, b) {
  return a + b;
}
console.log(sum1(1, 2))

// higher order function
function
  multipleGreet(func, count) {
  for (let i = 1; i <= count; i++) {
    func();
  }
}
let greets = function () {
  console.log("i love you 😘");
}
multipleGreet(greets, 5);

multipleGreet(function () { console.log("hii") }, 5);

// function returning function

function oddOrEvenFactory(request) {
  if (request === "odd") {
    return function (n) {
      console.log(!(n % 2 == 0));
    }
  } else if (request === "even") {
    return function (n) {
      console.log(n % 2 == 0)
    }
  } else {
    console.log("wrong request");
  }
}
let request = "odd"//even

const calculatorx = {
  add(a, b) {
    return a + b;
  },
  sub(a, b) {
    return a - b;
  },
  mul(a, b) {
    return a * b;
  }
}
// console.log(calculatorx.add(1, 2));
// practice q
// 1 
let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let num = 5;

function findNum() {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] > num) {
      console.log("yah yrr you are greater", i)
    }
  }
}
findNum();