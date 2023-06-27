const btnMenu = document.getElementById("menu-mobile");

function toggleMenu() {
    const menu = document.getElementById("menu");
    menu.classList.toggle('active')
}

btnMenu.addEventListener("click", toggleMenu)