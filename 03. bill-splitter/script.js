const amount = document.getElementById("amount-input");
const people = document.getElementById("participants-input");
const tip = document.getElementById("tip-input");
const calculateBtn = document.getElementById("calculate-btn");
const costEl = document.getElementById("cost-element");

calculateBtn.addEventListener("click", () => {
    
    let grandTotal = Number(amount.value);
    const totalPeople = Number(people.value);
    const totalTip = Number(tip.value);

    if (grandTotal == "" && totalPeople == "") {
        alert("Please fill in both the total amount and number of people.");
    }else if (grandTotal == "") {
        alert("Please provide the total amount.");
    } else if (totalPeople == "") {
        alert("Please provide the number of people.");
    } else if (isNaN(grandTotal) || isNaN(totalPeople) || isNaN(totalTip)) {
        alert("Only numbers are allowed for amount, people, and tip.");
    } else {
        const tipAmount = (totalTip / 100) * grandTotal;
        const total = grandTotal + tipAmount;
        const share = total / totalPeople;
        
        costEl.innerHTML = share;
    }

});