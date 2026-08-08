// src/js/utils/dom.js
export const dom = {
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
