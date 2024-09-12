const burgerBtn = document.querySelector('.burger');
const header = document.querySelector('.header');
const navList = document.querySelector('.nav__list');
const html = document.documentElement;

function toggleMenu(element) {
  if (screen.width <= 976) {
    element.classList.toggle('nav-opened');
    if (element.classList.contains('nav-opened')) {
      disableScroll();
    } else {
      enableScroll();
    }
  }
}

function enableScroll() {
  html.style.removeProperty('overflow');
}

function disableScroll() {
  html.style.overflow = 'hidden';
}

burgerBtn.addEventListener('click', () => {
  toggleMenu(header);
});

navList.addEventListener('click', (e) => {
  const clickedItem = e.target;
  const isClickedLink = clickedItem.classList.contains('nav__link') || clickedItem.classList.contains('nav__button');
  if (isClickedLink) {
    toggleMenu(header);
  }
});