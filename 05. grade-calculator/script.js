const generateBtn = document.getElementById("generate-btn");
const gradesContainer = document.querySelector(".grades-container");
const quantity = document.getElementById("subject-quantity");
const calculateBtn = document.getElementById("calculate-btn");
const averageElement = document.getElementById("average-element");

averageElement.style.display = "none";
calculateBtn.style.display = "none";

generateBtn.addEventListener("click", () => {

    const qualityValue = quantity.value;

    if (qualityValue > 10 || qualityValue < 0 || isNaN(qualityValue) || qualityValue == "") {
        gradesContainer.innerHTML = "";
        alert("Please enter a valid number of subjects.");
    } else {
        gradesContainer.innerHTML = "";

        let number = 0;

        for (i = 0; i < quantity.value; i++) {
            
            const container = document.createElement("div");
            container.className = "grades";
            const subject = document.createElement("div");
            subject.className = "subject";

            number++;

            let numberText = "";
            
            switch (number) {
                case 1:
                    numberText = "First";
                    break;
                case 2:
                    numberText = "Second";
                    break;
                case 3:
                    numberText = "Third";
                    break;
                case 4:
                    numberText = "Fourth";
                    break;
                case 5:
                    numberText = "Fifth";
                    break;
                case 6:
                    numberText = "Sixth";
                    break;
                case 7:
                    numberText = "Seventh";
                    break;
                case 8:
                    numberText = "Eighth";
                    break;
                case 9:
                    numberText = "Ninth";
                    break;
                case 10:
                    numberText = "Tenth";
                    break;
                default:
                    numberText = "Invalid number";
                    break;
            }

            subject.innerHTML = `${numberText} Subject:`;
            const inputText = document.createElement("input");
            inputText.className = "grade-input";
            inputText.type = "number";
            container.appendChild(subject);
            container.appendChild(inputText);

            gradesContainer.appendChild(container);
        }

        calculateBtn.style.display = "block";
    }

});

let total = 0;

calculateBtn.addEventListener("click", () => {

    averageElement.style.display = "none";

    let averageSummation = 0;
    const gradeSummation = document.querySelectorAll(".grade-input");
    let isZero = false;

    gradeSummation.forEach(grade => {
        let value = Number(grade.value);
        
        if (value == 0) {
            isZero = true;
            return;
        }

        averageSummation += value;
    });

    if (isZero) {
        alert("Please fill in all subject inputs and make sure no value is zero.");
        return;
    } else {
        const finalAverage = averageSummation / quantity.value;

        const averageEl = document.getElementById("average");

        averageEl.textContent = `${(finalAverage).toFixed(2)}`;

        averageElement.style.display = "block";
    }
    
});

