let div = document.querySelector("div");
console.log(div);

let id= div.getAttribute("id");
console.log(id);   
let name= div.getAttribute("name");
console.log(name);   


let para = document.querySelector("p");
console.log(para);
let paraClass= para.getAttribute("class");
console.log(paraClass);

console.log(para.setAttribute("class","new-class"));


let div = document.querySelector("div");
console.log(div);

div.style.backgroundColor = "yellow";
div.style.fontSize = "30px";
//div.innerText = "We are learning DOM Manipulation";

div.style.height = "450px";
let newBtn = document.createElement("button");
newBtn.innerText = "Click Me";
div.append(newBtn);
div.after(newBtn);
console.log(newBtn);

let para = document.querySelector("p");
para.remove();


let newHeading = document.createElement("h1");
newHeading.innerHTML = "<i>Hi, I am a new heading</i>";
document.querySelector("body").prepend(newHeading);

// Practice Question   1

let newBtn = document.createElement("button");
newBtn.innerText = "Click Me!";
newBtn.style.color = "white";
newBtn.style.backgroundColor = "Red";
newBtn.style.fontSize = "30px";
document.querySelector("body").prepend(newBtn);

// Practice Question   2

let para = document.querySelector("p");
para.classList.add("newClass");
