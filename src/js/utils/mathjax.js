// src/js/utils/mathjax.js
export function triggerMathJax() {
  if (window.MathJax && window.MathJax.typesetPromise) {
    window.MathJax.typesetPromise().catch(function(err) {
      console.warn('MathJax typeset error:', err.message);
    });
  }
}
