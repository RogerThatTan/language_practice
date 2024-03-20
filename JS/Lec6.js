console.log("Lecture 6 Starts From Here"); 
console.log("DOM Starts From Here"); 
console.log("DOM Starts TEst Here"); 
//alert("Hello World");
document.write("Hello World");

// let heading = document.getElementById("heading");
// console.dir(heading);

let headings = document.getElementsByClassName("heading-class");
console.dir(headings);
console.log(headings);

let paragraphs = document.getElementsByTagName("p");
console.dir(paragraphs);
console.log(paragraphs);

let elements = document.querySelectorAll(".heading-class"); //1st element
console.dir(elements);

let firstEl = document.querySelector("p"); //1st element
console.dir(firstEl);



