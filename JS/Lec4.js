console.log("Lecture 4 Starts From Here"); 
console.log("Arrays Starts From Here"); 

// let marks= [97,82,75,66,45];
// console.log("marks = ",marks);
// console.log(marks.length); //property
// marks[0] = 100;
// console.log("marks = ",marks);


// let heroes = ["ironman","superman","spiderman","thor"];
// for(let i=0;i<heroes.length;i++){
//     console.log(heroes[i]);
// }
// console.log("for of loop");
// for(let hero of heroes){
//     console.log(hero.toUpperCase());
// }

//practice questions - 1

// let marks = [85,97,44,37,76,60];

// let sum = 0;

// for(let i=0;i<marks.length;i++){
//     sum = sum + marks[i];
// }
// console.log("Average Marks = ",sum/marks.length);


//practice questions - 2

// let itmes = [250,645,300,900,50];

// let indx = 0;

// for(let val of itmes){

//     //console.log(`Value at index ${indx} = ${val}`);
//     let offer = val/10;
//     itmes[indx] = val - offer;
//     console.log(`Value after discount = ${itmes[indx]}`);
//     indx++;

// }

//forloop method

// for(let i=0;i<itmes.length;i++){
//     let offer = itmes[i]/10;
//     itmes[i] = itmes[i] - offer;
   
// }
// console.log(itmes);


//ARRAYS METHODS

// let veggies = ["potato","tomato","onion","cabbage","capsicum"];
// // veggies.push("carrot"); // will add at the end of the array
// // console.log(veggies);  

// // veggies.pop(); // will remove the last element from the array
// // console.log(veggies);

// // veggies.toString();
// // console.log(veggies);



// console.log(veggies);
// console.log(veggies.toString());


let marvel_heroes = ["ironman","superman","spiderman","thor","hulk"];
// let dc_heroes = ["batman","superman","flash","aquaman"];
// let bd_heroes = ["jailla","shakib khan","manna","bappi"];

// let heroes = marvel_heroes.concat(dc_heroes).concat(bd_heroes);
// console.log(heroes);

// heroes = heroes.unshift("hulk");
// console.log(heroes);

console.log(marvel_heroes);
console.log(marvel_heroes.slice(1,2));
console.log(marvel_heroes.splice(2,3,"hulk","black widow"));
console.log(marvel_heroes);