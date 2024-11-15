const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".menuItem");
const hamburger = document.querySelector(".menu-toggle");
const closeIcon = document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menuIcon");

function toggleMenu() {
    const hamburgerStyle = window.getComputedStyle(hamburger).display;
    
    if (hamburgerStyle !== "none") {
        // Executa a função apenas se o display for "none"
        if (menu.classList.contains("showMenu")) {
            menu.classList.remove("showMenu");
            closeIcon.style.display = "none";
            menuIcon.style.display = "block";
        } else {
            menu.classList.add("showMenu");
            closeIcon.style.display = "block";
            menuIcon.style.display = "none";
        }
    }
}

hamburger.addEventListener("click", toggleMenu);

menuItems.forEach(
    function (menuItem) {
        menuItem.addEventListener("click", toggleMenu);                    
    }
)