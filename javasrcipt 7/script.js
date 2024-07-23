
// this is a keyword-that refers to the object that is executing the current function.
const student = {
  name: "sumama",
  age: 20,
  eng: 50,
  math: 54,
  science: 70,
  getAvg() {
    console.log(this)
    let avg = (this.eng + this.math + this.science) / 3;
    console.log(avg)
  }
}
// console.log(student)
// console.log(student.getAvg())
// console.log(this)

// try and catch
// try statement is used to test a block of code for errors.
// catch statement is used to handle the error.
try {
  console.log(a)
}
catch (err) {
  console.log("error occured")
  console.log(err)
}
console.log("hello wrold")
// arrow function
// const sum = (a,b) => {
//   return a+b
// }
const sum = (a, b) => a + b//also we can write like this one line code only 
console.log(sum(2, 3))

// const cube =(n)=> n*n*n
const cube = (n) => {
  return n * n * n;
}
console.log(cube(2))

// const mul = (a,b) => a*b//arrow function shortand
// implicit return means understood 
const mul = (a, b) => (a * b)
console.log(mul(2, 3))
// setTimeout is used to delay the execution of a function for a given number of milliseconds.
// setTimeout(function, timeout) //fucntion is a callback function here 

// console.log("hii")
// setTimeout(() => {
//   console.log("hero zero")
// }, 3000);
// console.log("welcom to")

// setInterval is used to repeatedly execute a function for a given number of milliseconds.
// let id = setInterval(() => {
//   console.log("hello world")
// }, 2000)

// clearInterval(id)

// this with Arrow function 
// this for function scope is depend on the object
// arrow function lexical scope 
const students = {
  name: "sumama",
  age: 20,
  marks: 64,
  prop: this,//global scope 

  getName: function () {
    console.log(this);// obj.func => this = student 
    return this.name;
  },
  getMarks: () => {
    console.log(this);// parent's scope => obj.func => this = student scope => window object
    return this.marks;
  },
  getInfo: function () {
    setTimeout(() => {
      console.log(this)//here parent scope is student obeject bcz arrow func is in function  
    }, 2000);
  },
  getInfo2: function () {
    setTimeout(function () {
      console.log(this)//here windowobeject bcz func is in function  
    }, 2000)
  }
};
// console.log(students)

// q1
const stu = (n) => n * n
// console.log(stu(2))

// q2
// let id = setInterval(() => {
//   console.log("hello world")
// }, 2000);

// setTimeout(() => {
//   clearInterval(id)
//   console.log("clear interval run")
// }, 10000);
4
// practice q1
const arrayAverage = (arr) => {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  } return total / arr.length;
};

let arr = [1, 2, 3, 4, 5, 6];
console.log(arrayAverage(arr));
