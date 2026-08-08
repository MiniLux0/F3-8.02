# 📋 Análisis Detallado del Proyecto: Portal Maestro de Física III

> **Fecha:** 2026-08-08  
> **Repositorio:** `8.02` — UNI CF2B1 ↔ MIT 8.02 OpenCourseWare  
> **Tipo:** SPA académica vanilla (HTML/CSS/JS) + MathJax 3 + 146 PDFs locales

---

## 1. Visión General

**Propósito:** Plataforma web interactiva para estudiantes de Física III (Electromagnetismo) de la UNI (código CF2B1) que integra el currículo oficial peruano con el estándar internacional del MIT 8.02 (OCW/TEAL).

**URL producción:** https://minilux0.github.io/F3-8.02/

**Stack tecnológico:**
- **Frontend:** Vanilla ES5 (IIFE), CSS Custom Properties (Design System completo)
- **Math rendering:** MathJax 3 (tex-mml-chtml) via CDN
- **Persistencia:** `localStorage` (bookmarks)
- **Datos:** 146 recursos indexados en `data.js` (objeto global `window.PORTAL_DATA`)
- **Deploy:** GitHub Pages (static hosting)
- **Build:** *Ninguno* — carga directa en navegador

---

## 2. Estructura de Archivos

```
8.02/
├── index.html                      # SPA entry point (356 líneas)
├── README.md                       # Documentación del proyecto
├── ANALISIS_PROYECTO.md            # ← Este archivo
├── src/
│   ├── css/
│   │   └── main.css                # Design System completo (1,629 líneas)
│   └── js/
│       ├── data.js                 # Banco de datos maestro (1,110+ líneas mostradas)
│       └── app.js                  # Controlador principal (848 líneas)
├── CF2B1_Fisica_III_UNI/           # Material oficial UNI (111 PDFs)
│   ├── Material_Oficial_UNI/
│   │   ├── Clases/                 # Teoría (21) + Sesiones (27) + Bonus (12)
│   │   ├── Examenes_Pasados/       # 51 exámenes/solucionarios (2015–2025)
│   │   └── Laboratorio/            # 10 guías/informes
│   └── Silabo/ + Libros/           # PDFs de referencia
└── 8.02-spring-2007/               # Material MIT 8.02 OCW (35 PDFs + MathJax local)
    └── static_shared/mathjax/      # 150+ archivos MathJax (redundante con CDN)
```

---

## 3. Arquitectura de Código

### 3.1 `index.html` — SPA con 6 Vistas
- **Estructura semántica:** `aside.sidebar` + `main.content-area`
- **Vistas (sections ocultas/mostradas via JS):**
  1. `#view-catalog` — Biblioteca de recursos
  2. `#view-compare` — Malla curricular UNI ↔ MIT
  3. `#view-predictions` — Radar predictivo IA
  4. `#view-week` — Estudio por semana (1–16)
  5. `#view-bookmarks` — Marcadores persistentes
  6. `#view-formulas` — Formulario maestro imprimible
- **Navegación dual:** Sidebar (desktop) + Topbar tabs (mobile)
- **MathJax config inline** (lines 19–30)
- **Accesibilidad:** Skip link, ARIA labels, `color-scheme: dark`

### 3.2 `src/js/data.js` — Banco de Datos Maestro (~1,500+ líneas estimadas)
```javascript
window.PORTAL_DATA = {
  WEEKS_DATA: [16 semanas],           // Metadatos semanales
  RESOURCES: [146 items],             // Catálogo completo
  MALLA_MODULES: [8 evaluaciones],    // PC1–PC6, Parcial, Final
  PREDICTIONS_DATA: [8 evaluaciones], // Radar predictivo
  FORMULAS_BANK: [8 bloques temáticos] // Formulario maestro
}
```

**Cada recurso (RESOURCES):**
```javascript
{
  id: 'uni-teoria-01',
  title: 'Sem 1 Cl. 01 — Carga Eléctrica',
  category: 'teoria-uni',             // 9 categorías totales
  week: 1,                            // 1–16
  chapter: 1,                         // Capítulo MIT equivalente
  difficulty: 'basico' | 'intermedio' | 'avanzado',
  formula: 'q = n \\cdot e',          // LaTeX inline
  desc: 'Descripción...',
  tags: ['Carga', 'Electrostática', ...],
  href: 'ruta/relativa/al/pdf.pdf'
}
```

**Categorías (9):**
| Código | Label | Count | Color token |
|--------|-------|-------|-------------|
| `teoria-uni` | Teoría UNI (Tello) | 21 | `--cat-uni-theory` (rose) |
| `sesiones-uni` | Sesiones Oficiales CF2B1 | 27 | `--cat-uni-session` (amber) |
| `bonus` | Bonus Track & Resúmenes | 12 | `--cat-uni-bonus` (amber) |
| `examenes` | Exámenes & Solucionarios | 51 | `--cat-uni-exam` (amber) |
| `labs-uni` | Laboratorios UNI | 10 | `--cat-uni-lab` (amber) |
| `teoria-mit` | Teoría MIT 8.02 | 14 | `--cat-mit-theory` (cyan) |
| `ps-mit` | Problem Solving MIT | 11 | `--cat-mit-ps` (violet) |
| `labs-mit` | Laboratorios TEAL MIT | 10 | `--cat-mit-lab` (emerald) |

### 3.3 `src/js/app.js` — Controlador Principal (848 líneas, IIFE)
**Estado global (`state`):**
```javascript
{
  activeView: 'catalog',
  activeCategory: 'all',
  searchQuery: '',
  selectedWeek: 1,
  selectedEvalId: 'eval-pc1',
  compareSubView: 'bento',
  bookmarks: Set,           // ← localStorage
  mathJaxRendering: boolean
}
```

**Módulos internos (funciones):**
| Sección | Función | Responsabilidad |
|---------|---------|-----------------|
| 1–17 | `state` | Estado reactivo global |
| 19–50 | `dom` | Cache de selectores DOM |
| 52–106 | Utils | `saveBookmarks`, `toggleBookmark`, `getCategoryBadge`, `highlightMatch`, `triggerMathJax` |
| 108–214 | `renderCatalogView` | Filtros + grid de tarjetas |
| 216–365 | `renderCompareView` | Bento roadmap + matriz compacta |
| 367–490 | `renderPredictionsView` | Radar IA con barras, trampas, estrategia |
| 492–547 | `renderWeekModeView` | Selector semanas + recursos filtrados |
| 549–597 | `renderBookmarksView` | Favoritos + botón limpiar todo |
| 599–646 | `renderFormulasView` | Cheat-sheet 8 bloques + botón print |
| 648–696 | `switchView` | Router de vistas + scroll + mobile close |
| 698–722 | `setCategoryFilter` | Sincroniza chips + sidebar |
| 724–757 | Listeners/Counts | Bookmarks, sidebar badges, hero stats |
| 759–770 | Mobile Sidebar | `openMobileSidebar` / `closeMobileSidebar` |
| 772–846 | `initEvents` | Search debounce, tabs, chips, mobile, Escape key |
| 842–846 | Bootstrap | `DOMContentLoaded` → init + render |

**Patrón:** Render functions generan HTML strings → `innerHTML` → `attachBookmarkListeners()` → `triggerMathJax()`

### 3.4 `src/css/main.css` — Design System (1,629 líneas)

**Tokens (lines 8–72):**
- **Colores base:** `--bg-app` (#050811), `--bg-surface`, `--bg-card` (rgba glassmorphism)
- **Acentos semánticos:** `--accent-cyan`, `--accent-violet`, `--accent-amber`, `--accent-emerald`, `--accent-rose` + variantes `-glow`
- **Categorías:** `--cat-uni-theory` (rose) → `--cat-mit-lab` (emerald)
- **Tipografía:** `--font-display` (Space Grotesk), `--font-sans` (Plus Jakartaispatch:(str
<tool_call>
| quedaba business service points
ết:
 edit→-point...'t 질-point-point?