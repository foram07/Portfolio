// ============================================================
// PERSONAL INFO  —  src/data/personal.js
//
// ✏️  EDITING GUIDE
//   This is the single source of truth for all personal copy.
//   Every section (Navbar, Hero, About, Contact, Footer)
//   reads from this object — change it here, it updates everywhere.
//
// ⚠️  Do NOT rename the constant (PERSONAL). Section JS files
//   reference it directly by this name.
// ============================================================

/**
 * @typedef {{
 *   name:        string,
 *   initials:    string,
 *   title:       string,
 *   subtitle:    string,
 *   tagline:     string,
 *   bio:         string,
 *   narrative:   string,
 *   email:       string,
 *   phone:       string,
 *   location:    string,
 *   availability:string,
 *   resumeUrl:   string,
 *   calendlyUrl: string,
 *   social:      object,
 *   stats:       Array<{value:string, suffix:string, label:string}>,
 *   highlights:  string[],
 *   strengths:   Array<{icon:string, title:string, desc:string}>,
 *   techStack:   string[],
 *   navLinks:    Array<{label:string, href:string}>,
 *   ticker:      string[],
 * }} PersonalData
 */

/** @type {PersonalData} */
const PERSONAL = {

  // ── Identity ──────────────────────────────────────────────
  /** Full display name used in headings and meta tags */
  name:     "Foram Soni",
  /** Two-letter abbreviation shown in the Navbar logo */
  initials: "FS",
  /** Primary job title — shown in the Hero section */
  title:    "AI Engineer",
  /** Secondary title — shown alongside primary in Hero */
  subtitle: "Machine Learning Specialist",

  // ── Hero copy ─────────────────────────────────────────────
  /** One-line value proposition beneath the title */
  tagline: "Building intelligent systems that turn data into decisions — at scale.",

  // ── About copy ────────────────────────────────────────────
  /**
   * 2-3 sentence professional summary.
   * Used in the About section bio paragraph.
   */
  bio: `I'm an AI Engineer with 5+ years crafting production-grade machine
learning systems. I specialise in taking models from research to real-world
impact: deploying NLP pipelines, computer vision systems, and generative AI
solutions that businesses rely on daily.`,

  /**
   * One-sentence career journey shown in the narrative callout box.
   * Keep it punchy — it reads like a subtitle.
   */
  narrative: `Started at MIT CSAIL researching efficient transformers →
shipped NLP systems serving 2M+ daily users at DataFlow →
now leading AI initiatives at Nexus Intelligence, saving clients
millions through intelligent automation.`,

  // ── Contact details ───────────────────────────────────────
  email:    "foram.adeshara@gmail.com",
  phone:    "+91 9823518534",
  location: "Pune, India",

  /**
   * Short status label shown next to the green dot in the Hero.
   * E.g. "Open to Work", "Available Q3 2025", "Not looking"
   */
  availability: "Open to Work",

  // ── Files ─────────────────────────────────────────────────
  /** Path to the downloadable PDF resume in /public */
  resumeUrl:   "/public/resume.pdf",
  /** Calendly scheduling link (optional — remove if unused) */
  calendlyUrl: "https://calendly.com/aryanmehta",

  // ── Social links ──────────────────────────────────────────
  /** Used by Footer social buttons and Contact section links */
  social: {
    github:   "https://github.com/foram07",
    linkedin: "https://www.linkedin.com/in/foramsoni07/",
    kaggle:   "https://kaggle.com/foramsoni",
  },

  // ── Hero stat counters ────────────────────────────────────
  /**
   * Four headline numbers shown in the stats bar beneath Hero CTAs.
   * `value`  — the raw number (string, e.g. "5" or "3.9")
   * `suffix` — appended after animation ends (e.g. "+", "%", "x")
   * `label`  — caption beneath the number
   */
  stats: [
    { value: "5",  suffix: "+",  label: "Years Experience"   },
    { value: "30", suffix: "+",  label: "Models Deployed"    },
    { value: "98", suffix: "%",  label: "Client Satisfaction" },
    { value: "15", suffix: "+",  label: "Research Papers"    },
  ],

  // ── Hero ticker ───────────────────────────────────────────
  /**
   * Short achievement strings that scroll across the bottom of the Hero.
   * Keep each under ~60 chars so they fit cleanly at all sizes.
   * The array is automatically duplicated for a seamless loop.
   */
  ticker: [
    "Fraud Detection — 42% fewer false positives",
    "Legal AI — $1.2M saved annually",
    "NLP Pipeline — 2M+ docs/day at 94.3% F1",
    "Latency Optimization — 340ms → 45ms",
    "Churn Prediction — AUC 0.94, −31% churn",
    "Industrial CV — 99.2% defect detection",
  ],

  // ── About: core strengths ─────────────────────────────────
  /**
   * Four strength cards shown in the About section.
   * `icon`  — single emoji, rendered at 1.4rem
   * `title` — ≤ 4 words
   * `desc`  — one short sentence
   */
  strengths: [
    {
      icon:  "🔬",
      title: "Research to Production",
      desc:  "Transforming SOTA papers into deployed, monitored systems",
    },
    {
      icon:  "🚀",
      title: "Model Optimization",
      desc:  "Quantization, distillation, TensorRT — shipping fast models",
    },
    {
      icon:  "📊",
      title: "Data-Driven Decisions",
      desc:  "A/B testing, evaluation frameworks, business metrics alignment",
    },
    {
      icon:  "🏗️",
      title: "MLOps & Scalability",
      desc:  "Kubernetes, MLflow, CI/CD — production ML at enterprise scale",
    },
  ],

  // ── About: tech pill cloud ────────────────────────────────
  /**
   * Short technology names rendered as pills below the About bio.
   * Keep to ≤ 20 items for a clean layout.
   */
  techStack: [
    "Python", "PyTorch", "TensorFlow", "HuggingFace", "LangChain",
    "OpenAI API", "Scikit-learn", "Docker", "Kubernetes", "MLflow",
    "AWS SageMaker", "FastAPI", "Spark", "Kafka", "FAISS", "Pinecone",
  ],

  // ── Navigation ────────────────────────────────────────────
  /**
   * Links rendered in the desktop Navbar and mobile menu.
   * `href` must match the `id` of the corresponding <section>.
   */
  navLinks: [
    { label: "About",      href: "#about"       },
    { label: "Projects",   href: "#projects"    },
    { label: "Skills",     href: "#skills"      },
    { label: "Experience", href: "#experience"  },
    { label: "Blog",       href: "#blog"        },
    { label: "Contact",    href: "#contact"     },
  ],

};
