let s = document.querySelector("span");
console.log(s);


function move(eventInfo){
    // informatio about the event
    // which triggered this function:
    console.log(eventInfo);

    let elementThatWasMouseOvered = eventInfo.target;
    let topString = elementThatWasMouseOvered.style.top;
    let top = 0;
    if(topString != ""){
        top = Number(topString.substring(0, topString.length - 2));
    }
    console.log(top)

    // elementThatWasMouseOvered.style.color = "red";
    let randomX = -50 + Math.random()*100;  // random value between -50 and 50
    let randomY = top + Math.random()*-100;
    console.log(randomY)
    //                                          "translate( 50px, 50px)" 
    // elementThatWasMouseOvered.style.transform = "translate(" + randomX + "px, " + randomY + "px)";
    elementThatWasMouseOvered.style.left = randomX + "px";
    elementThatWasMouseOvered.style.top = randomY + "px";

}

// s.addEventListener("mouseover", move)


function addMover(element){
    element.addEventListener("mouseover", move)
}

// select ALL the spans
let allSpans = document.querySelectorAll("span");


allSpans.forEach(  addMover  );



