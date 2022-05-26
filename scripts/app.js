const openMenuBtn = document.querySelector('.menu__container');
const navMenu = document.querySelector('.features-list');
const overlay = document.querySelector('#overlay');

openMenuBtn.addEventListener('click', function () {
  openMenuBtn.classList.toggle('menu-open');
  navMenu.classList.toggle('feature-open');
  overlay.classList.toggle('open-overlay');

  overlay.addEventListener('click', function () {
    openMenuBtn.classList.remove('menu-open');
    navMenu.classList.remove('feature-open');
    overlay.classList.remove('open-overlay');
  });
});
