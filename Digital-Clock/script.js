function updateClock(){
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    let clock = document.getElementById('clock');
    clock.innerHTML = `${hours}:${minutes}:${seconds}`;
}
let dayAnim = lottie.loadAnimation({
  container: document.getElementById('day-animation'),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: 'Sunrise - Breathe in Breathe out.json' // replace with your downloaded Lottie JSON path
});

let nightAnim = lottie.loadAnimation({
  container: document.getElementById('night-animation'),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: 'Stars.json' // replace with your downloaded Lottie JSON path
});

function updateBackground() {
  let hours = new Date().getHours();
  if(hours >= 6 && hours < 18){
    document.getElementById('day-animation').style.display = 'block';
    document.getElementById('night-animation').style.display = 'none';
  } else {
    document.getElementById('day-animation').style.display = 'none';
    document.getElementById('night-animation').style.display = 'block';
  }
}
setInterval(updateClock, 1000);
setInterval(updateBackground, 1000);
updateBackground(); // Initial call to set the background immediately
updateClock(); // Initial call to set the clock immediately