# Física III — Portal Maestro 🔬⚡

> **Portal académico unificado** para el curso **UNI CF2B1 Física III** y **MIT 8.02 Electromagnetismo**.  
> Edición Integral: Teoría Oficial, 27 Sesiones Semanales, Banco Histórico de Exámenes 2015–2025, Laboratorios UNI & MIT TEAL y Libro de Texto Completo.

---

## 📚 ¿Qué contiene la Biblioteca?

| Categoría | Contenido & Recursos |
|---|---|
| **Teoría UNI** | 21 clases magistrales de teoría y problemas resueltos paso a paso |
| **Sesiones Semanales UNI** | 27 diapositivas oficiales de clase semana a semana (Semana 1 a 15) |
| **Bonus Track UNI** | 12 PDFs selectos de profundización, teoría y resúmenes de fórmulas |
| **Exámenes & Solucionarios UNI** | Banco de exámenes resueltos y prácticas (PC1 a PC6, EP, EF, ES) 2015–2025 |
| **Laboratorios UNI** | Guías e informes experimentales completos de Laboratorio (L1 a L6) |
| **Teoría MIT 8.02** | 14 capítulos completos del curso MIT TEAL 8.02 Electricity & Magnetism |
| **Problem Solving MIT** | 11 guías de resolución de problemas con cálculo vectorial y aplicaciones |
| **Laboratorios MIT TEAL** | 10 guías y experimentos interactivos de laboratorio con simulación |
| **Libro Oficial** | *Física 3* — Prof. Hugo Medina Guzmán |
| **Malla Curricular UNI ↔ MIT** | Matriz de equivalencia temática entre evaluaciones UNI y capítulos MIT |

---

## 🗂 Estructura del Proyecto

```
8.02/
├── index.html                                 ← Portal principal unificado
├── abrir_portal.bat                           ← Lanzador local automático (Node / Python)
├── build_resources.js                         ← Script validador de catálogo de recursos
├── src/
│   ├── css/
│   │   └── main.css                           ← Sistema de diseño Dark Glassmorphism + Bento Grid
│   ├── js/
│   │   └── app.js                             ← Controlador interactivo con búsqueda y MathJax
│   └── data/
│       ├── filters.js                         ← Categorías de filtro
│       ├── comparison.js                      ← Datos de la Malla Curricular UNI ↔ MIT
│       └── resources.js                       ← Catálogo validado de recursos
├── CF2B1_Fisica_III_UNI/
│   └── Material_Oficial_UNI/
│       ├── Clases/
│       │   ├── Teoria_UNI/                    ← 21 clases magistrales
│       │   ├── Bonus_Track/                   ← 12 PDFs selectos
│       │   └── Semana_*.pdf                   ← 27 sesiones oficiales
│       ├── Examenes_Pasados/                  ← Banco 2015–2025 (PC, EP, EF, ES y Labs)
│       ├── Libros/                            ← Libro Hugo Medina Guzmán
│       └── Silabo/                            ← Sílabo oficial CF2B1
└── 8.02-spring-2007/                          ← MIT OpenCourseWare 8.02 TEAL Offline
```

---

## 🚀 Cómo abrirlo localmente

1. **Opción rápida:** Haz doble clic en `abrir_portal.bat`.
2. **Con Node.js / npx:**
   ```bash
   npx serve .
   ```
3. **Con Python:**
   ```bash
   python -m http.server 8000
   ```
4. Abre `http://localhost:8000` en tu navegador.

---

## 🌐 Despliegue en GitHub Pages

1. Sube el repositorio a GitHub:
   ```bash
   git add .
   git commit -m "feat: portal maestro fisica 3 uni mit estandarizado"
   git push origin main
   ```
2. En GitHub, dirígete a **Settings → Pages**.
3. En **Source**, selecciona **Deploy from a branch** (`main` / `/ (root)`).
4. Guarda los cambios. Tu portal estará disponible en segundos en `https://<tu-usuario>.github.io/<tu-repo>/`.

---

## 🎨 Stack y Tecnologías

- **HTML5 Semántico + Vanilla CSS**: Tokens de diseño modernos, modo oscuro refinado y diseño responsivo.
- **JavaScript Moderno**: Búsqueda instantánea, sistema de filtros reactivo y selector de vistas (Catálogo / Malla Curricular).
- **MathJax 3**: Renderizado nítido de ecuaciones LaTeX ($\nabla \cdot \vec{E}$, $\oint \vec{B}\cdot d\vec{s}$, etc.).
- **Google Fonts**: *EB Garamond*, *Inter* y *JetBrains Mono*.

---

*Desarrollado para el estudio riguroso del Electromagnetismo.*
