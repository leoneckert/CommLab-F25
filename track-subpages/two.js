let urlString = window.location.search;
let urlParams = new URLSearchParams(urlString);
let aVisited = urlParams.get('a');



let linkIndex= document.querySelector("#link-index");



linkIndex.addEventListener("click", function(){
    document.location = "index.html?a="+aVisited + "&b=1";
})
