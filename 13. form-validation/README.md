# Form Validation Script

## Description
A JavaScript-based form validation script that checks user inputs for name, phone, email, and message fields before allowing form submission.

## Features
- Validates **name** (letters only, 2–3 words, no consecutive spaces).
- Validates **phone number** (must start with `9`, exactly 10 digits, numbers only).
- Validates **email** (proper format with minimum 5-character username).
- Validates **message** (minimum of 20 characters).
- Displays real-time error messages with icons for valid inputs.
- Prevents form submission until all fields are correctly filled.

## Technologies Used
- **JavaScript**
- **HTML** (for input fields and error message elements)
- **Font Awesome** (for success icons)

## How to Run
1. Create an `index.html` file and include this JavaScript code inside a `<script>` tag or link it as an external `.js` file.
2. Ensure the form has input fields with the following IDs:
   - `name-input`, `phone-input`, `email-input`, `message-input`
   - Error message spans: `name-error`, `phone-error`, `email-error`, `message-error`, `submit-error`
3. Open `index.html` in a browser.

## Usage
1. Enter values in the form fields:
   - **Name**: Only letters and spaces, must be 2–3 words.  
     Example: `Juan Dela Cruz` ✅ | `Juan` ❌ | `Juan  Cruz` ❌
   - **Phone**: Must start with `9` and be exactly 10 digits.  
     Example: `9123456789` ✅ | `8123456789` ❌ | `91234567` ❌
   - **Email**: Must be valid format with at least 5 characters before `@`.  
     Example: `sample123@gmail.com` ✅ | `a@b.com` ❌
   - **Message**: Must be at least 20 characters long.  
     Example: `Hello, this is a valid message input.` ✅ | `Hi there!` ❌
2. If any field is invalid, an error message will appear.
3. Once all fields are valid, the form can be submitted successfully.

**Example Input/Output:**
- Input:
Name: Rave Calangi
Phone: 9123456789
Email: justincalangi@gmail.com

Message: This is a sample message with more than twenty characters.

- Output:  
All fields display ✅ check icons, and form is ready to submit.

## License
MIT License
