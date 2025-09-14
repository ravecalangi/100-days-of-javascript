const inputDisplay = document.getElementById("input");
const clearBtn = document.getElementById("clear");
const buttons = document.querySelectorAll(".btn-js");
const equalBtn = document.getElementById("equal");

let result;

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const data = button.dataset.value;
        
        value = inputDisplay.value += data;
        inputDisplay.value = value;

    });
});

equalBtn.addEventListener('click', () => {

    try {
        result = eval(value);
        inputDisplay.value = result;
    } catch {
        inputDisplay.value = "Syntax Error";
    }
    
});

clearBtn.addEventListener('click', () => {
    inputDisplay.value = '';
});

