let btn1 = document.querySelector("#btn1");

btn1.onclick = (evt) => {
    console.log(evt);
    console.log(evt.type);
    console.log(evt.target);
    console.log(evt.type);
};

btn1.addEventListener("click", (evt) => {
   console.log("Button 1 clicked-1sthandler");
   console.log(evt);
});

btn1.addEventListener("click", () => {
    console.log("Button 1 clicked-2nd handler");
 });
 

const handler3 = () => {
    console.log("Button 1 clicked-3rd handler");
 };
 

 btn1.addEventListener("click",handler3);

 btn1.addEventListener("click", () => {
    console.log("Button 1 clicked-4th handler");
 });
 

 btn1.removeEventListener("click",handler3);



 //Practice Question -1

 let modeBtn = document.querySelector("#mode");
let currMode = "light";
let body = document.querySelector("body"); 
 
modeBtn.addEventListener("click", () => {
    console.log("You are trying to change mode");
    if(currMode === "light"){
        currMode = "dark";
        body.classList.add("dark");
        body.classList.remove("light");
    }
    else{
        currMode = "light";
        body.classList.add("light");
        body.classList.remove("dark");
    }
    console.log(currMode);
});