const findOutBtn = document.getElementById("find-out-btn");
const inputNum = document.getElementById("input-number");
const resultContainer = document.querySelector(".result-container");

findOutBtn.addEventListener('click', () => {

    const value = inputNum.value;

    if (inputNum.value.trim() === "") {

        resultContainer.innerHTML = 'Please insert a number';
        
        setTimeout(() => {
            resultContainer.innerHTML = '';
        }, 5000);
        
        return;
    }

    if (value % 2 === 0) {

        resultContainer.innerHTML = 'Your number is even.';

        setTimeout(() => {
            resultContainer.innerHTML = '';
        }, 5000);
        
    } else if (value % 2 === 1) {

        resultContainer.innerHTML = 'Your number is odd.';

        setTimeout(() => {
            resultContainer.innerHTML = '';
        }, 5000);

    } else {

        resultContainer.innerHTML = 'Please enter a valid number.';

        setTimeout(() => {
            resultContainer.innerHTML = '';
        }, 5000);
    }

    inputNum.value = "";

});



