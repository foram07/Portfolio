// ============================================================
// SKILLS DATA  —  src/data/skills.js
//
// ✏️  EDITING GUIDE
//   • `categories` drives the 2×2 animated skill-bar grid.
//     Each category becomes one card; each item becomes one bar.
//     `level` is a percentage (0–100) — keep it honest.
//   • `badges` drives the flat badge cloud beneath the grid.
//     Add or remove technology names freely.
//
// ⚠️  Do NOT rename the constant (SKILLS). Section JS files
//   reference it directly by this name.
// ============================================================

/**
 * @typedef {{ name: string, level: number }} SkillItem
 *
 * @typedef {{
 *   title: string,
 *   items: SkillItem[],
 * }} SkillCategory
 *
 * @typedef {{
 *   categories: SkillCategory[],
 *   badges:     string[],
 * }} SkillsData
 */

/** @type {SkillsData} */
const SKILLS = {

  // ── Skill bar categories ───────────────────────────────────
  // Displayed as a 2×2 card grid (desktop) / 1-column (mobile).
  // Max 4–6 items per category for a clean bar list.
  // The emoji in `title` is decorative — used as the category icon.
  categories: [
    {
      title: "⌨️ Programming",
      items: [
        // level: self-assessed proficiency 0-100
        { name: "Python",       level: 95 },
        { name: "SQL",          level: 88 },
        { name: "C++",          level: 70 },
        { name: "Bash / Shell", level: 80 },
        { name: "JavaScript",   level: 65 },
      ],
    },
    {
      title: "🧠 ML / Deep Learning",
      items: [
        { name: "PyTorch",       level: 92 },
        { name: "TensorFlow",    level: 88 },
        { name: "HuggingFace",   level: 90 },
        { name: "Scikit-learn",  level: 95 },
        { name: "JAX",           level: 68 },
        { name: "OpenCV",        level: 84 },
      ],
    },
    {
      title: "⚙️ MLOps & DevOps",
      items: [
        { name: "Docker / Kubernetes",     level: 85 },
        { name: "MLflow / W&B",            level: 85 },
        { name: "CI/CD (GitHub Actions)",  level: 80 },
        { name: "Apache Airflow",          level: 75 },
        { name: "Terraform",               level: 65 },
      ],
    },
    {
      title: "☁️ Cloud & Data",
      items: [
        { name: "AWS (SageMaker, Lambda)", level: 88 },
        { name: "GCP (Vertex AI)",         level: 82 },
        { name: "Spark / Databricks",      level: 78 },
        { name: "Kafka / Redis",           level: 74 },
        { name: "dbt",                     level: 70 },
      ],
    },
  ],

  // ── Technology badge cloud ─────────────────────────────────
  // Flat list of technology names rendered as hoverable pills
  // beneath the skill-bar grid.
  // Add, remove, or reorder freely — each entry is one pill.
  badges: [
    // Languages & core ML
    "Python", "PyTorch", "TensorFlow", "HuggingFace", "JAX",
    "Scikit-learn", "Pandas", "NumPy", "OpenCV",
    // GenAI & LLM tooling
    "LangChain", "OpenAI API", "FAISS", "Pinecone", "ONNX", "TensorRT",
    // Data engineering
    "Spark", "Kafka", "Airflow", "dbt", "Redis", "PostgreSQL",
    // MLOps & infrastructure
    "Docker", "Kubernetes", "MLflow", "Weights & Biases",
    "FastAPI", "CI/CD", "Terraform",
    // Cloud
    "AWS SageMaker", "GCP Vertex AI", "Azure ML",
  ],

};
