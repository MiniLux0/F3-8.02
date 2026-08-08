// src/js/router.js
import PORTAL_DATA from './data.js';
import { state } from './state.js';
import { dom } from './utils/dom.js';

import { renderCatalogView } from './views/catalogView.js';
import { renderCompareView } from './views/compareView.js';
import { renderPredictionsView } from './views/predictionsView.js';
import { renderWeekModeView } from './views/weekView.js';
import { renderBookmarksView } from './views/bookmarksView.js';
import { renderFormulasView } from './views/formulasView.js';

export function switchView(viewName) {
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

export function setCategoryFilter(category) {
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

export function updateSidebarCounts() {
  const all = PORTAL_DATA.RESOURCES;
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
      badge.textContent = state.bookmarks.size || '';
    }
  });

  // Topbar y stats hero
  if (dom.topbarTotalCount) dom.topbarTotalCount.textContent = all.length;
  if (dom.statUniCount) dom.statUniCount.textContent = all.filter(r => r.category.includes('uni') || r.category === 'bonus' || r.category === 'examenes').length;
  if (dom.statMitCount) dom.statMitCount.textContent = all.filter(r => r.category.includes('mit')).length;
  if (dom.statExamCount) dom.statExamCount.textContent = all.filter(r => r.category === 'examenes').length;
}

export function openMobileSidebar() {
  dom.sidebar.classList.add('open');
  dom.sidebarBackdrop.classList.add('active');
  document.body.style.overflow = 'hidden';
}

export function closeMobileSidebar() {
  dom.sidebar.classList.remove('open');
  dom.sidebarBackdrop.classList.remove('active');
  document.body.style.overflow = '';
}
