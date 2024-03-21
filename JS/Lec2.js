console.log("Hello World");

let a = 5;
let b = 2;

console.log("a + b = ",a + b);
console.log("a - b = ",a - b);
console.log("a * b = ",a * b);
console.log("a / b = ",a / b);
console.log("a % b = ",a % b);
console.log("a ** b = ",a ** b); //a^b

//unary operator
a++;
console.log("a++ = ",a); 
b--;
console.log("b-- = ",b);




//Compariosn Operator

    let a = 5;
    let b = 2;

    console.log("a == b = ",a == b);
    console.log("a === b = ",a === b);
    console.log("a != b = ",a != b);
    console.log("a !== b = ",a !== b);


//Condtional statement

    console.log("Conditional Statement Output is Starts From Here");

    let age =12;
    if(age >= 18){
        console.log("You are eligible for voting");
    }
    if(age < 18){
        console.log("You are not eligible for voting");
    }

    let mode = "light";
    let color;
    if(mode === "dark"){
        color = "black";
    }

    if(mode === "light"){
        color = "white";
    }   

    console.log("color = ",color);

//if-else statement

    console.log("if-else statement Output is Starts From Here");

    if(mode === "dark"){
        color = "black";
    }
    else{  
        color = "white";
    }
    console.log("color = ",color);
    
//if-else-if statement another
    if(age >= 18){
        console.log("You are eligible for voting");
    }
    else if(age < 18){
        console.log("You are not eligible for voting");
    }

//odd,even check

    let number = 5;
    if(number % 2 === 0){
        console.log(number, "Even Number");
    }
    else{
        console.log(number, "Odd Number");
    }


// else if statement another

    let number1 = 0;

    if(number1 > 0){
        console.log(number1, "Positive Number");
    }
    else if(number1 < 0){
        console.log(number1, "Negative Number");
    }
    else{
        console.log(number1, "Zero");
    }

//Terinary Operator

    let number2 = 5;
    let result= number2>6 ? "Greater" : "Smaller";
    console.log(result);

//Switch Statement

const expr = 'Papayas';
switch (expr) {
  case 'Oranges':
    console.log('Oranges are $0.59 a pound.');
    break;
  case 'Mangoes':
  case 'Papayas':
    console.log('Mangoes and papayas are $2.79 a pound.');
    // Expected output: "Mangoes and papayas are $2.79 a pound."
    break;
  default:
    console.log(`Sorry, we are out of ${expr}.`);
}


//Practice Question

    alert("Hello World"); // one time pop up

    let name = prompt("Enter a number");
    if(name % 5 === 0){
        console.log(name, "Divisible by 5");
    }
    else{
        console.log(name, "Not Divisible by 5");
    }

//Second Question  

    let number = prompt("Enter the student marks");
    if(number >= 80 && number <= 100){
        console.log("A+");
    }
    else if(number >= 70 && number <= 79){
        console.log("B");
    }
    else if(number >= 60 && number <= 69){
        console.log("C");
    }
    else if(number >= 50 && number <= 59){
        console.log("D");
    }
    
    else if(number >= 0 && number <= 49){n 
        console.log("F");
    }
    else{
        console.log("Invalid Input");
    }
    