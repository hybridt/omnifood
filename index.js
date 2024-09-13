const burgerBtn = document.querySelector('.burger');
const header = document.querySelector('.header');
const navList = document.querySelector('.nav__list');
const html = document.documentElement;


////////////////////////////////////////
/* Navigation Menu */
////////////////////////////////////////

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


////////////////////////////////////////
/* Sticky Header */
////////////////////////////////////////

const targetSection = document.querySelector('.hero');

const sectionObsOptions = {
  root: null,
  threshold: 0,
  rootMargin: '-40px',
}

const headerObsOptions = {
  root: null,
  threshold: 0,
  rootMargin: '40px',
}

const obsSection = new IntersectionObserver((entries) => {
  const ent = entries[0];
  if (ent.isIntersecting) {
    document.body.classList.remove('sticky-header');
  } else {
    document.body.classList.add('sticky-header');
  }
  console.log(entries);
}, sectionObsOptions);

const obsHeader = new IntersectionObserver((entries) => {
  const ent = entries[0];
  if (ent.isIntersecting) {
    header.style.removeProperty('opacity');
  } else {
    header.style.opacity = '0';
  }
  console.log(entries);
}, headerObsOptions);

obsSection.observe(targetSection);
obsHeader.observe(header);
