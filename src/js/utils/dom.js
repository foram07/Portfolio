// ============================================================
// DOM UTILITIES  —  src/js/utils/dom.js
// Tiny helpers to reduce boilerplate across all modules.
// ============================================================

const $ = (selector, context = document) => context.querySelector(selector);
const $$ = (selector, context = document) => [...context.querySelectorAll(selector)];

/**
 * Mount an HTML string into a root element.
 * @param {string} rootId  - id of the container element
 * @param {string} html    - HTML string to inject
 */
function mount(rootId, html) {
  const root = document.getElementById(rootId);
  if (root) root.innerHTML = html;
}

/**
 * Create a DOM element with optional attrs and inner HTML.
 */
function createElement(tag, attrs = {}, innerHTML = "") {
  const el = document.createElement(tag);
  Object.entries(attrs).forEach(([k, v]) => el.setAttribute(k, v));
  el.innerHTML = innerHTML;
  return el;
}

/**
 * Add multiple event listeners at once.
 * @param {NodeList|Array} elements
 * @param {string}         event
 * @param {Function}       handler
 */
function addListeners(elements, event, handler) {
  elements.forEach(el => el.addEventListener(event, handler));
}