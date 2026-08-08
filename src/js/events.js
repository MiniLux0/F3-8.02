// src/js/events.js
import { dom } from './utils/dom.js';
import { state } from './state.js';
import { switchView, setCategoryFilter, openMobileSidebar, closeMobileSidebar } from './router.js';
import { renderCatalogView } from './views/catalogView.js';

export function initEvents() {
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
