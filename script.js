document.addEventListener("DOMContentLoaded", () => {
  // --- KODE HAMBURGER TOGGLE MENU ---
  const menuToggle = document.getElementById("mobile-menu");
  const navLinks = document.querySelector(".nav-links");
  const navItems = document.querySelectorAll(".nav-links a");

  menuToggle.addEventListener("click", () => {
    menuToggle.classList.toggle("active");
    navLinks.classList.toggle("active");
  });

  navItems.forEach((item) => {
    item.addEventListener("click", () => {
      menuToggle.classList.remove("active");
      navLinks.classList.remove("active");
    });
  });

  // --- KODE MOTION SCROLL REVEAL ANIMS ---
  const revealElements = document.querySelectorAll(".scroll-reveal");

  const checkScroll = () => {
    const triggerBottom = (window.innerHeight / 5) * 4;

    revealElements.forEach((element) => {
      const elementTop = element.getBoundingClientRect().top;

      if (elementTop < triggerBottom) {
        element.classList.add("active");
      }
    });
  };

  window.addEventListener("scroll", checkScroll);
  checkScroll();

  // --- RESPONSIVE STICKY NAVBAR EFFECT ---
  const navbar = document.querySelector(".navbar");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.style.padding = "0.8rem 4rem";
      navbar.style.boxShadow = "0 4px 20px rgba(0, 0, 0, 0.05)";
    } else {
      navbar.style.padding = "1.2rem 4rem";
      navbar.style.boxShadow = "none";
    }
  });
});
