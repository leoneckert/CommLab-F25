let myButton = document.querySelector("#myButton");
let myInput = document.querySelector("#myInput");
let myOutput = document.querySelector("#myOutput");


// define function 
function buttonClicked(eventInfo){
    document.body.style.backgroundColor = "black";
    eventInfo.target.remove();
}
// reference function to be called upon event happening
myButton.addEventListener("mouseover", buttonClicked);

// // alternative:
// // defined function right where we reference it
// myButton.addEventListener("click", function(){
//     document.body.style.backgroundColor = "black";
// });


function inputChanged(eventInfo){
    console.log(eventInfo.target.value);
    console.log("input changed!");
    myOutput.innerText = eventInfo.target.value;

}
//                      "change"
myInput.addEventListener("input", inputChanged);




