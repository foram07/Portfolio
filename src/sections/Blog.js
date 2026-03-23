// ============================================================
// BLOG SECTION  —  src/sections/Blog.js
//
// Depends on:
//   data/blog.js  → BLOG_POSTS
//   components/ui/Badge.js → Badge()
//   components/ui/SectionHeader.js → SectionHeader()
//   styles/sections/blog.css
// ============================================================

/**
 * Renders a single blog post card.
 *
 * @param {{ title:string, excerpt:string, date:string,
 *           readTime:string, tags:Array<{label:string,variant:string}>,
 *           url:string }} post
 * @returns {string} HTML string
 */
function BlogCard(post) {
  const tags = post.tags
    .map(t => Badge({ label: t.label, variant: t.variant }))
    .join("");

  return `
    <article class="blog-card reveal" aria-label="${post.title}">

      <!-- Tag pills -->
      <div class="blog-card__tags" role="list" aria-label="Post tags">
        ${tags}
      </div>

      <!-- Title -->
      <h3 class="blog-card__title">
        <a href="${post.url}"
           target="_blank"
           rel="noopener noreferrer"
           style="color:inherit; text-decoration:none;"
           aria-label="Read: ${post.title}">
          ${post.title}
        </a>
      </h3>

      <!-- Excerpt -->
      <p class="blog-card__excerpt">${post.excerpt}</p>

      <!-- Footer: date · read time · CTA -->
      <footer class="blog-card__meta">
        <span>
          <time datetime="${post.date}">${post.date}</time>
          &nbsp;·&nbsp;${post.readTime}
        </span>
        <a href="${post.url}"
           class="blog-card__read-more"
           target="_blank"
           rel="noopener noreferrer"
           aria-label="Read full article: ${post.title}">
          Read More →
        </a>
      </footer>

    </article>`;
}

/**
 * Renders the full Blog section:
 *   – 3-column card grid (2-col on tablet, 1-col on mobile)
 *
 * @returns {string} HTML string
 */
function Blog() {
  const cards = BLOG_POSTS
    .map(post => BlogCard(post))
    .join("");

  return `
    <section id="blog" class="section" aria-labelledby="blog-heading">
      <div class="container">

        ${SectionHeader({
          label:     "Writing",
          title:     `Blog &amp; <span class="text-gradient">Insights</span>`,
          subtitle:  "Sharing what I learn building AI systems — from research to production.",
          headingId: "blog-heading",
        })}

        <div class="blog__grid" role="list" aria-label="Blog posts">
          ${cards}
        </div>

      </div>
    </section>
    <div class="section-divider" aria-hidden="true"></div>`;
}
