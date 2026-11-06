// ============================================================
// ABOUT SECTION  —  src/sections/About.js
// No timeline. No dates. Story told through ideas, not periods.
// ============================================================

function About() {

  // Core narrative paragraphs — story without dates
  const story = [
    "I started my career building Android apps — shipping production-grade mobile products across industries: streaming, supply chain, IoT, and fintech. That work taught me how real software behaves under pressure: real users, real constraints, real consequences when things break.",
    "That foundation is what makes my move into AI different. I'm not approaching Generative AI as an outsider learning new syntax — I'm approaching it as an engineer who already knows what it takes to deploy something that people actually rely on.",
    "Through the Professional Certificate in Generative AI & Machine Learning from E&ICT Academy, IIT Kanpur, and deep self-directed work, I've built LLM-powered applications, RAG pipelines, and AI summarisation tools from scratch. My focus is the intersection where rigorous engineering meets intelligent systems.",
  ];

  // Four sharp value propositions
  const strengths = [
    {
      icon:  "◈",
      title: "Engineer First, AI Second",
      body:  "Five years of shipping mobile products means I think in systems, not experiments. Models I build are designed to be deployed, monitored, and maintained.",
    },
    {
      icon:  "◈",
      title: "LLMs & Generative AI",
      body:  "Prompt engineering, RAG pipelines, transformers, tokenisation, and text summarisation — built hands-on, not just studied from slides.",
    },
    {
      icon:  "◈",
      title: "Mobile × AI Intersection",
      body:  "On-device TFLite and ONNX model deployment inside Android apps. A combination most AI engineers don't have and most Android engineers haven't explored.",
    },
    {
      icon:  "◈",
      title: "Full-Stack Delivery",
      body:  "Kotlin and Python. Jetpack Compose and Streamlit. REST APIs and LangChain. I close the loop from model to interface independently.",
    },
  ];

  // Credential highlight card content
  const credentials = [
    {
      tag:    "Certificate",
      name:   "Generative AI & Machine Learning",
      issuer: "E&ICT Academy, IIT Kanpur",
    },
    {
      tag:    "Experience",
      name:   "Android Development",
      issuer: "5 Years · Kotlin, Java, Jetpack Compose",
    },
  ];

  // Focus areas — what I'm currently building toward
  const focusAreas = [
    "Large Language Models",
    "RAG & Retrieval Systems",
    "On-device ML",
    "GenAI Application Development",
    "NLP & Text Processing",
    "Android + AI Integration",
  ];

  // Skill groups
  const skillGroups = [
    { label: "AI & ML",    items: ["LLMs", "RAG", "Transformers", "CNNs", "RNNs", "LSTMs", "Prompt Engineering"] },
    { label: "Frameworks", items: ["PyTorch", "TensorFlow", "HuggingFace", "LangChain", "Scikit-learn"] },
    { label: "Android",    items: ["Kotlin", "Java", "Jetpack Compose", "MVVM", "BLE", "REST APIs"] },
    { label: "Tooling",    items: ["Streamlit", "Flask", "OpenAI API", "Python", "Git", "Jupyter"] },
  ];

  const storyParagraphs = story
    .map(p => `<p class="about__story-para">${p}</p>`)
    .join("");

  const strengthItems = strengths.map((s, i) => `
    <div class="about__strength reveal reveal-delay-${i % 2}">
      <span class="about__strength-icon" aria-hidden="true">${s.icon}</span>
      <div>
        <h5 class="about__strength-title">${s.title}</h5>
        <p class="about__strength-body">${s.body}</p>
      </div>
    </div>`).join("");

  const credentialItems = credentials.map(c => `
    <div class="about__credential">
      <span class="about__credential-tag">${c.tag}</span>
      <span class="about__credential-name">${c.name}</span>
      <span class="about__credential-issuer">${c.issuer}</span>
    </div>`).join("");

  const focusItems = focusAreas
    .map(f => `<span class="about__focus-item">${f}</span>`)
    .join("");

  const skillGroupItems = skillGroups.map(g => `
    <div class="about__skill-group">
      <span class="about__skill-group-label">${g.label}</span>
      <span class="about__skill-group-items">
        ${g.items.join('<span class="about__skill-sep" aria-hidden="true">/</span>')}
      </span>
    </div>`).join("");

  return `
    <section id="about" class="section section--alt" aria-labelledby="about-heading">
      <div class="container">

        <!-- ── Top: large heading + story ── -->
        <div class="about__top">

          <div class="about__heading-col reveal">
            <div class="label-mono">About Me</div>
            <h2 id="about-heading" class="about__heading">
              Software Engineer<br>
              turned <span class="text-gradient">AI Builder.</span>
            </h2>
          </div>

          <div class="about__story-col reveal reveal-delay-2">
            ${storyParagraphs}
          </div>

        </div>

        <div class="about__inner-divider" aria-hidden="true"></div>

        <!-- ── Middle: strengths + credential card ── -->
        <div class="about__mid">

          <!-- Left: 4 strength items -->
          <div class="about__strengths">
            <div class="label-mono" style="margin-bottom:24px;">What I Bring</div>
            ${strengthItems}
          </div>

          <!-- Right: credential + focus card -->
          <div class="about__sidebar reveal reveal-delay-2">

            <div class="about__cred-card">
              <div class="about__cred-header">
                <span class="label-mono" style="margin-bottom:0;">Credentials</span>
              </div>
              <div class="about__cred-list">
                ${credentialItems}
              </div>
            </div>

            <div class="about__focus-card">
              <div class="about__focus-header">
                <span class="label-mono" style="margin-bottom:0;">Current Focus</span>
              </div>
              <div class="about__focus-items">
                ${focusItems}
              </div>
            </div>

          </div>

        </div>

        <div class="about__inner-divider" aria-hidden="true"></div>

        <!-- ── Bottom: skill groups ── -->
        <div class="about__skills reveal">
          <div class="label-mono" style="margin-bottom:20px;">Technologies</div>
          <div class="about__skill-groups">
            ${skillGroupItems}
          </div>
        </div>

      </div>
    </section>
    <div class="section-divider" aria-hidden="true"></div>`;
}