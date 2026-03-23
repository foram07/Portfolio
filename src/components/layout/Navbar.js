// ============================================================
// NAVBAR COMPONENT  —  src/components/layout/Navbar.js
// ============================================================

function Navbar() {
  const links = PERSONAL.navLinks.map(l =>
    `<a class="navbar__link" href="${l.href}">${l.label}</a>`
  ).join("");

  const mobileLinks = PERSONAL.navLinks.map(l =>
    `<a class="mobile-menu__link" href="${l.href}">${l.label}</a>`
  ).join("");

  const theme = getStoredTheme();

  return `
    <nav class="navbar" id="navbar" role="navigation" aria-label="Main navigation">
      <div class="navbar__inner">
        <a href="#" class="navbar__logo" aria-label="${PERSONAL.name} home">${PERSONAL.initials}.</a>

        <div class="navbar__links" role="list">
          ${links}
        </div>

        <div class="navbar__right">
          <button class="navbar__theme-btn" id="themeToggle" aria-label="Toggle colour theme">
            ${getThemeIcon(theme)}
          </button>
          ${Button({ label: "Hire Me", href: "#contact", variant: "primary", size: "sm" })}
        </div>

        <button class="navbar__hamburger" id="hamburger" aria-label="Open menu" aria-expanded="false" aria-controls="mobileMenu">
          <span></span><span></span><span></span>
        </button>
      </div>
    </nav>

    <div class="mobile-menu" id="mobileMenu" role="dialog" aria-label="Mobile navigation">
      ${mobileLinks}
      ${Button({ label: "📄 Download Resume", href: PERSONAL.resumeUrl, variant: "primary", size: "lg", download: true, fullWidth: true })}
    </div>`;
}

function initNavbar() {
  const navbar    = document.getElementById("navbar");
  const hamburger = document.getElementById("hamburger");
  const mobileMenu = document.getElementById("mobileMenu");
  const themeBtn  = document.getElementById("themeToggle");

  // Scroll shadow
  window.addEventListener("scroll", () => {
    navbar.classList.toggle("navbar--scrolled", window.scrollY > 20);
  }, { passive: true });

  // Hamburger toggle
  hamburger.addEventListener("click", () => {
    const isOpen = mobileMenu.classList.toggle("mobile-menu--open");
    hamburger.setAttribute("aria-expanded", isOpen);
    const [s1, , s3] = hamburger.querySelectorAll("span");
    s1.style.transform  = isOpen ? "rotate(45deg) translate(5px,5px)" : "";
    hamburger.querySelectorAll("span")[1].style.opacity = isOpen ? "0" : "";
    s3.style.transform  = isOpen ? "rotate(-45deg) translate(5px,-5px)" : "";
  });

  // Close mobile menu on link click
  mobileMenu.querySelectorAll(".mobile-menu__link, .btn").forEach(el => {
    el.addEventListener("click", () => {
      mobileMenu.classList.remove("mobile-menu--open");
      hamburger.setAttribute("aria-expanded", "false");
      hamburger.querySelectorAll("span").forEach(s => {
        s.style.transform = "";
        s.style.opacity = "";
      });
    });
  });

  // Theme toggle
  themeBtn.addEventListener("click", () => {
    const next = toggleTheme();
    themeBtn.textContent = getThemeIcon(next);
  });
}