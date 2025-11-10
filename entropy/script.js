function buildRandomLinks(){
    let a1 = document.createElement("a");
    // a1.style.color = "lightblue";
    a1.className = "tryme";
    a1.innerText = "try me";
    // a1.style.position = "absolute";
    a1.onclick = anotherFunction; // <-------- 
    let rTop = Math.random()*400;
    let rLeft = Math.random()*300;
    a1.style.top = rTop+"px";
    a1.style.left = rLeft+"px";

    document.body.append(a1)


    let a2 = document.createElement("a");
    // a2.style.color = "lightblue";
    a2.className = "tryme";
    a2.innerText = "try me";
    // a2.style.position = "absolute";
    a2.onclick = backgroundDark; // <-------- 
    rTop = Math.random()*400;
    rLeft = Math.random()*300;
    a2.style.top = rTop+"px";
    a2.style.left = rLeft+"px";

    document.body.append(a2)


    let a3 = document.createElement("a");
    // a2.style.color = "lightblue";
    a3.className = "tryme";
    a3.innerText = "try ME";
    // a2.style.position = "absolute";
    a3.onclick = makeDiv; // <-------- 
    rTop = Math.random()*400;
    rLeft = Math.random()*300;
    a3.style.top = rTop+"px";
    a3.style.left = rLeft+"px";

    document.body.append(a3)


    let a4 = document.createElement("a");
    // a2.style.color = "lightblue";
    a4.className = "tryme";
    a4.innerText = "Try ME not";
    // a2.style.position = "absolute";
    a4.onclick = movePink; // <-------- 
    rTop = 400 + Math.random()*100;
    rLeft = Math.random()*300;
    a4.style.top = rTop+"px";
    a4.style.left = rLeft+"px";

    document.body.append(a4)



}

function backgroundDark(){
    document.body.classList.toggle("darkbackground")
}

function anotherFunction(){
    // console.log("lalalalalallalal");
    // alert("NOO ALERT")
    document.querySelector("#start").classList.toggle("spin")
}

let d = document.createElement("div");
d.className = "pinkDiv";
function makeDiv(){
    document.body.prepend(d)
}

function movePink(){
    d.classList.toggle("moveLeftRight")
}