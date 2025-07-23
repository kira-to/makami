// Hamburger menu toggle
const menuBtn = document.getElementById('menu-btn');
const mainNav = document.getElementById('main-nav');

if (menuBtn && mainNav) {
  menuBtn.addEventListener('click', () => {
    mainNav.classList.toggle('show');
  });
}
