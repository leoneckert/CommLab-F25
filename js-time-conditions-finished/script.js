let myText = document.querySelector("#myText");
let output = document.querySelector("#output");

let angle = 0;

myText.addEventListener("input", function(e){
    console.log(e.target.value);
    if(e.target.value == "spin"){
        spin(e.target);
        e.target.value = "";
    }
    output.innerText = e.target.value;
})

function spin(element){
    angle+=360;
    element.style.transition = "all 1s linear"
    element.style.transform = "rotate("+angle+"deg)"
}


let myButton = document.querySelector("#myButton");
let counter = 0;
let messageInterval;
myButton.addEventListener("click", function(e){
    if(counter >= 9){
        supersize(e.target);
        
        setTimeout(function(){
            e.target.remove();
            clearInterval(messageInterval);
            messageBoard.innerHTML = "";
            
        }, 500);
        
    }
    counter++;
    if(messageInterval == undefined){
        messageInterval = setInterval(function(){
            addMessage("press the button " + (10-counter) + " more times")
        }, 100);
    }
    
})

let messageBoard = document.querySelector("#messageBoard");

function addMessage(messagetext){
    let p = document.createElement("p");
    p.innerText = messagetext;
    messageBoard.prepend(p);
}




function supersize(element){
    element.style.transition = "all .5s linear"
    element.style.transform = "scale(100)"
}

