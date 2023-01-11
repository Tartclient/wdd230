const copyright = document.querySelector('#copyright')
const dateMod = document.querySelector('#dateMod')

const currentYear = new Date().getFullYear();
copyright.textContent = `©️ ${currentYear}`;

const currentDate = new Date();
dateMod.textContent = `Last Updated: ${currentDate.toString()}`;