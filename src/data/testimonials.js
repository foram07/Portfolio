// ============================================================
// TESTIMONIALS DATA  —  src/data/testimonials.js
//
// ✏️  EDITING GUIDE
//   Each object maps 1-to-1 with a TestimonialCard component.
//
//   Best practices for testimonials:
//     ✓ Use real quotes from LinkedIn recommendations
//     ✓ Include the person's current title and company
//     ✓ 2-3 sentences is the sweet spot — long quotes lose impact
//     ✓ Pick quotes that mention specific results or skills,
//       not just "great to work with"
//
//   `initials` — 2 letters shown in the gradient avatar when
//                no photo is available. Use first + last initial.
//
//   Recommended: 3 testimonials (fills the 3-column desktop grid).
//   Adding a 4th will start a second row — that's fine.
//
// ⚠️  Do NOT rename the constant (TESTIMONIALS).
// ============================================================

/**
 * @typedef {{
 *   name:     string,
 *   title:    string,
 *   initials: string,
 *   quote:    string,
 * }} Testimonial
 */

/** @type {Testimonial[]} */
const TESTIMONIALS = [
  {
    name:     "Sarah Chen",
    // Current role + company of the person giving the testimonial
    title:    "VP of Engineering, Nexus Intelligence",
    // 2-letter abbreviation for the gradient avatar
    initials: "SC",
    // The testimonial quote — do NOT include surrounding quotation marks,
    // the CSS adds decorative ones automatically via ::before
    quote:
      "Aryan delivered a fraud detection system that exceeded every metric " +
      "we set. His ability to go from research paper to production deployment " +
      "in 6 weeks is genuinely rare — most engineers can do one or the other, " +
      "not both.",
  },

  {
    name:     "Marcus Williams",
    title:    "CTO, DataFlow Systems",
    initials: "MW",
    quote:
      "The document intelligence system Aryan built is now our most-used " +
      "feature, with a 91% accuracy rate our legal clients rely on daily. " +
      "His technical depth combined with clear business communication made " +
      "him an invaluable engineering partner.",
  },

  {
    name:     "Dr. Priya Patel",
    title:    "Research Lead, MIT CSAIL",
    initials: "PP",
    quote:
      "Aryan's contributions to our parameter-efficient fine-tuning research " +
      "were published at NeurIPS. His rare ability to bridge rigorous theory " +
      "and practical engineering sets him apart from most engineers and " +
      "researchers I've worked with over 15 years.",
  },
];
