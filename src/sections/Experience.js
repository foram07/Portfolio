// ============================================================
// EXPERIENCE SECTION  —  src/sections/Experience.js
//
// Depends on:
//   data/experience.js  → EXPERIENCE, EDUCATION, CERTIFICATIONS
//   components/ui/Badge.js → Badge()
//   components/ui/SectionHeader.js → SectionHeader()
//   styles/sections/experience.css
// ============================================================

/**
 * Renders a single timeline job card.
 *
 * @param {{ role:string, company:string, location:string, duration:string,
 *           current:boolean, icon:string, description:string,
 *           highlights:string[], tags:string[] }} job
 * @param {number} index  Used to stagger reveal animation delay
 * @returns {string} HTML string
 */
function ExperienceItem(job, index) {
  const delayClass = index < 4 ? `reveal-delay-${index}` : "reveal-delay-3";

  const highlights = job.highlights
    .map(h => `<li class="exp-item__highlight">${h}</li>`)
    .join("");

  const tags = job.tags
    .map(t => `<span class="exp-tag" role="listitem">${t}</span>`)
    .join("");

  const currentBadge = job.current
    ? Badge({ label: "● Current", variant: "emerald" })
    : "";

  return `
    <div class="exp-item reveal ${delayClass}">

      <!-- Timeline dot -->
      <div class="exp-item__dot-col" aria-hidden="true">
        <div class="exp-item__dot">${job.icon}</div>
      </div>

      <!-- Card -->
      <article class="exp-item__card" aria-label="${job.role} at ${job.company}">

        <header class="exp-item__header">
          <div>
            <h3 class="exp-item__role">${job.role}</h3>
            <div style="margin-top:6px;">${currentBadge}</div>
          </div>
          <div class="exp-item__meta">
            <div class="exp-item__company">${job.company}</div>
            <div class="exp-item__duration">
              ${job.duration}&nbsp;·&nbsp;${job.location}
            </div>
          </div>
        </header>

        <p class="exp-item__desc">${job.description}</p>

        <ul class="exp-item__highlights" aria-label="Key achievements">
          ${highlights}
        </ul>

        <div class="exp-item__tags" role="list" aria-label="Technologies used">
          ${tags}
        </div>

      </article>
    </div>`;
}

/**
 * Renders one education card.
 *
 * @param {{ degree:string, school:string, year:string,
 *           gpa:string, highlights:string[] }} edu
 * @returns {string} HTML string
 */
function EducationItem(edu) {
  const highlights = edu.highlights
    .map(h => `<li class="edu-item__highlight">${h}</li>`)
    .join("");

  return `
    <div class="edu-item">
      <div class="edu-item__degree">${edu.degree}</div>
      <div class="edu-item__school">${edu.school}</div>
      <div class="edu-item__meta">
        <span>${edu.year}</span>
        <span>GPA: ${edu.gpa}</span>
      </div>
      <ul class="edu-item__highlights">${highlights}</ul>
    </div>`;
}

/**
 * Renders one certification row.
 *
 * @param {{ icon:string, name:string, issuer:string }} cert
 * @returns {string} HTML string
 */
function CertificationItem(cert) {
  return `
    <div class="cert-item">
      <span class="cert-item__icon" aria-hidden="true">${cert.icon}</span>
      <div>
        <div class="cert-item__name">${cert.name}</div>
        <div class="cert-item__issuer">${cert.issuer}</div>
      </div>
    </div>`;
}

/**
 * Renders the full Experience section:
 *   – Vertical timeline of job cards
 *   – Education + Certifications side-by-side grid
 *
 * @returns {string} HTML string
 */
function Experience() {
  const expItems = EXPERIENCE
    .map((job, i) => ExperienceItem(job, i))
    .join("");

  const eduItems = EDUCATION
    .map(edu => EducationItem(edu))
    .join("");

  const certItems = CERTIFICATIONS
    .map(cert => CertificationItem(cert))
    .join("");

  return `
    <section id="experience" class="section" aria-labelledby="experience-heading">
      <div class="container">

        ${SectionHeader({
          label:     "Career",
          title:     `Work <span class="text-gradient">Experience</span>`,
          headingId: "experience-heading",
        })}

        <!-- Timeline -->
        <div class="exp-timeline" role="list" aria-label="Work history">
          ${expItems}
        </div>

        <!-- Education & Certifications -->
        <div class="edu-certs reveal" style="margin-top:64px;">

          <div>
            <h3 style="font-size:1.2rem; margin-bottom:20px;" id="education-heading">
              Education
            </h3>
            <div role="list" aria-labelledby="education-heading">
              ${eduItems}
            </div>
          </div>

          <div>
            <h3 style="font-size:1.2rem; margin-bottom:20px;" id="certs-heading">
              Certifications
            </h3>
            <div role="list" aria-labelledby="certs-heading">
              ${certItems}
            </div>
          </div>

        </div>

      </div>
    </section>
    <div class="section-divider" aria-hidden="true"></div>`;
}
