// src/js/db.js
// Capa de persistencia IndexedDB — sin dependencias externas
// Schema: { id, resourceId, note, progress, tags[], createdAt, updatedAt, lastOpenedAt }

const DB_NAME    = 'portal_fisica_db';
const DB_VERSION = 1;
const STORE_NAME = 'bookmarks';

/** @type {IDBDatabase|null} */
let _db = null;

// ── Abrir / Inicializar BD ──────────────────────────────────────────────────
function openDB() {
  if (_db) return Promise.resolve(_db);

  return new Promise((resolve, reject) => {
    const req = indexedDB.open(DB_NAME, DB_VERSION);

    req.onupgradeneeded = (e) => {
      const db = e.target.result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        const store = db.createObjectStore(STORE_NAME, { keyPath: 'resourceId' });
        // Índices para queries frecuentes
        store.createIndex('createdAt',    'createdAt',    { unique: false });
        store.createIndex('progress',     'progress',     { unique: false });
        store.createIndex('lastOpenedAt', 'lastOpenedAt', { unique: false });
      }
    };

    req.onsuccess = (e) => {
      _db = e.target.result;
      resolve(_db);
    };

    req.onerror = () => reject(req.error);
  });
}

// ── Helper: transacción ─────────────────────────────────────────────────────
async function tx(mode, fn) {
  const db    = await openDB();
  const trans = db.transaction(STORE_NAME, mode);
  const store = trans.objectStore(STORE_NAME);
  return fn(store, trans);
}

function promisifyReq(req) {
  return new Promise((res, rej) => {
    req.onsuccess = () => res(req.result);
    req.onerror   = () => rej(req.error);
  });
}

// ── API Pública ─────────────────────────────────────────────────────────────

/** Devuelve todos los bookmarks ordenados por createdAt DESC */
export async function getAllBookmarks() {
  return tx('readonly', (store) => {
    return new Promise((resolve, reject) => {
      const req = store.index('createdAt').openCursor(null, 'prev');
      const results = [];
      req.onsuccess = (e) => {
        const cursor = e.target.result;
        if (cursor) { results.push(cursor.value); cursor.continue(); }
        else resolve(results);
      };
      req.onerror = () => reject(req.error);
    });
  });
}

/** Devuelve un bookmark por resourceId, o null */
export async function getBookmark(resourceId) {
  return tx('readonly', (store) => promisifyReq(store.get(resourceId)));
}

/** Añade o actualiza un bookmark (upsert) */
export async function upsertBookmark(resourceId, patch = {}) {
  const db   = await openDB();
  const trans = db.transaction(STORE_NAME, 'readwrite');
  const store = trans.objectStore(STORE_NAME);

  return new Promise((resolve, reject) => {
    const getReq = store.get(resourceId);
    getReq.onsuccess = () => {
      const existing = getReq.result || {
        resourceId,
        note: '',
        progress: 0,
        tags: [],
        createdAt: Date.now(),
        lastOpenedAt: null
      };
      const updated = { ...existing, ...patch, updatedAt: Date.now() };
      const putReq  = store.put(updated);
      putReq.onsuccess = () => resolve(updated);
      putReq.onerror   = () => reject(putReq.error);
    };
    getReq.onerror = () => reject(getReq.error);
  });
}

/** Elimina un bookmark */
export async function deleteBookmark(resourceId) {
  return tx('readwrite', (store) => promisifyReq(store.delete(resourceId)));
}

/** Elimina todos los bookmarks */
export async function clearAllBookmarks() {
  return tx('readwrite', (store) => promisifyReq(store.clear()));
}

/** Cuenta total de bookmarks */
export async function countBookmarks() {
  return tx('readonly', (store) => promisifyReq(store.count()));
}

/** Devuelve Set<resourceId> de todos los bookmarks (para comparación rápida) */
export async function getBookmarkIds() {
  const all = await getAllBookmarks();
  return new Set(all.map(b => b.resourceId));
}

// ── Migración desde localStorage ────────────────────────────────────────────
/** Importa favoritos viejos de localStorage a IndexedDB (ejecutar una sola vez) */
export async function migrateFromLocalStorage() {
  const KEY = 'portal_fisica_bookmarks';
  const raw = localStorage.getItem(KEY);
  if (!raw) return 0;

  let ids;
  try { ids = JSON.parse(raw); } catch { return 0; }
  if (!Array.isArray(ids) || ids.length === 0) return 0;

  // Verificar si ya fue migrado
  const existing = await countBookmarks();
  if (existing > 0) {
    localStorage.removeItem(KEY); // limpia el legacy
    return 0;
  }

  // Insertar todos uno a uno con timestamp escalonado
  for (let i = 0; i < ids.length; i++) {
    await upsertBookmark(ids[i], {
      createdAt: Date.now() - (ids.length - i) * 1000 // orden preservado
    });
  }

  localStorage.removeItem(KEY); // limpia legacy tras migración exitosa
  return ids.length;
}
