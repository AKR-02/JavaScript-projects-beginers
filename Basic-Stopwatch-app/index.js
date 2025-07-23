let [seconds, minutes, hours] = [0, 0, 0];
let interval = null;

let displayTime = document.getElementById("displaytime");
let resetbtn = document.getElementById("reset-btn");
let playbtn = document.getElementById("play-btn");
let stopbtn = document.getElementById("stop-btn");
let runner = document.getElementById("runner");


function stopwatch(){
    seconds++;
    if(seconds == 60){
        minutes++;
        seconds = 0;
        if(minutes == 60){
            hours++;
            minutes = 0;
        }
    }
    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;

    displayTime.innerHTML = h + ":" + m + ":" + s;
}

function startTimer(){
    if(interval !== null){
        clearInterval(interval);
    }
    interval = setInterval(stopwatch, 1000);
    runner.style.display = "block";
}
function pauseTimer(){
    clearInterval(interval);
    runner.style.display = "none";
};

playbtn.onclick = function(){
    startTimer();
};

stopbtn.onclick = function(){
    pauseTimer();
};

resetbtn.onclick = function(){
    clearInterval(interval);
    [seconds, minutes, hours] = [0, 0, 0];
    displayTime.innerHTML = "00:00:00";
};
