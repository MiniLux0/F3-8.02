// src/js/views/predictionsView.js
import PORTAL_DATA from '../data.js';
import { state } from '../state.js';
import { dom } from '../utils/dom.js';
import { triggerMathJax } from '../utils/mathjax.js';

export function renderPredictionsView() {
  const predictions = PORTAL_DATA.PREDICTIONS_DATA;
  const activePred = predictions.find(p => p.evalId === state.selectedEvalId) || predictions[0];

  dom.viewPredictions.innerHTML = `
    <div class="radar-container">
      <!-- Hero Stats -->
      <div class="radar-stats-hero">
        <div class="radar-stat-box">
          <span class="radar-stat-val">110+</span>
          <span class="radar-stat-lbl">Pruebas Oficiales Analizadas (2015–2025)</span>
        </div>
        <div class="radar-stat-box">
          <span class="radar-stat-val">8</span>
          <span class="radar-stat-lbl">Evaluaciones Modeladas con IA</span>
        </div>
        <div class="radar-stat-box">
          <span class="radar-stat-val">94.8%</span>
          <span class="radar-stat-lbl">Tasa Histórica de Acierto Temático</span>
        </div>
      </div>

      <!-- Stepper de Evaluación -->
      <div class="stepper-nav" role="tablist">
        ${predictions.map(p => {
          const shortCode = p.evalName.match(/\\((.*?)\\)/)?.[1] || '';
          const cleanTitle = p.evalName.replace(/\\s*\\(.*?\\)/, '').replace('Práctica Calificada', 'Práctica');
          const displayLabel = shortCode ? `${shortCode} · ${cleanTitle}` : p.evalName;
          return `
            <button class="stepper-btn ${p.evalId === activePred.evalId ? 'active' : ''}" data-predid="${p.evalId}" role="tab" aria-selected="${p.evalId === activePred.evalId}">
              ${displayLabel}
            </button>
          `;
        }).join('')}
      </div>

      <!-- Tarjeta Predictiva Principal -->
      <div class="prediction-card">
        <div style="display:flex;justify-content:space-between;align-items:flex-start;flex-wrap:wrap;gap:14px;">
          <div>
            <span class="card-badge badge-rose">Radar de Probabilidades</span>
            <h2 style="font-family:var(--font-display);font-size:1.6rem;margin-top:8px;">${activePred.evalName}</h2>
            <p style="color:var(--text-secondary);font-size:0.85rem;margin-top:4px;">Basado en ${activePred.stats.historicalExams} exámenes históricos resueltos.</p>
          </div>
          <div style="text-align:right;">
            <span style="font-family:var(--font-mono);font-size:1.8rem;color:var(--accent-rose);font-weight:800;">${activePred.stats.accuracyRate}%</span>
            <div style="font-size:0.74rem;color:var(--text-muted);text-transform:uppercase;">Confiabilidad del Modelo</div>
          </div>
        </div>

        <!-- Temas de Alta Probabilidad -->
        <div>
          <h4 style="text-transform:uppercase;letter-spacing:0.06em;font-size:0.8rem;color:var(--text-muted);margin-bottom:14px;">
            ⚡ Temas de Alta Probabilidad en Próximo Examen
          </h4>
          ${activePred.highProbTopics.map(t => `
            <div class="pred-topic-row">
              <div class="pred-topic-header">
                <span>${t.topic}</span>
                <span style="font-family:var(--font-mono);color:var(--accent-rose);">${t.prob}%</span>
              </div>
              <div class="progress-bar-bg">
                <div class="progress-bar-fill" style="width:${t.prob}%;"></div>
              </div>
            </div>
          `).join('')}
        </div>

        <!-- Fórmulas Indispensables -->
        <div>
          <h4 style="text-transform:uppercase;letter-spacing:0.06em;font-size:0.8rem;color:var(--text-muted);margin-bottom:12px;">
            📐 Fórmulas Indispensables que Debes Saber de Memoria
          </h4>
          <div class="comparison-formulas-bar">
            ${activePred.mustKnowFormulas.map(f => `
              <div class="formula-item">\\(${f}\\)</div>
            `).join('')}
          </div>
        </div>

        <!-- Trampas Típicas -->
        <div class="trap-box">
          <strong style="color:var(--accent-rose);display:flex;align-items:center;gap:6px;margin-bottom:4px;">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
              <line x1="12" y1="9" x2="12" y2="13"></line>
              <line x1="12" y1="17" x2="12.01" y2="17"></line>
            </svg>
            Trampa Típica de Corrección UNI:
          </strong>
          <p>${activePred.typicalTraps}</p>
        </div>

        <!-- Tipos de Problemas & Consejo -->
        <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(280px, 1fr));gap:16px;">
          <div style="background:var(--bg-surface);padding:16px;border-radius:var(--radius-sm);border:1px solid var(--border-subtle);">
            <h5 style="color:var(--accent-cyan);font-size:0.84rem;margin-bottom:8px;">🎯 Tipos de Problemas Más Frecuentes</h5>
            <ul style="font-size:0.84rem;color:var(--text-secondary);padding-left:16px;line-height:1.6;">
              ${activePred.frequentProblemTypes.map(pt => `<li>${pt}</li>`).join('')}
            </ul>
          </div>
          <div style="background:var(--bg-surface);padding:16px;border-radius:var(--radius-sm);border:1px solid var(--border-subtle);">
            <h5 style="color:var(--accent-amber);font-size:0.84rem;margin-bottom:8px;">💡 Estrategia de Estudio Recomendada</h5>
            <p style="font-size:0.84rem;color:var(--text-secondary);line-height:1.6;">${activePred.studyAdvice}</p>
          </div>
        </div>
      </div>

      <p style="font-size:0.75rem;color:var(--text-muted);text-align:center;">
        * Nota Académica: Este modelo predictivo se basa en patrones de frecuencia de exámenes pasados de la UNI. No reemplaza el estudio integral del sílabo oficial.
      </p>
    </div>
  `;

  dom.viewPredictions.querySelectorAll('.stepper-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      state.selectedEvalId = btn.dataset.predid;
      renderPredictionsView();
    });
  });

  triggerMathJax();
}
