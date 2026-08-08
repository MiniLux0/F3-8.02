// src/js/views/catalogView.js
import PORTAL_DATA from '../data.js';
import { state } from '../state.js';
import { dom } from '../utils/dom.js';
import { getCategoryBadge, highlightMatch } from '../utils/format.js';
import { triggerMathJax } from '../utils/mathjax.js';
import { toggleBookmark } from './bookmarksView.js';

export function renderResourceCard(item) {
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

export function filterResources(resources) {
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

export function renderCatalogView() {
  const filtered = filterResources(PORTAL_DATA.RESOURCES);

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

export function attachBookmarkListeners() {
  document.querySelectorAll('.bookmark-btn').forEach(btn => {
    btn.onclick = function(e) {
      const id = this.dataset.id;
      toggleBookmark(id, e);
    };
  });
}
