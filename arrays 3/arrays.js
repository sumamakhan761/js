let marks = [97, 87, 68, 56];
console.log(marks)
console.log(marks.length)

//array is mutable means value change kar skte hai 
//iterable (string, objects ,arrays )

/*let fooditems = ["potato", "apple", "lichi", "tomato"];
console.log(fooditems[0] = "carry")//carry ne potato ki jagah leli
fooditems.push("chips", "burger", "banana");//end to add
console.log(fooditems)*/

let fooditems = ["potato", "apple", "lichi", "tomato"];
// fooditems.pop();//dlt end string
console.log(fooditems)//dlt string

//example
//  let arrss = [5,6];
//  arrss.unshift(4);//add to start
//  console.log(arrss);
// arrss.push(7);
// console.log(arrss);

let primary = ["red", "blue", "green"];
console.log(primary)
console.log(primary.reverse())
console.log(primary.indexOf("green"))//0
console.log(primary.includes("green"))//true
let secondary = ["orange", "purple", "silver", "gray", "black"]
console.log(secondary.slice(1, 5)) //slice gives copy 
console.log(secondary.slice(-2))//4-2 = 2 
console.log(primary.concat(secondary))

//splice(start,deleteCount,additems) 
let arr = [1, 2, 3, 4, 5, 6, 7]
// console.log(arr.splice(1, 3, 101, 102, 103))
// console.log(arr)
// // add element 
// console.log(arr.splice(2, 0, 101))
// console.log(arr)
// delete element
// console.log(arr.splice(3, 2))
// console.log(arr)
// // replace element
// console.log(arr.splice(3, 1, 101))
// console.log(arr)

// example
let comp = ["bloomberg", "microsoft", "uber", "google", "ibm", "netfix"];
//comp.shift();//dlt start
//comp.splice(2,1,"ola")
// comp.push("amazon")

// sort => acending or decending
let chars = ['b', 'a', 's', 'c', 'r', 't', 'e']
console.log(chars.sort())

console.log([1] == [1])
//arraay mai addres ke liye hum refernce lete hai 
let arr1 = ['a', 'b']
let arr2 = arr1//arr2 ki value arr1 ki hi hogi mtlb address arr1 ka hi hoga 
console.log(arr1 == arr2)

//constant arrays 
const arr3 = [1, 2, 3]
arr3.push(4)
console.log(arr3)
// but we can't change address 

//nested arrays 
let nums = [[2, 4], [3, 5], [8, 6], [7, 9]]
console.log(nums)
console.log(nums.length)
console.log(nums[3])
console.log(nums[0][0])
console.log(nums[0][1])
console.log(nums[1][0])
console.log(nums[1][1])
console.log(nums[2][0])
console.log(nums[2][1])
console.log(nums[3][0])
console.log(nums[3][1])

