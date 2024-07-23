let age = 45;
console.log("age=", age)
//{}block 
// let => ek block tak ka hi simit hota hai var globaly hota hai hai and const re-declear nhi hota hai like a fixed ho jata hai 
{
    let a = 5;
    console.log(a)
}
{
    let a = 6
    console.log(a)
}

/*variables
 NN SS BB U ( NUMBER NULL SYMBOL  STRING BOOLEAN BIGINT  UNDEFINED)
  NaN value representing Not-A-Number
  
  string
// "1234"+6 => it gives 12346
str = sumamaKhan
console.log(str[2])
undefined = A variable that has not been assigned a value is of type undefined 
 let a = null//kisi ki value absence batani ho toh 
 console.log(a)*/

const student = {
    name: "rahul kumar",
    age: 45,
    cgpa: 8.2,
    isPass: true,//boolean 
};
console.log(student["age"])
//also we can console.log(student.age)

//+1 krne se age mai +1 ho jyega 
student["age"] = student["age"] + 1
console.log(student["age"])

// artimetic operater in js 
let a = 5;
let b = 2;
// a and b are operands and + / - * is operator
console.log("a = ", a, "& b = ", b);
console.log("a+b", a + b);
console.log("a-b", a - b);
console.log("a*b", a * b);
console.log("a/b=", a / b);
console.log("a**b=", a ** b);//exponentiation
console.log("a%b=", a % b);//modulus
// operator precendence is the genral order of solving an expression => BODMAS=()**/*+-

/*unary operater
a++; a+1
console.log(a)//6
a--; a-1 
phele 5 hoga a++ phir sencond time add hoga
console.log("a++ =", a++); pre-increment
console.log("a=",a)

phele 5 hoga a-- phir sencond time minus hoga
console.log("a-- =", a--);
console.log("a=",a)

phele add hoga a++ phir sencond time same rhega hoga
console.log("++a =", ++a); post-increment
console.log("a=",a)*/

/*assinment opreter ye right side value ko left side mai ja ke store kara deta hai 
a += & a=a+1
a += 4;
//  a-= 2 ;a*= 4
console.log("a=",a)*/

//camparison operater 
console.log("a==b", a == b);//return mai true ya false ayega 
console.log("a!=b", a != b);
let c = "5";
console.log(c)
console.log("a==c", a == c);
console.log("a===c", a === c);//string hua toh reject kr deta hai
//  uni-code check unicode.jpg
let z = 'a' > 'A'
let y = 'a' < 'b'
console.log(z)
console.log(y)

// logical operators or=> || and => && not equal => !(epr)
let cond1 = a > b;//true
let cond2 = a === 5;//true 
console.log("cond1 && cond2=", a > b && a === 5);
let marks = 75;
if (!(marks < 33)) {
    console.log("pass");
    console.log("A+")
}



