//Navbar

const navOpener = document.querySelector(".hamburger-icon");
const navCloser = document.querySelector(".close-bt");
const primaryNav = document.querySelector(".hamburger-menu");

navOpener.addEventListener("click", () => {
    primaryNav.classList.add('active');
    primaryNav.classList.remove('not-active');
  });

navCloser.addEventListener("click", () => {
    primaryNav.classList.add('not-active');
    primaryNav.classList.remove('active');
  });



