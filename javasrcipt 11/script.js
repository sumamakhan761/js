// dom events 
// events are signals that something has occurred.(user input / actions)
let btns = document.querySelectorAll('button');

function sayHello() {
  console.log("button was clicked")
};

function sayGoodbye() {
  console.log("you entered a button")
}

function double() {
  console.log("double click");
}
// for (btn of btns) {
//   btn.onclick = sayHello;
//   btn.onmouseover = sayGoodbye;
//   btn.onmouseenter = sayGoodbye;
//   console.dir(btn)
// }

// event listener 
// element.addEventListener(event, callback) 
// for (btn of btns) {
//   btn.addEventListener('click', sayHello);
//   btn.addEventListener('mouseenter', sayGoodbye)
//   btn.addEventListener('dblclick', double)
// }
let p = document.querySelector('p');
let h3 = document.querySelector('h3');
let h1 = document.querySelector('h1');

p.addEventListener("click", changeColor)
h3.addEventListener("click", changeColor)
h1.addEventListener("click", changeColor)

function changeColor() {
  console.log(this)
  console.log(this.innerText)
  this.style.color = "purple"
  this.style.backgroundColor = "gray"
}
// this in event listener
// when 'this' is used in a callback of event handler of something, it refers to that something.

// keyboard Event -> code=> key code deta hai  and key => screen pe jo visible hota hai wo dikhati hia 
let inp = document.querySelector('input');
// inp.addEventListener('keydown', function (e) {
//   console.log("key down")
//   console.log("key =", e.key)
//   console.log("code =", e.code)

// })

// Arrow game
inp.addEventListener('keydown', function (event) {
  console.log("code = ", event.code);// ArrowUp(U), ArrowDown(D), ArrowLeft(L), ArrowRight(R)
  if (event.code == "ArrowUp") {
    console.log("move up")
  } else if (event.code == "ArrowDown") {
    console.log("move down")
  } else if (event.code == "ArrowLeft") {
    console.log("move left")
  } else if (event.code == "ArrowRight") {
    console.log("move right")
  }
})

// form events 
// preventDefaul() se hum kisi dusre web pe nhi jate hai same page pe hi rehte hai

// 1st method
// let form = document.querySelector('form');

// form.addEventListener('submit', function(event) {
//   event.preventDefault();//form event listner

// let user = document.querySelector("#user");
// let pass = document.querySelector("#pass");
//  // console.log(inp.innerText)//innerText filled ho jata hai 
// console.log(user.value)
// console.log(pass.value)
// });
// // extraction from data

// second methdo
// let form = document.querySelector('form');

// form.addEventListener('submit', function(event) {
//   event.preventDefault();

//   let user = this.elements[0]
//   let pass = this.elements[1]

//   console.log(user.value)
//   console.log(pass.value)
// });

// change event 
// the change event occurs when the value of an element has been changed.(only works on <input>,<textarea> and <select> elements)
// input event fires when the value of an <input>, <textarea>, or <select> element has been changed.
// non arrow keys ko trigger nhi krti (arrow keys like )
let form = document.querySelector('form');

form.addEventListener('submit', function (event) {
  event.preventDefault();
});

let user = document.querySelector("#user");
user.addEventListener("change", function () {
  console.log("change event")
  console.log("final value = ", this.value)
});

user.addEventListener("input", function () {
  console.log("input event")
  console.log("final value = ", this.value)
});

// event bubling
let div = document.querySelector("div")
let ul = document.querySelector("ul")
let li = document.querySelector("li")

div.addEventListener("click", function () {
  console.log("div was clicked");
})

ul.addEventListener("click", function (event) {
  event.stopPropagation();
  console.log("ul was clicked");
})

li.addEventListener("click", function (event) {
  event.stopPropagation();
  console.log("li was clicked");
})