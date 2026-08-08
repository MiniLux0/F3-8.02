const fs = require('fs');
const path = require('path');

const appJsPath = path.join(__dirname, '../src/js/app.js');
const predictionsPath = path.join(__dirname, '../src/data/predictions.js');

// 1. Read predictions data
const predictionsJs = fs.readFileSync(predictionsPath, 'utf8');

// 2. Read app.js
let appJs = fs.readFileSync(appJsPath, 'utf8');

// Replace or insert EXAM_PREDICTIONS definition
const rawPreds = predictionsJs.replace('export const EXAM_PREDICTIONS =', 'const EXAM_PREDICTIONS =');

// Check if EXAM_PREDICTIONS is already in appJs
if (!appJs.includes('const EXAM_PREDICTIONS =')) {
  // Insert before const state = {
  appJs = appJs.replace('  // ── 3. ESTADO DE LA APLICACIÓN ──', `${rawPreds}\n\n  // ── 3. ESTADO DE LA APLICACIÓN ──`);
}

// Update state to include activePrediction and examPredictions
if (!appJs.includes('examPredictions: EXAM_PREDICTIONS')) {
  appJs = appJs.replace(
    "compareModules: COMPARISON_MODULES,\n  };",
    "compareModules: COMPARISON_MODULES,\n    examPredictions: EXAM_PREDICTIONS,\n    activePrediction: 'all',\n  };"
  );
}

// Update dom cache to include prediction elements
if (!appJs.includes('tabPredictions: document.getElementById')) {
  appJs = appJs.replace(
    "tableBody: document.getElementById('table-body'),\n  };",
    `tableBody: document.getElementById('table-body'),
    tabPredictions: document.getElementById('tab-predictions'),
    predictionsSection: document.getElementById('predictions-section'),
    predStepperTrack: document.getElementById('pred-stepper-track'),
    predictionsContent: document.getElementById('predictions-content'),
  };`
  );
}

// Update setView function to support 'predictions' view
const oldSetViewRegex = /function setView\(viewName\) \{[\s\S]*?renderComparisonModules\(state\.selectedEval\);\s*renderComparisonTable\(\);\s*triggerMathJaxTypeset\(\);\s*\}\s*\}/;

const newSetViewCode = `function setView(viewName) {
    state.currentView = viewName;

    if (viewName === 'catalog') {
      if (dom.tabCatalog) {
        dom.tabCatalog.classList.add('active');
        dom.tabCatalog.setAttribute('aria-selected', 'true');
      }
      if (dom.tabCompare) {
        dom.tabCompare.classList.remove('active');
        dom.tabCompare.setAttribute('aria-selected', 'false');
      }
      if (dom.tabPredictions) {
        dom.tabPredictions.classList.remove('active');
        dom.tabPredictions.setAttribute('aria-selected', 'false');
      }

      if (dom.filterPills) dom.filterPills.style.display = 'flex';
      if (dom.resourcesSection) dom.resourcesSection.style.display = 'block';
      if (dom.compareSection) dom.compareSection.style.display = 'none';
      if (dom.predictionsSection) dom.predictionsSection.style.display = 'none';

      if (dom.heroTitle) dom.heroTitle.textContent = 'Electromagnetismo & Óptica';
      if (dom.heroDesc) dom.heroDesc.innerHTML = 'Portal académico integral para el curso <strong>CF2B1 Física III (UNI)</strong> alineado curricularmente al curso <strong>MIT 8.02</strong>. Incluye clases magistrales de teoría, 27 sesiones oficiales, banco de exámenes resueltos (2015–2025), laboratorios UNI & TEAL MIT, y libro de texto completo.';

      applyFilterAndSearch();
    } else if (viewName === 'compare') {
      if (dom.tabCompare) {
        dom.tabCompare.classList.add('active');
        dom.tabCompare.setAttribute('aria-selected', 'true');
      }
      if (dom.tabCatalog) {
        dom.tabCatalog.classList.remove('active');
        dom.tabCatalog.setAttribute('aria-selected', 'false');
      }
      if (dom.tabPredictions) {
        dom.tabPredictions.classList.remove('active');
        dom.tabPredictions.setAttribute('aria-selected', 'false');
      }

      if (dom.filterPills) dom.filterPills.style.display = 'none';
      if (dom.resourcesSection) dom.resourcesSection.style.display = 'none';
      if (dom.compareSection) dom.compareSection.style.display = 'flex';
      if (dom.predictionsSection) dom.predictionsSection.style.display = 'none';

      if (dom.heroTitle) dom.heroTitle.textContent = 'Malla Curricular UNI ↔ MIT';
      if (dom.heroDesc) dom.heroDesc.innerHTML = 'Matriz interactiva de equivalencia académica semana a semana: Mapea cada una de las <strong>8 evaluaciones oficiales de la UNI (PC1 a Final)</strong> con los <strong>14 capítulos de teoría, guías de problem solving y laboratorios de MIT 8.02 TEAL</strong>.';

      document.querySelectorAll('.sidebar-nav .nav-item').forEach(el => el.classList.remove('active'));
      const compNav = document.getElementById('nav-compare');
      if (compNav) compNav.classList.add('active');

      renderComparisonStepper();
      renderComparisonModules(state.selectedEval);
      renderComparisonTable();
      triggerMathJaxTypeset();
    } else if (viewName === 'predictions') {
      if (dom.tabPredictions) {
        dom.tabPredictions.classList.add('active');
        dom.tabPredictions.setAttribute('aria-selected', 'true');
      }
      if (dom.tabCatalog) {
        dom.tabCatalog.classList.remove('active');
        dom.tabCatalog.setAttribute('aria-selected', 'false');
      }
      if (dom.tabCompare) {
        dom.tabCompare.classList.remove('active');
        dom.tabCompare.setAttribute('aria-selected', 'false');
      }

      if (dom.filterPills) dom.filterPills.style.display = 'none';
      if (dom.resourcesSection) dom.resourcesSection.style.display = 'none';
      if (dom.compareSection) dom.compareSection.style.display = 'none';
      if (dom.predictionsSection) dom.predictionsSection.style.display = 'flex';

      if (dom.heroTitle) dom.heroTitle.textContent = 'Radar Predictivo de Exámenes UNI';
      if (dom.heroDesc) dom.heroDesc.innerHTML = 'Análisis estadístico basado en <strong>110+ exámenes y solucionarios históricos (2015–2025)</strong>: Frecuencia de temas por evaluación, top de preguntas predichas con mayor probabilidad ($\\\\ge 85\\\\%$), fórmulas obligatorias y trampas típicas de corrección.';

      document.querySelectorAll('.sidebar-nav .nav-item').forEach(el => el.classList.remove('active'));
      const predNav = document.getElementById('nav-predictions');
      if (predNav) predNav.classList.add('active');

      renderPredictionsStepper();
      renderPredictionsView(state.activePrediction);
      triggerMathJaxTypeset();
    }
  }`;

if (oldSetViewRegex.test(appJs)) {
  appJs = appJs.replace(oldSetViewRegex, newSetViewCode);
}

// Add renderPredictionsStepper and renderPredictionsView
const predictionRenderFunctions = `
  // ── 7B. RENDERIZADO DEL RADAR PREDICTIVO Y ESTADÍSTICAS ──
  function renderPredictionsStepper() {
    if (!dom.predStepperTrack) return;

    const allBtn = \`
      <button class="pred-stepper-btn \${state.activePrediction === 'all' ? 'active' : ''}" data-pred-id="all">
        <span>⚡ Todas las Evaluaciones</span>
        <span class="pred-tag">9 Pruebas</span>
      </button>
    \`;

    const items = state.examPredictions.map(p => \`
      <button class="pred-stepper-btn \${state.activePrediction === p.id ? 'active' : ''}" data-pred-id="\${p.id}">
        <span>\${p.shortName}</span>
        <span class="pred-tag">\${p.evalWeek}</span>
      </button>
    \`).join('');

    dom.predStepperTrack.innerHTML = allBtn + items;

    dom.predStepperTrack.querySelectorAll('.pred-stepper-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const predId = btn.dataset.predId;
        state.activePrediction = predId;
        renderPredictionsStepper();
        renderPredictionsView(predId);
      });
    });
  }

  function renderPredictionsView(selectedId = 'all') {
    if (!dom.predictionsContent) return;

    const list = selectedId === 'all'
      ? state.examPredictions
      : state.examPredictions.filter(p => p.id === selectedId);

    dom.predictionsContent.innerHTML = list.map(p => \`
      <article class="pred-exam-card" id="pred-\${p.id}" aria-label="\${p.name}">
        <!-- Top Metadata & Overview -->
        <div class="pred-exam-top">
          <div>
            <div class="pred-exam-meta">
              <span class="pred-exam-badge">\${p.shortName}</span>
              <span class="pred-exam-week">\${p.evalWeek}</span>
              <span class="tag tag--amber">Histórico Oficial UNI</span>
            </div>
            <h4 class="pred-exam-title">\${p.name}</h4>
            <p class="pred-exam-desc">\${p.summary}</p>
          </div>

          <div class="pred-exam-metrics">
            <div class="pred-metric-pill">
              <span class="v">\${p.examsCount}</span>
              <span class="l">Exámenes Analizados</span>
            </div>
            <div class="pred-metric-pill">
              <span class="v">\${p.difficulty}</span>
              <span class="l">Dificultad Histórica</span>
            </div>
            <div class="pred-metric-pill">
              <span class="v">\${p.historicalAverage}</span>
              <span class="l">Promedio Histórico</span>
            </div>
          </div>
        </div>

        <!-- 2-Column Bento Grid: Stats vs Predicted Questions -->
        <div class="pred-bento-grid">
          <!-- Left Column: Topic Frequencies, Golden Formulas & Traps -->
          <div style="display: flex; flex-direction: column; gap: 18px;">
            <!-- Topic Frequency Distribution -->
            <div class="pred-box">
              <div class="pred-box-header">
                <div class="icon-title">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
                  <span>Frecuencias Temáticas en Exámenes (2015–2025)</span>
                </div>
              </div>
              <div class="freq-list">
                \${p.topicsDistribution.map(t => \`
                  <div class="freq-item">
                    <div class="freq-info">
                      <strong>\${t.topic}</strong>
                      <span class="freq-pct">\${t.freq}%</span>
                    </div>
                    <div class="freq-bar-bg">
                      <div class="freq-bar-fill \${t.level}" style="width: \${t.freq}%"></div>
                    </div>
                  </div>
                \`).join('')}
              </div>
            </div>

            <!-- Golden Formulas Required -->
            <div class="pred-box">
              <div class="pred-box-header">
                <div class="icon-title">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 016.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"/></svg>
                  <span>Fórmulas Indispensables de Corrección UNI</span>
                </div>
              </div>
              <div class="golden-formulas-wrap">
                \${p.goldenFormulas.map(f => \`
                  <div class="golden-formula-item">$$\${f}$$</div>
                \`).join('')}
              </div>
            </div>

            <!-- Professor Traps & Common Grading Deductions -->
            <div class="pred-box traps-box">
              <div class="pred-box-header" style="color: var(--c-rose-400);">
                <div class="icon-title">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
                  <span>Trampas Frecuentes & Puntos de Descuento Típicos</span>
                </div>
              </div>
              <div class="traps-list">
                \${p.professorTraps.map(trap => \`
                  <div class="trap-item">
                    <span class="trap-icon">⚠</span>
                    <span>\${trap}</span>
                  </div>
                \`).join('')}
              </div>
            </div>
          </div>

          <!-- Right Column: Top Predicted Exam Questions -->
          <div style="display: flex; flex-direction: column; gap: 18px;">
            <div class="pred-box">
              <div class="pred-box-header">
                <div class="icon-title">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                  <span>Top Preguntas Predichas para la Evaluación</span>
                </div>
              </div>

              <div class="predicted-questions-list">
                \${p.predictedQuestions.map(q => \`
                  <div class="q-pred-card">
                    <div class="q-pred-header">
                      <span class="q-pred-rank">#\${q.rank} Modelo Predicho</span>
                      <span class="q-pred-prob \${q.probType}">Probabilidad: \${q.probability}</span>
                    </div>

                    <h5 class="q-pred-title">\${q.title}</h5>

                    <div class="q-pred-block">
                      <span class="q-pred-label">Planteamiento Típico del Enunciado:</span>
                      <div>\${q.setup}</div>
                    </div>

                    <div class="q-pred-block strategy">
                      <span class="q-pred-label" style="color: var(--accent-cyan);">Estrategia de Solución Paso a Paso:</span>
                      <div>\${q.strategy}</div>
                    </div>

                    <div class="q-pred-block trap">
                      <span class="q-pred-label" style="color: var(--c-rose-400);">Cuidado con esta trampa:</span>
                      <div>\${q.trap}</div>
                    </div>
                  </div>
                \`).join('')}
              </div>
            </div>

            <!-- Best Exam Solved Links for this Assessment -->
            <div class="pred-recs-box">
              <span class="pred-recs-title">Exámenes Recomendados para Practicar esta Evaluación:</span>
              <div class="pred-recs-grid">
                \${p.bestExamLinks.map(link => \`
                  <a href="\${link.href}" target="_blank" rel="noopener noreferrer" class="pred-rec-btn">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
                    <span>\${link.title}</span>
                  </a>
                \`).join('')}
              </div>
            </div>
          </div>
        </div>
      </article>
    \`).join('');

    triggerMathJaxTypeset();
  }
`;

if (!appJs.includes('function renderPredictionsStepper()')) {
  appJs = appJs.replace(
    '  function triggerMathJaxTypeset() {',
    `${predictionRenderFunctions}\n\n  function triggerMathJaxTypeset() {`
  );
}

// Update event listeners for tabPredictions & sidebar nav items
if (!appJs.includes('dom.tabPredictions.addEventListener')) {
  appJs = appJs.replace(
    "    if (dom.tabCompare) {\n      dom.tabCompare.addEventListener('click', () => setView('compare'));\n    }",
    `    if (dom.tabCompare) {
      dom.tabCompare.addEventListener('click', () => setView('compare'));
    }
    if (dom.tabPredictions) {
      dom.tabPredictions.addEventListener('click', () => setView('predictions'));
    }`
  );
}

if (!appJs.includes("view === 'predictions'")) {
  appJs = appJs.replace(
    "        if (view === 'compare' || filter === 'compare') {\n          setView('compare');\n        } else {",
    `        if (view === 'compare' || filter === 'compare') {
          setView('compare');
        } else if (view === 'predictions' || filter === 'predictions') {
          setView('predictions');
        } else {`
  );
}

// Update triggerMathJaxTypeset to also typeset predictions
appJs = appJs.replace(
  "window.MathJax.typesetPromise([dom.compareSection])",
  "window.MathJax.typesetPromise([dom.compareSection, dom.predictionsSection])"
);

fs.writeFileSync(appJsPath, appJs, 'utf8');
console.log('Successfully updated app.js with predictions logic and data.');
