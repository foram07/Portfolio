// ============================================================
// FLOAT RESUME BUTTON  —  src/components/layout/FloatResume.js
// ============================================================

function renderFloatResume() {
  const root = document.getElementById("float-resume-root");
  if (!root) return;
  root.innerHTML = `
    <a href="${PERSONAL.resumeUrl}"
       class="btn btn--primary float-resume"
       download
       title="Download Resume"
       aria-label="Download Resume PDF">
      ${ICON_DOWNLOAD} Resume
    </a>`;
}