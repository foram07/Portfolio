// ============================================================
// ACTIVE NAV  —  src/js/modules/activeNav.js
// Highlights the navbar link matching the current section.
// ============================================================

function initActiveNav() {
  const navLinks = document.querySelectorAll(".navbar__link");
  const sections = document.querySelectorAll("section[id]");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      navLinks.forEach(link => {
        link.classList.toggle(
          "navbar__link--active",
          link.getAttribute("href") === `#${entry.target.id}`
        );
      });
    });
  }, {
    threshold: 0.3,
    rootMargin: `-${parseInt(getComputedStyle(document.documentElement).getPropertyValue("--nav-height")) || 72}px 0px 0px 0px`,
  });

  sections.forEach(s => observer.observe(s));
}