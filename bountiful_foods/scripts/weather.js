// Replace YOUR_API_KEY with your actual API key
const apiKey = '4def50accbd787e425567d862bd5108f';

const weatherCard = document.querySelector('.weather-card');

// Replace CARLSBAD_LATITUDE and CARLSBAD_LONGITUDE with the latitude and longitude of Carlsbad
const apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=CARLSBAD_LATITUDE&lon=CARLSBAD_LONGITUDE&exclude=minutely,hourly&units=imperial&appid=${apiKey}`;

// Get the elements to display the weather data
const temperature = weatherCard.querySelector('.temperature');
const description = weatherCard.querySelector('.description');
const humidity = weatherCard.querySelector('.humidity');
const weatherIcon = weatherCard.querySelector('.weather-icon');
const forecastDays = weatherCard.querySelectorAll('.forecast-day');
const forecastTemperatures = weatherCard.querySelectorAll('.forecast-temperature');

// Make a GET request to the OpenWeatherMap API
fetch(apiUrl)
  .then(response => response.json())
  .then(data => {

    // Get the current weather data
    const currentWeather = data.list[0];
    const currentTemperature = currentWeather.main.temp.toFixed(0);
    const currentDescription = currentWeather.weather[0].description;
    const currentHumidity = currentWeather.main.humidity;
    const currentWeatherIcon = `http://openweathermap.org/img/w/${currentWeather.weather[0].icon}.png`;

    // Set the current weather data in the HTML elements
    temperature.textContent = `${currentTemperature}ºF`;
    description.textContent = currentDescription;
    humidity.textContent = `Humidity: ${currentHumidity}%`;
    weatherIcon.style.backgroundImage = `url(${currentWeatherIcon})`;

    // Get the forecast weather data
    const forecastData = data.list.slice(1, 4);

    // Set the forecast weather data
