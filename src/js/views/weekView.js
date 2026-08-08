// src/js/views/weekView.js
import PORTAL_DATA from '../data.js';
import { state } from '../state.js';
import { dom } from '../utils/dom.js';
import { renderResourceCard, attachBookmarkListeners } from './catalogView.js';
import { triggerMathJax } from '../utils/mathjax.js';

export function renderWeekModeView() {
  const weeks = PORTAL_DATA.WEEKS_DATA;
  const currentWeekMeta = weeks.find(w => w.week === state.selectedWeek) || weeks[0];
  const weekResources = PORTAL_DATA.RESOURCES.filter(r => r.week === state.selectedWeek);

  dom.viewWeek.innerHTML = `
    <div style="display:flex;flex-direction:column;gap:24px;">
      <div class="malla-header-bar">
        <div class="malla-header-info">
          <h2>Modo de Estudio por Semana Académica (1–16)</h2>
          <p>Filtra sincrónicamente todo el material de la semana: Teoría UNI, Diapositivas Oficiales y Capítulos MIT.</p>
        </div>
      </div>

      <!-- Selector de Semanas -->
      <div class="week-selector-track">
        ${weeks.map(w => `
          <button class="week-bubble ${w.week === state.selectedWeek ? 'active' : ''}" data-week="${w.week}">
            <span class="week-bubble-num">${w.week}</span>
            <span class="week-bubble-lbl">Sem</span>
          </button>
        `).join('')}
      </div>

      <!-- Resumen de la Semana Seleccionada -->
      <div style="background:var(--bg-card);border:1px solid var(--border-medium);border-radius:var(--radius-md);padding:24px;">
        <span class="card-badge badge-cyan">Semana ${currentWeekMeta.week}</span>
        <h3 style="font-family:var(--font-display);font-size:1.4rem;margin-top:8px;">${currentWeekMeta.title}</h3>
        <p style="color:var(--text-secondary);font-size:0.88rem;margin-top:4px;">${currentWeekMeta.desc}</p>
      </div>

      <!-- Grid de Recursos de la Semana -->
      <h4 style="text-transform:uppercase;letter-spacing:0.06em;font-size:0.8rem;color:var(--text-muted);">
        Recursos Correspondientes a la Semana ${state.selectedWeek} (${weekResources.length} materiales)
      </h4>

      <div class="resource-grid">
        ${weekResources.length > 0 
          ? weekResources.map(renderResourceCard).join('') 
          : '<div class="empty-state" style="grid-column:1/-1;"><p>No hay recursos específicos registrados para esta semana.</p></div>'
        }
      </div>
    </div>
  `;

  dom.viewWeek.querySelectorAll('.week-bubble').forEach(b => {
    b.addEventListener('click', () => {
      state.selectedWeek = parseInt(b.dataset.week, 10);
      renderWeekModeView();
    });
  });

  attachBookmarkListeners();
  triggerMathJax();
}
