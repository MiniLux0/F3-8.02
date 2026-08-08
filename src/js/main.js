// src/js/main.js
import '../css/main.css';
import PORTAL_DATA from './data.js';
import { state } from './state.js';
import { migrateFromLocalStorage, getBookmarkIds } from './db.js';
import { initEvents } from './events.js';
import { updateSidebarCounts } from './router.js';
import { switchView } from './router.js';

document.addEventListener('DOMContentLoaded', async () => {
  const migrated = await migrateFromLocalStorage();
  if (migrated > 0) console.info(`[Portal] Migrados ${migrated} favoritos a IndexedDB.`);
  state.bookmarks = await getBookmarkIds();
  initEvents();
  updateSidebarCounts();
  switchView('catalog');
});
