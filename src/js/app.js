// src/js/app.js
// Controlador Principal de la Aplicación: Renderizado, Filtros, Búsqueda, Vistas y MathJax

(function() {
  'use strict';

  // ── 1. ESTADO GLOBAL DE LA APLICACIÓN ──
  const state = {
    activeView: 'catalog',       // 'catalog' | 'compare' | 'predictions' | 'week' | 'bookmarks' | 'formulas'
    activeCategory: 'all',       // 'all' | 'teoria-uni' | 'sesiones-uni' | 'bonus' | 'examenes' | 'labs-uni' | 'teoria-mit' | 'ps-mit' | 'labs-mit'
    searchQuery: '',
    selectedWeek: 1,
    selectedEvalId: 'eval-pc1',
    compareSubView: 'bento',     // 'bento' | 'table'
    bookmarks: new Set(JSON.parse(localStorage.getItem('portal_fisica_bookmarks') || '[]')),
    mathJaxRendering: false
  };

  // ── 2. ELEMENTOS DEL DOM ──
  const dom = {
    // Topbar & Nav
    searchInput: document.getElementById('search-input'),
    searchClearBtn: document.getElementById('search-clear-btn'),
    mobileMenuBtn: document.getElementById('mobile-menu-btn'),
    sidebar: document.getElementById('sidebar'),
    sidebarBackdrop: document.getElementById('sidebar-backdrop'),
    topbarTotalCount: document.getElementById('topbar-total-count'),
    
    // View Switchers
    viewTabBtns: document.querySelectorAll('.tab-btn[data-view]'),
    sidebarNavItems: document.querySelectorAll('.nav-item[data-cat], .nav-item[data-view]'),
    
    // Content Views Containers
    viewCatalog: document.getElementById('view-catalog'),
    viewCompare: document.getElementById('view-compare'),
    viewPredictions: document.getElementById('view-predictions'),
    viewWeek: document.getElementById('view-week'),
    viewBookmarks: document.getElementById('view-bookmarks'),
    viewFormulas: document.getElementById('view-formulas'),
    
    // Catalog Sub-elements
    heroBanner: document.getElementById('hero-banner'),
    categoryFilterChips: document.getElementById('category-filter-chips'),
    resourceGrid: document.getElementById('resource-grid'),
    
    // Dynamic Stats
    statUniCount: document.getElementById('stat-uni-count'),
    statMitCount: document.getElementById('stat-mit-count'),
    statExamCount: document.getElementById('stat-exam-count')
  };

  // ── 3. UTILIDADES Y FORMATEADORES ──
  function saveBookmarks() {
    localStorage.setItem('portal_fisica_bookmarks', JSON.stringify([...state.bookmarks]));
    updateSidebarCounts();
  }

  function toggleBookmark(id, event) {
    if (event) event.stopPropagation();
    if (state.bookmarks.has(id)) {
      state.bookmarks.delete(id);
    } else {
      state.bookmarks.add(id);
    }
    saveBookmarks();
    
    // Si estamos en la vista de marcadores, re-renderizar
    if (state.activeView === 'bookmarks') {
      renderBookmarksView();
    } else {
      // Actualizar botón visual en el card
      const btn = document.querySelector(`.bookmark-btn[data-id="${id}"]`);
      if (btn) {
        btn.classList.toggle('bookmarked', state.bookmarks.has(id));
        btn.setAttribute('aria-label', state.bookmarks.has(id) ? 'Quitar de favoritos' : 'Guardar en favoritos');
      }
    }
  }

  function getCategoryBadge(category) {
    const map = {
      'teoria-uni': { label: 'Teoría UNI', cls: 'badge-rose' },
      'sesiones-uni': { label: 'Sesión UNI', cls: 'badge-amber' },
      'bonus': { label: 'Bonus Track', cls: 'badge-amber' },
      'labs-uni': { label: 'Lab UNI', cls: 'badge-amber' },
      'examenes': { label: 'Examen UNI', cls: 'badge-amber' },
      'teoria-mit': { label: 'Teoría MIT', cls: 'badge-cyan' },
      'ps-mit': { label: 'Problem Solving MIT', cls: 'badge-violet' },
      'labs-mit': { label: 'Lab TEAL MIT', cls: 'badge-emerald' }
    };
    return map[category] || { label: 'Recurso', cls: 'badge-cyan' };
  }

  function highlightMatch(text, query) {
    if (!query) return text;
    const regex = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
    return text.replace(regex, '<mark style="background:rgba(6,182,212,0.3);color:#fff;border-radius:2px;padding:0 2px;">$1</mark>');
  }

  function triggerMathJax() {
    if (window.MathJax && window.MathJax.typesetPromise) {
      window.MathJax.typesetPromise().catch(function(err) {
        console.warn('MathJax typeset error:', err.message);
      });
    }
  }

  // ── 4. RENDERIZADORES DE VISTAS ──

  // Vista 1: Catálogo de Recursos
  function renderResourceCard(item) {
    const badge = getCategoryBadge(item.category);
    const isBookmarked = state.bookmarks.has(item.id);
    const highlightedTitle = highlightMatch(item.title, state.searchQuery);
    const highlightedDesc = highlightMatch(item.desc, state.searchQuery);

    const diffDots = item.difficulty === 'basico'
      ? '<span class="dot-diff active green"></span><span class="dot-diff"></span><span class="dot-diff"></span>'
      : item.difficulty === 'intermedio'
      ? '<span class="dot-diff active amber"></span><span class="dot-diff active amber"></span><span class="dot-diff"></span>'
      : '<span class="dot-diff active rose"></span><span class="dot-diff active rose"></span><span class="dot-diff active rose"></span>';

    return `
      <article class="resource-card" id="card-${item.id}" data-id="${item.id}">
        <div class="card-top">
          <span class="card-badge ${badge.cls}">${badge.label}</span>
          <button class="bookmark-btn ${isBookmarked ? 'bookmarked' : ''}" data-id="${item.id}" aria-label="${isBookmarked ? 'Quitar de favoritos' : 'Guardar en favoritos'}">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="${isBookmarked ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2">
              <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
            </svg>
          </button>
        </div>

        <h3 class="card-title">${highlightedTitle}</h3>

        ${item.formula ? `
          <div class="card-formula-box">
            \\(${item.formula}\\)
          </div>
        ` : ''}

        <p class="card-desc">${highlightedDesc}</p>

        <div class="card-tags">
          ${item.tags.map(t => `<span class="tag-pill">${highlightMatch(t, state.searchQuery)}</span>`).join('')}
        </div>

        <div class="card-footer">
          <div class="difficulty-indicator">
            <span class="difficulty-dots">${diffDots}</span>
            <span>${item.difficulty.toUpperCase()}</span>
          </div>

          <a href="${item.href}" target="_blank" rel="noopener noreferrer" class="open-pdf-btn" id="btn-open-${item.id}">
            <span>Abrir PDF</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              <polyline points="15 3 21 3 21 9"></polyline>
              <line x1="10" y1="14" x2="21" y2="3"></line>
            </svg>
          </a>
        </div>
      </article>
    `;
  }

  function filterResources(resources) {
    return resources.filter(item => {
      // Filtro por categoría
      if (state.activeCategory !== 'all') {
        if (state.activeCategory === 'examenes' && item.category !== 'examenes') return false;
        if (state.activeCategory !== 'examenes' && item.category !== state.activeCategory) return false;
      }

      // Filtro por búsqueda
      if (state.searchQuery) {
        const q = state.searchQuery.toLowerCase();
        const inTitle = item.title.toLowerCase().includes(q);
        const inDesc = item.desc.toLowerCase().includes(q);
        const inTags = item.tags.some(t => t.toLowerCase().includes(q));
        const inFormula = (item.formula || '').toLowerCase().includes(q);
        if (!inTitle && !inDesc && !inTags && !inFormula) return false;
      }

      return true;
    });
  }

  function renderCatalogView() {
    const filtered = filterResources(window.PORTAL_DATA.RESOURCES);

    // Hero Banner visibility
    if (dom.heroBanner) {
      dom.heroBanner.style.display = (state.activeCategory === 'all' && !state.searchQuery) ? 'block' : 'none';
    }

    if (filtered.length === 0) {
      dom.resourceGrid.innerHTML = `
        <div class="empty-state" style="grid-column: 1 / -1;">
          <svg class="empty-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
          <h3>No se encontraron recursos</h3>
          <p>Intenta con otros términos de búsqueda o selecciona otra categoría.</p>
        </div>
      `;
      return;
    }

    dom.resourceGrid.innerHTML = filtered.map(renderResourceCard).join('');
    attachBookmarkListeners();
    triggerMathJax();
  }

  // Vista 2: Malla Curricular UNI ↔ MIT
  function renderCompareView() {
    const modules = window.PORTAL_DATA.MALLA_MODULES;
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

  // Vista 3: Radar Predictivo & Estadísticas
  function renderPredictionsView() {
    const predictions = window.PORTAL_DATA.PREDICTIONS_DATA;
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
            const shortCode = p.evalName.match(/\((.*?)\)/)?.[1] || '';
            const cleanTitle = p.evalName.replace(/\s*\(.*?\)/, '').replace('Práctica Calificada', 'Práctica');
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

  // Vista 4: Modo de Estudio por Semana (Feature Nuevo 1)
  function renderWeekModeView() {
    const weeks = window.PORTAL_DATA.WEEKS_DATA;
    const currentWeekMeta = weeks.find(w => w.week === state.selectedWeek) || weeks[0];
    const weekResources = window.PORTAL_DATA.RESOURCES.filter(r => r.week === state.selectedWeek);

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

  // Vista 5: Mis Marcadores / Favoritos (Feature Nuevo 2)
  function renderBookmarksView() {
    const bookmarkedResources = window.PORTAL_DATA.RESOURCES.filter(r => state.bookmarks.has(r.id));

    dom.viewBookmarks.innerHTML = `
      <div style="display:flex;flex-direction:column;gap:24px;">
        <div class="malla-header-bar">
          <div class="malla-header-info">
            <h2>Mis Recursos Marcados (${bookmarkedResources.length})</h2>
            <p>Accede rápidamente a tus clases, solucionarios y guías favoritas guardadas en tu navegador.</p>
          </div>
          ${bookmarkedResources.length > 0 ? `
            <button id="clear-all-bookmarks" class="footer-link" style="color:var(--accent-rose);border-color:rgba(244,63,94,0.3);">
              Vaciar Marcadores
            </button>
          ` : ''}
        </div>

        <div class="resource-grid">
          ${bookmarkedResources.length > 0 
            ? bookmarkedResources.map(renderResourceCard).join('') 
            : `
              <div class="empty-state" style="grid-column: 1 / -1;">
                <svg class="empty-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
                <h3>No tienes recursos guardados</h3>
                <p>Haz clic en el ícono de la estrella (☆) en cualquier recurso del catálogo para agregarlo aquí.</p>
              </div>
            `
          }
        </div>
      </div>
    `;

    const clearBtn = dom.viewBookmarks.querySelector('#clear-all-bookmarks');
    if (clearBtn) {
      clearBtn.addEventListener('click', () => {
        if (confirm('¿Estás seguro de que deseas eliminar todos tus marcadores?')) {
          state.bookmarks.clear();
          saveBookmarks();
          renderBookmarksView();
        }
      });
    }

    attachBookmarkListeners();
    triggerMathJax();
  }

  // Vista 6: Modo Fórmulas & Cheat-Sheet (Feature Nuevo 3)
  function renderFormulasView() {
    const bank = window.PORTAL_DATA.FORMULAS_BANK;

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

  // ── 5. NAVEGACIÓN Y CONTROLADOR DE VISTAS ──
  function switchView(viewName) {
    state.activeView = viewName;

    // Actualizar tabs superiores
    dom.viewTabBtns.forEach(btn => {
      btn.classList.toggle('active', btn.dataset.view === viewName);
      btn.setAttribute('aria-selected', btn.dataset.view === viewName);
    });

    // Actualizar sidebar items de vista
    dom.sidebarNavItems.forEach(item => {
      if (item.dataset.view) {
        item.classList.toggle('active', item.dataset.view === viewName);
      }
    });

    // Ocultar todas las vistas
    [dom.viewCatalog, dom.viewCompare, dom.viewPredictions, dom.viewWeek, dom.viewBookmarks, dom.viewFormulas].forEach(el => {
      if (el) el.style.display = 'none';
    });

    // Mostrar vista activa y renderizar
    if (viewName === 'catalog') {
      dom.viewCatalog.style.display = 'block';
      renderCatalogView();
    } else if (viewName === 'compare') {
      dom.viewCompare.style.display = 'block';
      renderCompareView();
    } else if (viewName === 'predictions') {
      dom.viewPredictions.style.display = 'block';
      renderPredictionsView();
    } else if (viewName === 'week') {
      dom.viewWeek.style.display = 'block';
      renderWeekModeView();
    } else if (viewName === 'bookmarks') {
      dom.viewBookmarks.style.display = 'block';
      renderBookmarksView();
    } else if (viewName === 'formulas') {
      dom.viewFormulas.style.display = 'block';
      renderFormulasView();
    }

    // Scroll arriba suave
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Cerrar sidebar en móvil si está abierto
    closeMobileSidebar();
  }

  function setCategoryFilter(category) {
    state.activeCategory = category;

    // Actualizar chips
    const chips = dom.categoryFilterChips.querySelectorAll('.filter-chip');
    chips.forEach(chip => {
      chip.classList.toggle('active', chip.dataset.cat === category);
    });

    // Actualizar sidebar items de categoría
    dom.sidebarNavItems.forEach(item => {
      if (item.dataset.cat) {
        item.classList.toggle('active', item.dataset.cat === category);
      }
    });

    // Si no estamos en catálogo, cambiar a catálogo
    if (state.activeView !== 'catalog') {
      switchView('catalog');
    } else {
      renderCatalogView();
    }

    closeMobileSidebar();
  }

  function attachBookmarkListeners() {
    document.querySelectorAll('.bookmark-btn').forEach(btn => {
      btn.onclick = function(e) {
        const id = this.dataset.id;
        toggleBookmark(id, e);
      };
    });
  }

  function updateSidebarCounts() {
    const all = window.PORTAL_DATA.RESOURCES;
    const countByCat = {};
    all.forEach(r => {
      countByCat[r.category] = (countByCat[r.category] || 0) + 1;
    });

    // Actualizar badges en sidebar
    dom.sidebarNavItems.forEach(item => {
      const cat = item.dataset.cat;
      const badge = item.querySelector('.nav-badge');
      if (badge && cat) {
        badge.textContent = cat === 'all' ? all.length : (countByCat[cat] || 0);
      }
      if (badge && item.dataset.view === 'bookmarks') {
        badge.textContent = state.bookmarks.size;
      }
    });

    // Topbar y stats hero
    if (dom.topbarTotalCount) dom.topbarTotalCount.textContent = all.length;
    if (dom.statUniCount) dom.statUniCount.textContent = all.filter(r => r.category.includes('uni') || r.category === 'bonus' || r.category === 'examenes').length;
    if (dom.statMitCount) dom.statMitCount.textContent = all.filter(r => r.category.includes('mit')).length;
    if (dom.statExamCount) dom.statExamCount.textContent = all.filter(r => r.category === 'examenes').length;
  }

  // ── 6. CONTROLADOR DE SIDEBAR MÓVIL ──
  function openMobileSidebar() {
    dom.sidebar.classList.add('open');
    dom.sidebarBackdrop.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeMobileSidebar() {
    dom.sidebar.classList.remove('open');
    dom.sidebarBackdrop.classList.remove('active');
    document.body.style.overflow = '';
  }

  // ── 7. EVENT LISTENERS E INICIALIZACIÓN ──
  function initEvents() {
    // Búsqueda con debounce
    let debounceTimer = null;
    dom.searchInput.addEventListener('input', (e) => {
      clearTimeout(debounceTimer);
      const val = e.target.value.trim();
      state.searchQuery = val;
      dom.searchClearBtn.style.display = val ? 'block' : 'none';

      debounceTimer = setTimeout(() => {
        if (state.activeView !== 'catalog') {
          switchView('catalog');
        } else {
          renderCatalogView();
        }
      }, 150);
    });

    dom.searchClearBtn.addEventListener('click', () => {
      dom.searchInput.value = '';
      state.searchQuery = '';
      dom.searchClearBtn.style.display = 'none';
      renderCatalogView();
    });

    // Tab buttons de vista
    dom.viewTabBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        switchView(btn.dataset.view);
      });
    });

    // Sidebar items
    dom.sidebarNavItems.forEach(item => {
      item.addEventListener('click', () => {
        if (item.dataset.view) {
          switchView(item.dataset.view);
        } else if (item.dataset.cat) {
          setCategoryFilter(item.dataset.cat);
        }
      });
    });

    // Filter chips
    if (dom.categoryFilterChips) {
      dom.categoryFilterChips.querySelectorAll('.filter-chip').forEach(chip => {
        chip.addEventListener('click', () => {
          setCategoryFilter(chip.dataset.cat);
        });
      });
    }

    // Mobile menu toggle
    if (dom.mobileMenuBtn) {
      dom.mobileMenuBtn.addEventListener('click', openMobileSidebar);
    }
    if (dom.sidebarBackdrop) {
      dom.sidebarBackdrop.addEventListener('click', closeMobileSidebar);
    }

    // Tecla Escape para cerrar modales/sidebar
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closeMobileSidebar();
      }
    });
  }

  // ── 8. ARRANQUE DEL SISTEMA ──
  document.addEventListener('DOMContentLoaded', () => {
    initEvents();
    updateSidebarCounts();
    switchView('catalog');
  });

})();
