# SIM Network Detector

## Description
- A simple React-based application that detects the mobile network (Globe, Smart, or DITO) of a given Philippine phone number based on its prefix.

## Features
- Accepts an 11-digit mobile number input.
- Validates the phone number length.
- Detects and displays whether the SIM belongs to Globe, Smart, or DITO.
- Shows an error message if the number is invalid or not found.

## Technologies Used
- HTML
- CSS
- JavaScript (ES6)
- React.js
- ReactDOM

## How to Run
1. Make sure you have an HTML file with a root `<div id="root"></div>`.
2. Include React and ReactDOM via CDN or a bundler.
3. Copy the provided JavaScript code into a `<script>` tag or a separate JS file.
4. Open the HTML file in a browser.

## Usage
1. Type an 11-digit Philippine mobile number in the input field.
2. Click **Check Network**.
3. The detected SIM network will be displayed.

**Example:**
- Input: `09171234567`  
- Output: `Detected network: Globe SIM.`

- Input: `09081234567`  
- Output: `Detected network: Smart SIM.`

- Input: `08951234567`  
- Output: `Detected network: DITO SIM.`

- Input: `12345`  
- Output: `Detected network: Please input a valid phone number.`

## License
MIT License
