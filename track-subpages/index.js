let linkOne = document.querySelector("#link-one");
let linkTwo = document.querySelector("#link-two");

let urlString = window.location.search;
let urlParams = new URLSearchParams(urlString);
let aVisited = urlParams.get('a') || 0;
let bVisited = urlParams.get('b') || 0;

console.log("a", aVisited)
console.log("b", bVisited)

// if(subpagesVisited >= 2){
//     // make woman clickable
//     console.log("visiited enough pages!")
// }

linkOne.addEventListener("click", function(){
    document.location = "one.html?a="+aVisited + "&b=" + bVisited
})


linkTwo.addEventListener("click", function(){
    document.location = "two.html?a="+aVisited + "&b=" + bVisited
})



