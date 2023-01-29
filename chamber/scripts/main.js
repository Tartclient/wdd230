/* copy right */
const copyright = document.querySelector('#copyright')
copyright.textContent = `©️ ${currentYear}`;

/* Last Update */
const currentYear = new Date().getFullYear();
const lastModDate = document.querySelector('#lastModDate')
const lastMod = new Date(document.lastModified);
lastModDate.textContent = `Last Updated: ${lastMod.toLocaleDateString("en-US")} ${lastMod.toLocaleTimeString()}`;

/* Date */
const datefield = document.querySelector("#date");
const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(now);

datefield.innerHTML = `<em>${fulldate}</em>`;

/* Responsive Menu */
function toggleMenu() {
    document.querySelector("#mainNav").classList.toggle("open");
}

const bttn = document.getElementById("hmbrgr-bttn")
bttnx.onclick = toggleMenu;
