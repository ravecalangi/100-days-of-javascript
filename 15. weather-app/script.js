const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const apiKey = "ba05f075a467545f163ff074d8922d0c";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if (response.status === 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    } else {
        const data = await response.json();

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

        console.log(data.timezone);

        let weather = data.weather[0].main.toLowerCase();   

        if (weather === "clouds") { 
            weatherIcon.src = "img/clouds.png";
        }
        else if (weather === "clear") {
            weatherIcon.src = "img/clear.png";
        } 
        else if (weather === "rain") {
            weatherIcon.src = "img/rain.png";
        }
        else if (weather === "drizzle") {
            weatherIcon.src = "img/drizzle.png";
        }
        else if (weather === "mist") {
            weatherIcon.src = "img/mist.png";
        }

        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";

        }

}

searchBtn.addEventListener("click", () => {

    checkWeather(searchBox.value);

});