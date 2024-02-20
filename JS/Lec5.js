console.log("Lecture 5 Starts From Here"); 
console.log("Functions Starts From Here"); 


// let msg= prompt("Type your message here");

// function myFunction(msg){
//     console.log(msg);
    
// }
// myFunction(msg);



// function sumTwoNumbers(a,b){

//     //logic variables because these variables are only available in this function
//     let sum = a+b;
//     return sum;
//     console.log("This line will not be executed"); // after return statement nothing will work in the function

// }

// let value = sumTwoNumbers(10,20);
// console.log(value);



//Arrow function

// function sum(a,b){
//     return a+b;
// }


// //multiple line arrow function
// function mul(a,b){
//     return a*b;
// }


// const arrowSum = (a,b)=>{
//     console.log(a+b);
// }

// arrowSum(10,30);


//practice question 1 

// let str = prompt("Enter a string");

// function countVowles(str){
//     let count = 0;
//     for(let i =0;i<str.length;i++){
//         if(str[i]=='a' || str[i]=='e' || str[i]=='i' || str[i]=='o' || str[i]=='u'){
//             count++;
//         }
       
//     }
//     console.log(count);
// }

// countVowles(str);

// const countVow = (str)=>{  

//     let count = 0;
//     for(let i =0;i<str.length;i++){
//         if(str[i]=='a' || str[i]=='e' || str[i]=='i' || str[i]=='o' || str[i]=='u'){
//             count++;
//         }
       
//     }
//     console.log(count);
// }

// countVow("aioue");


//for each loop for arrays


// let arr = ["sadia","nanjiba","afra","nawar","tammie"];

// arr.forEach((element,index)=> {
//     console.log(element.toUpperCase(),index); //element is the value of the array and index is the index of the array 
// });


//practice 2

// let arr = [11,22,33,44,55,66,77,88,99];

// arr.forEach((element,index)=> {
//     console.log(element*element);
// });


//Map method 
// let arr = [11,22,33,44,55,66,77,88,99];

// let newArr=arr.map((val) =>{
//     return val*2;
// });

// console.log(newArr);


// let calcSquare = (num) =>{
//     console.log(num*num);
// };


//Filter method

// let arr = [11,22,33,44,55,66,77,88,99]; 
// let newArr=arr.filter((val) =>{
//     return val>33;
// });
// console.log(newArr);

//Reduce method
// const array1 = [1, 2, ,99,3, 0,4];

// const output = array1.reduce((prev,curr) =>{
//     return prev>curr  ? prev : curr;
// });

// console.log(output);

//practice question 1

// let marks = [92,97,86,40,50,60,70,80,90,100];
// let newArr = marks.filter((val) =>{
//     return val>90;
// });

// console.log(newArr);


//practice question 2

let n = prompt("Enter a number");
let arr=[];

for(let i=1;i<=n;i++){
    arr[i-1] = i;
}
console.log(arr);

let output = arr.reduce((prev,curr)=>{
    return prev+curr;
});

console.log("sum =",output);

let output2 = arr.reduce((prev,curr)=>{
    return prev*curr;
});

console.log("Product =",output2);
