// ============================================================
// TESTIMONIALS SECTION  —  src/sections/Testimonials.js
//
// Depends on:
//   data/testimonials.js  → TESTIMONIALS
//   components/ui/SectionHeader.js → SectionHeader()
//   styles/sections/testimonials.css
// ============================================================

/**
 * Renders a single testimonial card with a quote,
 * decorative opening mark, and author attribution row.
 *
 * @param {{ name:string, title:string,
 *           initials:string, quote:string }} testimonial
 * @param {number} index  Used to stagger reveal animation delay
 * @returns {string} HTML string
 */
function TestimonialCard(testimonial, index) {
  const delayClass = index < 4 ? `reveal-delay-${index}` : "reveal-delay-3";

  return `
    <article class="testi-card reveal ${delayClass}"
             aria-label="Testimonial from ${testimonial.name}">

      <!-- Quote body -->
      <blockquote class="testi-card__quote">
        ${testimonial.quote}
      </blockquote>

      <!-- Author -->
      <footer class="testi-card__author">

        <!-- Avatar: initials with gradient background -->
        <div class="testi-card__avatar" aria-hidden="true">
          ${testimonial.initials}
        </div>

        <div>
          <div class="testi-card__name">${testimonial.name}</div>
          <div class="testi-card__title">${testimonial.title}</div>
        </div>

      </footer>

    </article>`;
}

/**
 * Renders the full Testimonials section:
 *   – 3-column card grid (2-col on tablet, 1-col on mobile)
 *   – Each card uses semantic <blockquote> + <footer>
 *
 * @returns {string} HTML string
 */
function Testimonials() {
  const cards = TESTIMONIALS
    .map((t, i) => TestimonialCard(t, i))
    .join("");

  return `
    <section id="testimonials" class="section section--alt"
             aria-labelledby="testimonials-heading">
      <div class="container">

        ${SectionHeader({
          label:     "Social Proof",
          title:     `What People <span class="text-gradient">Say</span>`,
          headingId: "testimonials-heading",
        })}

        <div class="testi__grid" role="list" aria-label="Testimonials">
          ${cards}
        </div>

      </div>
    </section>
    <div class="section-divider" aria-hidden="true"></div>`;
}
