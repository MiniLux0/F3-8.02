// src/js/utils/format.js
export function getCategoryBadge(category) {
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

export function highlightMatch(text, query) {
  if (!query) return text;
  const regex = new RegExp(`(${query.replace(/[.*+?^${}()|[\\]\\\\]/g, '\\$&')})`.replace(/[\\]\\\\]/g, '\\]\\\\'), 'gi');
  // the exact string from app.js is: const regex = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
  return text.replace(regex, '<mark style="background:rgba(6,182,212,0.3);color:#fff;border-radius:2px;padding:0 2px;">$1</mark>');
}

export function formatDate(ts) {
  if (!ts) return '—';
  return new Date(ts).toLocaleDateString('es-PE', { day: '2-digit', month: 'short', year: 'numeric' });
}

export function progressLabel(p) {
  if (p === 0)   return { text: 'Sin iniciar', cls: 'prog-none' };
  if (p < 50)    return { text: 'En progreso', cls: 'prog-low' };
  if (p < 100)   return { text: 'Avanzado',    cls: 'prog-mid' };
  return              { text: '✓ Completado',  cls: 'prog-done' };
}
