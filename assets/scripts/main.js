"use strict";

let hoursArrow = document.querySelector("#hoursArrow");
let minutesArrow = document.querySelector("#minutesArrow");
let secondsArrow = document.querySelector("#secondsArrow");

let today = new Date();
let h = today.getHours();
let m = today.getMinutes();
let s = today.getSeconds();

let secDegrees = 90 + (s*6);
let minDegrees = 90 + (m*6) + (6/60*s);
let hourDegrees = 90 + (h*30) + (30/60*m);

function startTime() {
    secDegrees = secDegrees + 360/60;
    minDegrees = minDegrees + 360/60/60;
    hourDegrees = hourDegrees + 360/60/60/60;
    secondsArrow.style.transform = "translate(-100%,-50%) rotate("+ secDegrees+"deg)";
    minutesArrow.style.transform = "translate(-100%,-50%) rotate("+ minDegrees+"deg)";
    hoursArrow.style.transform = "translate(-100%,-50%) rotate("+ hourDegrees+"deg)";
    
  }

  let tickTack = setInterval(startTime, 1000);

  

