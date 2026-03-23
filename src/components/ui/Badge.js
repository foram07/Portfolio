// ============================================================
// BADGE COMPONENT  —  src/components/ui/Badge.js
// Usage: Badge({ label: "NLP", variant: "cyan" })
// ============================================================

function Badge({ label, variant = "cyan" }) {
  return `<span class="badge badge--${variant}">${label}</span>`;
}