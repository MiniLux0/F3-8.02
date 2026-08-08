# ⚡ Portal Maestro de Física III (Electromagnetismo)
### 🏛️ UNI CF2B1 (Perú) ↔ 🇺🇸 MIT 8.02 OpenCourseWare (EE.UU.)

> **Plataforma web académica interactiva para el dominio integral del electromagnetismo universitario.**

🌐 **Enlace oficial del portal en vivo:**  
👉 [**https://minilux0.github.io/F3-8.02/**](https://minilux0.github.io/F3-8.02/)

---

## 📖 ¿Qué es esta página?

Este portal es una **plataforma académica completa y moderna** diseñada para estudiantes universitarios que llevan el curso de **Física III (Electromagnetismo)** en la **Universidad Nacional de Ingeniería (UNI - Código CF2B1)** y desean potenciar su aprendizaje con el material de estándar mundial del curso **MIT 8.02 (OpenCourseWare / TEAL)**.

La página integra, clasifica y permite consultar interactivamente **146 documentos PDF oficiales** (clases teóricas, solucionarios de exámenes históricos, guías de problemas y manuales de laboratorio), acompañados de herramientas inteligentes como un **Radar Predictivo de Exámenes con IA**, un **Formulario Imprimible** y un **Sistema de Mapeo Curricular Dual**.

---

## ✨ Funcionalidades Principales

### 1. 📚 Biblioteca Central (146 Recursos Indexados)
- **8 Colecciones Académicas:**
  - 🇵🇪 **Teoría UNI:** 21 clases magistrales del Prof. Tello con teoría rigurosa.
  - 🇵🇪 **Sesiones Oficiales CF2B1:** 27 presentaciones semanales del curso.
  - 🇵🇪 **Bonus Track & Resúmenes:** 12 compendios teóricos y guías avanzadas.
  - 🇵🇪 **Exámenes & Solucionarios:** 51 pruebas oficiales con desarrollo paso a paso (PC1 a PC6, Parciales, Finales y Sustitutorios del 2015 al 2025).
  - 🇵🇪 **Laboratorios UNI:** 10 guías e informes de experimentos reales.
  - 🇺🇸 **Teoría MIT 8.02:** 14 capítulos completos del OpenCourseWare del MIT.
  - 🇺🇸 **Problem Solving MIT:** 11 guías de ejercicios resueltos y aplicaciones.
  - 🇺🇸 **Laboratorios TEAL MIT:** 10 manuales experimentales con visualizaciones.
- **Búsqueda en Tiempo Real con Resaltado:** Encuentra material escribiendo conceptos (`Gauss`, `Lorentz`, `Maxwell`), variables o ecuaciones.
- **Nivel de Dificultad:** Etiquetas claras (Básico, Intermedio, Avanzado) para organizar tu plan de estudio.
- **Renderizado Matemático:** Ecuaciones clave en formato LaTeX renderizadas con MathJax 3 en cada tarjeta.

### 2. 🗺️ Malla Curricular Paralela (UNI ↔ MIT)
- **Bento Roadmap Interactivo:** Mapeo temático que relaciona cada una de las 8 evaluaciones de la UNI (PC1–PC6, Parcial y Final) con los capítulos y problemas equivalentes del MIT 8.02.
- **Matriz Compacta:** Tabla comparativa para visualizar la correspondencia temático-semanal entre ambas instituciones.
- **Fórmulas Clave:** Resumen de las ecuaciones que se evalúan en cada etapa del curso.

### 3. 🎯 Radar Predictivo de Evaluaciones (IA)
- **Análisis Estadístico de más de 110 Exámenes:** Identifica los temas con mayor probabilidad de aparecer en las próximas evaluaciones.
- **Barras de Probabilidad:** Frecuencia histórica por tema (ej. *Distribuciones Continuas de Carga* con 94% de recurrencia en PC1).
- **Trampas Típicas de Corrección:** Advertencias sobre los errores conceptuales y matemáticos más comunes detectados en las correcciones de la UNI.
- **Estrategia Recomendada:** Pasos concretos para afrontar con éxito cada tipo de examen.

### 4. 📅 Modo de Estudio por Semana (Semanas 1 a 16)
- Selector cronológico interactivo que reúne en un solo panel todo el material de la semana: la teoría de clase, la diapositiva oficial y la lectura complementaria del MIT.

### 5. ⭐ Mis Favoritos (Marcadores Persistentes)
- Guarda cualquier documento con un clic en la estrella (**☆**). Tus recursos favoritos se guardan localmente en tu navegador (`localStorage`) para que los tengas siempre a mano.

### 6. 📐 Formulario Maestro (Cheat-Sheet Imprimible)
- Formulario de ecuaciones de Electromagnetismo estructurado en 8 grandes bloques:
  1. *Electrostática & Ley de Coulomb*
  2. *Ley de Gauss & Flujo Eléctrico*
  3. *Potencial Eléctrico & Energía de Ensamble*
  4. *Capacitancia & Dieléctricos*
  5. *Corriente Eléctrica & Circuitos DC*
  6. *Fuerza Magnética, Lorentz & Biot-Savart*
  7. *Inducción de Faraday-Lenz & Autoinducción*
  8. *Circuitos RLC en CA & Ecuaciones de Maxwell*
- **Botón de Impresión:** Diseñado con estilos `@media print` para generar un PDF limpio y listo para estudiar antes de tus evaluaciones.

---

## 📱 Experiencia Móvil & Diseño

- **100% Responsivo:** Adaptado a pantallas de celulares, tablets y monitores de escritorio.
- **Menú Drawer Desplegable:** Navegación táctil ágil en dispositivos móviles.
- **Controles con Scroll Táctil:** Selector de semanas, pestañas y chips de filtro desplazables de forma natural con el dedo.
- **Fórmulas Seguras:** Bloques matemáticos con scroll horizontal para evitar que las ecuaciones largas rompan la pantalla.
- **Estética Dark Glassmorphism:** Fondo oscuro con iluminación ambiental que protege tu vista durante sesiones nocturnas de estudio.

---

## 🚀 Acceso al Portal

No necesitas instalar nada. Accede directamente desde tu navegador en:

👉 [**https://minilux0.github.io/F3-8.02/**](https://minilux0.github.io/F3-8.02/)

---

## 📁 Estructura del Repositorio

```
F3-8.02/
├── index.html                      # Estructura principal y componentes
├── README.md                       # Documentación del proyecto
├── src/
│   ├── css/
│   │   └── main.css                # Estilos, tokens HSL y reglas responsivas
│   └── js/
│       ├── data.js                 # Base de datos de 146 recursos, malla y predicciones
│       └── app.js                  # Lógica de navegación, búsqueda y MathJax
├── CF2B1_Fisica_III_UNI/           # Material oficial UNI (Teoría, Exámenes, Labs)
└── 8.02-spring-2007/               # Material oficial MIT 8.02 OpenCourseWare
```

---

*Portal académico desarrollado para la comunidad universitaria de ingeniería y ciencias.*
