// ============================================================
// SKILL BAR COMPONENT  —  src/components/ui/SkillBar.js
// Usage: SkillBar({ name: "PyTorch", level: 92 })
// ============================================================

function SkillBar({ name, level }) {
  return `
    <div class="skill-bar">
      <div class="skill-bar__header">
        <span class="skill-bar__name">${name}</span>
        <span class="skill-bar__pct">${level}%</span>
      </div>
      <div class="skill-bar__track">
        <div class="skill-bar__fill" data-level="${level}"></div>
      </div>
    </div>`;
}