document.addEventListener("mousemove", function(eventInfo){
    console.log("move",eventInfo.pageY);
    document.querySelector("#cursorImgWrapper").style.top = eventInfo.pageY + "px"
    document.querySelector("#cursorImgWrapper").style.left = eventInfo.pageX + "px"
})