// ============================================================
// FOOTER COMPONENT  —  src/components/layout/Footer.js
// ============================================================

const SOCIAL_ICONS = {
  github: `<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12c0-5.523-4.477-10-10-10z"/></svg>`,
  linkedin: `<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>`,
  kaggle:   `🏆`,
  twitter:  `𝕏`,
};

function Footer() {
  const { name, social } = PERSONAL;

  const socialBtns = Object.entries(social).map(([key, url]) => `
    <a href="${url}" class="footer__social-btn" target="_blank" rel="noopener" aria-label="${key}">
      ${SOCIAL_ICONS[key] || key}
    </a>`).join("");

  return `
    <footer class="footer" role="contentinfo">
      <div class="container">
        <div class="footer__logo">${name}</div>
        <p class="footer__tagline">AI Engineer · Building intelligent systems that create real impact</p>
        <div class="footer__social" role="list">${socialBtns}</div>
        <p class="footer__copy">© ${new Date().getFullYear()} ${name} · Built for recruiters who care about impact, not just keywords.</p>
      </div>
    </footer>`;
}

function FloatResume() {
  return Button({
    label:    "Resume",
    href:     PERSONAL.resumeUrl,
    variant:  "primary",
    icon:     ICON_DOWNLOAD,
    download: true,
    // extra class added after render
  });
}

function initFloatResume() {
  const el = document.getElementById("float-resume-root");
  if (el) el.className = "float-resume";
}