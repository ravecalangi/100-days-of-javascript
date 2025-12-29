const OPENROUTER_API_KEY = "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";
const CHATBOT_SITE_URL = "https://ravenchatbot.com";
const CHATBOT_SITE_NAME = "Mini Chatbot";
const CHATBOT_MODEL = "deepseek/deepseek-r1-0528:free";

const chatbotMessageContainer = document.querySelector(".chatbot-wrapper");
const sendBtn = document.getElementById("send-btn");
const userMessageInput = document.getElementById("user-message-input");

// Auto scroll
function scrollToBottom() {
    chatbotMessageContainer.scrollTop = chatbotMessageContainer.scrollHeight;
}

// Create typing bubble
function createTypingBubble() {
    const typingDiv = document.createElement("div");
    typingDiv.classList.add("chatbot", "typing");
    for (let i = 0; i < 3; i++) {
        const dot = document.createElement("span");
        typingDiv.appendChild(dot);
    }
    chatbotMessageContainer.appendChild(typingDiv);
    scrollToBottom();
    return typingDiv;
}

// Send API message
async function sendToChatbot(userMessage) {
    sendBtn.classList.add("loading");
    sendBtn.disabled = true;

    const typingDiv = createTypingBubble();

    const userName = "Justin Raven Calangi";
    const userBackground = "I am a 20-year-old student at Bulacan State University (Information Technology) who is interested in full-stack web development. I am currently studying the MERN stack and aiming to do freelancing after 6 months.";

    try {
        const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${OPENROUTER_API_KEY}`,
                "HTTP-Referer": CHATBOT_SITE_URL,
                "X-Title": CHATBOT_SITE_NAME,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                model: CHATBOT_MODEL,
                
                messages: [
                    {
                        role: "system",
                        content: `You are a helpful chatbot that always responds in English.
                    You are ${userName}. You are not pretending to be someone else, you are Raven, and all information refers to you as a real person, not a robot.

                    Use the following background when responding:
                    ${userBackground}

                    Your replies should be professional, friendly, informative, and personalized based on this background.
                    If a question is not related to you or your background, politely say sorry and explain that you only answer questions related to you.
                    Always use "I" statements when the question asks about your personal information. Lastly, make your answer short but understandable`
                    
                    },

                    {
                        role: "user",
                        content: userMessage
                    }
                ]


            })
        });

        const data = await response.json();

        typingDiv.remove();

        const chatbotMessageDiv = document.createElement("div");
        chatbotMessageDiv.classList.add("chatbot");
        chatbotMessageDiv.innerHTML = data.choices[0].message.content;
        chatbotMessageContainer.appendChild(chatbotMessageDiv);
        scrollToBottom();

    } catch (error) {
        console.error(error);
        typingDiv.remove();
    } finally {
        sendBtn.classList.remove("loading");
        sendBtn.disabled = false;
    }
}

// Special reply (3-second delay)
function sendSpecialReply(replyText) {
    sendBtn.classList.add("loading");
    sendBtn.disabled = true;

    const typingDiv = createTypingBubble();

    setTimeout(() => {
        typingDiv.remove();
        const chatbotMessageDiv = document.createElement("div");
        chatbotMessageDiv.classList.add("chatbot");
        chatbotMessageDiv.innerHTML = replyText;
        chatbotMessageContainer.appendChild(chatbotMessageDiv);
        scrollToBottom();
        sendBtn.classList.remove("loading");
        sendBtn.disabled = false;
    }, 3000);
}

// Main chat function
function talkChatbot() {
    sendBtn.addEventListener("click", () => {
        const message = userMessageInput.value.trim();
        if (!message) return;

        // Add user message
        const userMessageDiv = document.createElement("div");
        userMessageDiv.classList.add("user");
        userMessageDiv.innerHTML = message;
        chatbotMessageContainer.appendChild(userMessageDiv);
        scrollToBottom();

        userMessageInput.value = "";

        if (message.toLowerCase().includes("friend")) {
            sendSpecialReply("Hello my friend!");
        } else {
            sendToChatbot(message);
        }
    });

    // Enter key sends message
    userMessageInput.addEventListener("keydown", (e) => {
        if (e.key === "Enter") sendBtn.click();
    });
}

talkChatbot();
