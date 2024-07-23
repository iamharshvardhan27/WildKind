'use strict';



/**
 * navbar toggle
 */

const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbar = document.querySelector("[data-navbar]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");

const navElemArr = [navOpenBtn, navCloseBtn];

for (let i = 0; i < navElemArr.length; i++) {
  navElemArr[i].addEventListener("click", function () {
    navbar.classList.toggle("active");
  });
}

/**
 * toggle navbar when click any navbar link
 */

const navbarLinks = document.querySelectorAll("[data-nav-link]");

for (let i = 0; i < navbarLinks.length; i++) {
  navbarLinks[i].addEventListener("click", function () {
    navbar.classList.remove("active");
  });
}





/**
 * header active when window scrolled down
 */

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {
  window.scrollY >= 50 ? header.classList.add("active")
    : header.classList.remove("active");
});




function toggleMenu() {
  var menu = document.querySelector('.menu');
  var thumbnail = document.querySelector('.thumbnail');
  var arrows = document.querySelector('.arrows');

  if (menu.style.display === 'none' || menu.style.display === '') {
      menu.style.display = 'block';
      thumbnail.style.display = 'none';
      arrows.style.display = 'none';
  } else {
      menu.style.display = 'none';
      thumbnail.style.display = 'block';
      arrows.style.display = 'block';
  }
}
