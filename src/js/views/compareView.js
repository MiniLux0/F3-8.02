// src/js/views/compareView.js
import PORTAL_DATA from '../data.js';
import { state } from '../state.js';
import { dom } from '../utils/dom.js';
import { triggerMathJax } from '../utils/mathjax.js';

export function renderCompareView() {
  const modules = PORTAL_DATA.MALLA_MODULES;
  const activeMod = modules.find(m => m.id === state.selectedEvalId) || modules[0];

  const stepperHtml = `
    <div class="stepper-nav" role="tablist">
      ${modules.map(m => `
        <button class="stepper-btn ${m.id === activeMod.id ? 'active' : ''}" data-evalid="${m.id}" role="tab" aria-selected="${m.id === activeMod.id}">
          ${m.code} · ${m.week}
        </button>
      `).join('')}
    </div>
  `;

  const bentoHtml = `
    <div class="comparison-bento">
      <div class="comparison-top">
        <div>
          <span class="comparison-week-tag">${activeMod.week}</span>
          <h3 class="comparison-eval-title" style="margin-top:8px;">${activeMod.title}</h3>
          <p style="color:var(--text-secondary);margin-top:6px;max-width:800px;">${activeMod.desc}</p>
        </div>
      </div>

      <div class="comparison-formulas-bar">
        ${activeMod.formulas.map(f => `
          <div class="formula-item">\\(${f}\\)</div>
        `).join('')}
      </div>

      <div class="comparison-columns">
        <!-- Columna UNI -->
        <div class="comp-col uni">
          <div class="comp-col-header">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
              <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
            </svg>
            <span>🇵🇪 Material Oficial UNI (CF2B1)</span>
          </div>
          <div class="comp-resource-list">
            ${activeMod.uniItems.map(item => `
              <a href="${item.href}" target="_blank" rel="noopener noreferrer" class="comp-resource-item">
                <span>${item.title}</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </a>
            `).join('')}
          </div>
        </div>

        <!-- Columna MIT -->
        <div class="comp-col mit">
          <div class="comp-col-header">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="2" y1="12" x2="22" y2="12"></line>
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
            </svg>
            <span>🇺🇸 Equivalente MIT (8.02 OCW)</span>
          </div>
          <div class="comp-resource-list">
            ${activeMod.mitItems.map(item => `
              <a href="${item.href}" target="_blank" rel="noopener noreferrer" class="comp-resource-item">
                <span>${item.title}</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </a>
            `).join('')}
          </div>
        </div>
      </div>
    </div>
  `;

  const tableHtml = `
    <div class="matrix-table-wrap">
      <table class="matrix-table">
        <thead>
          <tr>
            <th>Eval & Semana</th>
            <th>Tema Central</th>
            <th>Material Oficial UNI</th>
            <th>Equivalente MIT 8.02</th>
          </tr>
        </thead>
        <tbody>
          ${modules.map(m => `
            <tr>
              <td><strong>${m.code}</strong><br><span style="color:var(--text-muted);font-size:0.78rem;">${m.week}</span></td>
              <td><strong>${m.title}</strong><br><span style="color:var(--text-secondary);font-size:0.8rem;">${m.desc}</span></td>
              <td>
                <ul style="list-style:none;padding:0;margin:0;display:flex;flex-direction:column;gap:4px;">
                  ${m.uniItems.map(u => `<li><a href="${u.href}" target="_blank" style="color:var(--accent-amber);font-size:0.82rem;">↗ ${u.title}</a></li>`).join('')}
                </ul>
              </td>
              <td>
                <ul style="list-style:none;padding:0;margin:0;display:flex;flex-direction:column;gap:4px;">
                  ${m.mitItems.map(mt => `<li><a href="${mt.href}" target="_blank" style="color:var(--accent-cyan);font-size:0.82rem;">↗ ${mt.title}</a></li>`).join('')}
                </ul>
              </td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>
  `;

  dom.viewCompare.innerHTML = `
    <div class="malla-container">
      <div class="malla-header-bar">
        <div class="malla-header-info">
          <h2>Malla Curricular Paralela: UNI CF2B1 ↔ MIT 8.02</h2>
          <p>Mapeo temático exacto entre evaluaciones peruanas y capítulos del MIT OpenCourseWare.</p>
        </div>
        <div class="tabs-group">
          <button class="tab-btn ${state.compareSubView === 'bento' ? 'active' : ''}" data-subview="bento">Bento Roadmap</button>
          <button class="tab-btn ${state.compareSubView === 'table' ? 'active' : ''}" data-subview="table">Matriz Compacta</button>
        </div>
      </div>

      ${state.compareSubView === 'bento' ? stepperHtml : ''}
      ${state.compareSubView === 'bento' ? bentoHtml : tableHtml}
    </div>
  `;

  // Event listeners para stepper y subviews
  dom.viewCompare.querySelectorAll('.stepper-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      state.selectedEvalId = btn.dataset.evalid;
      renderCompareView();
    });
  });

  dom.viewCompare.querySelectorAll('[data-subview]').forEach(btn => {
    btn.addEventListener('click', () => {
      state.compareSubView = btn.dataset.subview;
      renderCompareView();
    });
  });

  triggerMathJax();
}
