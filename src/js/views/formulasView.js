// src/js/views/formulasView.js
import PORTAL_DATA from '../data.js';
import { dom } from '../utils/dom.js';
import { triggerMathJax } from '../utils/mathjax.js';

export function renderFormulasView() {
  const bank = PORTAL_DATA.FORMULAS_BANK;

  dom.viewFormulas.innerHTML = `
    <div style="display:flex;flex-direction:column;gap:24px;">
      <div class="formulas-view-header">
        <div>
          <h2 style="font-family:var(--font-display);font-size:1.4rem;">Formulario Maestro de Física III (Electromagnetismo)</h2>
          <p style="color:var(--text-secondary);font-size:0.85rem;">Síntesis de fórmulas clave organizadas por temática. Listo para repasar e imprimir antes de tus evaluaciones.</p>
        </div>
        <button class="print-btn" id="btn-print-formulas">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="6 9 6 2 18 2 18 9"></polyline>
            <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path>
            <rect x="6" y="14" width="12" height="8"></rect>
          </svg>
          <span>Imprimir Formulario (PDF)</span>
        </button>
      </div>

      <div class="formulas-content">
        ${bank.map(topicGroup => `
          <div class="formula-topic-card">
            <h3 style="font-family:var(--font-heading);font-size:1.15rem;color:var(--text-highlight);">${topicGroup.topic}</h3>
            <div class="formula-grid-dense">
              ${topicGroup.formulas.map(f => `
                <div class="dense-formula-item">
                  <span class="formula-label">${f.label}</span>
                  <div style="font-size:1rem;color:#f8fafc;padding:4px 0;">\\(${f.tex}\\)</div>
                </div>
              `).join('')}
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;

  const printBtn = dom.viewFormulas.querySelector('#btn-print-formulas');
  if (printBtn) {
    printBtn.addEventListener('click', () => {
      window.print();
    });
  }

  triggerMathJax();
}
