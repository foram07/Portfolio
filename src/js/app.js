// ============================================================
// APP BOOTSTRAP  —  src/js/app.js
// Renders every section, then initialises all modules.
// Must be the LAST script loaded in index.html.
// ============================================================

(function bootstrap() {

  // ── Safety: if DOM isn't ready yet, wait for it ──────────
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", bootstrap);
    return;
  }

  // ── Helper: mount with error boundary ────────────────────
  function safeMountSection(rootId, renderFn, label) {
    try {
      mount(rootId, renderFn());
    } catch (err) {
      console.error("[Portfolio] Failed to render " + label + ":", err);
    }
  }

  function safeInit(fn, label) {
    try {
      fn();
    } catch (err) {
      console.error("[Portfolio] Failed to init " + label + ":", err);
    }
  }

  // ── 1. Layout (navbar + footer must exist before sections) ──
  safeMountSection("navbar-root",      Navbar,       "Navbar");
  safeMountSection("footer-root",      Footer,       "Footer");
  safeInit(renderFloatResume,                        "FloatResume");

  // ── 2. Page sections ─────────────────────────────────────
  safeMountSection("hero-root",         Hero,         "Hero");
  safeMountSection("about-root",        About,        "About");
  safeMountSection("projects-root",     Projects,     "Projects");
  safeMountSection("skills-root",       Skills,       "Skills");
  safeMountSection("experience-root",   Experience,   "Experience");
  safeMountSection("resume-root",       Resume,       "Resume");
  safeMountSection("blog-root",         Blog,         "Blog");
  safeMountSection("testimonials-root", Testimonials, "Testimonials");
  safeMountSection("contact-root",      Contact,      "Contact");

  // ── 3. Interactive modules (run after DOM is populated) ───
  safeInit(initNavbar,            "Navbar interactions");
  safeInit(initScrollReveal,      "ScrollReveal");
  safeInit(initActiveNav,         "ActiveNav");
  safeInit(initCounterAnimation,  "CounterAnimation");
  safeInit(initSkillBars,         "SkillBars");
  safeInit(initProjectFilter,     "ProjectFilter");

  // ── 4. Reveal elements already above the fold ────────────
  requestAnimationFrame(function () {
    document.querySelectorAll(".reveal").forEach(function (el) {
      if (el.getBoundingClientRect().top < window.innerHeight) {
        el.classList.add("visible");
      }
    });
  });

  console.log("[Portfolio] ✓ Mounted and initialised");

})();