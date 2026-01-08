const speech = new SpeechSynthesisUtterance();

const startBtn = document.getElementById("start-btn");
const text = document.getElementById("text");

let voices = [];

let voiceSelect = document.querySelector("select");

window.speechSynthesis.onvoiceschanged = () => {

    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[1];

    voices.forEach((voice, i) => {
        voiceSelect.options[i] = new Option(voice.name, i);
    });

};

voiceSelect.addEventListener("change", () => {

    window.speechSynthesis.cancel();
    speech.voice = voices[voiceSelect.value];
    
});

startBtn.addEventListener("click", () => {
    const textValue = text.value.trim();

    speech.text = textValue;
    window.speechSynthesis.speak(speech);

});