const softBtn = document.getElementById("soft-btn");
const mediumBtn = document.getElementById("medium-btn");
const hardBtn = document.getElementById("hard-btn");
const timeEl = document.getElementById("time");
const startBtn = document.getElementById("start-btn");
const restartBtn = document.getElementById("restart-btn");

let softBoiledTime = 6 * 60;
let mediumBoiledTime = 8 * 60;
let hardBoiledTime = 10 * 60;

let softBoilStart = false;
let mediumStart = false;
let hardStart = false;

let timeInterval;

startBtn.addEventListener("click", () => {

    clearInterval(timeInterval);

    if (softBoilStart) {
        timeInterval = setInterval(softBoiledCountdown, 1000);
        softBtn.disabled = true;
        mediumBtn.disabled = true;
        hardBtn.disabled = true;
        startBtn.disabled = true;

    } else if (mediumStart) {
        timeInterval = setInterval(mediumBoiledCountdown, 1000);
        softBtn.disabled = true;
        mediumBtn.disabled = true;
        hardBtn.disabled = true;
        startBtn.disabled = true;

    } else if (hardStart) {
        timeInterval = setInterval(hardBoiledCountdown, 1000);
        softBtn.disabled = true;
        mediumBtn.disabled = true;
        hardBtn.disabled = true;
        startBtn.disabled = true;

    } else {
        alert("Please select duration");

    }

});

restartBtn.addEventListener("click", () => {
    location.reload();
});

softBtn.addEventListener("click", () => {
    timeEl.innerHTML = "(06 : 00)";
    softBoilStart = true;
    mediumStart = false;
    hardStart = false;
});

mediumBtn.addEventListener("click", () => {
    timeEl.innerHTML = "(08 : 00)";
    softBoilStart = false;
    mediumStart = true;
    hardStart = false;
});

hardBtn.addEventListener("click", () => {
    timeEl.innerHTML = "(10 : 00)";
    softBoilStart = false;
    mediumStart = false;
    hardStart = true;
});


function softBoiledCountdown() {

    let minutes = Math.floor(softBoiledTime / 60);
    let seconds = softBoiledTime % 60;

    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    softBoiledTime--;

    timeEl.innerHTML = `(${minutes} : ${seconds})`

}

function mediumBoiledCountdown() {

    let minutes = Math.floor(mediumBoiledTime / 60);
    let seconds = mediumBoiledTime % 60;

    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    mediumBoiledTime--;

    timeEl.innerHTML = `(${minutes} : ${seconds})`

}

function hardBoiledCountdown() {

    let minutes = Math.floor(hardBoiledTime / 60);
    let seconds = hardBoiledTime % 60;

    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    hardBoiledTime--;

    timeEl.innerHTML = `(${minutes} : ${seconds})`

}