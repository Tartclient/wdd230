function loadBusinesses() {
  fetch('json/data.json')
    .then(response => response.json())
    .then(data => {
      displayBusinessDirectory(data.businesses);
    })
    .catch(error => {
      console.error('Error fetching business data:', error);
    });
}

loadBusinesses();

function displayBusinessDirectory(businesses) {
  const directory = document.getElementById('business-directory');

  businesses.forEach(business => {
    const businessCard = document.createElement('div');
    businessCard.className = 'grid-item boxInfo card';

    businessCard.innerHTML = `
      <h2>${business.name}</h2>
      <picture>
        <img src="${business.imgSrc}" alt="${business.imgAlt}" loading="lazy">
      </picture>
      <p>${business.phone}</p>
      <p>${business.address}</p>
      <p>Membership level: ${business.membership}</p>
      <p>${business.website}</p>
    `;

    directory.appendChild(businessCard);
  });
}

function toggleCardView() {
  const directory = document.getElementById('business-directory');
  directory.classList.remove('list');
  directory.classList.add('grid');
  
  const cards = directory.querySelectorAll('.boxInfo');
  cards.forEach(card => {
    const picture = card.querySelector('picture');
    if (picture) {
      picture.style.display = 'block';
    }
  });
}

function toggleListView() {
  const directory = document.getElementById('business-directory');
  directory.classList.remove('grid');
  directory.classList.add('list');
  
  const cards = directory.querySelectorAll('.boxInfo');
  cards.forEach(card => {
    const picture = card.querySelector('picture');
    if (picture) {
      picture.style.display = 'none';
    }
  });
}

document.getElementById('card-layout').addEventListener('click', toggleCardView);
document.getElementById('list-layout').addEventListener('click', toggleListView);

// Sets the initial view to card view
toggleCardView();












/*
function loadBusinesses() {
    fetch('json/data.json')
      .then(response => response.json())
      .then(data => {
        displayBusinessDirectory(data.businesses);
      })
      .catch(error => {
        console.error('Error fetching business data:', error);
      });
  }
  
  loadBusinesses();
  
  function displayBusinessDirectory(businesses) {
    const directory = document.getElementById('business-directory');
  
    // Loop through the businesses array and create an HTML element for each business
    businesses.forEach(business => {
      const businessCard = document.createElement('section');
      businessCard.className = 'boxInfo card'; // Add 'card' class for card view
  
      // Add the business information to the card
      businessCard.innerHTML = `
        <h2>${business.name}</h2>
        <picture>
          <img src="${business.imgSrc}" alt="${business.imgAlt}" loading="lazy">
        </picture>
        <p>${business.phone}</p>
        <p>${business.address}</p>
        <p>Membership level: ${business.membership}</p>
        <p>${business.website}</p>
      `;
  
      // Add the business card to the directory container
      directory.appendChild(businessCard);
    });
  }
  
  
  // Toggle view functions
  function toggleCardView() {
    const businessCards = document.querySelectorAll('.boxInfo');
    businessCards.forEach(card => {
      card.classList.add('card');
      card.classList.remove('list');
    });
  }
  
  function toggleListView() {
    const businessCards = document.querySelectorAll('.boxInfo');
    businessCards.forEach(card => {
      card.classList.add('list');
      card.classList.remove('card');
    });
  }
  
  document.getElementById('card-layout').addEventListener('click', toggleCardView);
  document.getElementById('list-layout').addEventListener('click', toggleListView);
  
  // Sets the initial view to card view
  toggleCardView();
*/
