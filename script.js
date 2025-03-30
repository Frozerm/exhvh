// Бургер-меню
const burger = document.querySelector('.burger');
const nav = document.querySelector('.header__nav');
const overlay = document.querySelector('.overlay');

burger.addEventListener('click', () => {
  nav.classList.toggle('active');
  burger.classList.toggle('active');
  overlay.classList.toggle('active');
});

overlay.addEventListener('click', () => {
  nav.classList.remove('active');
  burger.classList.remove('active');
  overlay.classList.remove('active');
});