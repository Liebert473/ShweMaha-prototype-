window.addEventListener("scroll", function () {
    let navbar = document.getElementById("navbar");
    
    if (window.scrollY > 500) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

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

document.getElementById("open-quote").addEventListener("click", function () {
  document.getElementById("quote-sidebar").classList.add("open");
});

document.getElementById("close-quote").addEventListener("click", function () {
  document.getElementById("quote-sidebar").classList.remove("open");
});

ScrollReveal().reveal('.hero-content', { 
  origin: 'right', 
  distance: '100px', 
  duration: 1500, 
  delay: 400 
});

ScrollReveal().reveal('.about-text', { 
  origin: 'left', 
  distance: '80px', 
  duration: 1500, 
  delay: 300 
});

ScrollReveal().reveal('.about-img', { 
  origin: 'right', 
  distance: '80px', 
  duration: 1500, 
  delay: 500 
});

ScrollReveal().reveal('.title, .seemore', { 
  origin: 'top', 
  distance: '50px', 
  duration: 1500, 
  delay: 300 
});

ScrollReveal().reveal('.product-card', { 
  origin: 'bottom', 
  distance: '80px', 
  duration: 1500, 
  delay: 300,
  interval: 200 
});

ScrollReveal().reveal('.banner-content', { 
  origin: 'left', 
  distance: '100px', 
  duration: 1500, 
  delay: 400 
});

ScrollReveal().reveal('.news', { 
  origin: 'bottom', 
  distance: '100px', 
  duration: 1500, 
  delay: 300,
  interval: 200 
});

ScrollReveal().reveal('.f-content', { 
  origin: 'bottom', 
  distance: '50px', 
  duration: 1500, 
  delay: 200,
  interval: 200 
});

ScrollReveal().reveal('.logo img', { 
  origin: 'left', 
  distance: '50px', 
  duration: 1500, 
  delay: 300 
});

ScrollReveal().reveal('.contacts li', { 
  origin: 'right', 
  distance: '50px', 
  duration: 1500, 
  delay: 400,
  interval: 100 
});

ScrollReveal().reveal('.hours-container .day', { 
  origin: 'bottom', 
  distance: '30px', 
  duration: 1500, 
  delay: 500,
  interval: 100 
});

ScrollReveal().reveal('.f-news', { 
  origin: 'bottom', 
  distance: '50px', 
  duration: 1500, 
  delay: 400,
  interval: 200 
});

ScrollReveal().reveal('.input-container', { 
  origin: 'bottom', 
  distance: '30px', 
  duration: 1500, 
  delay: 600 
});

ScrollReveal().reveal('#navbar', { 
  origin: 'top', 
  distance: '50px', 
  duration: 1000, 
  delay: 100 
});

ScrollReveal().reveal('#nav-links li', { 
  origin: 'right', 
  distance: '50px', 
  duration: 1500, 
  delay: 300, 
  interval: 150 
});

ScrollReveal().reveal('#menu-toggle', { 
  origin: 'bottom', 
  distance: '30px', 
  duration: 1500, 
  delay: 400 
});

ScrollReveal().reveal('.lang-item', { 
  opacity: 1, 
  distance: '0px', 
  duration: 800 
});
  