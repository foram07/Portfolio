// ============================================================
// ANIMATION UTILITIES  —  src/js/utils/animations.js
// ============================================================

/**
 * Animate a numeric value from 0 to target over ~1.2s.
 * @param {HTMLElement} el      - element whose textContent to update
 * @param {number}      target  - final numeric value
 * @param {string}      suffix  - string appended after the number
 */
function animateCounter(el, target, suffix = "") {
  const duration = 1200;
  const start    = performance.now();
  const isFloat  = !Number.isInteger(target);

  function step(now) {
    const progress = Math.min((now - start) / duration, 1);
    const eased    = 1 - Math.pow(1 - progress, 3); // ease-out cubic
    const value    = eased * target;
    el.textContent = (isFloat ? value.toFixed(1) : Math.round(value)) + suffix;
    if (progress < 1) requestAnimationFrame(step);
  }

  requestAnimationFrame(step);
}

/**
 * Observe elements and fire a callback once when they enter the viewport.
 * @param {string|NodeList} selector
 * @param {Function}        callback  - receives the entry element
 * @param {object}          options   - IntersectionObserver options
 */
function onEnterViewport(selector, callback, options = {}) {
  const elements = typeof selector === "string"
    ? document.querySelectorAll(selector)
    : selector;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        callback(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, ...options });

  elements.forEach(el => observer.observe(el));
  return observer;
}