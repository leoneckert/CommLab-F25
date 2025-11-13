let s = document.querySelector("span");
console.log(s);


function move(eventInfo){
    // informatio about the event
    // which triggered this function:
    console.log(eventInfo.target);

    let elementThatWasMouseOvered = eventInfo.target;
    elementThatWasMouseOvered.style.color = "red";
    let randomX = -50 + Math.random()*100;  // random value between -50 and 50
    let randomY = -50 + Math.random()*100;
    //                                          "translate( 50px, 50px)" 
    elementThatWasMouseOvered.style.transform = "translate(" + randomX + "px, " + randomY + "px)";


}

// s.addEventListener("mouseover", move)


function addMover(element){
    element.addEventListener("mouseover", move)
}

// select ALL the spans
let allSpans = document.querySelectorAll("span");


allSpans.forEach(  addMover  );