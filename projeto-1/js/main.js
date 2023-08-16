const hamburger = document.querySelector('.hamburger')
const navMenu = document.getElementById('menu')

hamburger.addEventListener('click', mobileMenu)

function mobileMenu() {
  hamburger.classList.toggle('active')
  navMenu.classList.toggle('active')
}

const navLink = document.querySelectorAll('a')

navLink.forEach(n => n.addEventListener('click', closeMenu))

function closeMenu() {
  hamburger.classList.remove('active')
  navMenu.classList.remove('active')
}
