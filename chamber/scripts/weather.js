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

/* Wind Chill*/
