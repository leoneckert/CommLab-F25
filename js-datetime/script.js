let secondsBox = document.querySelector(".seconds");
let tickSound = document.querySelector("#tick");

function getTheTime(){
    let now = new Date(); // return the "current moment" / current time
    // console.log(now)
    let h = now.getHours();      // 0–23
    let m = now.getMinutes();    // 0–59
    let s = now.getSeconds();    // 0–59


    console.log( h, m, s );   

    // SECONDS
    // clear out the seconds div completely
    secondsBox.innerHTML = "";

    // put divs into the seconds div to represent
    // how many seconds the current momemt "now" has
    repeat(s, function(){
      let div = document.createElement("div");
      secondsBox.append(div);
    })

    tickSound.play()

    // let p = document.createElement("p")
    // p.innerText = s;
    // document.body.prepend(p);

}

setInterval(getTheTime, 1000);















// Leon's Helper function:
function repeat(n, action) {
  for (let i = 0; i < n; i++) {
    action(i);
  }
}