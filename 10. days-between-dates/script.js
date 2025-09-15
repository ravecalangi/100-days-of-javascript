const dateStart = document.getElementById("date-start");
const dateFinish = document.getElementById("date-finish");
const calculateBtn = document.getElementById("calculate-btn");
const daysContainer = document.getElementById("days-container");
const daysEl = document.getElementById("days-element");

daysContainer.style.display = "none";

calculateBtn.addEventListener("click", () => {

    const start = new Date(dateStart.value);
    const finish = new Date(dateFinish.value);

    if (!dateStart.value || !dateFinish.value) {
        alert("Please select both start and finish dates.");
        return;
    }
    else {

        // It will automatically be converted to milliseconds once you subtract it.
        
        // It is important to divide it by (1000 * 60 * 60 * 24) to convert it into days.

        const diff = Math.abs(finish-start) / (1000 * 60 * 60 * 24);

        const diffCheck = diff > 1 ? `are ${diff} days` : `is ${diff} day`;

        daysEl.innerHTML = diffCheck;

        daysContainer.style.display = "block";

        // const MS_PER_SECOND = 1000;
        // const MS_PER_MINUTE = 1000 * 60;      = 60,000
        // const MS_PER_HOUR   = 1000 * 60 * 60;  = 3,600,000
        // const MS_PER_DAY    = 1000 * 60 * 60 * 24; = 86,400,000
        // Then, divide diff ms by MS_PER_DAY to get days

    }

});