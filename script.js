const navbar = document.querySelector(".navbar");
const menuBtn = document.querySelector(".menu-btn");
const menuIcon = menuBtn.querySelector("i");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");

    if (navLinks.classList.contains("active")) {
        menuIcon.classList.remove("fa-bars");
        menuIcon.classList.add("fa-xmark");
    } else {
        menuIcon.classList.remove("fa-xmark");
        menuIcon.classList.add("fa-bars");
    }
});

links.forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
        menuIcon.classList.remove("fa-xmark");
        menuIcon.classList.add("fa-bars");
    });
});