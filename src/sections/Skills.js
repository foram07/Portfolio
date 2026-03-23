// ============================================================
// SKILLS SECTION  —  src/sections/Skills.js
//
// Depends on:
//   data/skills.js          → SKILLS
//   components/ui/SkillBar.js → SkillBar()
//   components/ui/SectionHeader.js → SectionHeader()
//   styles/sections/skills.css
// ============================================================

/**
 * Renders one skill-category card containing
 * an icon + title header and a list of animated skill bars.
 *
 * @param {{ title: string, items: Array<{name:string, level:number}> }} category
 * @returns {string} HTML string
 */
function SkillCategoryCard(category) {
  const bars = category.items
    .map(item => SkillBar(item))
    .join("");

  return `
    <div class="skill-category reveal">
      <h4 class="skill-category__title">${category.title}</h4>
      ${bars}
    </div>`;
}

/**
 * Renders the full Skills section:
 *   – 2×2 grid of skill-category cards (animated progress bars)
 *   – Full badge cloud listing every technology
 *
 * @returns {string} HTML string
 */
function Skills() {
  const { categories, badges } = SKILLS;

  const categoryCards = categories
    .map(cat => SkillCategoryCard(cat))
    .join("");

  const badgeCloud = badges
    .map(name => `<span class="tech-badge" role="listitem">${name}</span>`)
    .join("");

  return `
    <section id="skills" class="section section--alt" aria-labelledby="skills-heading">
      <div class="container">

        ${SectionHeader({
          label:    "Technical Arsenal",
          title:    `Skills &amp; <span class="text-gradient">Tech Stack</span>`,
          headingId: "skills-heading",
        })}

        <!-- Skill bar categories -->
        <div class="skills__grid" role="list" aria-label="Skill categories">
          ${categoryCards}
        </div>

        <!-- Full technology badge cloud -->
        <div class="skills__badge-section reveal" style="margin-top:48px; text-align:center;">
          <div class="label-mono" style="justify-content:center;" aria-hidden="true">
            Full Stack
          </div>
          <div class="skills__badges" role="list" aria-label="Full technology list">
            ${badgeCloud}
          </div>
        </div>

      </div>
    </section>
    <div class="section-divider" aria-hidden="true"></div>`;
}
