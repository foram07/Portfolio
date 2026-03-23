// ============================================================
// COUNTER ANIMATION  —  src/js/modules/counterAnimation.js
// ============================================================

function initCounterAnimation() {
  const statsBar = document.querySelector(".hero__stats");
  if (!statsBar) return;

  // Guard: animations.js must be loaded first
  if (typeof animateCounter !== "function") {
    console.warn("[Portfolio] animateCounter not found — serve via http://, not file://");
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;

      entry.target.querySelectorAll(".hero__stat-val").forEach(el => {
        const raw    = el.dataset.target;
        const suffix = el.dataset.suffix || "";
        const target = parseFloat(raw);
        if (!isNaN(target)) animateCounter(el, target, suffix);
      });

      observer.unobserve(entry.target);
    });
  }, { threshold: 0.6 });

  observer.observe(statsBar);
}