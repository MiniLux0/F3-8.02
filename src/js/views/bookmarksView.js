// src/js/views/bookmarksView.js
import PORTAL_DATA from '../data.js';
import { state } from '../state.js';
import { dom } from '../utils/dom.js';
import { getCategoryBadge, formatDate, progressLabel } from '../utils/format.js';
import { getAllBookmarks, upsertBookmark, deleteBookmark, clearAllBookmarks } from '../db.js';
import { triggerMathJax } from '../utils/mathjax.js';
import { updateSidebarCounts } from '../router.js';

export async function toggleBookmark(id, event) {
  if (event) event.stopPropagation();
  if (state.bookmarks.has(id)) {
    await deleteBookmark(id);
    state.bookmarks.delete(id);
  } else {
    await upsertBookmark(id);
    state.bookmarks.add(id);
  }
  updateSidebarCounts();

  if (state.activeView === 'bookmarks') {
    renderBookmarksView();
  } else {
    const btn = document.querySelector(`.bookmark-btn[data-id="${id}"]`);
    if (btn) {
      btn.classList.toggle('bookmarked', state.bookmarks.has(id));
      btn.setAttribute('aria-label', state.bookmarks.has(id) ? 'Quitar de favoritos' : 'Guardar en favoritos');
    }
  }
}

export async function renderBookmarksView() {
  const bookmarkedResources = PORTAL_DATA.RESOURCES.filter(r => state.bookmarks.has(r.id));

  // Cargar metadatos de todos los bookmarks desde IndexedDB
  const allMeta = await getAllBookmarks();
  const metaMap = {};
  allMeta.forEach(b => { metaMap[b.resourceId] = b; });

  function renderBookmarkCard(resource) {
    const badge = getCategoryBadge(resource.category);
    const meta  = metaMap[resource.id] || {};
    const prog  = meta.progress || 0;
    const pLbl  = progressLabel(prog);
    const note  = meta.note || '';

    return `
      <article class="bk-card" data-id="${resource.id}">
        <div class="bk-card-top">
          <span class="card-badge ${badge.cls}">${badge.label}</span>
          <button class="bk-remove-btn" data-id="${resource.id}" aria-label="Quitar de favoritos">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        <h3 class="bk-card-title">${resource.title}</h3>

        <!-- Barra de progreso interactiva -->
        <div class="bk-progress-section">
          <div class="bk-progress-header">
            <span class="bk-progress-label ${pLbl.cls}">${pLbl.text}</span>
            <span class="bk-progress-pct">${prog}%</span>
          </div>
          <div class="bk-progress-track">
            <div class="bk-progress-fill" style="width:${prog}%"></div>
          </div>
          <div class="bk-progress-steps">
            ${[0, 25, 50, 75, 100].map(v => `
              <button class="bk-step-btn ${prog >= v && prog > 0 || (v === 0 && prog === 0) ? 'current' : ''}" 
                data-id="${resource.id}" data-val="${v}" aria-label="Progreso ${v}%">${v}%</button>
            `).join('')}
          </div>
        </div>

        <!-- Nota personal -->
        <div class="bk-note-section">
          <label class="bk-note-label" for="note-${resource.id}">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <path d="M12 20h9"></path>
              <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
            </svg>
            Nota personal
          </label>
          <textarea 
            id="note-${resource.id}" 
            class="bk-note-input" 
            data-id="${resource.id}" 
            placeholder="Añade tu apunte, duda o idea..." 
            rows="2"
            maxlength="400"
          >${note}</textarea>
        </div>

        <!-- Footer con meta -->
        <div class="bk-card-footer">
          <span class="bk-meta-date">
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="3" y="4" width="18" height="18" rx="2"></rect>
              <line x1="16" y1="2" x2="16" y2="6"></line>
              <line x1="8" y1="2" x2="8" y2="6"></line>
              <line x1="3" y1="10" x2="21" y2="10"></line>
            </svg>
            ${formatDate(meta.createdAt)}
          </span>
          <a href="${resource.href}" target="_blank" rel="noopener noreferrer" 
             class="open-pdf-btn" data-open-id="${resource.id}"
             id="btn-open-bk-${resource.id}">
            <span>Abrir PDF</span>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              <polyline points="15 3 21 3 21 9"></polyline>
              <line x1="10" y1="14" x2="21" y2="3"></line>
            </svg>
          </a>
        </div>
      </article>
    `;
  }

  const filterBtns = [
    { label: 'Todos',        val: 'all'  },
    { label: '✓ Completados', val: '100'  },
    { label: 'En progreso',  val: 'mid'  },
    { label: 'Sin iniciar',  val: '0'    }
  ];

  const activeFilter = state._bkFilter || 'all';

  function applyFilter(resources) {
    if (activeFilter === '100') return resources.filter(r => (metaMap[r.id]?.progress || 0) === 100);
    if (activeFilter === 'mid') return resources.filter(r => { const p = metaMap[r.id]?.progress || 0; return p > 0 && p < 100; });
    if (activeFilter === '0')   return resources.filter(r => (metaMap[r.id]?.progress || 0) === 0);
    return resources;
  }

  const filtered = applyFilter(bookmarkedResources);

  dom.viewBookmarks.innerHTML = `
    <div class="bk-view">
      <!-- Header -->
      <div class="bk-view-header">
        <div>
          <h2 class="bk-view-title">Mis Favoritos <span class="bk-count-badge">${bookmarkedResources.length}</span></h2>
          <p class="bk-view-sub">Recursos guardados con seguimiento de progreso y notas personales.</p>
        </div>
        ${bookmarkedResources.length > 0 ? `
          <button id="clear-all-bookmarks" class="bk-clear-btn" aria-label="Eliminar todos los favoritos">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="3 6 5 6 21 6"></polyline>
              <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"></path>
              <path d="M10 11v6"></path><path d="M14 11v6"></path>
            </svg>
            Vaciar
          </button>
        ` : ''}
      </div>

      <!-- Filtros de estado -->
      ${bookmarkedResources.length > 0 ? `
        <div class="bk-filter-bar" role="group" aria-label="Filtrar por progreso">
          ${filterBtns.map(f => `
            <button class="bk-filter-btn ${activeFilter === f.val ? 'active' : ''}" data-bkfilter="${f.val}">${f.label}</button>
          `).join('')}
        </div>
      ` : ''}

      <!-- Grid de bookmarks -->
      <div class="bk-grid">
        ${filtered.length > 0
          ? filtered.map(renderBookmarkCard).join('')
          : bookmarkedResources.length > 0
            ? `<div class="empty-state" style="grid-column:1/-1">
                <h3>No hay recursos en este filtro</h3>
                <p>Prueba cambiando el filtro de progreso.</p>
              </div>`
            : `<div class="empty-state" style="grid-column:1/-1">
                <svg class="empty-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
                <h3>No tienes recursos guardados</h3>
                <p>Haz clic en el ★ de cualquier recurso del catálogo para agregarlo aquí.</p>
              </div>`
        }
      </div>
    </div>
  `;

  // Event: quitar favorito
  dom.viewBookmarks.querySelectorAll('.bk-remove-btn').forEach(btn => {
    btn.addEventListener('click', async () => {
      await toggleBookmark(btn.dataset.id);
    });
  });

  // Event: cambio de progreso
  dom.viewBookmarks.querySelectorAll('.bk-step-btn').forEach(btn => {
    btn.addEventListener('click', async () => {
      const id  = btn.dataset.id;
      const val = parseInt(btn.dataset.val, 10);
      await upsertBookmark(id, { progress: val, lastOpenedAt: Date.now() });
      renderBookmarksView();
    });
  });

  // Event: nota con debounce
  dom.viewBookmarks.querySelectorAll('.bk-note-input').forEach(textarea => {
    let timer;
    textarea.addEventListener('input', () => {
      clearTimeout(timer);
      timer = setTimeout(async () => {
        await upsertBookmark(textarea.dataset.id, { note: textarea.value.trim() });
      }, 600);
    });
  });

  // Event: marcar lastOpenedAt al abrir PDF
  dom.viewBookmarks.querySelectorAll('[data-open-id]').forEach(link => {
    link.addEventListener('click', () => {
      upsertBookmark(link.dataset.openId, { lastOpenedAt: Date.now() });
    });
  });

  // Event: filtros de estado
  dom.viewBookmarks.querySelectorAll('.bk-filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      state._bkFilter = btn.dataset.bkfilter;
      renderBookmarksView();
    });
  });

  // Event: vaciar todos
  const clearBtn = dom.viewBookmarks.querySelector('#clear-all-bookmarks');
  if (clearBtn) {
    clearBtn.addEventListener('click', async () => {
      if (confirm('¿Eliminar todos los favoritos y sus notas?')) {
        await clearAllBookmarks();
        state.bookmarks.clear();
        state._bkFilter = 'all';
        updateSidebarCounts();
        renderBookmarksView();
      }
    });
  }

  triggerMathJax();
}
