// ============================================================
// PROJECT FILTER  —  src/js/modules/projectFilter.js
// Filters the projects grid by data-category attribute.
// ============================================================

function initProjectFilter() {
  const filterBtns = document.querySelectorAll(".filter-btn");
  const cards      = document.querySelectorAll(".project-card");

  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      // Update active button state
      filterBtns.forEach(b => {
        b.classList.remove("filter-btn--active");
        b.setAttribute("aria-pressed", "false");
      });
      btn.classList.add("filter-btn--active");
      btn.setAttribute("aria-pressed", "true");

      const filter = btn.dataset.filter;

      cards.forEach(card => {
        const match = filter === "all" || card.dataset.category === filter;
        card.classList.toggle("project-card--hidden", !match);

        // Re-trigger reveal animation for newly shown cards
        if (match) {
          card.classList.remove("visible");
          requestAnimationFrame(() => card.classList.add("visible"));
        }
      });
    });
  });
}