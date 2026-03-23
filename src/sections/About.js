// ============================================================
// ABOUT SECTION  —  src/sections/About.js
// ============================================================

function About() {
  const { initials, bio, narrative, strengths, techStack } = PERSONAL;

  const strengthItems = strengths.map(s => `
    <div class="strength-item">
      <span class="strength-item__icon" aria-hidden="true">${s.icon}</span>
      <div>
        <h5 class="strength-item__title">${s.title}</h5>
        <p class="strength-item__desc">${s.desc}</p>
      </div>
    </div>`).join("");

  const techPills = techStack.map(t =>
    `<span class="tech-pill">${t}</span>`).join("");

  return `
    <section id="about" class="section section--alt" aria-label="About">
      <div class="container">
        <div class="about__grid">

          <!-- Avatar column -->
          <div class="about__avatar-wrap reveal" aria-hidden="true">
            <div class="about__avatar">
              <div class="about__avatar-bg"></div>
              <span class="about__initials">${initials}</span>
            </div>
          </div>

          <!-- Content column -->
          <div class="reveal reveal-delay-2">
            <div class="label-mono">About Me</div>
            <h2 style="margin-bottom:20px">
              Turning ML Research into <span class="text-gradient">Business Impact</span>
            </h2>
            <p class="about__bio" style="font-size:1.05rem; margin-bottom:32px;">${bio}</p>

            <div class="about__narrative">
              <p>${narrative}</p>
            </div>

            <div class="about__strengths">${strengthItems}</div>

            <div class="label-mono" style="margin-bottom:12px;">Tech Stack</div>
            <div class="about__tech">${techPills}</div>
          </div>

        </div>
      </div>
    </section>
    <div class="section-divider" aria-hidden="true"></div>`;
}