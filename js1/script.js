let myName = "Leon";
let temperature = 16;

let headline = document.querySelector("h1");

// document.querySelector("h1").innerText = "Tried it. Didn't like it.";

// below is a function call:
// alert("Hi " + myName + "! It's " + temperature + " degrees outside.");

temperature = 20;

// alert("now it's " + temperature + " degrees.")
console.log(temperature);

// function definition
// define once
// use many times.
function doManyThing(){
    console.log("button was clicked.");
    // alert("Hi " + myName + "! It's " + temperature + " degrees outside.");
}

function greet(greeting){
    console.log("received: " + greeting);
    // alert(greeting);
    headline.innerText = "Tried it. Didn't like it.";

}



let myText = document.querySelector(".myText");

function changeText(){
    console.log("click the button");
    myText.innerHTML = "click <a href='#'>here</a>";
    headline.style.textDecoration = "underline";
    myText.style.color = "white";
    myText.style.backgroundColor = "black";

}