

// we give an element to this function
// and the element will turn red and change text
function colorize(elm){
    elm.style.backgroundColor = "red";
    elm.classList.toggle("circle")
}

function clickedButton(){
    // // select box(es)
    let b = document.querySelector(".box");
    // // use colorize to color box
    // colorize(b);
    console.log(b);
    let bs = document.querySelectorAll(".box");
    console.log(bs);

    // call function (colorize)
    // for each element (forEach)
    // in a list (bs)
    bs.forEach(colorize);
    


}



