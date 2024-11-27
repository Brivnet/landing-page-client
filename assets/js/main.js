/**
 * Change nav class on scroll
 */
const navBox = document.getElementById("nav-box");
const toggleScroll = () => {
  window.scrollY > 100
    ? navBox.classList.add("scrolled")
    : navBox.classList.remove("scrolled");
};

/**
 * Mobile nav functionality
 */
const mobileOpen = document.getElementById("mobile-open");
const mobileClose = document.getElementById("mobile-close");
const toggleMenu = () => {
  mobileOpen.classList.toggle("hidden");
  document.body.classList.toggle("mobile-nav-open");
  document.getElementById("nav-container").classList.toggle("open");
};

const closeMenu = () => {
  mobileOpen.classList.remove("hidden");
  document.body.classList.remove("mobile-nav-open");
  document.getElementById("nav-container").classList.remove("open");
};

mobileOpen.addEventListener("click", toggleMenu);
mobileClose.addEventListener("click", toggleMenu);

/**
 * Scroll functionality for nav links
 */
const navLinks = document.querySelectorAll("#nav-menu li a");
const hashLinks = document.querySelectorAll(".hash-link");
const scrollSpy = () => {
  navLinks.forEach((navLink) => {
    const href = navLink.getAttribute("href");
    const section = document.querySelector(href);
    if (!section || !href) return;
    const position = window.scrollY + 200;
    if (
      position >= section.offsetTop &&
      position <= section.offsetTop + section.offsetHeight
    ) {
      document
        .querySelectorAll("#nav-menu li a.active-link")
        .forEach((link) => link.classList.remove("active-link"));
      navLink.classList.add("active-link");
    } else {
      navLink.classList.remove("active");
    }
  });
};

hashLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const href = link.getAttribute("href");
    const section = document.querySelector(href);
    if (!section || !href) return;
    const spaceTop = getComputedStyle(section).paddingTop;
    closeMenu();
    window.scrollTo({
      top: section.offsetTop - parseInt(spaceTop),
    });
  });
});

/**
 * Listening for scroll and window load
 */
window.addEventListener("load", () => {
  scrollSpy();
  toggleScroll();
});
document.addEventListener("scroll", () => {
  scrollSpy();
  toggleScroll();
});
