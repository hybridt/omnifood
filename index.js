const burgerBtn = document.querySelector('.burger');
const header = document.querySelector('.header');
const navList = document.querySelector('.nav__list');

burgerBtn.addEventListener('click', () => {
  header.classList.toggle('nav-opened');
});

navList.addEventListener('click', (e) => {
  const clickedItem = e.target;
  if (clickedItem.classList.contains('nav__link') || clickedItem.classList.contains('nav__button')) {
    header.classList.toggle('nav-opened');
  }
});