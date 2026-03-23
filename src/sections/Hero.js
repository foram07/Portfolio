// ============================================================
// HERO SECTION  —  src/sections/Hero.js
// ============================================================

function Hero() {
  const { name, title, subtitle, tagline, resumeUrl, stats, ticker } = PERSONAL;

  const statItems = stats.map(s => `
    <div class="hero__stat">
      <span class="hero__stat-val" data-target="${parseFloat(s.value)}" data-suffix="${s.suffix || s.value.replace(/[0-9.]/g, '')}">${s.value}</span>
      <span class="hero__stat-label">${s.label}</span>
    </div>`).join("");

  // Duplicate ticker items for seamless loop
  const tickerItems = [...ticker, ...ticker].map(t =>
    `<div class="hero__ticker-item"><span>▲</span>${t}</div>`
  ).join("");

  return `
    <section id="hero" class="hero" aria-label="Hero">
      <!-- Ambient orbs -->
      <div aria-hidden="true">
        <div class="hero__orb hero__orb--1"></div>
        <div class="hero__orb hero__orb--2"></div>
        <div class="hero__orb hero__orb--3"></div>
      </div>

      <div class="container">
        <div class="hero__content">
          <div class="hero__otw">
            <span class="otw"><span class="dot" aria-hidden="true"></span>${PERSONAL.availability}</span>
          </div>
          <h1 class="hero__name">
            <span class="text-gradient">${name}</span>
          </h1>
          <p class="hero__title">
            ${title} &nbsp;·&nbsp; <span>${subtitle}</span> &nbsp;·&nbsp; GenAI Builder
          </p>
          <p class="hero__tagline">${tagline}</p>

          <div class="hero__cta">
            ${Button({ label: "View Projects", href: "#projects", variant: "primary",  size: "lg", icon: ICON_ARROW_R })}
            ${Button({ label: "Download Resume", href: resumeUrl, variant: "outline", size: "lg", icon: ICON_DOWNLOAD, download: true })}
            ${Button({ label: "Get in Touch",  href: "#contact",  variant: "ghost",   size: "lg" })}
          </div>

          <div class="hero__stats" role="list" aria-label="Key statistics">
            ${statItems}
          </div>
        </div>
      </div>

      <!-- Scrolling ticker -->
      <div class="hero__ticker" aria-hidden="true">
        <div class="hero__ticker-track">${tickerItems}</div>
      </div>
    </section>
    <div class="section-divider" aria-hidden="true"></div>`;
}