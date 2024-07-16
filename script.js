const burgerMenu = document.querySelector(".burger-menu")
const closeMenu = document.querySelector(".close")
const navList = document.querySelector(".nav-list")


burgerMenu.addEventListener("click", () => {
    navList.style.right = 0
})
closeMenu.addEventListener("click", () => {
    navList.style.right = "-100%"
})
