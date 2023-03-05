const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';


async function getProphetData() {
    const response = await fetch(url);
    const data = await response.json();
    //console.table(data.prophets);
    displayProphets(data.prophets);
}

const displayProphets = (prophets) => {
    const cards = document.querySelector('div.cards');
  
    prophets.forEach(prophet => {
      const card = `
        <section>
          <h2>${prophet.name} ${prophet.lastname}</h2>
          <img src="${prophet.imageurl}" alt="Portrait of Prophet #${prophet.order} ${prophet.name} ${prophet.lastname}" loading="lazy" width="340" height="440">
          <h3>Birthdate: <strong>${prophet.birthdate}</strong></h3>
          <h4>Birthplace: ${prophet.birthplace}</h4>
          <h4># ${prophet.order}</h4>
        </section>
      `;
      cards.insertAdjacentHTML('beforeend', card);
    });
  };

getProphetData();

/*
const getProphets = async (filter = "all") => {
	let prophets = await jsonFetch(url);

	switch (filter) {
		case "idaho":
			prophets = prophets.filter((prophet) => prophet.birthplace === "Idaho");
			break;
		case "nonus":
			prophets = prophets.filter((prophet) => prophet.birthplace === "England");
			break;
		case "ten":
			prophets = prophets.filter((prophet) => prophet.length >= 15);
			break;
		case "childs":
			prophets = prophets.filter((prophet) => prophet.numofchildren < 5);
			break;
		case "childl":
			prophets = prophets.filter((prophet) => prophet.numofchildren >= 10);
			break;
		case "old":
			prophets = prophets.filter(
				(prophet) => getAgeAtDeathInYears(prophet.birthdate, prophet.death) >= 95
			);
			break;
		default:
			break;
	}

	displayProphets(prophets);
};

const displayProphets = (prophets) => {
	const cards = document.querySelector("div.cards");
	cards.innerHTML = "";

	prophets.forEach((prophet) => {
		let card = document.createElement("section");
		let h2 = document.createElement("h2");
		let stats = document.createElement("div");
		stats.classList.add("stats");
		let date = document.createElement("p");
		let death = document.createElement("p");
		let ageatdeath = document.createElement("p");
		let length = document.createElement("p");
		let place = document.createElement("p");
		let num = document.createElement("p");
		let portrait = document.createElement("img");

		h2.textContent = `${prophet.name} ${prophet.lastname}`;
		date.innerHTML = `<span class="label">Birth:</span> ${prophet.birthdate}`;
		place.innerHTML = `<span class="label">Place:</span> ${prophet.birthplace}`;
		num.innerHTML = `<span class="label">Children:</span> ${prophet.numofchildren}`;
		length.innerHTML = `<span class="label">Prophet Years:</span> ${prophet.length}`;
		death.innerHTML = `<span class="label">Death:</span> ${prophet.death}`;
		ageatdeath.innerHTML = `<span class="label">Age:</span> ${getAgeAtDeathInYears(
			prophet.birthdate,
			prophet.death
		)}`;

		portrait.setAttribute("src", prophet.imageurl);
		portrait.setAttribute(
			"alt",
			`${prophet.name} ${prophet.lastname} - ${prophet.order} Latter-day Prophet`
		);
		portrait.setAttribute("loading", "lazy");
		portrait.setAttribute("width", "340");
		portrait.setAttribute("height", "440");

		stats.appendChild(date);
		stats.appendChild(place);
		stats.appendChild(num);
		stats.appendChild(length);
		stats.appendChild(death);
		stats.appendChild(ageatdeath);

		card.appendChild(h2);
		card.appendChild(stats);
		card.appendChild(portrait);

		cards.appendChild(card);
	});
};
*/