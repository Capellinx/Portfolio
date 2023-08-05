const mobileMenu = document.querySelector('.mobile-menu')
const navList = document.querySelector('.nav-list')
const navLinks = document.querySelectorAll('.nav-links')

mobileMenu.addEventListener('click', () => {
    navList.classList.toggle('active')
    mobileMenu.classList.toggle('active')
    navLinks.forEach(link => {
        link.style.animation 
        ? (link.style.animation = "") 
        : (link.style.animation = `navLinkFade 0.5s ease forwards 0.3s`) 
    })
})

