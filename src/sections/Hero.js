// ============================================================
// HERO SECTION  —  src/sections/Hero.js
// ============================================================

function Hero() {
  const { name, title, subtitle, tagline, resumeUrl, stats, location, email } = PERSONAL;

  const statItems = stats.map(s => `
    <div class="hero__stat">
      <span class="hero__stat-val"
            data-target="${parseFloat(s.value)}"
            data-suffix="${s.suffix}">
        ${s.value}${s.suffix}
      </span>
      <span class="hero__stat-label">${s.label}</span>
    </div>`).join("");

  const highlights = [
    "NLP · Computer Vision · Generative AI",
    "From research prototype to production system",
    "5 yrs Android · 5 yrs ML/AI",
  ];

  return `
    <section id="hero" class="hero" aria-label="Introduction">

      <!-- Subtle grid lines — decorative -->
      <div class="hero__grid-lines" aria-hidden="true">
        <span></span><span></span><span></span><span></span>
      </div>

      <div class="container">
        <div class="hero__layout">

          <!-- ── Left column ── -->
          <div class="hero__left">

            <!-- Status pill -->
            <div class="hero__status" style="animation-delay:.05s">
              <span class="otw">
                <span class="dot" aria-hidden="true"></span>
                ${PERSONAL.availability}
              </span>
            </div>

            <!-- Name -->
            <h1 class="hero__name" style="animation-delay:.15s">
              ${name}
            </h1>

            <!-- Title block -->
            <div class="hero__titles" style="animation-delay:.25s">
              <span class="hero__title-primary">${title}</span>
              <span class="hero__title-sep" aria-hidden="true">&amp;</span>
              <span class="hero__title-secondary">${subtitle}</span>
            </div>

            <!-- Tagline -->
            <p class="hero__tagline" style="animation-delay:.35s">
              ${tagline}
            </p>

            <!-- Highlight pills -->
            <ul class="hero__highlights" aria-label="Specialisations" style="animation-delay:.45s">
              ${highlights.map(h => `<li class="hero__highlight">${h}</li>`).join("")}
            </ul>

            <!-- CTA row -->
            <div class="hero__cta" style="animation-delay:.55s">
              ${Button({ label: "View Projects",    href: "#projects", variant: "primary", size: "lg", icon: ICON_ARROW_R })}
              ${Button({ label: "Download Resume",  href: resumeUrl,   variant: "outline", size: "lg", icon: ICON_DOWNLOAD, download: true })}
            </div>

          </div>

          <!-- ── Right column: profile card ── -->
          <div class="hero__right" style="animation-delay:.3s">
            <div class="hero__card">

              <!-- Card header -->
              <div class="hero__card-header">
                <div class="hero__avatar" aria-hidden="true">
                  ${PERSONAL.initials}
                </div>
                <div class="hero__card-identity">
                  <span class="hero__card-name">${name}</span>
                  <span class="hero__card-role">${title} · ${subtitle}</span>
                  <span class="hero__card-location">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none"
                         stroke="currentColor" stroke-width="2" aria-hidden="true">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                      <circle cx="12" cy="10" r="3"/>
                    </svg>
                    ${location}
                  </span>
                </div>
              </div>

              <!-- Divider -->
              <div class="hero__card-divider"></div>

              <!-- Stats grid -->
              <div class="hero__stats" role="list" aria-label="Key metrics">
                ${statItems}
              </div>

              <!-- Divider -->
              <div class="hero__card-divider"></div>

              <!-- Contact line -->
              <div class="hero__card-contact">
                <a href="mailto:${email}" class="hero__card-email">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none"
                       stroke="currentColor" stroke-width="2" aria-hidden="true">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                  ${email}
                </a>
                ${Button({ label: "Get in Touch", href: "#contact", variant: "ghost", size: "sm" })}
              </div>

            </div>
          </div>

        </div>
      </div>

    </section>
    <div class="section-divider" aria-hidden="true"></div>`;
}