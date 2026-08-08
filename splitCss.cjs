const fs = require('fs');
const path = require('path');

const css = fs.readFileSync('src/css/main.css', 'utf-8');

function extractBetween(startPhrase, endPhrase) {
  const startIndex = css.indexOf(startPhrase);
  if (startIndex === -1) return '';
  const endIndex = endPhrase ? css.indexOf(endPhrase, startIndex) : css.length;
  return css.substring(startIndex, endIndex).trim();
}

function ensureDir(filePath) {
  const dir = path.dirname(filePath);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

function writeOut(name, start, end) {
  const content = extractBetween(start, end);
  ensureDir('src/css/' + name);
  fs.writeFileSync('src/css/' + name, content, 'utf-8');
  console.log('Wrote', name, content.length, 'bytes');
}

writeOut('tokens.css', '/* ── 1. DESIGN TOKENS ── */', '/* ── 2. RESET & BASE ── */');
writeOut('base.css', '/* ── 2. RESET & BASE ── */', '/* ── 3. AMBIENT BACKGROUND EFFECTS ── */');
writeOut('utils/ambient.css', '/* ── 3. AMBIENT BACKGROUND EFFECTS ── */', '/* ── 4. MAIN LAYOUT GRID ── */');
writeOut('layout/app.css', '/* ── 4. MAIN LAYOUT GRID ── */', '/* ── 5. SIDEBAR NAVIGATION ── */');
writeOut('layout/sidebar.css', '/* ── 5. SIDEBAR NAVIGATION ── */', '/* ── 6. MAIN CONTENT WRAPPER ── */');
// Wait, 6 and 7 need splitting or one file?
writeOut('layout/app.css', '/* ── 4. MAIN LAYOUT GRID ── */', '/* ── 5. SIDEBAR NAVIGATION ── */'); // App layout
const wrapper = extractBetween('/* ── 6. MAIN CONTENT WRAPPER ── */', '/* ── 7. TOPBAR ── */');
fs.appendFileSync('src/css/layout/app.css', '\n\n' + wrapper);
console.log('Appended to app.css');

writeOut('layout/topbar.css', '/* ── 7. TOPBAR ── */', '/* ── 8. VIEW SWITCHER TABS ── */');
writeOut('components/tabs.css', '/* ── 8. VIEW SWITCHER TABS ── */', '/* Category Filter Chips Bar */');
writeOut('components/chips.css', '/* Category Filter Chips Bar */', '/* ── 9. HERO SECTION (Academic Luminous) ── */');
writeOut('components/hero.css', '/* ── 9. HERO SECTION (Academic Luminous) ── */', '/* ── 10. RESOURCE CARDS GRID (Catálogo) ── */');
writeOut('components/cards.css', '/* ── 10. RESOURCE CARDS GRID (Catálogo) ── */', '/* ── 11. VISTA 2: MALLA CURRICULAR UNI ↔ MIT ── */');
writeOut('views/compare.css', '/* ── 11. VISTA 2: MALLA CURRICULAR UNI ↔ MIT ── */', '/* ── 12. VISTA 3: RADAR PREDICTIVO ── */');
writeOut('views/predictions.css', '/* ── 12. VISTA 3: RADAR PREDICTIVO ── */', '/* ── 13. VISTA 4: MODO ESTUDIO POR SEMANA (NUEVO FEATURE 1) ── */');
writeOut('views/week.css', '/* ── 13. VISTA 4: MODO ESTUDIO POR SEMANA (NUEVO FEATURE 1) ── */', '/* ── 14. VISTA 5: MODO FÓRMULAS & CHEAT-SHEET (NUEVO FEATURE 3) ── */');
writeOut('views/formulas.css', '/* ── 14. VISTA 5: MODO FÓRMULAS & CHEAT-SHEET (NUEVO FEATURE 3) ── */', '/* ── 15. EMPTY STATE & SKELETON LOADING ── */');
writeOut('utils/empty.css', '/* ── 15. EMPTY STATE & SKELETON LOADING ── */', '/* ── 15b. SIDEBAR BACKDROP (always present, only visible when toggled) ── */');

const backdrop = extractBetween('/* ── 15b. SIDEBAR BACKDROP (always present, only visible when toggled) ── */', '/* ── 16. PRINT STYLESHEET (@media print) ── */');
fs.appendFileSync('src/css/utils/ambient.css', '\n\n' + backdrop);

writeOut('utils/print.css', '/* ── 16. PRINT STYLESHEET (@media print) ── */', '/* ── 17. RESPONSIVE BREAKPOINTS (Mobile-First Polish) ── */');
writeOut('utils/responsive.css', '/* ── 17. RESPONSIVE BREAKPOINTS (Mobile-First Polish) ── */', '/* -- 18. VISTA FAVORITOS (IndexedDB) -- */');

// Escribimos el nuevo main.css
const mainCssContent = `/* Portal Maestro Física III — Design System */
@import './tokens.css';
@import './base.css';
@import './utils/ambient.css';
@import './layout/app.css';
@import './layout/sidebar.css';
@import './layout/topbar.css';
@import './components/tabs.css';
@import './components/chips.css';
@import './components/hero.css';
@import './components/cards.css';
@import './components/bookmarks.css';
@import './views/compare.css';
@import './views/predictions.css';
@import './views/week.css';
@import './views/formulas.css';
@import './utils/empty.css';
@import './utils/print.css';
@import './utils/responsive.css';
`;

fs.writeFileSync('src/css/main.css', mainCssContent, 'utf-8');
console.log('Done dividing CSS.');
