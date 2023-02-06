const currentYear = new Date().getFullYear();
/* copy right */
const copyright = document.querySelector('#copyright')
copyright.textContent = `©️ ${currentYear}`;

/* Last Update */
const lastModDate = document.querySelector('#lastModDate')
const lastMod = new Date(document.lastModified);
lastModDate.textContent = `Last Updated: ${lastMod.toLocaleDateString("en-US")} ${lastMod.toLocaleTimeString()}`;

/* Date */
const datefield = document.querySelector("#date");
const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(now);

datefield.innerHTML = `<em>${fulldate}</em>`;

/* Menu */
// Store the selected elements that we are going to use. 
const mainNav = document.querySelector('.mainNav')
const hambutton = document.querySelector('#hmbrgr-bttn');

// Add a simple arrow function that listens for the <li> hamburger button click event.
// When clicked, the <ul class="navigation">'s class list toggle'
hambutton.addEventListener('click', () => {mainNav.classList.toggle('responsive')}, false);

// What does toggle mean? Instead of add and remove, toggle means add the class name (the parameter, which in this case is named 'responsive') if it does not currently exist, and remove the 

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

/*Join Weekday*/
const currentDate = new Date();

let dayOfWeek;
switch (currentDate.getDay()) {
    case 0:
        dayOfWeek = "Sunday";
        break;
    case 1:
        dayOfWeek = "Monday";
        break;
    case 2:
        dayOfWeek = "Tuesday";
        break;
    case 3:
        dayOfWeek = "Wednesday";
        break;
    case 4:
        dayOfWeek = "Thursday";
        break;
    case 5:
        dayOfWeek = "Friday";
        break;
    case 6:
        dayOfWeek = "Saturday";
        break;
}

if (dayOfWeek === "Monday" || dayOfWeek === "Tuesday") {
    message1 = "🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m.";
  } else {
    message1 = "";
  }

