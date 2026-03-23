// ============================================================
// SKILL BARS  —  src/js/modules/skillBars.js
// Animates skill bar widths when they scroll into view.
// ============================================================

function initSkillBars() {
  const fills = document.querySelectorAll(".skill-bar__fill");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const level = entry.target.getAttribute("data-level");
      // Slight delay so CSS transition fires after paint
      setTimeout(() => {
        entry.target.style.width = `${level}%`;
      }, 150);
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.5 });

  fills.forEach(fill => observer.observe(fill));
}