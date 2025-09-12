let techContainer = document.querySelector('.technology__container');

let techApi = async (techIndex) => {
  const dataFetch = await fetch("data.json");
  const data = await dataFetch.json();
  console.log(data.technology);
  item = data.technology[techIndex];

  techContainer.innerHTML = `
      <p class="tech__header">
        <span class="non__bold">03</span>Space launch 101
      </p>

      <div class="tech__content">
        <div class="tech__images">
          <img
            src=${item.images.landscape}
            alt=""
            class="tech__img-land"
          />
          <img
            src=${item.images.portrait}
            alt=""
            class="tech__img-port"
          />
        </div>
        <div class="tech__links">
          <a href="technology-vehicle.html" class="tech__link" id="Launch"
            >1</a
          >
          <a href="technology-spaceport.html" class="tech__link" id="Spaceport"
            >2</a
          >
          <a href="technology-capsule.html" class="tech__link" id="Space"
            >3</a
          >
        </div>

        <div class="tech__text">
          <p class="tech__heading">The Terminology...</p>
          <p class="tech__type">${item.name}</p>
          <p class="tech__explanation">
            ${item.description}
          </p>
        </div>
      </div>
    `


  let techLink = document.querySelectorAll('.tech__link');

  techLink.forEach(element => {

    let itemMatch = item.name.match(/\S+/)[0];

    if (element.id === itemMatch) {
      element.classList.add('active-tech');
    } else if (element.id !== itemMatch) {
      element.classList.remove('active-tech');
    }

  })
};