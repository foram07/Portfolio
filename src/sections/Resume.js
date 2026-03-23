// ============================================================
// RESUME SECTION  —  src/sections/Resume.js
//
// Depends on:
//   data/personal.js  → PERSONAL
//   components/ui/Button.js → Button(), ICON_DOWNLOAD, ICON_EYE
//   components/ui/SectionHeader.js → SectionHeader()
//   styles/sections/resume.css
// ============================================================

/**
 * Renders the Resume download section:
 *   – Centred card with floating icon and glow orbs
 *   – Download PDF button  (triggers file download)
 *   – Preview Online button (opens PDF in new tab)
 *
 * @returns {string} HTML string
 */
function Resume() {
  const { resumeUrl, name } = PERSONAL;

  return `
    <section id="resume" class="section section--alt" aria-labelledby="resume-heading">
      <div class="container">

        ${SectionHeader({
          label:     "Download",
          title:     `My <span class="text-gradient">Resume</span>`,
          headingId: "resume-heading",
        })}

        <div class="resume__card reveal">

          <!-- Floating document icon -->
          <span class="resume__icon" role="img" aria-label="Resume document">📄</span>

          <h3 id="resume-card-heading">Download My Resume</h3>

          <p>
            Full details of my experience, projects, publications, and skills —
            one PDF, ready for your hiring pipeline.
          </p>

          <!-- Action buttons -->
          <div class="resume__actions">

            <!-- Primary: triggers browser download -->
            ${Button({
              label:    "Download PDF",
              href:     resumeUrl,
              variant:  "primary",
              size:     "lg",
              icon:     ICON_DOWNLOAD,
              download: true,
            })}

            <!-- Secondary: previews inline in new tab -->
            ${Button({
              label:   "Preview Online",
              href:    resumeUrl,
              variant: "outline",
              size:    "lg",
              icon:    ICON_EYE,
            })}

          </div>

          <!-- Hiring signal -->
          <p style="margin-top:24px; margin-bottom:0; font-size:0.8rem; color:var(--text-muted);">
            Last updated March 2025 · PDF · ${name}
          </p>

        </div>

      </div>
    </section>
    <div class="section-divider" aria-hidden="true"></div>`;
}
