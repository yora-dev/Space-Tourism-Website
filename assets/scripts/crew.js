let crewContainer = document.querySelector('.crew__container');

let crewApi = async (crewIndex) => {
  const dataFetch = await fetch("data.json");
  const data = await dataFetch.json();
  console.log(data.crew);
  item = data.crew[crewIndex];
  console.log(item)

  crewContainer.innerHTML = `
      <div class="crew__text">
        <p class="crew__header">
          <span class="non__bold">02</span>Meet your crew
        </p>
        <p class="crew__title">${item.role}</p>
        <p class="crew__name">${item.name}</p>
        <p class="crew__description">
          ${item.bio}
        </p>
        <div class="crew__links">
        <a href="crew-commander.html" class="crew__link">
          <div id="Commander" class="crew"></div>
        </a>
        <a href="crew-specialist.html" class="crew__link">
          <div id="Mission" class="crew"></div>
        </a>
        <a href="crew-pilot.html" class="crew__link">
          <div id="Pilot" class="crew"></div>
        </a>
        <a href="crew-engineer.html" class="crew__link">
          <div id="Flight" class="crew"></div>
        </a>
      </div>
      </div>
      <div class="crew__images">
        <img
          src="${item.images.webp}"
          alt=""
          class="crew__img"
        />
      </div>
    `


  let crewLink = document.querySelectorAll('.crew');

  crewLink.forEach(element => {

    let itemMatch = item.role.match(/\S+/)[0];

    if (element.id === itemMatch) {
      element.classList.add('active-crew');
    } else if (element.textContent !== itemMatch) {
      element.classList.remove('active-crew');
    }

  })
};
