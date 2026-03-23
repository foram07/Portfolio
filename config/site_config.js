// ============================================================
// SITE CONFIG  —  config/site.config.js
// Top-level switches and environment settings.
// ============================================================

const SITE_CONFIG = {
  // Set to true once you wire up a real form backend
  formEnabled: false,

  // Formspree endpoint (sign up at formspree.io)
  formEndpoint: "https://formspree.io/f/YOUR_FORM_ID",

  // Google Analytics measurement ID (optional)
  gaId: "",

  // Default theme: "dark" | "light"
  defaultTheme: "dark",

  // Enable/disable sections (set false to hide a section)
  sections: {
    hero:         true,
    about:        true,
    projects:     true,
    skills:       true,
    experience:   true,
    resume:       true,
    blog:         true,
    testimonials: true,
    contact:      true,
  },
};