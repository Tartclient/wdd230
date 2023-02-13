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
const mainNav = document.querySelector('.mainNav')
const hambutton = document.querySelector('#hmbrgr-bttn');

hambutton.addEventListener('click', () => {mainNav.classList.toggle('responsive')}, false);

/*Join Weekday*/
const dayOfWeek = now.getDay();
const msg = "🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m.";

if (dayOfWeek === 2|| dayOfWeek === 3) {
	document.querySelector(".banner_msg").textContent = msg;
} else{
	document.querySelector(".banner").style.display = "none"
}
