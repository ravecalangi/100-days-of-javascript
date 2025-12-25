
const apiUrl = "https://v2.jokeapi.dev/joke/Programming,Miscellaneous,Pun,Spooky,Christmas?blacklistFlags=nsfw,religious,political,racist,sexist,explicit";

const jokeElement = document.getElementById("joke-paragraph");
const jokeElement1 = document.getElementById("joke-paragraph-1");

async function getJoke () {
    const response = await fetch(apiUrl);

    if (response.status === 404) {
        console.log("something went wrong");
    } else {

        const data = await response.json();

        if (data.type === "single") {
            jokeElement.innerHTML = data.joke;
            jokeElement1.innerHTML = "";
        } else if (data.type === "twopart") {
            console.log("double joke");
            jokeElement.innerHTML = data.setup;
            jokeElement1.innerHTML = data.delivery;
        }

    }
}

const jokeBtn = document.getElementById("joke-btn");

jokeBtn.addEventListener("click", () => {
    getJoke();
});