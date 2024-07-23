//condotional statement 
/*use of if
let mode = "dark";
let color;
if (mode === "dark")
{color = "black"}
if (mode === "light")
{color = "white"}

console.log(color);*/
//use of if-else 
let mode = "bright";
let color;
if (mode === "dark") { color = "black" }
else { color = "white" }
console.log(color);

//even odd 
x = 10
if (x % 2 === 0) { console.log("even") }
else { console.log("odd"); }

//syntex -> rules which is (;)

// else if
let mod = "blue";
let colors;

if (mod === "dark") { colors = "black" }
else if (mod === "blue") { colors = "blue" }
else if (mod === "green") { colors = "green" }
else { colors = "white" }
console.log(colors);

/*ternary operators  
condition ?true output : false output */
let Age = 19;
let result = Age >= 18 ? "adult" : "not adult";
console.log(result);
//js have boolean value true and false (boolean lettrel)

/* switch statement => used when we have some fixed values that we need to campare to.
one more we have =>  break and continue*/
let rangg = "red";
switch (rangg) {
  case "red":
    console.log("stop");
    break;
  case "yellow":
    console.log("slow down");
    break;
  case "green":
    console.log("Go");
  default:
    console.log("Broken Light");
}

/*let num = prompt("enter a number")
if (num % 5 === 0) { console.log(num, "num is a multiple of 5"); }
else { console.log(num, "num is a not multiple of 5"); }*/

/*let score = prompt("enter your score (0-100):");
let grade;
if (score >= 90 && score <= 100) { grade = "A" }
else if (score >= 70 && score <= 89) { (grade = "B") }
else if (score >= 0 && score <= 69) { (grade = "C") }
console.log("according to your scores,your grade was:", grade)*/



//string JS

//let str = "sumamakhan";console.log(str[9]);
// 0 se start hota hai

//template literals 
/*let obj={ 
item:'pen',
price:10,
};
//console.log("the cost of",obj.item,"is" ,obj.price,"rupees")
//also we can do this 
let output = `the cost of ${obj.item} is ${obj.price}rupees
`;
console.log(output)*/

//escape charater /n(dusri line mai dusra word le jate hai )
//tab character /t  (beech mai gap deti hai )
//in character ki jo lengh hoti hai wo / or t and n or so many we should take single means /t is 1 length

//js is immutible 
let str$ = "    apna college js      ";
console.log(str$);
//trim se agge or piche ke space cut ho jate hai
console.log(str$.trim());
// index of 
let index = "ILoveCoding"
console.log(index.indexOf("Love"))//1
console.log(index.indexOf("love"))//-1
console.log(index.indexOf("Coding"))//5

//slice
let str = "hello"
console.log(str.slice(1, 4));
console.log(str.slice(-2));// 4-2 => 2 start with 2
console.log(str.slice(1));// start with 1

let str1 = "apna"
let str2 = "college"
let res = str2.concat(str1); console.log(res)
// let res = str1 + str2;
console.log(res)

//repalce method
let str3 = "hello"
console.log(str3.replace("lo", "p"))//help
//replaceAll se sari replace ho jayengi
let str4 = "hellololo"
console.log(str4.replaceAll("lo", "p"))//helppp
//repeat 
let rep = "Mango";
console.log(rep.repeat(2))

//character
let str5 = "happy"
console.log(str5.charAt(4));
console.log(str5.charAt(2));

let str_1 = "sumama khan"
console.log(str_1.toUpperCase())
console.log(str_1.toLowerCase())

// msg chaining left to right
let msg = "   hey    "
let newMsg = msg.trim().toUpperCase()
console.log(newMsg)
//practice quetion
// let fullName = prompt("enter your full name without spaces")
// username = "@" + fullName + fullName.length;
// console.log(username)