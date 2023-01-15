const copyright = document.querySelector('#copyright')
const currentYear = new Date().getFullYear();
copyright.textContent = `©️ ${currentYear}`;


const dateMod = document.querySelector('#dateMod')
const currentDate = new Date();
dateMod.textContent = `Last Updated: ${currentDate.toString()}`;