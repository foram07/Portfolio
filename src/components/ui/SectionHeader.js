// ============================================================
// SECTION HEADER COMPONENT  —  src/components/ui/SectionHeader.js
// Usage: SectionHeader({ label, title, subtitle })
// ============================================================

function SectionHeader({ label = "", title = "", subtitle = "" } = {}) {
  return `
    <div class="section-header reveal" style="text-align:center; margin-bottom:64px;">
      ${label   ? `<div class="label-mono">${label}</div>` : ""}
      ${title   ? `<h2>${title}</h2>` : ""}
      ${subtitle ? `<p style="max-width:560px; margin:12px auto 0;">${subtitle}</p>` : ""}
    </div>`;
}