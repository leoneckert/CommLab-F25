let urlString = window.location.search;
let urlParams = new URLSearchParams(urlString);
// let subpagesVisited = Number(urlParams.get('visited')) + 1; //(this one)
let bVisited = urlParams.get('b');



let linkIndex= document.querySelector("#link-index");




linkIndex.addEventListener("click", function(){
    document.location = "index.html?a=1&b=" + bVisited
})
