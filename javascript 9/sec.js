// default parameters 
function sum(a, b = 2) {
  console.log(a + b)
}
sum(2)//4
function sum1(a = 1, b) {
  console.log(a + b)
}
sum1(2, 3)
// spread means phelana 
// console.log(Math.min(1, 2, 3, 4, 5, 6, 7, 8, 9))
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// console.log(Math.min(...arr))
// console.log(Math.max(...arr))
// spread with array literals 
let arr1 = [1, 2, 3, 4, 5, 6, 7]//...arr1
let newArr = [...arr1, 8, 9, 10]
// console.log(newArr)

let odd = [1, 3, 5]
let even = [2, 4, 6]
let num = [...odd, ...even]
// console.log(num)
// spread with objects
const data = {
  name: "joni",
  age: 30
};
const newData = {
  ...data, email: "sumamakhan8@gmail", country: "india"
};
// console.log(newData)
let arr2 = [1, 2, 3, 4, 5, 6] //val
let obj1 = { ...arr2 }//obj -> key:value
// console.log(obj1)

// rest oppt to spread
// rest allows a function to take an indetermind number of arguments and bundle them into an array
// rest args ko collect krke single value mai return krdeta hai 
function sum2(...args1) {//argument
  for (let i = 0; i < args1.length; i++) {
    console.log("you gave us:", args1[i])
  }
}
// console.log(sum2(1, 2, 3, 4, 5))
// arrgument is collection in js sript by defult and they dont give error
// rest args are not array they are object
// rest args are not iterable
// rest give a collection of array 

function min(msg, ...args) {
  console.log(msg);
  return args.reduce((min, el) => {
    if (min > el) {
      return el;
    } else {
      return min
    }
  });
}
console.log(min("hello", 12, 32, 43, -20))
console.log(min(999, 12, 32, 43, -10))

// destructuring
// storing values of array into multiple variables
let names = ["sumama", "khan", "jhon", "senzo", "rinko", "reo", "zoro"]
// let winner = names[0]
// let runnerUp = names[1]
// let secrunnerUp = names[2]
let [winner, runnerUp, ...other] = names;
console.log(winner, runnerUp, "and other are", ...other)

// destructuring objects
const student = {
  name: "sumama",
  age: 30,
  country: "india",
  subjects: ["hin", "eng", "maths"],
  username: "suzi",
  password: "sumama"
}
// let username = student.username
// let password = student.password
// let { username, password} = student;
// console.log(username, password)

let { username: user, password: secret, city: place = "mumbai" } = student;
console.log(user, secret, place)

