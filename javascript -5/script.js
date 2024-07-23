/* js object litral used to store keys collections and complex entites and advantage of js object literal is that it is easy to read and write
also js automatically converts objects keys to strings.*/
let arr = []
console.log(typeof (arr))
// property => (key, vlaue) pair
// key: value
const student1 = {
  name: "sumama",
  age: 20,
  gender: "male",
}
// console.log(student1)
// console.log(typeof (student1))

const student2 = {
  name: "sumama",
  age: 20,
  gender: "male",
  hobbies: ["cricket", "football", "hockey"],

  address: {
    city: "Bangalore",
    state: "Karnataka",
    country: "India"
  }
}
// console.log(student2)
// console.log(student2.address.city)
// console.log(student2.hobbies[1])


const post = {
  username: "@sumamakhan",
  content: "this is my #firstpost",
  likes: 790,
  rerposts: 10,
  tag: ["#firstpost", "#sumama", "#javascript"],
}
// console.log(post)
// get values from object
// when we use variable so we prefer to [] this opretion
// console.log(post["likes"])
// console.log(post.likes)//not always use 
// console.log(post["content"])

// add/update value in object
const student3 = {
  name: "sumama",
  age: 20,
  gender: "male",
}
// console.log(student3)
// student3.age = 16
// console.log(student3)
// student3.city = "Bangalore"
// console.log(student3)

// delete value in object
// delete student3.city
// console.log(student3)
// delete student3.age
// console.log(student3)

// array of objects
const students = [
  {
    name: "sumama",
    city: "Bangalore",
  },
  {
    name: "usama",
    city: "Bangal",
  },
  {
    name: "saima",
    city: "mumbai",
  }
];
// console.log(students)
// console.log(students[0])
// console.log(students[0].name)
// console.log(students[1])
// console.log(students[1].city)
// console.log(students[2])

// maths object 
// console.log(Math)
// console.log(Math.PI)
// console.log(Math.E)
// console.log(Math.abs(12))
// console.log(Math.abs(-12))
// console.log(Math.pow(2, 4))
// console.log(Math.pow(2, 5))
// console.log(Math.floor(3.899999999))//smallest integer pe round off krdeta hai
// console.log(Math.floor(-3.899999999))
// console.log(Math.ceil(3.899999999))//largest integer pe round off krdeta hai
// console.log(Math.random())

// random integer 
let step1 = Math.random() * 10
console.log(step1)
let step2 = Math.floor(step1)
console.log(step2 + 1)//math.random() 0 se start hota hai or end 9 pe hota isliye 1 plus kiya gya 

// also we can do 
console.log(Math.floor(Math.random() * 10) + 1)

// guessing game
// const max = prompt("enter a number")
// const random =
//   Math.floor(Math.random() * max + 1)
// console.log(random)

// let guess = prompt("guess the number")
// while (true) {
//   if (guess == "quit") {
//     console.log("you quit the game")
//     break;
//   }

//   if (guess == random) {
//     console.log("you guessed it right your and random number is ", random)
//     break;
//   } else if (guess < random) {
//     guess = prompt("hint: your guess was too small.please try again")
//   }
//   else {
//     guess = prompt("hint: your guess was too large.please try again ")
//   }
// }


