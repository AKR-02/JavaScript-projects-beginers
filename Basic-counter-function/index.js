let count = 0;
let intervalId;

let countlabel = document.getElementById("countlabel")
let decrementbtn = document.getElementById("decrementbtn")
let resetbtn = document.getElementById("resetbtn")
let incrementbtn = document.getElementById("incrementbtn")

function updatelabel(){
    countlabel.innerHTML = count;
}
decrementbtn.onclick = function(){
    count -= 1;
    updatelabel();
}
incrementbtn.onclick = function(){
    count += 1;
    updatelabel();
}
//for decrement btn click and hold too see the magic
decrementbtn.addEventListener("mousedown",function(){
    intervalId = setInterval(() => {
        count -= 1;
        updatelabel();
    }, 200);
});

decrementbtn.addEventListener("mouseup",function(){
    clearInterval(intervalId);
});

decrementbtn.addEventListener("mouseleave",function(){
    clearInterval(intervalId);
});

//for increament btn click and hold too see the magic 
incrementbtn.addEventListener("mousedown",function(){
    intervalId = setInterval(() => {
        count += 1;
        updatelabel();
    }, 200);
});

incrementbtn.addEventListener("mouseup",function(){
    clearInterval(intervalId);
});

incrementbtn.addEventListener("mouseleave",function(){
    clearInterval(intervalId);
});

resetbtn.onclick = function(){
    count=0
    updatelabel();
}