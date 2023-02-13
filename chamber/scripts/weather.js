/*Weather*/

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

/*
function windChill(temp, speed) {

    if (temperature < 50 && speed > 3) {
        wchill = 35.74 + (0.6215 * temp) - (35.75 * (speed ** 0.16)) + ((0.4275 * temp) * (speed ** 0.16));
        console.log(wchill)
        windChill.innerHTML = wchill.toFixed(0);
    }
    else {
        windChill.innerHTML = "N/A";
    }
}
*/