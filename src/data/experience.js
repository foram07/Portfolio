// ============================================================
// EXPERIENCE DATA  —  src/data/experience.js
//
// ✏️  EDITING GUIDE
//   Three separate exports power three parts of the Experience
//   section:
//
//   EXPERIENCE     → vertical timeline of job cards
//   EDUCATION      → education cards (right of timeline)
//   CERTIFICATIONS → certification rows (right of timeline)
//
//   Rules for impactful highlights:
//     ✓ Lead with an action verb   ("Architected", "Built", "Reduced")
//     ✓ Quantify the result        ("42% fewer false positives")
//     ✓ Name the business impact   ("saving $3.2M annually")
//     ✗ Avoid task lists           ("Responsible for NLP pipeline")
//
// ⚠️  Do NOT rename EXPERIENCE, EDUCATION, or CERTIFICATIONS.
// ============================================================

/**
 * @typedef {{
 *   role:        string,
 *   company:     string,
 *   location:    string,
 *   duration:    string,
 *   type:        "Full-time"|"Part-time"|"Contract"|"Internship"|"Freelance",
 *   current:     boolean,
 *   icon:        string,
 *   description: string,
 *   highlights:  string[],
 *   tags:        string[],
 * }} Job
 */

/** @type {Job[]} */
const EXPERIENCE = [
  {
    role:     "Senior AI Engineer",
    company:  "Nexus Intelligence",
    location: "San Francisco, CA",
    // Human-readable date range
    duration: "Jan 2022 – Present",
    type:     "Full-time",
    // Set to true to show the ● Current badge
    current:  true,
    // Single emoji used as the timeline dot icon
    icon:     "🏢",
    // 1-sentence role overview shown beneath the header
    description:
      "Lead AI engineer driving ML platform strategy and production " +
      "deployments for Fortune 500 clients.",
    // 3-5 bullet points — start each with a strong action verb
    highlights: [
      "Architected a real-time fraud detection system using Graph Neural " +
      "Networks, reducing false positives by 42% and saving $3.2M annually",

      "Built end-to-end LLM pipeline for document intelligence using " +
      "GPT-4 + RAG; achieved 91% accuracy on complex legal document Q&A",

      "Reduced model serving latency from 340ms → 45ms via TensorRT " +
      "quantization and custom CUDA kernels",

      "Mentored 4 junior engineers and established MLOps best practices " +
      "across the organisation, cutting deployment incidents by 60%",
    ],
    // Short technology tags shown as cyan pills at the base of the card
    tags: ["LLMs", "GNNs", "MLOps", "PyTorch", "AWS"],
  },

  {
    role:     "Machine Learning Engineer",
    company:  "DataFlow Systems",
    location: "Austin, TX",
    duration: "Jun 2020 – Dec 2021",
    type:     "Full-time",
    current:  false,
    icon:     "⚡",
    description:
      "Developed NLP and computer vision solutions for B2B SaaS " +
      "products serving 200K+ users.",
    highlights: [
      "Built a multi-label text classification system (BERT-based) with " +
      "94.3% F1 score, processing 2M+ documents daily",

      "Deployed object detection pipeline (YOLOv5) for manufacturing " +
      "defect detection; improved QA throughput by 3×",

      "Implemented A/B testing framework for model evaluation, reducing " +
      "production deployment risk by 60%",

      "Optimised distributed GPU training pipelines, cutting model " +
      "training time by 55% across all projects",
    ],
    tags: ["NLP", "Computer Vision", "BERT", "YOLO", "GCP"],
  },

  {
    role:     "AI Research Intern",
    company:  "MIT CSAIL",
    location: "Cambridge, MA",
    duration: "May 2019 – Aug 2019",
    type:     "Internship",
    current:  false,
    icon:     "🎓",
    description:
      "Research on efficient transformer architectures and " +
      "few-shot learning under Professor Jane Smith.",
    highlights: [
      "Co-authored paper on parameter-efficient fine-tuning accepted " +
      "at the NeurIPS 2019 Efficient Deep Learning Workshop",

      "Developed a novel sparse attention mechanism reducing memory " +
      "consumption by 30% without measurable accuracy loss",

      "Open-sourced PyTorch implementation of sparse attention patterns " +
      "— 400+ GitHub stars within the first month",
    ],
    tags: ["Research", "Transformers", "PyTorch", "NeurIPS"],
  },
];

// ── Education ─────────────────────────────────────────────────
/**
 * @typedef {{
 *   degree:     string,
 *   school:     string,
 *   year:       string,
 *   gpa:        string,
 *   highlights: string[],
 * }} EducationEntry
 */

/** @type {EducationEntry[]} */
const EDUCATION = [
  {
    degree: "M.S. Computer Science (AI Specialization)",
    school: "Carnegie Mellon University",
    // Graduation year
    year:   "2020",
    // Format: "X.X / 4.0" or "X.X / 10" etc.
    gpa:    "3.9 / 4.0",
    highlights: [
      "Thesis: Efficient Transformers for Low-Resource NLP",
      "Graduate Teaching Assistant — Deep Learning (15-618)",
    ],
  },
  {
    degree: "B.Tech Computer Engineering",
    school: "IIT Bombay",
    year:   "2018",
    gpa:    "9.1 / 10",
    highlights: [
      "Gold Medal — Best B.Tech Project (2018 cohort)",
      "ACM-ICPC Asia Regional Finalist",
    ],
  },
];

// ── Certifications ────────────────────────────────────────────
/**
 * @typedef {{
 *   icon:   string,
 *   name:   string,
 *   issuer: string,
 * }} Certification
 *
 * `issuer` — include the issuing body and year, e.g. "Google · 2023"
 */

/** @type {Certification[]} */
const CERTIFICATIONS = [
  {
    icon:   "🏅",
    name:   "AWS Certified Machine Learning – Specialty",
    issuer: "Amazon Web Services · 2024",
  },
  {
    icon:   "🏅",
    name:   "TensorFlow Developer Certificate",
    issuer: "Google · 2023",
  },
  {
    icon:   "🏅",
    name:   "Deep Learning Specialization (5 courses)",
    issuer: "Coursera / deeplearning.ai · 2022",
  },
  {
    icon:   "📄",
    name:   "NeurIPS Workshop Paper — Parameter-Efficient Fine-Tuning",
    issuer: "Neural Information Processing Systems · 2019",
  },
];
