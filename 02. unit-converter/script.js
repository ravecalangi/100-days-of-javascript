const lengthBtn = document.getElementById("length-btn");
const weightBtn = document.getElementById("weight-btn");
const temperatureBtn = document.getElementById("temperature-btn");
const volumneBtn = document.getElementById("volume-btn");
const timeBtn = document.getElementById("time-btn");
const speedBtn = document.getElementById("speed-btn");
const areaBtn = document.getElementById("area-btn");
const dataStorageBtn = document.getElementById("data-storage-btn");

const title = document.getElementById("title");

const firstContainer = document.querySelector(".first-container");
const secondContainer = document.querySelector(".second-container");

const mainContainer = document.querySelector(".converter-container");

const offBtns = document.querySelectorAll(".btn-off");

const unavailableMessage = document.getElementById("unavailable-message");

unavailableMessage.style.display = "none";

offBtns.forEach(offBtn => {
    offBtn.addEventListener("mouseenter", () => {
        unavailableMessage.style.display = "block";
    });

    offBtn.addEventListener("mouseleave", () => {
        unavailableMessage.style.display = "none";
    });
});

function removeContainer() {
    firstContainer.remove();
    secondContainer.remove();
}

weightBtn.disabled = true;
temperatureBtn.disabled = true;
volumneBtn.disabled = true;
timeBtn.disabled = true;
speedBtn.disabled = true;
areaBtn.disabled = true;
dataStorageBtn.disabled = true;

lengthBtn.addEventListener("click", () => {

    title.innerHTML = "Length Converter";

    removeContainer();
    
    const conversions = [
        "Grams to Kilograms",
        "Kilograms to Grams",
        "Grams to Pounds",
        "Pounds to Grams",
        "Grams to Ounces",
        "Ounces to Grams",
        "Kilograms to Pounds",
        "Pounds to Kilograms",
        "Kilograms to Ounces",
        "Ounces to Kilograms",
        "Pounds to Ounces",
        "Ounces to Pounds"
    ];

    conversions.forEach(conversion => {
        const btn = document.createElement("button");
        btn.textContent = conversion;
        btn.classList = "length-buttons";
        mainContainer.appendChild(btn);
    });

    const buttons = document.querySelectorAll(".length-buttons");

    buttons.forEach(button => {

        let buttonText = button.textContent;

        button.addEventListener("click", () => {

            while (mainContainer.firstChild) {
                mainContainer.removeChild(mainContainer.firstChild);
            }

            const headerTitle = document.createElement("h1");
            headerTitle.id = "title";
            headerTitle.innerHTML = button.textContent;
            mainContainer.appendChild(headerTitle);

            const text = button.textContent;

            // function(v) {
            //     return v / 1000;
            // } is same as (v) => v / 1000)

            switch (text) {
                case "Grams to Kilograms":
                    createConverter(headerTitle, "grams", "kilograms", (v) => v / 1000);
                    break;

                case "Kilograms to Grams":
                    createConverter(headerTitle, "kilograms", "grams", (v) => v * 1000);
                    break;

                case "Grams to Pounds":
                    createConverter(headerTitle, "grams", "pounds", (v) => v / 453.592);
                    break;

                case "Pounds to Grams":
                    createConverter(headerTitle, "pounds", "grams", (v) => v * 453.592);
                    break;

                case "Grams to Ounces":
                    createConverter(headerTitle, "grams", "ounces", (v) => v / 28.3495);
                    break;

                case "Ounces to Grams":
                    createConverter(headerTitle, "ounces", "grams", (v) => v * 28.3495);
                    break;

                case "Kilograms to Pounds":
                    createConverter(headerTitle, "kilograms", "pounds", (v) => v * 2.20462);
                    break;

                case "Pounds to Kilograms":
                    createConverter(headerTitle, "pounds", "kilograms", (v) => v / 2.20462);
                    break;

                case "Kilograms to Ounces":
                    createConverter(headerTitle, "kilograms", "ounces", (v) => v * 35.274);
                    break;

                case "Ounces to Kilograms":
                    createConverter(headerTitle, "ounces", "kilograms", (v) => v / 35.274);
                    break;

                case "Pounds to Ounces":
                    createConverter(headerTitle, "pounds", "ounces", (v) => v * 16);
                    break;

                case "Ounces to Pounds":
                    createConverter(headerTitle, "ounces", "pounds", (v) => v / 16);
                    break;

                default:
            }
            
        });
        
    });

});

// helper function (help reduce redundancy)
function createConverter(headerTitle, fromUnit, toUnit, convertFn) {
    const input = document.createElement("input");
    input.placeholder = `Enter ${fromUnit}...`;
    input.style.width = "280px";

    const button = document.createElement("button");
    button.textContent = "Calculate";

    headerTitle.appendChild(input);
    headerTitle.appendChild(button);

    button.addEventListener("click", () => {
        const value = input.value;

        if (value.trim() === "" || isNaN(value)) {
            alert("Please input a valid number");
        } else {
            const p = document.createElement("p");
            const conversion = convertFn(parseFloat(value)); // (v) = value from the user
            p.textContent = `The value of ${value} ${fromUnit} is equal to ${conversion} ${toUnit}.`;
            p.style.fontSize = "10px";

            while (headerTitle.firstChild) {
                headerTitle.removeChild(headerTitle.firstChild);
            }

            headerTitle.appendChild(p);
        }
    });
}
