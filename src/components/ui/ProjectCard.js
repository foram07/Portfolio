// ============================================================
// PROJECT CARD COMPONENT  —  src/components/ui/ProjectCard.js
// Renders a single project card from a project data object.
// ============================================================

const GH_ICON = `<svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12c0-5.523-4.477-10-10-10z"/></svg>`;
const EXT_ICON = `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/></svg>`;

function ProjectCard(project) {
  const { title, category, categoryLabel, badgeVariant, color,
          description, problem, approach, results, stack,
          github, demo, featured } = project;

  const resultItems = results.map(r => `
    <div class="result-item">
      <span class="result-item__val">${r.value}</span>
      <span class="result-item__delta">${r.metric}</span>
    </div>`).join("");

  const stackPills = stack.map(s =>
    `<span class="stack-pill">${s}</span>`).join("");

  const links = [
    github ? `<a href="${github}" target="_blank" rel="noopener" class="project-link">${GH_ICON} GitHub</a>` : "",
    demo   ? `<a href="${demo}"   target="_blank" rel="noopener" class="project-link">${EXT_ICON} Demo</a>`   : "",
  ].join("");

  const featuredBadge = featured
    ? `<span class="badge badge--emerald">⭐ Featured</span>`
    : "";

  return `
    <article class="project-card reveal" data-category="${category}" aria-label="${title}">
      <div class="project-card__color-bar" style="background:${color}"></div>
      <div class="project-card__header">
        <div class="project-card__category">
          ${Badge({ label: categoryLabel, variant: badgeVariant })}
        </div>
        <h3 class="project-card__title">${title}</h3>
        <p class="project-card__desc">${description}</p>
      </div>
      <div class="project-card__body">
        <p class="project-card__section-label">Problem</p>
        <p class="project-card__text">${problem}</p>
        <p class="project-card__section-label">Approach</p>
        <p class="project-card__text">${approach}</p>
        <p class="project-card__section-label">Results</p>
        <div class="project-card__results">${resultItems}</div>
        <p class="project-card__section-label">Stack</p>
        <div class="project-card__stack">${stackPills}</div>
      </div>
      <footer class="project-card__footer">
        <div class="project-card__links">${links}</div>
        ${featuredBadge}
      </footer>
    </article>`;
}