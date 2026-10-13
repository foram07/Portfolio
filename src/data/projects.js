// ============================================================
// PROJECTS DATA  —  src/data/projects.js
//
// ✏️  EDITING GUIDE
//   • Replace the 6 sample projects with your own.
//   • Each object maps 1-to-1 with a ProjectCard component.
//   • `category` must match one of the values in PROJECT_FILTERS.
//   • `badgeVariant` controls the colour of the category badge:
//       "cyan" | "violet" | "emerald" | "amber" | "rose"
//   • `color` sets the thin top accent bar on each card.
//   • Set `featured: true` to show the ⭐ Featured badge.
//   • `demo: null` hides the Live Demo button.
//
// ⚠️  Do NOT rename PROJECTS or PROJECT_FILTERS — section JS
//   files reference them directly by these names.
// ============================================================

/**
 * @typedef {{
 *   metric: string,
 *   value:  string,
 *   delta:  string,
 * }} ProjectResult
 *
 * @typedef {{
 *   id:            number,
 *   title:         string,
 *   category:      string,
 *   categoryLabel: string,
 *   badgeVariant:  "cyan"|"violet"|"emerald"|"amber"|"rose",
 *   color:         string,
 *   featured:      boolean,
 *   description:   string,
 *   problem:       string,
 *   approach:      string,
 *   stack:         string[],
 *   github:        string,
 *   demo:          string|null,
 * }} Project
 */

/** @type {Project[]} */
const PROJECTS = [
  {
    id:            1,
    title:         "LegalMind — Document Intelligence",
    // Must match a `value` in PROJECT_FILTERS below
    category:      "nlp",
    categoryLabel: "NLP / LLMs",
    badgeVariant:  "cyan",
    // Hex color for the top accent bar
    color:         "#63D2FF",
    featured:      true,
    // 1-2 sentence summary shown at the top of the card
    description:
      "RAG-powered Q&A system for complex legal documents with " +
      "citation tracking and hallucination detection.",
    // What pain were you solving? (shown in the Problem row)
    problem:
      "Law firms spent 800+ hours/month manually reviewing contracts " +
      "with no traceable citations.",
    // How did you solve it? Models, techniques, architecture (shown in Approach row)
    approach:
      "GPT-4 + custom FAISS vector store + BM25 hybrid retrieval, " +
      "LangChain orchestration, fine-tuned reranker.",
    // 3 quantified outcomes — shown as metric cards inside the project card
    // Shown as monospace pills at the bottom of the card
    stack:  ["GPT-4", "LangChain", "FAISS", "FastAPI", "PostgreSQL", "Docker"],
    github: "https://github.com/aryanmehta-ai/legalmind",
    demo:   "https://legalmind-demo.vercel.app",
  },

  {
    id:            2,
    title:         "DefectVision — Industrial QA",
    category:      "cv",
    categoryLabel: "Computer Vision",
    badgeVariant:  "violet",
    color:         "#A78BFA",
    featured:      true,
    description:
      "Real-time defect detection for manufacturing lines using " +
      "custom YOLOv8 + anomaly detection ensemble.",
    problem:
      "Manual visual inspection missed 15% of defects, causing " +
      "$4M in annual warranty claims for an automotive supplier.",
    approach:
      "YOLOv8 fine-tuned on 50K custom images + PatchCore anomaly " +
      "detection + ONNX runtime for edge deployment at 12ms.",
    stack:  ["YOLOv8", "PyTorch", "ONNX", "OpenCV", "FastAPI", "Kubernetes"],
    github: "https://github.com/aryanmehta-ai/defectvision",
    demo:   "https://defectvision-demo.vercel.app",
  },

  {
    id:            3,
    title:         "SentimentStream — Market Signals",
    category:      "nlp",
    categoryLabel: "NLP / Analytics",
    badgeVariant:  "cyan",
    color:         "#34D399",
    featured:      true,
    description:
      "Real-time financial sentiment pipeline processing 500K+ " +
      "news articles and social posts daily.",
    problem:
      "Trading desks lacked real-time NLP signals from unstructured " +
      "text to complement quantitative strategies.",
    approach:
      "FinBERT fine-tuned on proprietary dataset + Kafka streaming + " +
      "custom entity-linking for stock ticker resolution.",
    stack:  ["FinBERT", "Kafka", "Spark", "Redis", "Docker", "AWS"],
    github: "https://github.com/aryanmehta-ai/sentimentstream",
    // null hides the Live Demo button
    demo:   null,
  },

  {
    id:            4,
    title:         "ImageGen Studio — Custom LoRA",
    category:      "genai",
    categoryLabel: "Generative AI",
    badgeVariant:  "amber",
    color:         "#FBBF24",
    featured:      false,
    description:
      "Platform for training and serving custom LoRA-adapted " +
      "Stable Diffusion models with brand style transfer.",
    problem:
      "Design agencies needed consistent brand-aligned image generation " +
      "without generic DALL-E outputs.",
    approach:
      "SDXL + DreamBooth LoRA fine-tuning pipeline + ComfyUI backend " +
      "+ custom training orchestration on A100 cluster.",
    stack:  ["SDXL", "LoRA", "ComfyUI", "FastAPI", "GCP", "Celery"],
    github: "https://github.com/aryanmehta-ai/imagegen-studio",
    demo:   "https://imagegenstudio.vercel.app",
  },

  {
    id:            5,
    title:         "ChurnShield — Customer Retention",
    category:      "ds",
    categoryLabel: "Data Science",
    badgeVariant:  "rose",
    color:         "#F87171",
    featured:      false,
    description:
      "Machine learning application that predicts customer " +
    "churn using a trained neural network and an interactive " +
    "interface for exploring customer retention risks.",
    problem:
     "Businesses need to identify customers who are likely " +
    "to leave their services so they can understand churn " +
    "risk and take proactive customer retention measures.",

    approach:
   "Neural network model + customer demographic and account " +
    "features + gender label encoding + geographic one-hot " +
    "encoding + feature scaling + interactive prediction " +
    "application for customer churn classification.",

    stack:  [ "Python",
    "TensorFlow / Keras",
    "Scikit-learn",
    "Pandas",
    "NumPy",
    "Streamlit"],
    github: "https://github.com/foram07/Customer-Churn-Prediction",
    demo:   null,
  },

  {
    id:            6,
    title:         "NeuralSearch — Semantic Code Search",
    category:      "genai",
    categoryLabel: "GenAI / Search",
    badgeVariant:  "cyan",
    color:         "#63D2FF",
    featured:      false,
    description:
      "Semantic search engine for large codebases using " +
      "code-specific embeddings and AST-aware chunking.",
    problem:
      "Developers wasted 3+ hours/day navigating large proprietary " +
      "codebases without semantic search capabilities.",
    approach:
      "CodeBERT embeddings + AST-aware chunking strategy + Pinecone " +
      "vector DB + custom reranker trained on code-query pairs.",
    stack:  ["CodeBERT", "Pinecone", "FastAPI", "TypeScript", "PostgreSQL", "Docker"],
    github: "https://github.com/aryanmehta-ai/neuralsearch",
    demo:   "https://neuralsearch-demo.vercel.app",
  },

 {
    id:            7,
    title:         "MathGPT-Agents — AI Math Problem Solver",
    category:      "genai",
    categoryLabel: "Generative AI",
    badgeVariant:  "amber",
    color:         "#FBBF24",
    featured:      false,
    description:
         "AI-powered mathematical problem solver and knowledge " +
    "assistant using LLM-driven agents for step-by-step " +
    "reasoning, calculations, and factual information retrieval.",
    problem:
       "Solving mathematical problems and finding reliable " +
    "contextual information often requires switching between " +
    "calculators, search tools, and reasoning workflows.",
    approach:
       "Groq-hosted Llama 3.1 8B Instant + LangChain ReAct agent " +
    "orchestration + custom calculator and reasoning tools + " +
    "Wikipedia search integration + Streamlit interactive UI.",
    stack:  [  "Python",
    "Streamlit",
    "LangChain",
    "Groq API",
    "Llama 3.1 8B Instant",
    "Wikipedia API",
    "LCEL"],
    github: "https://github.com/foram07/MathGPT-Agents",
    demo:   null,
  },
{
id:            8,
title:         "Enterprise Knowledge Intelligence Platform",
category:      "genai",
categoryLabel: "Generative AI",
badgeVariant:  "amber",
color:         "#FBBF24",
featured:      true,
description:
"Enterprise-grade RAG assistant that answers questions " +
"from documents with source citations, hybrid retrieval, " +
"and evidence-grounded responses.",
problem:
"Searching large collections of company documents manually " +
"is time-consuming, while basic LLM chatbots can generate " +
"answers without reliable supporting evidence.",
approach:
"LangChain + LangGraph orchestration + hybrid BM25 and " +
"vector retrieval + reranking + corrective retrieval " +
"fallbacks + source citations + LangSmith evaluation " +
"and observability + FastAPI backend and Streamlit UI.",
stack: [
"Python",
"LangChain",
"LangGraph",
"FastAPI",
"ChromaDB",
"BM25",
"Vector Search",
"LangSmith",
"Streamlit"
],
github: "https://github.com/foram07/enterprise-knowledge-intelligence",
demo:   null,
},
{
  id:            9,
  title:         "Autonomous Business Research & Decision Agent",
  category:      "genai",
  categoryLabel: "Generative AI",
  badgeVariant:  "amber",
  color:         "#FBBF24",
  featured:      true,
  description:
    "Multi-agent research system that investigates complex " +
    "business questions, verifies evidence, compares findings, " +
    "and generates structured decision reports.",
  problem:
    "Business research often requires collecting information " +
    "from multiple sources, checking conflicting claims, " +
    "and synthesizing evidence into actionable reports.",
  approach:
    "LangGraph stateful workflows + specialized researcher, " +
    "analyst, and fact-checker agents + web search tools + " +
    "source verification + contradiction detection + human " +
    "approval checkpoints + LangSmith tracing and evaluation.",
  stack: [
    "Python",
    "LangGraph",
    "LangChain",
    "LLM API",
    "Web Search API",
    "Pydantic",
    "FastAPI",
    "LangSmith",
    "Streamlit"
  ],
  github: "https://github.com/foram07/autonomous-business-research-agent",
  demo:   null,
},
{
  id:            10,
  title:         "Fine-Tuned Customer Feedback Intelligence",
  category:      "nlp",
  categoryLabel: "Natural Language Processing",
  badgeVariant:  "blue",
  color:         "#60A5FA",
  featured:      true,
  description:
    "Transformer-based NLP system that classifies customer " +
    "feedback by sentiment, issue category, urgency, and " +
    "potential support escalation requirements.",
  problem:
    "Organizations receive large volumes of unstructured " +
    "customer feedback that must be categorized accurately " +
    "to identify recurring issues and prioritize responses.",
  approach:
    "Hugging Face Transformers + DistilBERT fine-tuning + " +
    "dataset preprocessing and class balancing + baseline " +
    "comparison + macro-F1 and per-class evaluation + " +
    "confusion matrix analysis + FastAPI inference service " +
    "and Streamlit analytics dashboard.",
  stack: [
    "Python",
    "Hugging Face Transformers",
    "PyTorch",
    "Hugging Face Datasets",
    "Scikit-learn",
    "Pandas",
    "FastAPI",
    "Streamlit"
  ],
  github: "https://github.com/foram07/customer-feedback-intelligence",
  demo:   null,
},
{
  id:            11,
  title:         "AI Customer Support & Ticket Resolution Copilot",
  category:      "genai",
  categoryLabel: "Generative AI",
  badgeVariant:  "amber",
  color:         "#FBBF24",
  featured:      false,
  description:
    "AI-powered support copilot that retrieves product " +
    "knowledge, classifies customer requests, drafts grounded " +
    "responses, and escalates complex cases to human agents.",
  problem:
    "Support teams spend significant time answering repetitive " +
    "questions, categorizing tickets, and identifying cases " +
    "that require specialized human intervention.",
  approach:
    "LangGraph conditional workflows + RAG knowledge base + " +
    "intent and sentiment classification + tool-enabled ticket " +
    "lookup + confidence-based escalation + human approval " +
    "before sensitive actions + FastAPI and LangSmith monitoring.",
  stack: [
    "Python",
    "LangGraph",
    "LangChain",
    "FAISS",
    "Hugging Face Transformers",
    "FastAPI",
    "Pydantic",
    "LangSmith",
    "Streamlit"
  ],
  github: "https://github.com/foram07/ai-customer-support-copilot",
  demo:   null,
},
{
  id:            12,
  title:         "Multimodal Document Intelligence Assistant",
  category:      "genai",
  categoryLabel: "Generative AI",
  badgeVariant:  "amber",
  color:         "#FBBF24",
  featured:      false,
  description:
    "Multimodal AI assistant that understands complex PDFs, " +
    "scanned documents, tables, charts, and embedded images " +
    "to answer questions with page-level evidence.",
  problem:
    "Traditional document chat systems struggle with scanned " +
    "pages, visual information, complex tables, and charts " +
    "that cannot be understood through plain-text extraction alone.",
  approach:
    "PDF parsing + OCR + layout-aware extraction + multimodal " +
    "LLM or vision model + text and image retrieval + " +
    "vector search + page-level evidence citations + " +
    "comparison against a text-only RAG baseline.",
  stack: [
    "Python",
    "LangChain",
    "Multimodal LLM",
    "Vision Models",
    "OCR",
    "PyMuPDF",
    "Vector Database",
    "FastAPI",
    "Streamlit"
  ],
  github: "https://github.com/foram07/multimodal-document-intelligence",
  demo:   null,
},

];

// ── Filter buttons shown above the project grid ────────────
/**
 * @typedef {{ label: string, value: string }} ProjectFilter
 *
 * `value` must be either "all" or match a `category` field
 * in one of the PROJECTS objects above.
 */

/** @type {ProjectFilter[]} */
const PROJECT_FILTERS = [
  { label: "All Projects",    value: "all"   },
  { label: "NLP / LLMs",     value: "nlp"   },
  { label: "Computer Vision", value: "cv"    },
  { label: "Generative AI",   value: "genai" },
  { label: "Data Science",    value: "ds"    },
];
