console.log("Lecture 3 Starts From Here"); 


//for loop

// for(let i=1; i<=10;i++){
//     console.log("i = ",i);
// }


// let sum = 0;
// for(let i=1;i<=15;i++){
//     sum += i;
// }
// console.log("Sum = ",sum);


//infinte loop should not use in real life development 

// for(let i=1; i>=0; i++){
//     console.log("i = ",i);
// }


//while loop

// let i=1;
// while(i<=5){
//     console.log("i = ",i);
//     i++;
// }

//do while
// let i =1;
// do{
//     console.log("i = ",i);
//     i++;
// }while(i<=5);


//for-of loop
//we dont use it for object

// let str = "JavaScript";
// let length = 0;

// for(let i of str){ //iterator -> characters
//     console.log("i = ",i);
//     length++;
// }

// console.log("Length = ",length);

//for-in loop
//we use it for object

// let student = {
//     name: "Rahim",
//     age: 25,
//     CGPA: 3.75,
//     isPass: true
// };

// for(let i in student){
//     console.log("i = ",i);
//     console.log("Value = ",student[i]);
// }


//practice question
//1. 1-100 Even number

// for(let i=0; i<=100;i++){
//     if(i%2 === 0){
//         console.log(i);
//     }
// }



//2 any random game number 

// let gameNumber = 25;

// let userNum = prompt("Guess the number: ");
// console.log("User Number = ",userNum);

// while(userNum != gameNumber){
//     if(userNum > gameNumber){
//         console.log("Too High");
//     }
//     else{
//         console.log("Too Low");
//     }
//     userNum = prompt("Guess the number AGAIN!!! : ");
//     console.log("User Number = ",userNum);
// }

// console.log("You have guessed the number correctly");


//Strings
// console.log("String Starts From Here");

// let str = "Tanvir";
// let str2 = 'Hassan';

// console.log(str);
// console.log(str2);
// console.log(str.length);
// console.log(str2.length);
// console.log(typeof str);
// console.log(str[2]);
// console.log(str2[2]);

// //Template literal

// console.log("Template literal Starts From Here");

// let sentence = `My name is ${str} ${str2}`;
// let sentence2 = `This is a tempalte literal`;

// console.log(sentence); 
// console.log(sentence2); 
// console.log(sentence.length);   
// console.log(sentence2.length); 
// console.log(typeof sentence);
// console.log(typeof sentence2);


// let obj={
//     item :"pen",
//     price: 10,
// };

// let ouptut = `the cost of ${obj.item} is ${obj.price} rupees`; 
// console.log(ouptut);
// console.log(ouptut.length); 

// console.log("Tanvir\nHassan"); // \n is used for new line
// console.log("Tanvir\tHassan"); // \n is used for new line
// console.log(ouptut.toUpperCase());
// console.log(ouptut.toLowerCase());
// console.log(ouptut.trim());



// Practice Questions of Strings

let fullName = prompt("Enter Your Full Name without spaces: ");

let userName = "@"+ fullName + fullName.length;
console.log(fullName);
console.log(userName);














