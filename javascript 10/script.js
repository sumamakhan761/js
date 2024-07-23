console.log(window)
console.dir(document);
console.dir(document.all[8])
console.dir(document.all[8].innerText);
document.all[8].innerText = "Hitachi"

// selecting element
// getElementById -> rerturn the element as an object or null(if not found)
let img = document.getElementById("mainImg")
console.log(img)
console.dir(img)

// getElementByClassName -> return the element as an html collection or empty collection (if not found )

// let smallImages = document.getElementsByClassName("oldImg");

// for (i = 0; i < smallImages.length; i++) {
//   smallImages[i].src = "assets/spiderman_img.png";
//   console.log(`value of image no.${i} is changed`)
// };
// console.log(smallImages)

// getElementsByTagName -> Returns the element as an html collection or empty collection(if not found)
let x = document.getElementsByTagName("p")
console.log(x)

// query selectors -> allows us to use any selector
console.dir(document.querySelector('h1'))
console.dir(document.querySelector('#description'))
console.dir(document.querySelector
  ('.oldImg'))
console.dir(document.querySelectorAll
  ('.oldImg'))
console.dir(document.querySelectorAll('div a'))

// properties and method 
let heading = document.querySelector('h1')
heading.innerText = 'hi i am '
heading.innerHTML = "<u><b>hi i am </b></u>"
console.log(heading)

// manipulating attributes
// getters and setters 
let imgs = document.querySelector('mainImg')
console.log(img.getAttribute('class'));
console.log(img.setAttribute('class', 'images'));
console.log(img.getAttribute('class'));

// manipulating style 
heading.style.color = 'green'
heading.style.backgroundColor = 'yellow'
let links = document.querySelectorAll
  (".box a ")
// for (let i = 0; i > links.length; i++) {
//   link[i].style.color = 'green';
// }

// for (link of links) {
// link.style.color = 'green'//inline style 
// }

// using class list
// setAttribute se khali ek time pe ek hi style set kr skte hai 
// classlist se many style set kr skte hai
// heading.classList.add('green');
// console.log(heading.classList.contains('green'));
// heading.classList.remove('green');
// togle -> on -> off and off -> on 
// heading.classList.toggle('underline');

// navigation
// parentElement ->single 
let h4 = document.querySelector('h4')
console.log(h4.parentElement)  
let div = document.querySelector('div')
console.log(div.parentElement)
console.log(div.children)
console.log(div.childElementCount)
console.log(div.children[1].previousElementSibling)
console.log(div.children[0].nextElementSibling)

// adding element 
let p = document.createElement('p')
console.dir(p)
p.innerText = "Hi, I am a new P "
console.log(p)
console.dir(p)

// append means last mai add kr dena in html page 
let body = document.querySelector('body')
// console.log(body.appendChild(p))
let box = document.querySelector('.box')
console.log(box.appendChild(p))
// append use to add perent child string and lot of things 
// console.log(p.append("this is new text"))

let btn = document.createElement('button');
btn.innerText = "click me"
// console.log(box.appendChild(btn))
// prepend ->add to start 
// console.log(box.prepend(p))

// insertAdjacentElement(position, element)
// position => 'beforebegin'
// 'afterbegin'
// 'beforeend'
// 'afterend'

console.log(p.insertAdjacentElement('beforebegin', btn))
console.log(p.insertAdjacentElement('afterbegin', btn))
console.log(p.insertAdjacentElement('afterend', btn))

// remove element
// removeChild(element)
// remove(element)
console.log(btn.remove())

