const amountInput = document.getElementById("amount-input");
const depositBtn = document.getElementById("deposit-btn");
const withdrawBtn = document.getElementById("withdraw-btn");
const balanceBtn = document.getElementById("balance-btn");
const messageEl = document.getElementById("bank-message");

let money = 0;

depositBtn.addEventListener("click", () => {
    if (amountInput.value == "") {
        alert("Something went wrong. Please input a valid amount.");
        return;
    } else {
        const amount = Number(amountInput.value);
        money += amount;
        messageEl.innerHTML = `You have successfully deposited ₱${amount}.00. Your new balance is ₱${money}.00.`;
        amountInput.value = "";
    }
    
});

withdrawBtn.addEventListener("click", () => {
    if (amountInput.value == "") {
        alert("Something went wrong. Please input a valid amount.");
        return;
    } else {
        const amount = Number(amountInput.value);
        if (amount > money) {
            messageEl.innerHTML = `Withdrawal unsuccessful. Your current balance is ₱${money}.00.`;
            amountInput.value = "";
        } else {
            money -= amount;
            messageEl.innerHTML = `You have successfully withdrawn ₱${amount}.00. Your new balance is ₱${money}.00.`;
            amountInput.value = "";
        }
        
    }
    
});

balanceBtn.addEventListener("click", () => {
    messageEl.innerHTML = `As of now, your available balance is ₱${money}.00`;
});