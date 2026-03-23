// ============================================================
// CONTACT SECTION  —  src/sections/Contact.js
//
// Depends on:
//   data/personal.js → PERSONAL
//   components/ui/SectionHeader.js → SectionHeader()
//   styles/sections/contact.css
// ============================================================

/**
 * Builds the contact channel list from PERSONAL data.
 * @returns {Array<{icon, label, href, text, description}>}
 */
function buildContactLinks() {
  const { email, social } = PERSONAL;
  return [
    {
      icon:        "📧",
      label:       "Email",
      href:        `mailto:${email}`,
      text:        email,
      description: "Fastest response — typically within 24 hours",
    },
    {
      icon:        "💼",
      label:       "LinkedIn",
      href:        social.linkedin,
      text:        "linkedin.com/in/foramsoni07/",
      description: "Professional profile, recommendations & work history",
    },
    {
      icon:        "💻",
      label:       "GitHub",
      href:        social.github,
      text:        "github.com/foram07",
      description: "Open-source contributions & project source code",
    },
    {
      icon:        "🏆",
      label:       "Kaggle",
      href:        social.kaggle,
      text:        "kaggle.com/foramadeshara",
      description: "Competition notebooks & public datasets",
    },
  ];
}

/**
 * Renders a single contact channel card.
 * @param {{ icon, label, href, text, description }} link
 * @returns {string} HTML string
 */
function ContactLink(link) {
  const isEmail = link.href.startsWith("mailto:");
  const target  = isEmail ? "_self"  : "_blank";
  const rel     = isEmail ? ""       : 'rel="noopener noreferrer"';

  return `
    <a href="${link.href}"
       class="contact-link"
       target="${target}"
       ${rel}
       aria-label="Contact via ${link.label}">
      <div class="contact-link__icon" aria-hidden="true">${link.icon}</div>
      <div class="contact-link__body">
        <span class="contact-link__label">${link.label}</span>
        <span class="contact-link__text">${link.text}</span>
        <span class="contact-link__desc">${link.description}</span>
      </div>
      <svg class="contact-link__arrow" width="16" height="16" viewBox="0 0 24 24"
           fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
        <path d="M9 18l6-6-6-6"/>
      </svg>
    </a>`;
}

/**
 * Renders the full Contact section — no form, just channels + statement.
 * @returns {string} HTML string
 */
function Contact() {
  const links = buildContactLinks()
    .map(link => ContactLink(link))
    .join("");

  return `
    <section id="contact" class="section" aria-labelledby="contact-heading">
      <div class="container">

        ${SectionHeader({
          label:     "Get In Touch",
          title:     `Let's <span class="text-gradient">Work Together</span>`,
          subtitle:  "Whether it's a bold idea, a hard problem, or just a conversation about AI — my inbox is always open.",
          headingId: "contact-heading",
        })}

        <div class="contact__layout">

          <!-- ── Left: statement ── -->
          <div class="contact__statement reveal">

            <div class="contact__availability">
              <span class="otw">
                <span class="dot" aria-hidden="true"></span>
                Available for new opportunities
              </span>
            </div>

            <h3 class="contact__statement-heading">
              Good work starts with a good conversation.
            </h3>

            <p class="contact__statement-body">
              I believe the best AI systems aren't built in isolation —
              they're shaped by tight feedback loops between engineers,
              domain experts, and the people they're built for.
              Five years of Android development taught me that before
              models matter, products do — and that instinct travels
              well into every ML system I build today.
            </p>

            <div class="contact__criteria">
              <p class="contact__criteria-label">I enjoy working on</p>
              <ul class="contact__criteria-list">
                <li>Systems where data quality directly shapes outcomes</li>
                <li>Bridging the gap between prototype and production</li>
                <li>On-device and edge ML — where mobile roots run deep</li>
                <li>Cross-functional teams that value engineering craft</li>
              </ul>
            </div>

            <div class="contact__aside">
              <span class="contact__aside-icon" aria-hidden="true">📱</span>
              <p>
                A background in Android means I think about latency, memory,
                and real users — not just benchmarks. That perspective tends
                to make AI features ship faster and land better.
              </p>
            </div>

            <p class="contact__response-note">
              I read every message personally and respond within one business day.
            </p>

          </div>

          <!-- ── Right: contact channels ── -->
          <div class="contact__channels reveal reveal-delay-2">

            <p class="contact__channels-label">Reach me directly</p>

            <nav class="contact__links" aria-label="Contact channels">
              ${links}
            </nav>

          </div>

        </div>

      </div>
    </section>`;
}