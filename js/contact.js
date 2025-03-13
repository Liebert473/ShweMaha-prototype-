document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.getElementById("navbar");
    const menuToggle = document.getElementById("menu-toggle");
    const navLinks = document.getElementById("nav-links");

    // Mobile menu toggle
    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
        menuToggle.classList.toggle("active");
    });

    // Close menu when a link is clicked
    navLinks.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("active");
            menuToggle.classList.remove("active");
        });
    });

    // Change navbar style on scroll
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });
});

document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission for demo purposes
    alert("Thank you for your inquiry! We will contact you soon.");
    this.reset(); // Reset form fields
});

document.getElementById("open-quote").addEventListener("click", function () {
    document.getElementById("quote-sidebar").classList.add("open");
});

document.getElementById("close-quote").addEventListener("click", function () {
    document.getElementById("quote-sidebar").classList.remove("open");
});

ScrollReveal().reveal('.f-content, .f-news, .input-container, .his-content', { ...revealOptions, origin: 'bottom', interval: 200 });
ScrollReveal().reveal('.logo img', { ...revealOptions, origin: 'left' });
ScrollReveal().reveal('.contacts li, #nav-links li', { ...revealOptions, origin: 'right', interval: 150 });
ScrollReveal().reveal('.hours-container .day', { ...revealOptions, origin: 'bottom', distance: '30px', interval: 100 });
ScrollReveal().reveal('#navbar', { ...revealOptions, origin: 'top' });
ScrollReveal().reveal('#menu-toggle', { ...revealOptions, origin: 'bottom', distance: '30px' });
ScrollReveal().reveal('.location-p .container > *', { ...revealOptions, origin: 'left', interval: 150 });
ScrollReveal().reveal('.contact-details', { ...revealOptions, origin: 'bottom', distance: '30px', interval: 100 });
ScrollReveal().reveal('.contact-form', { ...revealOptions, origin: 'bottom', distance: '30px', interval: 100 });
