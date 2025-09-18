
const nameError = document.getElementById("name-error");
const phoneError = document.getElementById("phone-error");
const emailError = document.getElementById("email-error");
const messageError = document.getElementById("message-error");
const submitError = document.getElementById("submit-error");


function validateName() {
    const nameInput = document.getElementById("name-input").value.trim();
    const nameError = document.getElementById("name-error");

    // Check if empty
    if (nameInput.length === 0) {
        nameError.innerHTML = "Name is required.";
        return false;
    }

    // Check for invalid characters (only letters and single spaces allowed)
    if (!/^[A-Za-z ]+$/.test(nameInput)) {
        nameError.innerHTML = "Name can only contain letters and spaces.";
        return false;
    }

    // Check for consecutive spaces
    if (nameInput.includes("  ")) {
        nameError.innerHTML = "Please avoid using multiple consecutive spaces.";
        return false;
    }

    // Count words (2 to 3 words only)
    const wordCount = nameInput.split(" ").filter(word => word !== "").length;
    if (wordCount < 2) {
        nameError.innerHTML = "Please enter at least two words.";
        return false;
    }

    if (wordCount > 3) {
        nameError.innerHTML = "Name must not exceed three words.";
        return false;
    }

    nameError.innerHTML = '<i class="fa-solid fa-circle-check" style="color: green;"></i>';
    return true;
}

function validatePhone() {
    const phoneInput = document.getElementById("phone-input").value.trim();
    const phoneError = document.getElementById("phone-error");

    // Check if empty
    if (phoneInput.length === 0) {
        phoneError.innerHTML = "Phone number is required.";
        return false;
    }

    // Check for non-digit characters
    if (!/^[0-9]+$/.test(phoneInput)) {
        phoneError.innerHTML = "Phone number must contain digits only.";
        return false;
    }

    // Check format: must start with 9 
    if (!phoneInput.startsWith("9")) {
    phoneError.innerHTML = "Phone number must start with 9.";
    return false;
    }
    // need to be exactly 10 digits
    if (phoneInput.length !== 10 || !/^\d+$/.test(phoneInput)) {
        phoneError.innerHTML = "Phone number must be exactly 10 digits.";
        return false;
    }

    phoneError.innerHTML = '<i class="fa-solid fa-circle-check" style="color: green;"></i>';
    return true;
}


function validateEmail() {
    const emailInput = document.getElementById("email-input").value.trim();
    const emailError = document.getElementById("email-error");

    // Basic email format check
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailInput.length === 0) {
        emailError.innerHTML = "Email cannot be empty.";
        return false;
    } else if (!emailPattern.test(emailInput)) {
        emailError.innerHTML = "Invalid email format.";
        return false;
    } else {
        // Get the part before the @
        const namePart = emailInput.split("@")[0];
        if (namePart.length < 5) {
            emailError.innerHTML = "Email username must be at least 5 characters.";
            return false;
        }

        emailError.innerHTML = '<i class="fa-solid fa-circle-check" style="color: green;"></i>';
        return true;
    }
}

function validateMessage() {
    const messageInput = document.getElementById("message-input").value.trim();
    const messageError = document.getElementById("message-error");

    if (messageInput.length === 0) {
        messageError.innerHTML = "message section cannot be empty";
        return false;
    }

    if (messageInput.length < 20) {
        messageError.innerHTML = "message too short";
        return false;
    }

    messageError.innerHTML = '<i class="fa-solid fa-circle-check" style="color: green;"></i>';
    return true;
}

function validateButton() {
    const buttonError = document.getElementById("submit-error");

    if (!validateName() || !validatePhone() || !validateEmail() || !validateMessage() ) {

        buttonError.innerHTML = "Please fix error to submit.";
        setTimeout(function(){
            buttonError.innerHTML = "";
        }, 3000);

        return false;

    }

}


