# Password Visibility Toggle

## Description
- A simple JavaScript feature that allows users to toggle the visibility of a password field with an eye icon.

## Features
- Toggle password visibility between hidden (`password`) and visible (`text`).
- Change eye icon image depending on password state (open/close).
- Lightweight and easy to integrate into any form.

## Technologies Used
- JavaScript
- HTML
- CSS (optional, for styling)

## How to Run
1. Create an `index.html` file and include the provided JavaScript code.
2. Make sure you have:
   - An input field with `id="password"`.
   - An element (like a button or span) with `id="icon"`.
   - An `img` tag with `id="image"`, pointing to your eye-open and eye-close images.
3. Open `index.html` in your browser.

## Usage
1. Type a password in the input field.
2. Click the eye icon (`#icon`) to toggle:
   - If the password is hidden, it will be revealed.
   - If the password is visible, it will be hidden again.
3. The eye icon image updates automatically.

**Example:**
```html
<input type="password" id="password" placeholder="Enter your password">
<span id="icon">
  <img id="image" src="img/eye-close.png" alt="Toggle visibility">
</span>
<script src="script.js"></script>
