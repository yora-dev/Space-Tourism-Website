let navList = document.querySelector(".nav__list");
let navHamburger = document.querySelector(".nav__hamburger");
let navClose = document.querySelector(".nav__close");

navHamburger.addEventListener('click', function () {
  navList.classList.toggle('nav__active');
  navHamburger.style.display = 'none';
  navClose.style.display = 'inline';

});
navClose.addEventListener('click', function () {
  navList.classList.toggle('nav__active');
  navHamburger.style.display = 'inline';
  navClose.style.display = 'none';
});

