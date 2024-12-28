const navButton = document.querySelector('.nav__button');
const navList = document.querySelector('.nav__list');

navButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  if (navButton.classList.contains('nav__button--opened')) {
    navButton.classList.remove('nav__button--opened');
    navButton.classList.add('nav__button--closed');
    navList.classList.add('site-list--opened');
  } else {
    navButton.classList.add('nav__button--opened');
    navButton.classList.remove('nav__button--closed');
    navList.classList.remove('site-list--opened');
  }
});
