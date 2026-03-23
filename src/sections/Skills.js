// ============================================================
// SKILLS SECTION  —  src/sections/Skills.js
//
// Depends on:
//   data/skills.js → SKILLS
//   components/ui/SectionHeader.js → SectionHeader()
//   styles/sections/skills.css
// ============================================================

/**
 * Renders one skill category as a clean editorial card.
 * No bars, no dots, no tags — just icon, title, and a
 * comma-separated list of technologies on one clean line.
 *
 * @param {{ title:string, icon:string, items:string[] }} category
 * @param {number} index
 * @returns {string} HTML string
 */
function SkillCategoryCard(category, index) {
  const delayClass = index < 4 ? `reveal-delay-${index}` : "reveal-delay-3";

  const itemList = category.items
    .map((name, i) => `
      <span class="skill-name">
        ${name}${i < category.items.length - 1
          ? '<span class="skill-sep" aria-hidden="true">/</span>'
          : ""}
      </span>`)
    .join("");

  return `
    <div class="skill-card reveal ${delayClass}" role="listitem">
      <div class="skill-card__top">
        <span class="skill-card__icon" aria-hidden="true">${category.icon}</span>
        <h4 class="skill-card__title">${category.title}</h4>
      </div>
      <div class="skill-card__items" aria-label="${category.title} technologies">
        ${itemList}
      </div>
    </div>`;
}

/**
 * Renders the full Skills section —
 * a 3-column editorial grid of category cards.
 *
 * @returns {string} HTML string
 */
function Skills() {
  const cards = SKILLS.categories
    .map((cat, i) => SkillCategoryCard(cat, i))
    .join("");

  return `
    <section id="skills" class="section section--alt" aria-labelledby="skills-heading">
      <div class="container">

        ${SectionHeader({
          label:     "Technical Expertise",
          title:     `Skills &amp; <span class="text-gradient">Tech Stack</span>`,
          subtitle:  "Technologies I work with across the full ML lifecycle — from data pipelines to production deployment.",
          headingId: "skills-heading",
        })}

        <div class="skills__grid" role="list" aria-label="Skill categories">
          ${cards}
        </div>

      </div>
    </section>
    <div class="section-divider" aria-hidden="true"></div>`;
}