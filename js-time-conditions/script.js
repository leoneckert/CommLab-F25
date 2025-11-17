let myText = document.querySelector("#myText");
let output = document.querySelector("#output");


function typedSomething(eventInfo){
    
    let elementInteractedWith = eventInfo.target;

    // get text from input element
    let text = eventInfo.target.value;
    console.log(text);

    // put text into output element
    output.innerText = text;

    // if(text == "spin"){
    if(text.includes("spin")){

        spin(elementInteractedWith);
        eventInfo.target.value = "";
        output.innerText = "";
    }

    
}


// challenge 1: 
// as we type into the input box, 
// the text should appear inside the "ouput" p tag:
myText.addEventListener("input", typedSomething)




let angle = 0;
// function to spin an element 
function spin(element){
    angle = angle + Math.random()*1080;
    element.style.transition = "all 1s linear"
    element.style.transform = "rotate("+angle+"deg)"
}



// -------- PART 2
let myButton = document.querySelector("#myButton");

let count = 0; // GLOBAL 

myButton.addEventListener("click", function(eventInfo){
    
    // let count = 0; // LOCAL
    count = count + 1;
    console.log(count);

    if(count >= 10){
        // document.body.style.backgroundColor = "black";
        // super size the button
        supersize(eventInfo.target);

        // setTimeout(function(){
        //     eventInfo.target.remove()
        // }, 500);

        function removeButton(){
            eventInfo.target.remove();
            clearInterval(messageInterval)
            messageBoard.innerHTML = "";
        }

        setTimeout(removeButton, 500);

    }

})




let messageBoard = document.querySelector("#messageBoard");



let messageInterval = setInterval(function(){
    let clicksLeft = 10 - count
    // addMessage("click the button " + clicksLeft + " more times.");
    addMessage(clicksLeft + " ");

    // addMessage("class is over");
}, 30);





// function to add text to the div with id "messageboard"
function addMessage(messagetext){
    let span = document.createElement("span");
    span.innerText = messagetext;
    messageBoard.prepend(span);
}

// function to rapidly increase the size of an element
function supersize(element){
    element.style.transition = "all .5s linear"
    element.style.transform = "scale(100)"
}

