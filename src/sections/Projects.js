// ============================================================
// PROJECTS SECTION  —  src/sections/Projects.js
// ============================================================

function Projects() {
  const filterBtns = PROJECT_FILTERS.map((f, i) => `
    <button class="filter-btn ${i === 0 ? "filter-btn--active" : ""}"
            data-filter="${f.value}"
            aria-pressed="${i === 0}">
      ${f.label}
    </button>`).join("");

  const cards = PROJECTS.map(p => ProjectCard(p)).join("");

  return `
    <section id="projects" class="section" aria-label="Projects">
      <div class="container">
        ${SectionHeader({
          label:    "Featured Work",
          title:    `Projects with <span class="text-gradient">Measurable Impact</span>`,
          subtitle: "Real-world AI systems — every metric backed by production data, not benchmarks.",
        })}

        <div class="projects__filters reveal" role="group" aria-label="Filter projects">
          ${filterBtns}
        </div>

        <div class="projects__grid" id="projectsGrid" role="list">
          ${cards}
        </div>
      </div>
    </section>
    <div class="section-divider" aria-hidden="true"></div>`;
}