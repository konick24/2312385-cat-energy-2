const navButton = document.querySelector('.nav__button');
const navList = document.querySelector('.nav__list');
const nav = document.querySelector('.nav');

nav.classList.remove('nav--no-js');

navButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  navButton.classList.toggle('nav__button--opened');
  navButton.classList.toggle('nav__button--closed');
  navList.classList.toggle('site-list--opened');
});
