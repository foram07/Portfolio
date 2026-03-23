// ============================================================
// BLOG DATA  —  src/data/blog.js
//
// ✏️  EDITING GUIDE
//   Each object maps 1-to-1 with a BlogCard component.
//
//   `tags`    — 1-3 tags per post. Each tag needs a `label`
//               and a `variant` for the badge colour:
//               "cyan" | "violet" | "amber" | "emerald" | "rose"
//
//   `date`    — Human-readable string, e.g. "Mar 8, 2025"
//               Also set the `datetime` attribute manually if
//               you add a <time> element elsewhere.
//
//   `url`     — Full URL to the published article.
//               Use "#" as a placeholder while drafting.
//
//   Recommended: 3 posts for the default grid (3-col desktop).
//   Add more freely — the grid will reflow automatically.
//
// ⚠️  Do NOT rename the constant (BLOG_POSTS).
// ============================================================

/**
 * @typedef {{
 *   label:   string,
 *   variant: "cyan"|"violet"|"amber"|"emerald"|"rose",
 * }} BlogTag
 *
 * @typedef {{
 *   title:    string,
 *   excerpt:  string,
 *   date:     string,
 *   readTime: string,
 *   tags:     BlogTag[],
 *   url:      string,
 * }} BlogPost
 */

/** @type {BlogPost[]} */
const BLOG_POSTS = [
  {
    title:
      "RAG vs Fine-tuning: Choosing the Right LLM Strategy",
    // 2-3 sentences. Tell the reader what they'll get, not just what the topic is.
    excerpt:
      "A practical decision framework for when to use retrieval-augmented " +
      "generation vs domain-specific fine-tuning — with real cost and " +
      "latency benchmarks from three production deployments.",
    // Human-readable publication date
    date:     "Mar 8, 2025",
    // Estimated read time shown alongside the date
    readTime: "8 min read",
    tags: [
      { label: "LLMs",        variant: "cyan"   },
      { label: "RAG",         variant: "violet" },
    ],
    url: "https://medium.com/@aryanmehta/rag-vs-finetuning",
  },

  {
    title:
      "Quantizing LLMs for Production: A Hands-on Guide",
    excerpt:
      "Step-by-step walkthrough of INT8 and INT4 quantization with " +
      "GPTQ and AWQ — including accuracy vs latency tradeoffs measured " +
      "on Llama-3, Mistral-7B, and a proprietary 13B model.",
    date:     "Feb 14, 2025",
    readTime: "12 min read",
    tags: [
      { label: "MLOps",        variant: "amber" },
      { label: "Optimization", variant: "cyan"  },
    ],
    url: "https://medium.com/@aryanmehta/quantizing-llms",
  },

  {
    title:
      "Building Reliable ML Pipelines with Airflow + MLflow",
    excerpt:
      "How I design production ML workflows that handle failures " +
      "gracefully, track every experiment, and enable one-click " +
      "rollbacks — without any downtime.",
    date:     "Jan 22, 2025",
    readTime: "10 min read",
    tags: [
      { label: "MLOps",     variant: "amber"  },
      { label: "Pipelines", variant: "violet" },
    ],
    url: "https://medium.com/@aryanmehta/ml-pipelines-airflow",
  },

  {
    title:
      "From Notebook to API: Deploying PyTorch Models with FastAPI",
    excerpt:
      "A production-grade deployment pattern covering model versioning, " +
      "health checks, async batching, and GPU memory management — " +
      "battle-tested across 10+ live services.",
    date:     "Dec 10, 2024",
    readTime: "14 min read",
    tags: [
      { label: "Deployment", variant: "emerald" },
      { label: "PyTorch",    variant: "cyan"    },
    ],
    url: "https://medium.com/@aryanmehta/pytorch-fastapi-deploy",
  },
];
