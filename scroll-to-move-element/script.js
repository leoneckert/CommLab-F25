
// event listener for scrolling the window
// this works because of the empty divs we included
// on the page ("empty scrolling material")
// they take space and thus we can scroll
window.addEventListener("scroll", function(){
    
    // get our location on the overall page
    let percentage = getScrollPercentage()
    console.log(percentage)



    // we can use the percentag number to 
    // transform elements (or change any other of their styles)
    // in the following cases, I do so my definining 
    // their maximum movement and then calculate their 
    // location at any scroll along the way as a 
    // percentage * maximum movement 

    // element 1:
    let elm1 = document.querySelector("#one"); // select element
    let elm1TotalDistance = 800; // max movement
    let elm1YOffset = elm1TotalDistance * (percentage/100); // current position considering percentage of scroll
    elm1.style.transform = "translateY("+elm1YOffset+"px)"; // apply style
   

    // element 2:
    let elm2 = document.querySelector("#two"); // select element
    let elm2TotalDistance = 600;
    let elm2XOffset = elm2TotalDistance - (elm2TotalDistance * (percentage/100));
    elm2.style.transform = "translateX("+elm2XOffset+"px)";
   

    // element 3:
    let elm3 = document.querySelector("#three"); // select element
    let elm3TotalRotation = 360*8;
    let elm3YAngle = elm3TotalRotation * (percentage/100);
    elm3.style.transform = "rotate("+elm3YAngle+"deg)";
   

    // element 4:
    let elm4 = document.querySelector("#four"); // select element
    let elm4TotalDistance = 600;
    let elm4XOffset = elm4TotalDistance * (percentage/100);
    let elm4YOffset = Math.sin(elm4XOffset*0.1) * 20;
    elm4.style.transform = "translate("+elm4XOffset+"px, "+elm4YOffset+"px)";
   


})





function getScrollPercentage(){
    // how far have we scrolled
    let scrollTop = window.scrollY;
    // console.log(scrollTop);

    // how far can we scroll in total
    let maxScroll = document.body.scrollHeight - window.innerHeight;

    let perc = (scrollTop/maxScroll) * 100;
    return perc;
}