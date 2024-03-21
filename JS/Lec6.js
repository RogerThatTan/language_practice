// console.log("Lecture 6 Starts From Here"); 
// console.log("DOM Starts From Here"); 
// console.log("DOM Starts TEst Here"); 
// //alert("Hello World");
// document.write("Hello World");

// let heading = document.getElementById("heading");
// console.dir(heading);

// let headings = document.getElementsByClassName("heading-class");
// console.dir(headings);
// console.log(headings);

// let paragraphs = document.getElementsByTagName("p");
// console.dir(paragraphs);
// console.log(paragraphs);

// let elements = document.querySelectorAll(".heading-class"); //1st element
// console.dir(elements);

// let firstEl = document.querySelector("p"); //1st element
// console.dir(firstEl);


// console.dir(document.body.firstChild);


// let div = document.querySelector("div");
// console.dir(div);

// let headingold = document.querySelector("h1");




//Question 1

// let h2 = document.querySelector("h2");
// console.dir(h2.innerText);
// h2.innerText =  h2.innerText + " from RogerThatTan"; //concatating

//Question 2

let divs = document.querySelectorAll(".box");
// divs[0].innerText = "I am Box 1";
// divs[1].innerText = "I am Box 2";
// divs[2].innerText = "I am Box 3";

//level up version
let idx = 1;
for(div of divs){
    div.innerText = `New Unique value ${idx++}`;
}





