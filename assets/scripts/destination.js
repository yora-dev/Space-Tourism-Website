let destinationContainer = document.querySelector('.destination__container');
let destinationLink = document.querySelectorAll('.destination__link');
console.log(destinationLink);

let api = async (destinationIndex) => {
  const dataFetch = await fetch("data.json");
  const data = await dataFetch.json();
  console.log(data.destinations);
  item = data.destinations[destinationIndex];

  destinationLink.forEach(element => {
    if (element.textContent.toLowerCase == item.name.toLowerCase) {
      element.classList.add('active-link');
    } else {
      element.classList.remove('active-link');

      console.log(element.textContent === item.name)
    }

  })

  destinationContainer.innerHTML = `
        <p class="destination__header text-6">
          <span class="non__bold">01</span>Pick Your Destination
        </p>
        <div class="destination__content">
          <img
            src=${item.images.webp}
            alt=""
            class="destination__img"
          />

          <div class="destination__text">
            <div class="destination__links">
              <a
                href="destination-moon.html"
                class="destination__link text-8 "
                >Moon</a
              >
              <a href="destination-mars.html" class="destination__link text-8"
                >Mars</a
              >
              <a href="destination-europa.html" class="destination__link text-8"
                >Europa</a
              >
              <a href="destination-titan.html" class="destination__link text-8"
                >Titan</a
              >
            </div>

            <h1 class="destination__heading text-2">${item.name}</h1>
            <p class="destination__message text-9">
              ${item.description}
            </p>
            <div class="destination__info">
              <div class="destination__distance">
                <p class="info__subheading">Avg. Distance</p>
                <p class="info__heading">${item.distance}</p>
              </div>
              <div class="destination__time">
                <p class="info__subheading">Est. Travel Time</p>
                <p class="info__heading">${item.travel}</p>
              </div>
            </div>
          </div>
        </div>
      `;
};