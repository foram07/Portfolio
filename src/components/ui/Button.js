// ============================================================
// BUTTON COMPONENT  —  src/components/ui/Button.js
// Usage: Button({ label, href, variant, size, icon, download })
// ============================================================

function Button({
  label    = "Click",
  href     = "#",
  variant  = "primary",   // primary | outline | ghost
  size     = "",          // "" | "sm" | "lg"
  icon     = "",          // optional SVG string
  download = false,
  fullWidth = false,
} = {}) {
  const classes = [
    "btn",
    `btn--${variant}`,
    size      ? `btn--${size}`  : "",
    fullWidth ? "btn--full"    : "",
  ].filter(Boolean).join(" ");

  const dlAttr = download ? "download" : "";

  return `
    <a href="${href}" class="${classes}" ${dlAttr}>
      ${icon ? icon : ""}
      ${label}
    </a>`;
}

// Shared SVG icons used by buttons
const ICON_DOWNLOAD = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>`;
const ICON_ARROW_R  = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true"><path d="M9 18l6-6-6-6"/></svg>`;
const ICON_SEND     = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>`;
const ICON_EYE      = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>`;