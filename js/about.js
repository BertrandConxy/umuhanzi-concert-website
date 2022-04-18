// menu-toggle button

const openMenu = document.querySelector('.menu-btn');
const closeMenu = document.querySelector('.close-btn');
const navBar = document.querySelector('nav');

openMenu.addEventListener('click', () => {
  navBar.classList.add("active");
});

closeMenu.addEventListener('click', () => {
  navBar.classList.remove("active");
});
