// let s = document.querySelector("span");
// console.log(s)


// s.addEventListener("mouseover", function(event){
//     console.log(event.target);
//     let rX = -80+Math.random()*160;
//     let rY = -80+Math.random()*160;
//     event.target.style.transform = "translate("+rX+"px, "+rY+"px)"
// })

let allSpans = document.querySelectorAll("span");

function addMover(elm){
    elm.addEventListener("mouseover", function(event){
        console.log(event.target);
        let rX = -80+Math.random()*160;
        let rY = -80+Math.random()*160;
        event.target.style.transform = "translate("+rX+"px, "+rY+"px)"
    })
}

allSpans.forEach(addMover)