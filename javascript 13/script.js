// API means Application Programming Interface
// APIS -> DATA -> JSON 

// SOME RANDOM APIS
// https://catfact.ninja/fact (CATS FACTS)
// https://www.boredapi.com/api/activity (RANDOM ACTIVITIES)
// https://dog.ceo/api/breeds/image/random (RANDOM DOGS)

// JSON (javasrcipt object notation -> search here -> www.json.org)
// JSON data -> in the form of string 

// JSON.parse(data)Method -> converts the string into a javascript object

// JSON.stringify(json)Method -> converts the javascript object into a string
let jsonrespone = '{"fact": "A group of flamingos is called a flamboyance.", "length": 36}'
let validres = JSON.parse(jsonrespone);
console.log(validres.fact);

let student = {
  name: "sumama",
  age: 14
}
let jsonstudent = JSON.stringify(student);
console.log(jsonstudent);

// testing API request  -> tools -> postman and Hoppscoth  

// Ajax -> Asynchronous JavaScript and XML -> web pages pe reloding nhi ata hai 

// https verbs -> GET, POST, PUT, DELETE (you go and see hoppscotch)

// status codes -> 200(ok), 404(not found), 400(bad request), 500(internal server error) etc.

// add information in urls (with Query strings)
// https://www.google.com/search?q=harry+proter (q = key and harry+proter = value)

// http headers -> headers are the information that we send to the server and the server sends back the information to us. (reqest and response )

// fetch(url) -> fetch is a function that returns a promise
let url = "https://catfact.ninja/fact";

// fetch(url)
//   .then((res) => {
//     return res.json();
//   })
//   .then((data) => {
//     console.log("data1", data.fact);
//     return fetch(url);
//   })
//   .then((res) => {
//     return res.json();
//   })
//   .then((data2) => {
//     console.log("data2", data2.fact);
//     return fetch(url);
//   })
//   .catch((err) => {
//     console.log("error", err)
//   })

// using async

// async function getFacts() {
//   try {
//     let res = await fetch(url);
//     let data = await res.json();
//     console.log("data1", data.fact);
//     let res2 = await fetch(url);
//     let data2 = await res2.json();
//     console.log("data2", data2.fact);
//   } catch (e) {
//     console.log("error", e)
//   }
//   console.log("bye")
// }
// console.log(getFacts())


// Axios -> axios is a library that makes it easier to make http requests in javascript
// axios.get(url) -> axios.get is a function that returns a promise
let btn = document.querySelector("button");
btn.addEventListener("click", async () => {
  let fact = await getFacts()
  // console.log(fact);
  let p = document.querySelector("#result");
  p.innerText = fact;
})


async function getFacts() {
  try {
    let res = await axios.get(url);
    return (res.data.fact);
  } catch (e) {
    console.log("error", e);
    return "No fact found"
  }
}
// console.log(getFacts())

let url2 = "https://dog.ceo/api/breeds/image/random"
let btn2 = document.querySelector("#image");
btn2.addEventListener("click", async () => {
  let link = await getImage()
  // console.log(image);
  let img = document.querySelector("#result2");
  img.setAttribute("src", link);
  console.log(link)
})

async function getImage() {
  try {
    let res = await axios.get(url2);
    return (res.data.message);
  } catch (e) {
    console.log("error", e);
    return "/"
  }
}

const url3 = "https://icanhazdadjoke.com/";
async function getjokes() {
  try {
    const header = {
      headers: {
        Accepts:
          "application/json"
      }
    };
    let res = await axios.get(url3, header);
    console.log(res.data)
  }
  catch (err) {
    console.log(err);
  }
}
console.log(getjokes())
