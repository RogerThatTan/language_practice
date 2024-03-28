//classes & object

const student = {

    fullName : "Tanvir Hassan",
    id : 22464811,
    marks : 90,
    printMarks: function(){
        console.log("Marks: ",this.marks);
    },
};


const employee = {
    calcTax1(){
        console.log("Tax rate is 10%");
    },
    
};

const karan = {
    salary : 50000,
    calcTax1(){
        console.log("Tax rate is 30%");
    },
};


karan.__proto__ = employee;



//classes


class ToyotaCar{

    constructor(brand, mileage){
        console.log("ToyotaCar constructor called");
        this.brand = brand;
        this.mileage = mileage;
    }

    start(){
        console.log("Car started");
    }

    stop(){
        console.log("Car stopped");
    }

};

let fortuner = new ToyotaCar("fortuner"); //constructor called
console.log(fortuner);
let lexus = new ToyotaCar("lexus",12); //constructor called
console.log(lexus);

//inheritance

class Parent{

    hello(){
        console.log("Hello from parent");
    }
}
class Child extends Parent{
}
let obj = new Child();
class Person{
    constructor(name){
        this.species = "Human";
        this.name = name;
    }   

    eat(){
        console.log("Person is eating");
    }
};

class Engineer extends Person{

    constructor(name){
        super(name);
    }

    work(){
        super.eat();
        console.log("Engineer is working");
    }   
}

let engObj = new Engineer("Tanvir");

//Practice Problem 1 

let DATA = "Secret Data";
class User{
    constructor(name,email){
        this.name = name;
        this.email = email;
    }

    viewData(){
        console.log("Name = ",this.name);   
        console.log("Email = ",this.email); 
        console.log("Data = ",DATA);  
    }

}

let student1 = new User("Tanvir","tanvir@gmail.com");
let student2 = new User("Hassan","hassan@gmail.com");
let teacher1 = new User("Karan","karan@gmail.com");


//Practice problem 2

class Admin extends User{

    constructor(name,email){
        super(name,email);
    }

    editData(){
        DATA = "Edited Data";
    }

}

let admin1  = new Admin("Admin","admin@aiub.com");


// error handling

let a = 5;
let b = 10;

console.log("a = ",a);
console.log("b = ",b);  
console.log("a+b = ",a+b);
try{
    console.log("a+b = ",a+c);  ///error
}catch(err){
    console.log(err);
}
console.log("a+b = ",a+b);
console.log("a+b = ",a+b);
console.log("a+b = ",a+b);
console.log("a+b = ",a+b);
console.log("a+b = ",a+b);