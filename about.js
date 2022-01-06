// menu-toggle button

const openMenu = document.querySelector('.menu-btn');
const closeMenu = document.querySelector('.close-btn');
const navBar = document.querySelector('nav');

openMenu.addEventListener('click', () => {
  navBar.style.left = '0px';
});

closeMenu.addEventListener('click', () => {
  navBar.style.left = '-100000px';
});
