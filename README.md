# AI Engineer Portfolio — Modular Edition

A fully modular, zero-build portfolio website where every section, component, style, and data layer lives in its own file. No bundler, no framework, no compilation step — open `index.html` in a browser and it just works.

---

## Folder Structure

```
portfolio-modular/
│
├── index.html                         ← Single HTML entry point, loads everything
│
├── config/
│   └── site.config.js                 ← Global switches (theme, sections, form endpoint)
│
├── public/
│   ├── resume-aryan-mehta.pdf         ← ⚠️  Replace with your actual resume
│   └── og-image.png                   ← Social share preview (1200×630px)
│
└── src/
    │
    ├── data/                          ← ALL content lives here — edit to personalise
    │   ├── personal.js                ← Name, bio, links, stats, nav, ticker
    │   ├── projects.js                ← Project cards + filter config
    │   ├── skills.js                  ← Skill bars + badge cloud
    │   ├── experience.js              ← Jobs, education, certifications
    │   ├── blog.js                    ← Blog post metadata
    │   └── testimonials.js            ← Quotes + author info
    │
    ├── styles/
    │   ├── base/                      ← Foundation — load first
    │   │   ├── tokens.css             ← CSS custom properties (colors, fonts, spacing)
    │   │   ├── reset.css              ← Browser reset + layout helpers
    │   │   ├── typography.css         ← Heading scale + type utilities
    │   │   └── animations.css         ← All @keyframes
    │   │
    │   ├── components/                ← Reusable UI & layout styles
    │   │   ├── buttons.css            ← .btn variants (primary, outline, ghost)
    │   │   ├── badges.css             ← .badge colour variants
    │   │   ├── cards.css              ← .card base + .tech-pill
    │   │   ├── forms.css              ← Inputs, labels, textarea
    │   │   ├── navbar.css             ← Fixed nav + mobile menu
    │   │   └── footer.css             ← Footer + floating resume button
    │   │
    │   └── sections/                  ← One CSS file per page section
    │       ├── hero.css
    │       ├── about.css
    │       ├── projects.css
    │       ├── skills.css
    │       ├── experience.css
    │       ├── resume.css
    │       ├── blog.css
    │       ├── testimonials.css
    │       └── contact.css
    │
    ├── components/
    │   ├── ui/                        ← Reusable HTML-returning JS functions
    │   │   ├── Badge.js               ← Badge({ label, variant })
    │   │   ├── Button.js              ← Button({ label, href, variant, size, … })
    │   │   ├── SkillBar.js            ← SkillBar({ name, level })
    │   │   ├── ProjectCard.js         ← ProjectCard(projectObject)
    │   │   └── SectionHeader.js       ← SectionHeader({ label, title, subtitle })
    │   │
    │   └── layout/                    ← Page-level layout components
    │       ├── Navbar.js              ← Navbar() + initNavbar()
    │       ├── Footer.js              ← Footer()
    │       └── FloatResume.js         ← renderFloatResume()
    │
    ├── sections/                      ← One JS file per page section
    │   ├── Hero.js                    ← Hero()
    │   ├── About.js                   ← About()
    │   ├── Projects.js                ← Projects()
    │   ├── Skills.js                  ← Skills()
    │   ├── Experience.js              ← Experience()
    │   ├── Resume.js                  ← Resume()
    │   ├── Blog.js                    ← Blog()
    │   ├── Testimonials.js            ← Testimonials()
    │   └── Contact.js                 ← Contact()
    │
    ├── js/
    │   ├── utils/                     ← Pure helper functions
    │   │   ├── dom.js                 ← $(), $$(), mount(), createElement()
    │   │   ├── animations.js          ← animateCounter(), onEnterViewport()
    │   │   └── theme.js               ← toggleTheme(), applyTheme(), getThemeIcon()
    │   │
    │   ├── modules/                   ← Feature modules, each init-able independently
    │   │   ├── scrollReveal.js        ← initScrollReveal()
    │   │   ├── activeNav.js           ← initActiveNav()
    │   │   ├── projectFilter.js       ← initProjectFilter()
    │   │   ├── counterAnimation.js    ← initCounterAnimation()
    │   │   ├── skillBars.js           ← initSkillBars()
    │   │   └── contactForm.js         ← initContactForm()
    │   │
    │   └── app.js                     ← Bootstrap: renders sections → inits modules
    │
    └── assets/
        ├── icons/                     ← SVG icon files (optional)
        └── fonts/                     ← Self-hosted font files (optional)
```

---

## Personalisation Checklist

### 5 minutes — essentials

- [ ] `src/data/personal.js` — update name, bio, email, social links, stats
- [ ] `public/resume-aryan-mehta.pdf` — replace with your real PDF
- [ ] `public/og-image.png` — add a 1200×630 social share image
- [ ] `index.html` `<title>` and `<meta>` tags — update name/description

### 30 minutes — projects

- [ ] `src/data/projects.js` — replace all 6 projects with your own
- [ ] Update GitHub/demo URLs, results metrics, tech stacks

### 15 minutes — experience

- [ ] `src/data/experience.js` — update jobs, education, certifications
- [ ] `src/data/testimonials.js` — add real LinkedIn recommendations

### Optional

- [ ] `src/data/blog.js` — link to your real published articles
- [ ] `config/site.config.js` — set `formEnabled: true` + your Formspree ID
- [ ] `config/site.config.js` — add Google Analytics `gaId`
- [ ] `config/site.config.js` — toggle off any sections you don't want

---

## Deployment

### Netlify (recommended — free)

1. Go to [netlify.com](https://netlify.com) → **Add new site** → **Deploy manually**
2. Drag the entire `portfolio-modular/` folder into the drop zone
3. Live in under 60 seconds
4. **Settings → Domain management** to add your custom domain

### Vercel (free)

```bash
npm i -g vercel
cd portfolio-modular
vercel --prod
```

### GitHub Pages (free)

1. Push this folder to a GitHub repo
2. **Settings → Pages → Source:** main / root
3. Live at `https://yourusername.github.io/repo-name`

### Local development

```bash
# Python (no install needed)
python3 -m http.server 3000
# Then open http://localhost:3000

# Or Node.js
npx serve .
```

> **Why not just open index.html directly?**  
> Browsers block `file://` script loading for security. Use a local server instead.

---

## Wiring Up the Contact Form

Edit `src/js/modules/contactForm.js` and uncomment the `fetch()` block:

### Option A — Formspree (free tier, no backend needed)

1. Sign up at [formspree.io](https://formspree.io) → create a form → copy the ID
2. Set `formEndpoint` in `config/site.config.js`
3. Uncomment the fetch block in `contactForm.js`

### Option B — Netlify Forms (free with Netlify hosting)

Add `netlify` attribute to the form tag in `src/sections/Contact.js`:

```html
<form class="form" id="contactForm" name="contact" netlify>
  <input type="hidden" name="form-name" value="contact" />
  …
</form>
```

---

## Design System Quick Reference

| Token            | Dark Mode      | Light Mode |
| ---------------- | -------------- | ---------- |
| `--bg-primary`   | `#080C14`      | `#F4F7FC`  |
| `--accent`       | `#63D2FF`      | `#0284C7`  |
| `--violet`       | `#A78BFA`      | same       |
| `--emerald`      | `#34D399`      | same       |
| `--font-display` | Syne           | same       |
| `--font-body`    | DM Sans        | same       |
| `--font-mono`    | JetBrains Mono | same       |

All tokens live in `src/styles/base/tokens.css`.

---

## Architecture Principles

- **Data layer is separate from render layer** — change content in `src/data/`, never in section files
- **One responsibility per file** — each JS file exports/exposes exactly one component or module
- **CSS follows the same boundary as JS** — one CSS file per section, one per component
- **No globals except data constants** — all section functions and init functions are named clearly
- **Load order matters** — `index.html` loads data → utils → components → sections → modules → app
- **Zero dependencies** — no npm, no bundler, no framework; works offline after first font load

---

_Built for AI Engineers who want clean code to match their clean models._
