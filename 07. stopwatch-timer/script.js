const playBtn = document.getElementById("play-btn");
let timeEl = document.querySelector(".time");

let playing = false;
let intervalId;

playBtn.addEventListener("click", () => {

    if (playing) {
        playing = false;
        clearInterval(intervalId);
    } else {
        playing = true;
        intervalId = setInterval(start, 1000);
    }

});

let minutes = 0;
let seconds = 0;
let hours = 0;

function start() {
    seconds++;

    if (seconds > 59) {
        seconds = 0;
        minutes++;
    } else if (minutes > 59) {
        minutes = 0;
        hours++;
    }
    
    let displayHours = hours < 10 ? '0' + hours : hours;
    let displayMinutes = minutes < 10 ? '0' + minutes : minutes;
    let displaySeconds = seconds < 10 ? '0' + seconds : seconds;

    timeEl.innerHTML = `${displayHours}:${displayMinutes}:${displaySeconds}`;
}

const retryBtn = document.getElementById("retry-btn");

retryBtn.addEventListener("click", () => {
    window.location.reload();
});
