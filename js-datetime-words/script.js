// let secondsBox = document.querySelector(".seconds");
let tickSound = document.querySelector("#tick");
let timeText = document.querySelector("#time");
let hourText = document.querySelector("#hours");
let minuteText = document.querySelector("#minutes");
let secondText = document.querySelector("#seconds");


function getTheTime(){
    let now = new Date(); // return the "current moment" / current time
    // console.log(now)
    let h = now.getHours();      // 0–23
    let m = now.getMinutes();    // 0–59
    let s = now.getSeconds();    // 0–59


    console.log( h, m, s );   

    s_sum = s
    s_sum += (m*60);
    s_sum += (h*60*60);

    timeText.innerText = convert(s_sum);
    hourText.innerText = convert(h);
    minuteText.innerText = convert(m);
    secondText.innerText = convert(s);
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

// actual  conversion code starts here

var ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
var tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
var teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

function convert_millions(num) {
  if (num >= 1000000) {
    return convert_millions(Math.floor(num / 1000000)) + " million " + convert_thousands(num % 1000000);
  } else {
    return convert_thousands(num);
  }
}

function convert_thousands(num) {
  if (num >= 1000) {
    return convert_hundreds(Math.floor(num / 1000)) + " thousand " + convert_hundreds(num % 1000);
  } else {
    return convert_hundreds(num);
  }
}

function convert_hundreds(num) {
  if (num > 99) {
    return ones[Math.floor(num / 100)] + " hundred " + convert_tens(num % 100);
  } else {
    return convert_tens(num);
  }
}

function convert_tens(num) {
  if (num < 10) return ones[num];
  else if (num >= 10 && num < 20) return teens[num - 10];
  else {
    return tens[Math.floor(num / 10)] + " " + ones[num % 10];
  }
}

function convert(num) {
  if (num == 0) return "zero";
  else return convert_millions(num);
}