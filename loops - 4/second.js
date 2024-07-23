//loop are iterate means repeat 

/* for (initailisation; condition; updadtion) {
     //do simething 
 }*/

/*for(let count=1; count<=5; count++){
    console.log("count =",count)}
for(let count=5; count>=1; --count){
    console.log(count)}

//calculate sum of 1 to 5
let sum1 = 0;
for (let i=1; i<=6; i++){sum1 = sum1 +i}
console.log("sum=",sum1)*/

/*for (let i = 1; i <= 15; i = i + 2) {
    console.log(i)}*/

/*let n = prompt("Write your number");
n = parseInt(n);
for (let i = n; i <= n * 10; i = i + n) {
    console.log(i)}*/

// neaseted loop 
for (let i = 1; i <= 3; i++) {
    console.log("outer loop", i)
    for (let j = 1; j <= 3; j++) {
        console.log(j)
    }
}

/*let i = 1;
while(i<=10){
   console.log("apna college");i++ }

let i = 15;
do{ console.log("apna college")} 
while(i<=10);jo bhi ho ek baar toh print krta hi hai */

// fav movie game 
// const fav = "nomi";
// let guess = prompt("enter my fav movie if you will right i give you $200");

// while ((guess != fav) && (guess != "quit")) {
//  guess = prompt("please try again if you want $200")
// }
// if (guess == fav) { console.log("congress!") }

// break and continue statement
let i = 1;
while (i <= 5) {
    if (i === 3) {
        console.log("hey this is two")
        break;
    }
    console.log(i)
    i++;
}
// for(element of collection){do something}
// for of loop
// let str = "apnacollege"
// for (let i of str) {
//     console.log("i=", i);
// }


// let st = "javascript";
// let size = 0;
// for (let i of st) { console.log("i=", i); size++; }
// console.log("string size =", size);

// let student ={
//     name: "rahul kumar",
//     AGE: 20,
//     cgpa: 7.5,
//     ispass: true,
// };
// for(let key in student ){console.log("key=",key, "value", student[key]);}

// pracatice quetion 1
// for(let num = 0; num<= 100; num++)
// {if(num%2 === 0){console.log("num=", num);}}


/*let gameNum=25;
let userNum= prompt("guess the game number:");
while(userNum != gameNum){userNum= prompt("you can guess the wrong number guess again :");}
console.log("congretulations ,you entered the right number");*/

// loops in array
let heros = ["iron", "thor", "hulk", "nomi"]
//for loop
for (let i = 0; i < heros.length; i++) { console.log(heros[i]) }

//for of loop
for (let hero of heros) { console.log(hero) }
//practice q1
let markss = [85, 97, 44, 37, 76, 60];
let sum = 0;
for (let value of markss) { sum += value; }
//sum = sum + value 

avg = sum / markss.length;
console.log(`average marks of the class= ${avg}`);

//q2
let items = [250, 645, 300, 900, 50];

for (i = 0; i < items.length; i++) {
    let offer = items[i] / 10;
    items[i] -= offer;//items[i] = items[1] - offer
}
console.log(items);

// nested array 
let students = [["sumama", 8, "t1"], ["usama", 9, "t2"], ["sarwar", 10, "t3"]];
for (let i = 0; i < students.length; i++) {
    console.log(`#${i}`)//"#"+i
    for (let j = 0; j < students[i].length; j++) {
        console.log(students[i][j]);
    }
}

// another method
for (list of students) {
    for (names of list) {
        console.log(names)
    }
}

// todo game
// let todo = [];
// let req = prompt("please enter your request");

// while (true) {
//     if (req == "quit") {
//         console.log("quitting app")
//         break;
//     }
//     if (req == "list") {
//         console.log("-----------");
//         for (let i = 0; i < todo.length; i++) {
//             console.log(i, todo[i]);
//         } console.log("-----------")
//     } else if (req == "add") {
//         let task = prompt("please enter the task you want to add")
//         todo.push(task)
//         console.log("task added");
//     } else if (req == "delete") {
//         let idx = prompt("please enter the task index");
//         todo.splice(idx, 1);
//         console.log("task delete")
//     } else {
//         console.log("wrong request")
//     }
//     req = prompt("please enter your request");
// }