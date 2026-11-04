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
    role:     "Software Engineer",
    company:  "Mindinventory",
    location: "Ahmedabad",
    duration: "May 2022 – Oct 2023",
    type:     "Full-time",
    current:  false,
    // Single emoji used as the timeline dot icon
    icon:     "🎓",
    description:"",
    highlights: [
      "Developed a full Food Delivery application (customer + delivery boy) with offline" + 
	" cart management, QPay & Wallet payment gateways, Google Maps integration,"+
	" order status tracking, and real-time Chat via WebSocket.",

      "Contributed to a Parental Control application to block specified apps on children’s " + 	"devices until assigned tasks are completed.",

      "Implemented BLE device connectivity for a Smart Parking App and conducted research " +
	 "in Indoor Navigation.",

      "Refactored legacy Java codebase to Kotlin, improving readability and  " + 
	"maintainability, resulting in a measurable reduction in development time.",

	"Collaborated cross-functionally to gather requirements, define project scope, and " + 	"ensure timely delivery.",
	
	"Contributed to sound-reactive hardware integration with mobile devices via Bluetooth."
	
    ],
    // Short technology tags shown as cyan pills at the base of the card
    tags: ["LLMs", "GNNs", "MLOps", "PyTorch", "AWS"],
  },
  {
    role:     "Android Developer",
    company:  "Excellent Web World",
    location: "Ahmedabad",
    duration: "Oct 2020 – May 2022",
    type:     "Full-time",
    current:  false,
    // Single emoji used as the timeline dot icon
    icon:     "🎓",
    description:
      "",
    highlights: [
      "Collaborated with team members to gather requirements, provide technical expertise, and ensure project alignment with business objectives.",

      "Led design of Native UI for a Health & Lifestyle Application using Jetpack Compose, implementing hotel Wi-Fi connectivity, deals/offers retrieval, Exoplayer-based exercise video streaming, and activity progress charts.",

      "Contributed to an in-house E-Commerce app incorporating AR-Core for Augmented Reality product display and custom Jetpack Compose UI.",

      "Built in-house MVVM Clean Architecture project templates and a shared Jetpack Compose component repository to accelerate fellow developers.",
    ],
    // Short technology tags shown as cyan pills at the base of the card
    tags: ["Kotlin", "Jetpack Compose", "Coroutines", "Retrofit", "MVVM with Clean Architecture", "Dagger Hilt", "ARCore"],
  },
  {
    role:     "Software Engineer",
    company:  "Avancer Technologies Ltd",
    location: "Pune",
    duration: "Jun 2018 – Oct 2019",
    type:     "Full-time",
    current:  false,
    icon:     "⚡",
    description:
      "",
    highlights: [
      "Maintained a Supply Chain Management System product that monitors real-time" + 
	"inventory using WebSockets.",

      "Implemented Firebase Realtime Database for KPI report generation around " +
	"productivity metrics; integrated barcode scanner for inbound/ outbound product tracking.",

      "Built charting views to visualise warehouse product matrices; improved application" + 
	"performance by optimising database schema.",

      "Collaborated with QA team to ensure robust testing and resolve application bugs.",
    ],
    tags: ["Android", "Firebase Realtime Database", "WebSockets", "Barcode Scanner", "Charts"],
  },

  {
    role:     "Mobile Developer ",
    company:  "Renacle Cycling",
    location: "Pune",
    duration: "Sep 2017 – Jun 2018",
    type:     "Full-time",
    current:  false,
    icon:     "🎓",
    description:
      "",
    highlights: [
      "Contributed to implementing a BLE smart lock product used to lock/unlock cycles and" + 	"integrated the BLE SDK for device-application connectivity.",

      "Implemented geofencing, clustering, and push notification features within the application.",

      "Handled customer support issues professionally and resolved application-level bugs to" +
	"improve user experience. ",
    ],
    tags: ["Android", "BLE SDK", "Geofencing", "Push Notifications"],
  },
];

// ── Education ─────────────────────────────────────────────────
/**
 * @typedef {{
 *   degree:     string,
 *   school:     string,
 *   year:       string,
 *   gpa:        string,
 * }} EducationEntry
 */

/** @type {EducationEntry[]} */
const EDUCATION = [
  {
    degree: "Master of Science in Computer Applications",
    school: "Savitribai Phule Pune University",
    // Graduation year
    year:   "2014",
    // Format: "X.X / 4.0" or "X.X / 10" etc.
    gpa:    "First Class",
  },
  {
    degree: "Bachelor of Science in Computer Science",
    school: "Savitribai Phule Pune University",
    year:   "2011",
    gpa:    "Higher Secondary Class",
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
