/*Weather*/
const currentTemp = document.querySelector('#current-temp')
const weatherIcon = document.querySelector('#weather-icon')
const captionDesc = document.querySelector('#weather-caption')
const windSpeed = document.querySelector('#wind-speed');
const windChill = document.querySelector('#wind-chill');

//weather api key for easy change
const key='4def50accbd787e425567d862bd5108f'

const url=`https://api.openweathermap.org/data/2.5/weather?q=Seattle&units=imperial&appid=${key}`

async function apiFetch() {
    try {
      const response = await fetch(url)
      if (response.ok) {
        const data = await response.json()
        console.log(data)
        displayResults(data)
      } else {
          throw Error(await response.text())
      }
    } catch (error) {
        console.log(error)
    }
}
   
apiFetch()

function displayResults(weatherData) {
    currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`;
    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc;

    windSpeed.textContent = `Wind Speed: ${weatherData.wind.speed.toFixed(1)} mph`;

    const temperature = weatherData.main.temp;
    const speed = weatherData.wind.speed;
    const windChillValue = 35.74 + (0.6215 * temperature) - (35.75 * Math.pow(speed, 0.16)) + (0.4275 * temperature * Math.pow(speed, 0.16));
    windChill.textContent = `Wind Chill: ${windChillValue.toFixed(1)}°F`;
}




/*
link = "https://api.openweathermap.org/data/2.5/weather?q=seattle&appid=4def50accbd787e425567d862bd5108f";
var request = new XMLHttpRequest();

request.open('GET', link, true);

request.onload = function () {
    var obj = JSON.parse(this.response);
    console.log(obj);

    document.querySelector('#weather').innerHTML = obj.weather[0].description;
    document.getElementById('location').innerHTML = obj.name;
    document.getElementById('temp').innerHTML = Math.round(obj.main.temp - 236);
    document.getElementById('icon').src = "http://openweathermap.org/img/w/" + obj.weather[0].icon + ".png";

    if (request.status >= 200 && request.status < 400) {
        var temp = obj.main.temp;
    }
    else {
        console.log("The city doesn't exist! Kindly check");
    }
}
request.send();
*/
