let searchButton = document.getElementById('searchButton');
let weatherInfo = document.getElementById('weatherInfo');
let cityName = document.getElementById('cityName');
let temperature = document.getElementById('temperature');
let description = document.getElementById('description');
let humidity = document.getElementById('humidity');

searchButton.addEventListener('click', () => {
    let city = document.getElementById('city').value;
    if (!city) {
        return;
    }

    else {
        getWeather(city)
    }
});

async function getWeather(city) {
    const apiKey = "02cfede069404b566de2a42ce9c6d658"; // MY API
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url)
        if (!response.ok) {
            throw new Error("City Not Found");
        }

        const data = await response.json();

        displayWeather(data)
    }

    catch (error) {
        alert("Error fetching weather data: " + error.message);

    }


}

function displayWeather(data) {
    weatherInfo.style.display = 'block';
    cityName.textContent = ` ${data.name}, ${data.sys.country}`
    temperature.textContent = `Temperature: ${data.main.temp}°C`;
    description = `Description: ${data.weather[0].description}`;
    humidity = `Humidity: ${data.main.humidity}%`;
}