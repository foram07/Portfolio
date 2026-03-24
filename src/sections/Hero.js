// ============================================================
// HERO SECTION  —  src/sections/Hero.js
//
// Full-width editorial layout. No card. No two columns.
// Strong typographic hierarchy with credential strip.
// ============================================================

function Hero() {
  const { name, resumeUrl, stats } = PERSONAL;

  // Credential badges shown beneath the name
  const credentials = [
    {
      label: "Professional Certificate",
      detail: "Generative AI & Machine Learning · E&ICT Academy, IIT Kanpur",
    },
    {
      label: "Android Development",
      detail: "5 Years Industry Experience · Kotlin · Jetpack Compose",
    },
  ];

  // Key domain tags shown as a clean inline row
  const domains = [
    "Machine Learning",
    "Generative AI",
    "Natural Language Processing",
    "Computer Vision",
    "Android Development",
  ];

  const credentialItems = credentials.map(c => `
    <div class="hero__credential">
      <span class="hero__credential-label">${c.label}</span>
      <span class="hero__credential-detail">${c.detail}</span>
    </div>`).join("");

  const domainItems = domains.map((d, i) => `
    <span class="hero__domain">${d}</span>
    ${i < domains.length - 1
      ? '<span class="hero__domain-sep" aria-hidden="true">·</span>'
      : ''}`).join("");


  return `
    <section id="hero" class="hero" aria-label="Introduction">

      <!-- Fine horizontal rule lines — structural decoration -->
      <div class="hero__rule hero__rule--top" aria-hidden="true"></div>
      <div class="hero__rule hero__rule--mid"  aria-hidden="true"></div>

      <div class="container">
        <div class="hero__body">

          <!-- ── Row 1: status + location ── -->
          <div class="hero__meta reveal">
            <span class="otw">
              <span class="dot" aria-hidden="true"></span>
              ${PERSONAL.availability}
            </span>
            <span class="hero__meta-sep" aria-hidden="true"></span>
            <span class="hero__location">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none"
                   stroke="currentColor" stroke-width="2" aria-hidden="true">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
              ${PERSONAL.location}
            </span>
          </div>

          <!-- ── Row 2: Name — the focal point ── -->
          <h1 class="hero__name reveal reveal-delay-1">
            ${name}
          </h1>

          <!-- ── Row 3: Domain tags ── -->
          <div class="hero__domains reveal reveal-delay-2" aria-label="Specialisations">
            ${domainItems}
          </div>

          <!-- ── Row 4: Credential strip ── -->
          <div class="hero__credentials reveal reveal-delay-2" aria-label="Credentials">
            ${credentialItems}
          </div>

          <!-- ── Row 5: Tagline ── -->
          <p class="hero__tagline reveal reveal-delay-3">
            Building intelligent systems that bridge research and production —
            grounded in engineering discipline and five years of shipping
            real products into people's hands.
          </p>

        

          <!-- ── Row 7: CTA buttons ── -->
          <div class="hero__cta reveal reveal-delay-4">
            ${Button({
              label:   "View Projects",
              href:    "#projects",
              variant: "primary",
              size:    "lg",
              icon:    ICON_ARROW_R,
            })}
            ${Button({
              label:    "Download Resume",
              href:     resumeUrl,
              variant:  "outline",
              size:     "lg",
              icon:     ICON_DOWNLOAD,
              download: true,
            })}
            ${Button({
              label:   "Contact Me",
              href:    "#contact",
              variant: "ghost",
              size:    "lg",
            })}
          </div>

        </div>
      </div>
    </section>
    <div class="section-divider" aria-hidden="true"></div>`;
}