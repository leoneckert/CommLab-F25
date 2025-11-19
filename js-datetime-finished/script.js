

setInterval(getTheTime, 300);

let prev_s;
function getTheTime(){
    let now = new Date();

    let h = now.getHours();      // 0–23
    let m = now.getMinutes();    // 0–59
    let s = now.getSeconds();    // 0–59

    if(s != prev_s || prev_s == undefined){
        console.log( h, m, s );
        prev_s = s;
        // seconds
        let sec2 = document.querySelector(".text .seconds");
        sec2.innerHTML = s;

        let sec = document.querySelector(".seconds");
        sec.innerHTML = "";
        if(s == 0){
            let d = document.createElement("div");
            d.className = "zero";
            sec.append(d);
        }
        repeat(s, function(){
            let d = document.createElement("div");
            sec.append(d);
        })

        

        // minutes
        let min2 = document.querySelector(".text .minutes");
        min2.innerHTML = m;

        let min = document.querySelector(".minutes");
        min.innerHTML = "";
        if(m == 0){
            let d = document.createElement("div");
            d.className = "zero";
            min.append(d);
        }
        repeat(m, function(){
            let d = document.createElement("div");
            min.append(d);
        })

        

        // hours
        let hou2 = document.querySelector(".text .hours");
        hou2.innerHTML = h;

        let hou = document.querySelector(".hours");
        hou.innerHTML = "";
        if(h == 0){
            let d = document.createElement("div");
            d.className = "zero";
            hou.append(d);
        }
        repeat(h, function(){
            let d = document.createElement("div");
            hou.append(d);
        })

        

    }
    
}












// Leon's Helper function:
function repeat(n, action) {
  for (let i = 0; i < n; i++) {
    action(i);
  }
}