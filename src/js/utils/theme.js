// ============================================================
// THEME  —  src/js/utils/theme.js
// ============================================================

const THEME_KEY     = "portfolio-theme";
const DEFAULT_THEME = "dark";

function getStoredTheme() {
  try {
    return localStorage.getItem(THEME_KEY) || DEFAULT_THEME;
  } catch {
    return DEFAULT_THEME;
  }
}

function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  try { localStorage.setItem(THEME_KEY, theme); } catch {}
}

function toggleTheme() {
  const current = document.documentElement.getAttribute("data-theme");
  const next    = current === "dark" ? "light" : "dark";
  applyTheme(next);
  return next;
}

function getThemeIcon(theme) {
  return theme === "dark" ? "☀️" : "🌙";
}

// ── Apply immediately on script parse (before body renders) ──
// This runs synchronously before any paint, eliminating the
// white flash that happens when applyTheme() is called later.
applyTheme(getStoredTheme());