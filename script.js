const apiKey = '02cfede069404b566de2a42ce9c6d658'; // Replace with your OpenWeatherMap API key
const weatherInfo = document.getElementById("weatherInfo");
const cityNameElement = document.getElementById("cityName");
const temperatureElement = document.getElementById("temperature");
const descriptionElement = document.getElementById("description");
const humidityElement = document.getElementById("humidity");
const getWeatherBtn = document.getElementById("getWeatherBtn");

getWeatherBtn.addEventListener("click", () => {
    const city = document.getElementById("city").value;
    if (city) {
        getWeather(city);
    } else {
        alert("Please enter a city name.");
    }
});

function getWeather(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.cod === "404") {
                alert("City not found. Please try again.");
            } else {
                displayWeather(data);
            }
        })
        .catch(error => {
            alert("Error fetching weather data.");
        });
}

function displayWeather(data) {
    weatherInfo.style.display = "block";
    cityNameElement.textContent = `${data.name}, ${data.sys.country}`;
    temperatureElement.textContent = `Temperature: ${data.main.temp}°C`;
    descriptionElement.textContent = `Description: ${data.weather[0].description}`;
    humidityElement.textContent = `Humidity: ${data.main.humidity}%`;
}
