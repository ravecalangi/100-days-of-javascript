# Personalized Chatbot

## Description
- A web-based personalized chatbot that sends user messages to the OpenRouter Chat Completions API and responds based on a predefined personal background and system prompt.

## Features
- Sends and receives messages using the OpenRouter API
- Personalized responses based on a fixed user profile
- Typing indicator animation while waiting for responses
- Auto-scrolls to the latest message
- Supports Enter key to send messages
- Special keyword-based replies with a delay

## Technologies Used
- JavaScript (Vanilla)
- HTML (DOM manipulation)
- CSS (for UI and typing animation)
- OpenRouter Chat Completions API

## How to Run
1. Place the JavaScript file inside a project with an `index.html`.
2. Make sure the HTML contains the required elements (`.chatbot-wrapper`, input field, and send button).
3. Open `index.html` in a web browser.
4. Ensure you have a valid OpenRouter API key set in the script.

## Usage
1. Type a message in the input field.
2. Click the **Send** button or press **Enter**.
3. The chatbot will reply based on the predefined system prompt and user background.

**Example:**
- **Input:** `What are you studying?`
- **Output:** `I am currently studying Information Technology and focusing on full-stack web development using the MERN stack.`

## License
MIT License

