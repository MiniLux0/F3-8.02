// src/js/data.js
// Banco de Datos Maestro: Recursos, Malla Curricular UNI-MIT, Radar Predictivo y Formulario

window.PORTAL_DATA = (function() {
  
  // ── 1. MAPA DE SEMANAS ACADÉMICAS ──
  const WEEKS_DATA = [
    { week: 1, title: 'Carga Eléctrica & Interacción', desc: 'Cuantización de carga, conductores/aislantes, electroscopio y Ley de Coulomb.' },
    { week: 2, title: 'Campo Eléctrico & Distribuciones Continuas', desc: 'Principio de superposición, líneas de fuerza, campo de anillo, disco y varilla.' },
    { week: 3, title: 'Ley de Gauss & Flujo Eléctrico', desc: 'Flujo vectorial, ángulo sólido, superficies gaussianas con simetría esférica/cilíndrica.' },
    { week: 4, title: 'Potencial Eléctrico & Gradiente', desc: 'Diferencia de potencial, trabajo eléctrico, superficies equipotenciales y relación E = -grad V.' },
    { week: 5, title: 'Energía Electrostática & Ensamble', desc: 'Energía de sistemas discretos y continuos, densidad de energía u = 1/2 ε₀ E².' },
    { week: 6, title: 'Capacitancia & Dieléctricos', desc: 'Cálculo de C en diversas geometrías, polarización, vector desplazamiento D y Gauss con dieléctrico.' },
    { week: 7, title: 'Corriente Eléctrica & Resistencia', desc: 'Densidad de corriente J, ley de Ohm microscópica, modelo de Drude y leyes de Kirchhoff.' },
    { week: 8, title: 'Semana de Exámenes Parciales (EP)', desc: 'Evaluación integral de Electrostática, Energía, Capacitores y Circuitos DC.' },
    { week: 9, title: 'Circuitos DC Avanzados & Transitorios RC', desc: 'Análisis de mallas y nodos, teoremas circuitales, carga y descarga en circuitos RC.' },
    { week: 10, title: 'Fuerza Magnética & Ley de Lorentz', desc: 'Fuerza sobre cargas y corrientes, selector de velocidades, ciclotrón y efecto Hall.' },
    { week: 11, title: 'Fuentes de Campo Magnético & Ampère', desc: 'Ley de Biot-Savart, Ley de Ampère circuital, solenoides, toroides y potencial vector A.' },
    { week: 12, title: 'Inducción Electromagnética & Faraday-Lenz', desc: 'FEM inducida motriz y transformacional, Ley de Lenz, corrientes de Foucault.' },
    { week: 13, title: 'Autoinducción & Circuitos RL/RLC', desc: 'Coeficiente de autoinducción L, inductancia mutua M, densidad de energía magnética u_B.' },
    { week: 14, title: 'Corriente Alterna & Fasores', desc: 'Impedancia compleja Z, diagramas fasoriales, potencia activa/reactiva y resonancia RLC.' },
    { week: 15, title: 'Ecuaciones de Maxwell & Ondas EM', desc: 'Corriente de desplazamiento, síntesis de Maxwell, ecuación de onda y Vector de Poynting.' },
    { week: 16, title: 'Semana de Exámenes Finales (EF)', desc: 'Evaluación integral de todo el curso (Electrostática + Magnetostática + Maxwell).' }
  ];

  // ── 2. CATÁLOGO COMPLETO DE RECURSOS ACADÉMICOS (146 items validados) ──
  const RESOURCES = [
    // ── TEORÍA UNI (21 Clases Magistrales) ──
    {
      id: 'uni-teoria-01',
      title: 'Sem 1 Cl. 01 — Carga Eléctrica',
      category: 'teoria-uni',
      week: 1,
      chapter: 1,
      difficulty: 'basico',
      formula: 'q = n \\cdot e',
      desc: 'Cargas, cuantización, conductores/aislantes, electroscopio, jaula de Faraday.',
      tags: ['Carga', 'Electrostática', 'Faraday', 'Cuantización'],
      href: 'CF2B1_Fisica_III_UNI/Material_Oficial_UNI/Clases/Teoria_UNI/Sem01_Clase01_Carga.pdf'
    },
    {
      id: 'uni-teoria-02',
      title: 'Sem 1 Cl. 02 — Interacción Eléctrica',
      category: 'teoria-uni',
      week: 1,
      chapter: 2,
      difficulty: 'basico',
      formula: '\\vec{F}_{12} = \\frac{1}{4\\pi\\varepsilon_0} \\frac{q_1 q_2}{r_{12}^2} \\hat{r}_{12}',
      desc: 'Ley de Coulomb, fuerza entre cargas puntuales, principio de superposición vectorial.',
      tags: ['Coulomb', 'Superposición', 'Fuerza', 'Cargas'],
      href: 'CF2B1_Fisica_III_UNI/Material_Oficial_UNI/Clases/Teoria_UNI/Sem01_Clase02_Interaccion_Electrica.pdf'
    },
    {
      id: 'uni-teoria-03',
      title: 'Sem 2 Cl. 01 — Campo Eléctrico I',
      category: 'teoria-uni',
      week: 2,
      chapter: 1,
      difficulty: 'intermedio',
      formula: '\\vec{E} = \\lim_{q_0 \\to 0} \\frac{\\vec{F}}{q_0}',
      desc: 'Noción de campo vectorial, líneas de fuerza, campo de carga puntual y dipolo eléctrico.',
      tags: ['Campo Eléctrico', 'Líneas de Fuerza', 'Dipolo'],
      href: 'CF2B1_Fisica_III_UNI/Material_Oficial_UNI/Clases/Teoria_UNI/Sem02_Clase01_Campo_Electrico.pdf'
    },
    {
      id: 'uni-teoria-04',
      title: 'Sem 2 Cl. 02 — Campo Eléctrico II',
      category: 'teoria-uni',
      week: 2,
      chapter: 2,
      difficulty: 'avanzado',
      formula: '\\vec{E} = \\frac{1}{4\\pi\\varepsilon_0} \\int \\frac{dq}{r^2}\\hat{r}',
      desc: 'Campo de distribuciones continuas: anillo, disco, cilindro, plano infinito.',
      tags: ['Distribución Continua', 'Anillo', 'Disco', 'Integrales'],
      href: 'CF2B1_Fisica_III_UNI/Material_Oficial_UNI/Clases/Teoria_UNI/Sem02_Clase02_Campo_Electrico.pdf'
    },
    {
      id: 'uni-teoria-05',
      title: 'Sem 3 Cl. 01 — Ley de Gauss I',
      category: 'teoria-uni',
      week: 3,
      chapter: 4,
      difficulty: 'intermedio',
      formula: '\\Phi_E = \\oint_S \\vec{E} \\cdot d\\vec{A} = \\frac{Q_{\\text{enc}}}{\\varepsilon_0}',
      desc: 'Flujo eléctrico, ángulo sólido, enunciado fundamental de la Ley de Gauss.',
      tags: ['Gauss', 'Flujo Eléctrico', 'Ángulo Sólido'],
      href: 'CF2B1_Fisica_III_UNI/Material_Oficial_UNI/Clases/Teoria_UNI/Sem03_Clase01_Ley_de_Gauss.pdf'
    },
    {
      id: 'uni-teoria-06',
      title: 'Sem 3 Cl. 02 — Ley de Gauss II',
      category: 'teoria-uni',
      week: 3,
      chapter: 4,
      difficulty: 'avanzado',
      formula: '\\vec{\\nabla} \\cdot \\vec{E} = \\frac{\\rho}{\\varepsilon_0}',
      desc: 'Aplicaciones: conductores en equilibrio, esferas concéntricas, cilindros coaxiales.',
      tags: ['Gauss', 'Simetría', 'Conductor', 'Esfera'],
      href: 'CF2B1_Fisica_III_UNI/Material_Oficial_UNI/Clases/Teoria_UNI/Sem03_Clase02_Ley_de_Gauss.pdf'
    },
    {
      id: 'uni-teoria-07',
      title: 'Sem 4 Cl. 01 — Potencial Eléctrico I',
      category: 'teoria-uni',
      week: 4,
      chapter: 3,
      difficulty: 'intermedio',
      formula: 'V_B - V_A = -\\int_A^B \\vec{E} \\cdot d\\vec{\\ell}',
      desc: 'Diferencia de potencial, superficies equipotenciales, relación diferencial E = -grad V.',
      tags: ['Potencial', 'Equipotencial', 'Gradiente'],
      href: 'CF2B1_Fisica_III_UNI/Material_Oficial_UNI/Clases/Teoria_UNI/Sem04_Clase01_Potencial_Electrico.pdf'
    },
    {
      id: 'uni-teoria-08',
      title: 'Sem 4 Cl. 02 — Potencial Eléctrico II',
      category: 'teoria-uni',
      week: 4,
      chapter: 3,
      difficulty: 'avanzado',
      formula: 'V(\\vec{r}) = \\frac{1}{4\\pi\\varepsilon_0} \\int \\frac{dq}{|\\vec{r} - \\vec{r}\'|}',
      desc: 'Potencial de distribuciones continuas, propiedades de conductores y energía de ensamble.',
      tags: ['Potencial', 'Distribución Continua', 'Conductores'],
      href: 'CF2B1_Fisica_III_UNI/Material_Oficial_UNI/Clases/Teoria_UNI/Sem04_Clase02_Potencial_Electrico.pdf'
    },
    {
      id: 'uni-teoria-09',
      title: 'Sem 4 — Ejemplos de Potencial',
      category: 'teoria-uni',
      week: 4,
      chapter: 3,
      difficulty: 'avanzado',
      formula: 'V = \\frac{\\sigma}{2\\varepsilon_0} \\left(\\sqrt{z^2 + R^2} - z\\right)',
      desc: 'Colección de problemas resueltos paso a paso: anillo, disco, esfera y conductor.',
      tags: ['Ejemplos', 'Potencial', 'Problemas Resueltos'],
      href: 'CF2B1_Fisica_III_UNI/Material_Oficial_UNI/Clases/Teoria_UNI/Sem04_Ejemplos.pdf'
    },
    {
      id: 'uni-teoria-10',
      title: 'Sem 5 Cl. 01 — Energía Electrostática I',
      category: 'teoria-uni',
      week: 5,
      chapter: 3,
      difficulty: 'intermedio',
      formula: 'U = \\frac{1}{2} \\sum_{i=1}^n q_i V_i',
      desc: 'Energía potencial electrostática de sistemas de cargas discretas y configuraciones.',
      tags: ['Energía', 'Potencial', 'Cargas Discretas'],
      href: 'CF2B1_Fisica_III_UNI/Material_Oficial_UNI/Clases/Teoria_UNI/Sem05_Clase01_Energia_Electrostatica.pdf'
    },
    {
      id: 'uni-teoria-11',
      title: 'Sem 5 Cl. 02 — Energía Electrostática II',
      category: 'teoria-uni',
      week: 5,
      chapter: 3,
      difficulty: 'avanzado',
      formula: 'u_E = \\frac{1}{2}\\varepsilon_0 E^2, \\quad U = \\int u_E dV',
      desc: 'Energía almacenada en el campo eléctrico: densidad u y cálculo por integración espacial.',
      tags: ['Densidad de Energía', 'Campo Eléctrico', 'Integrales'],
      href: 'CF2B1_Fisica_III_UNI/Material_Oficial_UNI/Clases/Teoria_UNI/Sem05_Clase02_Energia_Electrostatica.pdf'
    },
    {
      id: 'uni-teoria-12',
      title: 'Sem 6 Cl. 01 — Capacitancia I',
      category: 'teoria-uni',
      week: 6,
      chapter: 5,
      difficulty: 'intermedio',
      formula: 'C = \\frac{Q}{V}, \\quad C_0 = \\frac{\\varepsilon_0 A}{d}',
      desc: 'Definición de capacitancia, cálculo para condensadores planos, cilíndricos y esféricos.',
      tags: ['Capacitancia', 'Condensador', 'Placas Paralelas'],
      href: 'CF2B1_Fisica_III_UNI/Material_Oficial_UNI/Clases/Teoria_UNI/Sem06_Clase01_Capacitancia.pdf'
    },
    {
      id: 'uni-teoria-13',
      title: 'Sem 6 Cl. 02 — Capacitancia II',
      category: 'teoria-uni',
      week: 6,
      chapter: 5,
      difficulty: 'intermedio',
      formula: 'U = \\frac{1}{2} C V^2 = \\frac{Q^2}{2C}',
      desc: 'Asociación serie y paralelo, energía en condensadores y fuerzas electrostáticas.',
      tags: ['Serie', 'Paralelo', 'Energía', 'Presión Electrostática'],
      href: 'CF2B1_Fisica_III_UNI/Material_Oficial_UNI/Clases/Teoria_UNI/Sem06_Clase02_Capacitancia.pdf'
    },
    {
      id: 'uni-teoria-14',
      title: 'Sem 6 Cl. 03 — Dieléctricos',
      category: 'teoria-uni',
      week: 6,
      chapter: 5,
      difficulty: 'avanzado',
      formula: '\\vec{D} = \\varepsilon_0 \\vec{E} + \\vec{P} = \\varepsilon_r \\varepsilon_0 \\vec{E}',
      desc: 'Polarización inducida, susceptibilidad, vector desplazamiento D, Gauss con dieléctrico.',
      tags: ['Dieléctrico', 'Polarización', 'Vector D', 'Gauss Generalizado'],
      href: 'CF2B1_Fisica_III_UNI/Material_Oficial_UNI/Clases/Teoria_UNI/Sem06_Clase03_Capacitancia.pdf'
    },
    {
      id: 'uni-teoria-15',
      title: 'Sem 7 Cl. 01 — Corriente y FEM I',
      category: 'teoria-uni',
      week: 7,
      chapter: 6,
      difficulty: 'basico',
      formula: 'I = \\int \\vec{J} \\cdot d\\vec{A}, \\quad \\vec{J} = \\sigma \\vec{E}',
      desc: 'Corriente, vector densidad de corriente J, Ley de Ohm microscópica y conductividad.',
      tags: ['Corriente', 'Densidad J', 'Ohm', 'Conductividad'],
      href: 'CF2B1_Fisica_III_UNI/Material_Oficial_UNI/Clases/Teoria_UNI/Sem07_Clase01_Corriente_Resistencia_FEM.pdf'
    },
    {
      id: 'uni-teoria-16',
      title: 'Sem 7 Cl. 02 — Corriente y FEM II',
      category: 'teoria-uni',
      week: 7,
      chapter: 6,
      difficulty: 'intermedio',
      formula: '\\mathcal{E} = \\oint \\vec{f}_{\\text{no-el}} \\cdot d\\vec{\\ell}, \\quad \\sum V = 0',
      desc: 'Modelo de Drude, fuerza electromotriz (FEM), Leyes de Kirchhoff y transitorio RC.',
      tags: ['Drude', 'FEM', 'Kirchhoff', 'RC'],
      href: 'CF2B1_Fisica_III_UNI/Material_Oficial_UNI/Clases/Teoria_UNI/Sem07_Clase02_Corriente_Resistencia_FEM.pdf'
    },
    {
      id: 'uni-teoria-17',
      title: 'Sem 9 Cl. 01 — Circuitos DC I',
      category: 'teoria-uni',
      week: 9,
      chapter: 7,
      difficulty: 'intermedio',
      formula: '\\sum I_{\\text{nodo}} = 0, \\quad \\sum \\Delta V_{\\text{malla}} = 0',
      desc: 'Análisis avanzado de circuitos de corriente continua, mallas, nodos, teoremas circuitales.',
      tags: ['Circuitos DC', 'Thévenin', 'Norton', 'Mallas'],
      href: 'CF2B1_Fisica_III_UNI/Material_Oficial_UNI/Clases/Teoria_UNI/Sem09_Clase01_Corriente_Resistencia_FEM.pdf'
    },
    {
      id: 'uni-teoria-18',
      title: 'Sem 9 Cl. 02 — Circuitos DC II',
      category: 'teoria-uni',
      week: 9,
      chapter: 7,
      difficulty: 'avanzado',
      formula: 'q(t) = C\\mathcal{E}(1 - e^{-t/RC}), \\quad \\tau = RC',
      desc: 'Transitorios RC, constante de tiempo tau y balance energético de circuitos.',
      tags: ['Transitorios RC', 'Balance Potencia', 'Tau'],
      href: 'CF2B1_Fisica_III_UNI/Material_Oficial_UNI/Clases/Teoria_UNI/Sem09_Clase02_Corriente_Resistencia_FEM.pdf'
    },
    {
      id: 'uni-teoria-19',
      title: 'Sem 9 — Ejemplos de Circuitos DC',
      category: 'teoria-uni',
      week: 9,
      chapter: 7,
      difficulty: 'intermedio',
      formula: 'P = I^2 R = \\frac{V^2}{R}',
      desc: 'Problemas resueltos y ejercicios modelo de análisis de mallas y corriente continua.',
      tags: ['Ejemplos DC', 'Kirchhoff', 'Ejercicios'],
      href: 'CF2B1_Fisica_III_UNI/Material_Oficial_UNI/Clases/Teoria_UNI/Sem09_Ejemplos.pdf'
    },
    {
      id: 'uni-teoria-20',
      title: 'Sem 10 Cl. 01 — Fuerza Magnética',
      category: 'teoria-uni',
      week: 10,
      chapter: 8,
      difficulty: 'intermedio',
      formula: '\\vec{F} = q(\\vec{E} + \\vec{v} \\times \\vec{B})',
      desc: 'Fuerza de Lorentz, trayectoria helicoidal, radio de Larmor, efecto Hall y aplicaciones.',
      tags: ['Lorentz', 'Campo Magnético', 'Efecto Hall', 'Ciclotrón'],
      href: 'CF2B1_Fisica_III_UNI/Material_Oficial_UNI/Clases/Teoria_UNI/Sem10_Clase01_Fuerza_Magnetica.pdf'
    },
    {
      id: 'uni-teoria-21',
      title: 'Sem 11 Cl. 01 — Ley de Biot-Savart & Ampère',
      category: 'teoria-uni',
      week: 11,
      chapter: 9,
      difficulty: 'avanzado',
      formula: 'd\\vec{B} = \\frac{\\mu_0}{4\\pi} \\frac{I d\\vec{\\ell} \\times \\hat{r}}{r^2}, \\quad \\oint \\vec{B} \\cdot d\\vec{\\ell} = \\mu_0 I_{\\text{enc}}',
      desc: 'Cálculo de campos magnéticos producidos por corrientes estacionarias, solenoide y toroide.',
      tags: ['Biot-Savart', 'Ampère', 'Solenoide', 'Magnetostática'],
      href: 'CF2B1_Fisica_III_UNI/Material_Oficial_UNI/Clases/Teoria_UNI/Sem10_Clase01_Fuerza_Magnetica.pdf'
    },

    // ── SESIONES SEMANALES OFICIALES UNI (Clases CF2B1) ──
    ...[
      { w:1, s:1, d:'Carga eléctrica, conductores, aislantes, electroscopio.' },
      { w:1, s:2, d:'Interacción de Coulomb, superposición y fuerzas vectoriales.' },
      { w:2, s:1, d:'Campo eléctrico de cargas puntuales y dipolos.' },
      { w:2, s:2, d:'Campo de distribuciones continuas: anillo, disco y varilla.' },
      { w:3, s:1, d:'Flujo eléctrico y enunciado de la Ley de Gauss.' },
      { w:3, s:2, d:'Aplicaciones de Gauss: cilindros, esferas y conductores.' },
      { w:4, s:1, d:'Potencial eléctrico y superficies equipotenciales.' },
      { w:4, s:2, d:'Gradiente de potencial y distribuciones continuas.' },
      { w:5, s:1, d:'Energía electrostática de ensamble de cargas.' },
      { w:5, s:2, d:'Densidad de energía en el campo eléctrico.' },
      { w:6, s:1, d:'Capacitancia y cálculo en diversas geometrías.' },
      { w:6, s:2, d:'Dieléctricos, polarización y vector desplazamiento.' },
      { w:7, s:1, d:'Corriente eléctrica, densidad de corriente y Ley de Ohm.' },
      { w:7, s:2, d:'Fuerza electromotriz (FEM) y leyes de Kirchhoff.' },
      { w:9, s:1, d:'Circuitos de corriente continua y métodos de mallas.' },
      { w:9, s:2, d:'Transitorios RC y balance de potencia en DC.' },
      { w:10, s:1, d:'Fuerza de Lorentz y movimiento de cargas en B.' },
      { w:10, s:2, d:'Fuerza sobre alambres con corriente y efecto Hall.' },
      { w:11, s:1, d:'Ley de Biot-Savart y espiras circulares.' },
      { w:11, s:2, d:'Ley de Ampère y campos en solenoides.' },
      { w:12, s:1, d:'Ley de Faraday y FEM inducida.' },
      { w:12, s:2, d:'Ley de Lenz y corrientes de Foucault.' },
      { w:13, s:1, d:'Autoinducción, inductancia mutua y energía magnética.' },
      { w:13, s:2, d:'Circuitos RL y oscilaciones LC.' },
      { w:14, s:1, d:'Corriente alterna, fasores e impedancia RLC.' },
      { w:14, s:2, d:'Resonancia en serie/paralelo y potencia en CA.' },
      { w:15, s:1, d:'Corriente de desplazamiento y Ecuaciones de Maxwell.' }
    ].map((item, idx) => {
      const semStr = String(item.w).padStart(2, '0');
      const sesStr = String(item.s).padStart(2, '0');
      return {
        id: `uni-sesion-${item.w}-${item.s}`,
        title: `Semana ${item.w} Sesión ${item.s} — Diapositiva CF2B1`,
        category: 'sesiones-uni',
        week: item.w,
        chapter: Math.min(14, Math.ceil(item.w * 0.95)),
        difficulty: item.w <= 4 ? 'basico' : item.w <= 9 ? 'intermedio' : 'avanzado',
        formula: item.w === 1 ? 'F = k\\frac{q_1 q_2}{r^2}' : item.w === 3 ? '\\oint \\vec{E} \\cdot d\\vec{A} = \\frac{Q}{\\varepsilon_0}' : item.w === 12 ? '\\mathcal{E} = -\\frac{d\\Phi_B}{dt}' : '\\vec{J} = \\sigma \\vec{E}',
        desc: item.d,
        tags: [`Semana ${item.w}`, `Sesión ${item.s}`, 'Oficial UNI', 'CF2B1'],
        href: `CF2B1_Fisica_III_UNI/Material_Oficial_UNI/Clases/Semana_${semStr}_Sesion_${sesStr}_CF2B1.pdf`
      };
    }),

    // ── BONUS TRACK UNI (12 PDFs Selectos) ──
    {
      id: 'uni-bonus-01',
      title: 'Cargas y Campo Eléctrico (Compendio)',
      category: 'bonus',
      week: 2,
      chapter: 2,
      difficulty: 'avanzado',
      formula: '\\vec{E}(\\vec{r}) = \\frac{1}{4\\pi\\varepsilon_0} \\int_V \\frac{\\rho(\\vec{r}\')(\\vec{r} - \\vec{r}\')}{|\\vec{r} - \\vec{r}\'|^3} dV\'',
      desc: 'Fundamentos rigurosos, distribuciones continuas e integrales de campo electrostático.',
      tags: ['Bonus', 'Campo Eléctrico', 'Distribuciones Continuas'],
      href: 'CF2B1_Fisica_III_UNI/Material_Oficial_UNI/Clases/Bonus_Track/Bonus_Cargas_Campo_Electrico.pdf'
    },
    {
      id: 'uni-bonus-02',
      title: 'Electrocinética & Portadores de Carga',
      category: 'bonus',
      week: 7,
      chapter: 6,
      difficulty: 'intermedio',
      formula: '\\vec{J} = n q \\vec{v}_d, \\quad \\rho = \\frac{m}{n e^2 \\tau}',
      desc: 'Teoría exhaustiva de portadores de carga, densidad de corriente y modelo de Drude.',
      tags: ['Bonus', 'Electrocinética', 'Drude', 'Ohm'],
      href: 'CF2B1_Fisica_III_UNI/Material_Oficial_UNI/Clases/Bonus_Track/Bonus_Electrocinetica.pdf'
    },
    {
      id: 'uni-bonus-03',
      title: 'Dieléctricos y Polarización Microscópica',
      category: 'bonus',
      week: 6,
      chapter: 5,
      difficulty: 'avanzado',
      formula: '\\vec{P} = \\chi_e \\varepsilon_0 \\vec{E}, \\quad \\sigma_b = \\vec{P} \\cdot \\hat{n}',
      desc: 'Mecanismos microscópicos de polarización, susceptibilidad y energía en dieléctricos.',
      tags: ['Bonus', 'Dieléctricos', 'Polarización', 'Clausius-Mossotti'],
      href: 'CF2B1_Fisica_III_UNI/Material_Oficial_UNI/Clases/Bonus_Track/Bonus_Dielectricos.pdf'
    },
    {
      id: 'uni-bonus-04',
      title: 'Magnetostática & Potencial Vector',
      category: 'bonus',
      week: 11,
      chapter: 9,
      difficulty: 'avanzado',
      formula: '\\vec{B} = \\vec{\\nabla} \\times \\vec{A}, \\quad \\nabla^2 \\vec{A} = -\\mu_0 \\vec{J}',
      desc: 'Ley de Biot-Savart, Ley de Ampère, potencial vector magnético A y condiciones de frontera.',
      tags: ['Bonus', 'Magnetostática', 'Potencial Vector A', 'Ampère'],
      href: 'CF2B1_Fisica_III_UNI/Material_Oficial_UNI/Clases/Bonus_Track/Bonus_Magnetostatica.pdf'
    },
    {
      id: 'uni-bonus-05',
      title: 'Magnetismo en Medios Materiales',
      category: 'bonus',
      week: 11,
      chapter: 9,
      difficulty: 'avanzado',
      formula: '\\vec{H} = \\frac{\\vec{B}}{\\mu_0} - \\vec{M}, \\quad \\vec{B} = \\mu_r \\mu_0 \\vec{H}',
      desc: 'Diamagnetismo, paramagnetismo, ferromagnetismo, vector imanación M y vector H.',
      tags: ['Bonus', 'Magnetismo', 'Vector H', 'Imanación'],
      href: 'CF2B1_Fisica_III_UNI/Material_Oficial_UNI/Clases/Bonus_Track/Bonus_Magnetismo_Medios_Materiales.pdf'
    },
    {
      id: 'uni-bonus-06',
      title: 'Inducción Electromagnética & Lenz',
      category: 'bonus',
      week: 12,
      chapter: 10,
      difficulty: 'intermedio',
      formula: '\\mathcal{E} = -\\frac{d}{dt} \\iint_S \\vec{B} \\cdot d\\vec{A}',
      desc: 'Ley de Faraday-Lenz, FEM rotacional y transformacional, inductancia y energía magnética.',
      tags: ['Bonus', 'Faraday', 'Lenz', 'Inducción'],
      href: 'CF2B1_Fisica_III_UNI/Material_Oficial_UNI/Clases/Bonus_Track/Bonus_Induccion_Electromagnetica.pdf'
    },
    {
      id: 'uni-bonus-07',
      title: 'Corriente Alterna & Régimen Sinusoidal',
      category: 'bonus',
      week: 14,
      chapter: 12,
      difficulty: 'avanzado',
      formula: '\\tilde{Z} = R + j\\left(\\omega L - \\frac{1}{\\omega C}\\right)',
      desc: 'Circuitos RLC en régimen sinusoidal, fasores, admitancia, potencia activa y reactiva.',
      tags: ['Bonus', 'Corriente Alterna', 'Fasores', 'Impedancia'],
      href: 'CF2B1_Fisica_III_UNI/Material_Oficial_UNI/Clases/Bonus_Track/Bonus_Corriente_Alterna.pdf'
    },
    {
      id: 'uni-bonus-08',
      title: 'Ondas Electromagnéticas & Maxwell',
      category: 'bonus',
      week: 15,
      chapter: 13,
      difficulty: 'avanzado',
      formula: '\\nabla^2 \\vec{E} = \\mu_0 \\varepsilon_0 \\frac{\\partial^2 \\vec{E}}{\\partial t^2}, \\quad c = \\frac{1}{\\sqrt{\\mu_0 \\varepsilon_0}}',
      desc: 'Ecuaciones de Maxwell completas, deducción de la ecuación de onda y Vector de Poynting.',
      tags: ['Bonus', 'Maxwell', 'Ondas EM', 'Poynting'],
      href: 'CF2B1_Fisica_III_UNI/Material_Oficial_UNI/Clases/Bonus_Track/Bonus_Ondas_Electromagneticas.pdf'
    },
    {
      id: 'uni-bonus-09',
      title: 'Resumen Teórico 1 — Electrostática',
      category: 'bonus',
      week: 4,
      chapter: 3,
      difficulty: 'intermedio',
      formula: '\\vec{E} = -\\vec{\\nabla}V, \\quad \\nabla^2 V = -\\frac{\\rho}{\\varepsilon_0}',
      desc: 'Formulario y síntesis conceptual de Electrostática, Gauss, Potencial y Poisson.',
      tags: ['Bonus', 'Resumen', 'Formulario', 'Electrostática'],
      href: 'CF2B1_Fisica_III_UNI/Material_Oficial_UNI/Clases/Bonus_Track/Bonus_Resumen_1_Electrostatica.pdf'
    },
    {
      id: 'uni-bonus-10',
      title: 'Resumen Teórico 2 — Magnetismo y Maxwell',
      category: 'bonus',
      week: 15,
      chapter: 13,
      difficulty: 'avanzado',
      formula: '\\vec{S} = \\frac{1}{\\mu_0} \\vec{E} \\times \\vec{B}',
      desc: 'Formulario y síntesis conceptual de Magnetostática, Inducción y Maxwell.',
      tags: ['Bonus', 'Resumen', 'Formulario', 'Magnetismo', 'Maxwell'],
      href: 'CF2B1_Fisica_III_UNI/Material_Oficial_UNI/Clases/Bonus_Track/Bonus_Resumen_2_Magnetismo_Maxwell.pdf'
    },
    {
      id: 'uni-bonus-11',
      title: 'Problemas Diversos 2022-II',
      category: 'bonus',
      week: 8,
      chapter: 4,
      difficulty: 'avanzado',
      formula: 'W = \\Delta U = q\\Delta V',
      desc: 'Compilado selecto de problemas avanzados de exámenes con soluciones explicadas.',
      tags: ['Bonus', 'Ejercicios Resueltos', 'Examen'],
      href: 'CF2B1_Fisica_III_UNI/Material_Oficial_UNI/Clases/Bonus_Track/Bonus_Problemas_Diversos_2022_2.pdf'
    },
    {
      id: 'uni-bonus-12',
      title: 'Problemas Propuestos PC3',
      category: 'bonus',
      week: 6,
      chapter: 5,
      difficulty: 'avanzado',
      formula: 'C = 4\\pi\\varepsilon_0 \\frac{a b}{b - a}',
      desc: 'Banco de problemas desafiantes para la Práctica Calificada 3 (Capacitancia y Dieléctricos).',
      tags: ['Bonus', 'PC3', 'Capacitores', 'Problemas Propuestos'],
      href: 'CF2B1_Fisica_III_UNI/Material_Oficial_UNI/Clases/Bonus_Track/Bonus_Problemas_Propuestos_PC3.pdf'
    },

    // ── LABORATORIOS UNI (Guías e Informes Oficiales) ──
    {
      id: 'uni-lab-01',
      title: 'Lab 1 — Guía de Curvas Equipotenciales',
      category: 'labs-uni',
      week: 4,
      chapter: 3,
      difficulty: 'basico',
      formula: '\\Delta V = 0 \\implies \\vec{E} \\perp d\\vec{\\ell}',
      desc: 'Guía oficial experimental de mapeo de superficies equipotenciales en cubeta electrolítica.',
      tags: ['Lab UNI', 'L1', 'Equipotenciales', 'Guía'],
      href: 'CF2B1_Fisica_III_UNI/Material_Oficial_UNI/Examenes_Pasados/2022-II/Laboratorio/Lab_01/Lab01_Guia_Curvas_Equipotenciales.pdf'
    },
    {
      id: 'uni-lab-02',
      title: 'Lab 1 — Informe Curvas Equipotenciales',
      category: 'labs-uni',
      week: 4,
      chapter: 3,
      difficulty: 'intermedio',
      formula: '\\vec{E} \\approx -\\frac{\\Delta V}{\\Delta x}\\hat{i}',
      desc: 'Informe experimental completo desarrollado por el Grupo 11 con datos y gráficas de campo.',
      tags: ['Lab UNI', 'L1', 'Equipotenciales', 'Informe'],
      href: 'CF2B1_Fisica_III_UNI/Material_Oficial_UNI/Examenes_Pasados/2022-II/Laboratorio/Lab_01/Lab01_Informe_Curvas_Equipotenciales.pdf'
    },
    {
      id: 'uni-lab-03',
      title: 'Lab 2 — Guía Curvas Características V-I',
      category: 'labs-uni',
      week: 7,
      chapter: 6,
      difficulty: 'basico',
      formula: 'V = I R, \\quad R = \\frac{dV}{dI}',
      desc: 'Guía experimental de determinación de curvas Voltaje-Corriente para elementos óhmicos y no óhmicos.',
      tags: ['Lab UNI', 'L2', 'Curvas V-I', 'Ohm'],
      href: 'CF2B1_Fisica_III_UNI/Material_Oficial_UNI/Examenes_Pasados/2022-II/Laboratorio/Lab_02/Lab02_Guia_Curvas_VI.pdf'
    },
    {
      id: 'uni-lab-04',
      title: 'Lab 2 — Informe Curvas V-I',
      category: 'labs-uni',
      week: 7,
      chapter: 6,
      difficulty: 'intermedio',
      formula: 'R_{\\text{din}} = \\left(\\frac{dI}{dV}\\right)^{-1}',
      desc: 'Informe experimental con ajuste por mínimos cuadrados y cálculo de resistencias dinámicas.',
      tags: ['Lab UNI', 'L2', 'Curvas V-I', 'Informe'],
      href: 'CF2B1_Fisica_III_UNI/Material_Oficial_UNI/Examenes_Pasados/2022-II/Laboratorio/Lab_02/Lab02_Informe_Curvas_VI.pdf'
    },
    {
      id: 'uni-lab-05',
      title: 'Lab 3 — Guía Fuerza Electromotriz (FEM)',
      category: 'labs-uni',
      week: 7,
      chapter: 6,
      difficulty: 'basico',
      formula: 'V_{\\text{terminal}} = \\mathcal{E} - I r',
      desc: 'Guía experimental para la medición de FEM, resistencia interna de fuentes y rendimiento eléctrico.',
      tags: ['Lab UNI', 'L3', 'FEM', 'Resistencia Interna'],
      href: 'CF2B1_Fisica_III_UNI/Material_Oficial_UNI/Examenes_Pasados/2022-II/Laboratorio/Lab_03/Lab03_Guia_FEM.pdf'
    },
    {
      id: 'uni-lab-06',
      title: 'Lab 3 — Informe Fuerza Electromotriz',
      category: 'labs-uni',
      week: 7,
      chapter: 6,
      difficulty: 'intermedio',
      formula: 'P_{\\max} = \\frac{\\mathcal{E}^2}{4r} \\quad (R_L = r)',
      desc: 'Informe experimental con determinación de resistencia interna r y condición de máxima potencia.',
      tags: ['Lab UNI', 'L3', 'FEM', 'Informe'],
      href: 'CF2B1_Fisica_III_UNI/Material_Oficial_UNI/Examenes_Pasados/2022-II/Laboratorio/Lab_03/Lab03_Informe_FEM.pdf'
    },
    {
      id: 'uni-lab-07',
      title: 'Lab 4 — Guía Circuitos y Puente',
      category: 'labs-uni',
      week: 9,
      chapter: 7,
      difficulty: 'intermedio',
      formula: 'R_x = R_3 \\frac{R_2}{R_1} \\quad (\\text{Puente Balanceado})',
      desc: 'Guía experimental de circuitos de corriente continua, puente de Wheatstone y transitorios.',
      tags: ['Lab UNI', 'L4', 'Puente Wheatstone', 'Circuitos'],
      href: 'CF2B1_Fisica_III_UNI/Material_Oficial_UNI/Examenes_Pasados/2022-II/Laboratorio/Lab_04/Lab04_Guia_Circuitos_Puente.pdf'
    },
    {
      id: 'uni-lab-08',
      title: 'Lab 5 — Informe Balanza Magnética',
      category: 'labs-uni',
      week: 10,
      chapter: 8,
      difficulty: 'intermedio',
      formula: '\\vec{F} = I \\vec{L} \\times \\vec{B}',
      desc: 'Medición experimental de la fuerza magnética sobre un conductor rectilíneo con corriente.',
      tags: ['Lab UNI', 'L5', 'Balanza Magnética', 'Fuerza B'],
      href: 'CF2B1_Fisica_III_UNI/Material_Oficial_UNI/Examenes_Pasados/2022-II/Laboratorio/Lab_05/Lab05_Informe_Balanza_Magnetica.pdf'
    },
    {
      id: 'uni-lab-09',
      title: 'Lab 6 — Manual de Laboratorio N° 6',
      category: 'labs-uni',
      week: 12,
      chapter: 10,
      difficulty: 'intermedio',
      formula: '\\mathcal{E}_2 = -M \\frac{dI_1}{dt}',
      desc: 'Manual de prácticas sobre inducción electromagnética, transformadores y corriente alterna.',
      tags: ['Lab UNI', 'L6', 'Inducción', 'Transformador'],
      href: 'CF2B1_Fisica_III_UNI/Material_Oficial_UNI/Examenes_Pasados/2022-II/Laboratorio/Lab_06/Lab06_Manual_Induccion_Transformadores.pdf'
    },
    {
      id: 'uni-lab-10',
      title: 'Lab 6 — Informe Inducción y Transformadores',
      category: 'labs-uni',
      week: 12,
      chapter: 10,
      difficulty: 'avanzado',
      formula: '\\frac{V_2}{V_1} = \\frac{N_2}{N_1}, \\quad k = \\frac{M}{\\sqrt{L_1 L_2}}',
      desc: 'Informe experimental completo sobre inductancia mutua y factor de acoplamiento magnético.',
      tags: ['Lab UNI', 'L6', 'Acoplamiento', 'Informe'],
      href: 'CF2B1_Fisica_III_UNI/Material_Oficial_UNI/Examenes_Pasados/2022-II/Laboratorio/Lab_06/Lab06_Informe_Induccion_Transformadores.pdf'
    },

    // ── EXÁMENES Y SOLUCIONARIOS UNI (2015 al 2025) ──
    {
      id: 'uni-exam-2025-ef',
      title: 'Examen Final 2025-I',
      category: 'examenes',
      week: 16,
      chapter: 14,
      difficulty: 'avanzado',
      formula: '\\oint \\vec{B} \\cdot d\\vec{\\ell} = \\mu_0 I + \\mu_0 \\varepsilon_0 \\frac{d\\Phi_E}{dt}',
      desc: 'Enunciado oficial del Examen Final de Física III periodo 2025-I.',
      tags: ['2025-I', 'EF', 'Examen Final', 'Oficial'],
      href: 'CF2B1_Fisica_III_UNI/Material_Oficial_UNI/Examenes_Pasados/2025-I/exfinal_fisica3_2025_1.pdf'
    },
    {
      id: 'uni-exam-2025-ep',
      title: 'Examen Parcial 2025-I',
      category: 'examenes',
      week: 8,
      chapter: 7,
      difficulty: 'avanzado',
      formula: 'V = -\\int \\vec{E} \\cdot d\\vec{\\ell}',
      desc: 'Enunciado oficial del Examen Parcial de Física III periodo 2025-I.',
      tags: ['2025-I', 'EP', 'Examen Parcial', 'Oficial'],
      href: 'CF2B1_Fisica_III_UNI/Material_Oficial_UNI/Examenes_Pasados/2025-I/exparcial_fisica3_2025_1.pdf'
    },
    {
      id: 'uni-exam-2025-es',
      title: 'Examen Sustitutorio 2025-I',
      category: 'examenes',
      week: 16,
      chapter: 14,
      difficulty: 'avanzado',
      formula: '\\mathcal{E} = -\\frac{d\\Phi_B}{dt}',
      desc: 'Enunciado oficial del Examen Sustitutorio de Física III periodo 2025-I.',
      tags: ['2025-I', 'ES', 'Sustitutorio', 'Oficial'],
      href: 'CF2B1_Fisica_III_UNI/Material_Oficial_UNI/Examenes_Pasados/2025-I/exsusti_fisica3_2025_1.pdf'
    },
    {
      id: 'uni-exam-2024-sol-ef',
      title: 'Solucionario Examen Final 2024-II',
      category: 'examenes',
      week: 16,
      chapter: 14,
      difficulty: 'avanzado',
      formula: '\\vec{S} = \\frac{1}{\\mu_0} \\vec{E} \\times \\vec{B}',
      desc: 'Solución paso a paso del Examen Final CF2B1 periodo 2024-II.',
      tags: ['2024-II', 'EF', 'Solucionario Paso a Paso'],
      href: 'CF2B1_Fisica_III_UNI/Material_Oficial_UNI/Examenes_Pasados/2024-II/SOL-EF-CF2B1-24-2.pdf'
    },
    {
      id: 'uni-exam-2024-sol-es',
      title: 'Solucionario Sustitutorio 2024-II',
      category: 'examenes',
      week: 16,
      chapter: 14,
      difficulty: 'avanzado',
      formula: 'u = \\frac{1}{2}\\varepsilon_0 E^2 + \\frac{1}{2\\mu_0} B^2',
      desc: 'Solución paso a paso del Examen Sustitutorio CF2B1 periodo 2024-II.',
      tags: ['2024-II', 'ES', 'Solucionario'],
      href: 'CF2B1_Fisica_III_UNI/Material_Oficial_UNI/Examenes_Pasados/2024-II/SOL-ES-CF2B1-24-2.pdf'
    },
    {
      id: 'uni-exam-2024-ep',
      title: 'Examen Parcial 2024-II (EP)',
      category: 'examenes',
      week: 8,
      chapter: 7,
      difficulty: 'avanzado',
      formula: 'Q(t) = C\\mathcal{E}(1 - e^{-t/RC})',
      desc: 'Enunciados oficiales del Examen Parcial periodo 2024-II.',
      tags: ['2024-II', 'EP', 'Examen Parcial'],
      href: 'CF2B1_Fisica_III_UNI/Material_Oficial_UNI/Examenes_Pasados/2024-II/EP-CF2B1-24-2.pdf'
    },
    {
      id: 'uni-exam-2024-ef',
      title: 'Examen Final 2024-II (EF)',
      category: 'examenes',
      week: 16,
      chapter: 14,
      difficulty: 'avanzado',
      formula: '\\vec{\\nabla} \\times \\vec{E} = -\\frac{\\partial\\vec{B}}{\\partial t}',
      desc: 'Enunciados oficiales del Examen Final periodo 2024-II.',
      tags: ['2024-II', 'EF', 'Examen Final'],
      href: 'CF2B1_Fisica_III_UNI/Material_Oficial_UNI/Examenes_Pasados/2024-II/EF-CF2B1-24-2.pdf'
    },
    {
      id: 'uni-exam-2024-pc1',
      title: 'Práctica Calificada 1 (PC1 2024-II)',
      category: 'examenes',
      week: 3,
      chapter: 2,
      difficulty: 'intermedio',
      formula: '\\vec{E} = \\frac{1}{4\\pi\\varepsilon_0} \\int \\frac{\\lambda d\\ell}{r^2}\\hat{r}',
      desc: 'Cargas, Coulomb, distribuciones continuas de carga y superposición.',
      tags: ['2024-II', 'PC1', 'Coulomb', 'Campo'],
      href: 'CF2B1_Fisica_III_UNI/Material_Oficial_UNI/Examenes_Pasados/2024-II/PC1-CF2B1-24-2.pdf'
    },
    {
      id: 'uni-exam-2024-pc2',
      title: 'Práctica Calificada 2 (PC2 2024-II)',
      category: 'examenes',
      week: 5,
      chapter: 4,
      difficulty: 'avanzado',
      formula: '\\oint \\vec{E} \\cdot d\\vec{A} = \\frac{Q_{\\text{enc}}}{\\varepsilon_0}, \\quad V = -\\int \\vec{E} \\cdot d\\vec{\\ell}',
      desc: 'Ley de Gauss, potencial electrostático y cálculo de gradiente de potencial.',
      tags: ['2024-II', 'PC2', 'Gauss', 'Potencial'],
      href: 'CF2B1_Fisica_III_UNI/Material_Oficial_UNI/Examenes_Pasados/2024-II/PC2-CF2B1-24-2.pdf'
    },
    {
      id: 'uni-exam-2024-pc3',
      title: 'Práctica Calificada 3 (PC3 2024-II)',
      category: 'examenes',
      week: 7,
      chapter: 5,
      difficulty: 'avanzado',
      formula: 'C = \\frac{Q}{\\Delta V}, \\quad \\vec{D} = \\varepsilon \\vec{E}',
      desc: 'Energía electrostática, capacitancia, dieléctricos y vector desplazamiento.',
      tags: ['2024-II', 'PC3', 'Capacitancia', 'Dieléctricos'],
      href: 'CF2B1_Fisica_III_UNI/Material_Oficial_UNI/Examenes_Pasados/2024-II/PC3-CF2B1-24-2.pdf'
    },
    {
      id: 'uni-exam-2024-pc4',
      title: 'Práctica Calificada 4 (PC4 2024-II)',
      category: 'examenes',
      week: 9,
      chapter: 8,
      difficulty: 'intermedio',
      formula: '\\vec{F} = q(\\vec{E} + \\vec{v} \\times \\vec{B})',
      desc: 'Fuerza magnética, campo de Lorentz, efecto Hall y Biot-Savart.',
      tags: ['2024-II', 'PC4', 'Lorentz', 'Biot-Savart'],
      href: 'CF2B1_Fisica_III_UNI/Material_Oficial_UNI/Examenes_Pasados/2024-II/PC4-CF2B1-24-2.pdf'
    },
    {
      id: 'uni-exam-2024-pc5',
      title: 'Práctica Calificada 5 (PC5 2024-II)',
      category: 'examenes',
      week: 12,
      chapter: 10,
      difficulty: 'avanzado',
      formula: '\\oint \\vec{B} \\cdot d\\vec{\\ell} = \\mu_0 I_{\\text{enc}}, \\quad \\mathcal{E} = -\\frac{d\\Phi_B}{dt}',
      desc: 'Ley de Ampère, inducción electromagnética de Faraday y Ley de Lenz.',
      tags: ['2024-II', 'PC5', 'Ampère', 'Faraday'],
      href: 'CF2B1_Fisica_III_UNI/Material_Oficial_UNI/Examenes_Pasados/2024-II/PC5-CF2B1-24-2.pdf'
    },
    {
      id: 'uni-exam-2024-pc6',
      title: 'Práctica Calificada 6 (PC6 2024-II)',
      category: 'examenes',
      week: 14,
      chapter: 13,
      difficulty: 'avanzado',
      formula: 'Z = \\sqrt{R^2 + (\\omega L - 1/\\omega C)^2}',
      desc: 'Inductancia, circuitos RL/RLC en CA, resonancia y ecuaciones de Maxwell.',
      tags: ['2024-II', 'PC6', 'RLC', 'Maxwell'],
      href: 'CF2B1_Fisica_III_UNI/Material_Oficial_UNI/Examenes_Pasados/2024-II/PC6-CF2B1-24-2.pdf'
    },
    {
      id: 'uni-exam-2024-sol-pc1',
      title: 'Solucionarios PC1 a PC6 (2024-I)',
      category: 'examenes',
      week: 3,
      chapter: 2,
      difficulty: 'intermedio',
      formula: '\\vec{E} = \\frac{\\sigma}{2\\varepsilon_0}\\hat{n}',
      desc: 'Colección completa de solucionarios oficiales paso a paso de las Prácticas Calificadas 1 a 6.',
      tags: ['2024-I', 'Solucionarios PC', 'Oficial'],
      href: 'CF2B1_Fisica_III_UNI/Material_Oficial_UNI/Examenes_Pasados/2024-I/Practicas/Solucionarios/CF2B1_SOL_PC1.pdf'
    },
    {
      id: 'uni-exam-2023-sol-ep',
      title: 'Solucionario Examen Parcial 2023-II',
      category: 'examenes',
      week: 8,
      chapter: 7,
      difficulty: 'avanzado',
      formula: 'V = \\frac{Q}{4\\pi\\varepsilon_0 r}',
      desc: 'Solucionario paso a paso del Examen Parcial CF2B1 periodo 2023-II.',
      tags: ['2023-II', 'EP', 'Solucionario Parcial'],
      href: 'CF2B1_Fisica_III_UNI/Material_Oficial_UNI/Examenes_Pasados/2023-II/Examenes/Examen_Parcial_SOL_-_CF2B1_Silabo_Fisica_III_CF2B1_23-II.pdf'
    },
    {
      id: 'uni-exam-2023-sol-ef',
      title: 'Solucionario Examen Final 2023-II',
      category: 'examenes',
      week: 16,
      chapter: 14,
      difficulty: 'avanzado',
      formula: '\\vec{\\nabla} \\cdot \\vec{B} = 0',
      desc: 'Solucionario paso a paso del Examen Final CF2B1 periodo 2023-II.',
      tags: ['2023-II', 'EF', 'Solucionario Final'],
      href: 'CF2B1_Fisica_III_UNI/Material_Oficial_UNI/Examenes_Pasados/2023-II/Examenes/Examen_Final_SOL_-_CF2B1_Silabo_Fisica_III_CF2B1_23-II.pdf'
    },
    {
      id: 'uni-exam-2022-sol-ep',
      title: 'Solucionario Examen Parcial 2022-II',
      category: 'examenes',
      week: 8,
      chapter: 7,
      difficulty: 'avanzado',
      formula: 'C_{\\text{eq}} = \\frac{C_1 C_2}{C_1 + C_2}',
      desc: 'Solución paso a paso del Examen Parcial CF2B1 periodo 2022-II.',
      tags: ['2022-II', 'EP', 'Solucionario'],
      href: 'CF2B1_Fisica_III_UNI/Material_Oficial_UNI/Examenes_Pasados/2022-II/Examenes/SOL-EP-CF2B1-2022-2.pdf'
    },
    {
      id: 'uni-exam-formulario-oficial',
      title: 'Formulario Oficial de Electromagnetismo',
      category: 'examenes',
      week: 8,
      chapter: 13,
      difficulty: 'basico',
      formula: '\\text{Formulario Oficial UNI CF2B1}',
      desc: 'Compilado oficial de fórmulas y constantes físicas de Física III UNI.',
      tags: ['Formulario', 'Constantes', 'Oficial'],
      href: 'CF2B1_Fisica_III_UNI/Material_Oficial_UNI/Examenes_Pasados/2022-II/Formulario_Oficial_Electromagnetismo.pdf'
    },
    {
      id: 'uni-exam-historico-pc1',
      title: 'Compilado Histórico PC1 (2015–2018)',
      category: 'examenes',
      week: 3,
      chapter: 2,
      difficulty: 'avanzado',
      formula: '\\vec{F} = \\frac{q_1 q_2}{4\\pi\\varepsilon_0 r^2}\\hat{r}',
      desc: 'Colección de 10 exámenes y solucionarios de Práctica Calificada 1 desde 2015-I hasta 2018-II.',
      tags: ['Histórico', 'PC1', 'Banco de Preguntas'],
      href: 'CF2B1_Fisica_III_UNI/Material_Oficial_UNI/Examenes_Pasados/Historicos_PC1_2015_2018/PC1_2015-2.pdf'
    },

    // ── TEORÍA MIT 8.02 (14 Capítulos OCW) ──
    {
      id: 'mit-teoria-01',
      title: 'Cap 01 — Campos y Potencial',
      category: 'teoria-mit',
      week: 1,
      chapter: 1,
      difficulty: 'basico',
      formula: '\\vec{E} = -\\vec{\\nabla}V',
      desc: 'Introducción a campos vectoriales, líneas de campo, gradiente y rotacional.',
      tags: ['MIT 8.02', 'Campos', 'Gradiente', 'Cálculo Vectorial'],
      href: '8.02-spring-2007/static_resources/Chapter_01_Fields.pdf'
    },
    {
      id: 'mit-teoria-02',
      title: 'Cap 02 — Ley de Coulomb',
      category: 'teoria-mit',
      week: 2,
      chapter: 2,
      difficulty: 'basico',
      formula: '\\vec{F}_{e} = \\frac{1}{4\\pi\\varepsilon_0} \\frac{q_1 q_2}{r^2} \\hat{r}',
      desc: 'Fuerza electrostática, principio de superposición, distribuciones continuas.',
      tags: ['MIT 8.02', 'Coulomb', 'Superposición'],
      href: '8.02-spring-2007/static_resources/Chapter_02_Coulombs_Law.pdf'
    },
    {
      id: 'mit-teoria-03',
      title: 'Cap 03 — Potencial Eléctrico',
      category: 'teoria-mit',
      week: 4,
      chapter: 3,
      difficulty: 'intermedio',
      formula: 'V(r) = \\frac{q}{4\\pi\\varepsilon_0 r}',
      desc: 'Energía potencial eléctrica, trabajo, superficies equipotenciales.',
      tags: ['MIT 8.02', 'Potencial', 'Trabajo Eléctrico'],
      href: '8.02-spring-2007/static_resources/Chapter_03_Electric_Potential.pdf'
    },
    {
      id: 'mit-teoria-04',
      title: 'Cap 04 — Ley de Gauss',
      category: 'teoria-mit',
      week: 3,
      chapter: 4,
      difficulty: 'intermedio',
      formula: '\\Phi_E = \\oint \\vec{E} \\cdot d\\vec{A} = \\frac{Q_{\\text{in}}}{\\varepsilon_0}',
      desc: 'Flujo eléctrico, cálculo de campo en simetrías esférica, cilíndrica y plana.',
      tags: ['MIT 8.02', 'Gauss', 'Flujo', 'Simetría'],
      href: '8.02-spring-2007/static_resources/Chapter_04_Gauss_Law.pdf'
    },
    {
      id: 'mit-teoria-05',
      title: 'Cap 05 — Capacitancia y Dieléctricos',
      category: 'teoria-mit',
      week: 6,
      chapter: 5,
      difficulty: 'intermedio',
      formula: 'C = \\kappa C_0, \\quad U = \\frac{1}{2} C V^2',
      desc: 'Cálculo de capacitancia, almacenamiento de energía, polarización y constante dieléctrica.',
      tags: ['MIT 8.02', 'Capacitores', 'Dieléctricos'],
      href: '8.02-spring-2007/static_resources/Chapter_05_Capacitance.pdf'
    },
    {
      id: 'mit-teoria-06',
      title: 'Cap 06 — Corriente y Resistencia',
      category: 'teoria-mit',
      week: 7,
      chapter: 6,
      difficulty: 'basico',
      formula: 'R = \\frac{\\rho L}{A}, \\quad I = \\frac{V}{R}',
      desc: 'Densidad de corriente J, ley de Ohm, modelo de conducción de Drude.',
      tags: ['MIT 8.02', 'Corriente', 'Resistencia', 'Drude'],
      href: '8.02-spring-2007/static_resources/Chapter_06_Current_and_Resistance.pdf'
    },
    {
      id: 'mit-teoria-07',
      title: 'Cap 07 — Circuitos de Corriente Directa',
      category: 'teoria-mit',
      week: 9,
      chapter: 7,
      difficulty: 'intermedio',
      formula: '\\tau = RC, \\quad I(t) = \\frac{\\mathcal{E}}{R} e^{-t/RC}',
      desc: 'Leyes de Kirchhoff, reglas de mallas y nodos, análisis transitorio de circuitos RC.',
      tags: ['MIT 8.02', 'DC', 'Kirchhoff', 'RC Circuits'],
      href: '8.02-spring-2007/static_resources/Chapter_07_DC_Circuits.pdf'
    },
    {
      id: 'mit-teoria-08',
      title: 'Cap 08 — Campos Magnéticos',
      category: 'teoria-mit',
      week: 10,
      chapter: 8,
      difficulty: 'intermedio',
      formula: '\\vec{F}_B = q\\vec{v} \\times \\vec{B}, \\quad \\vec{\\tau} = \\vec{\\mu} \\times \\vec{B}',
      desc: 'Fuerza magnética de Lorentz, movimiento de cargas en campos B, torque sobre espiras.',
      tags: ['MIT 8.02', 'Magnetic Fields', 'Lorentz', 'Torque'],
      href: '8.02-spring-2007/static_resources/Chapter_08_Magnetic_Fields.pdf'
    },
    {
      id: 'mit-teoria-09',
      title: 'Cap 09 — Fuentes de Campo Magnético',
      category: 'teoria-mit',
      week: 11,
      chapter: 9,
      difficulty: 'avanzado',
      formula: 'B = \\frac{\\mu_0 I}{2\\pi r}, \\quad B = \\mu_0 n I',
      desc: 'Ley de Biot-Savart, Ley de Ampère, campo de alambres, espiras y solenoides.',
      tags: ['MIT 8.02', 'Biot-Savart', 'Ampere', 'Solenoid'],
      href: '8.02-spring-2007/static_resources/Chapter_09_Sources_of_B_Field.pdf'
    },
    {
      id: 'mit-teoria-10',
      title: 'Cap 10 — Ley de Faraday',
      category: 'teoria-mit',
      week: 12,
      chapter: 10,
      difficulty: 'intermedio',
      formula: '\\mathcal{E} = -\\frac{d\\Phi_B}{dt} = -\\frac{d}{dt}\\int \\vec{B} \\cdot d\\vec{A}',
      desc: 'Fem inducida, Ley de Lenz, inductancia mutua y generadores eléctricos.',
      tags: ['MIT 8.02', 'Faraday', 'Lenz', 'Induction'],
      href: '8.02-spring-2007/static_resources/Chapter_10_Faradays_Law.pdf'
    },
    {
      id: 'mit-teoria-11',
      title: 'Cap 11 — Inductancia',
      category: 'teoria-mit',
      week: 13,
      chapter: 11,
      difficulty: 'intermedio',
      formula: 'L = \\frac{N\\Phi_B}{I}, \\quad U_B = \\frac{1}{2} L I^2',
      desc: 'Autoinducción, energía magnética, circuitos RL y oscilaciones LC.',
      tags: ['MIT 8.02', 'Inductance', 'Energy', 'LC Circuit'],
      href: '8.02-spring-2007/static_resources/Chapter_11_Inductance.pdf'
    },
    {
      id: 'mit-teoria-12',
      title: 'Cap 12 — Circuitos de Corriente Alterna',
      category: 'teoria-mit',
      week: 14,
      chapter: 12,
      difficulty: 'avanzado',
      formula: 'I_{\\text{rms}} = \\frac{V_{\\text{rms}}}{Z}, \\quad \\omega_0 = \\frac{1}{\\sqrt{LC}}',
      desc: 'Análisis fasorial, impedancia compleja, resonancia en circuitos RLC en serie y paralelo.',
      tags: ['MIT 8.02', 'AC Circuits', 'RLC', 'Resonance'],
      href: '8.02-spring-2007/static_resources/Chapter_12_AC_Circuits.pdf'
    },
    {
      id: 'mit-teoria-13',
      title: 'Cap 13 — Maxwell y Ondas EM',
      category: 'teoria-mit',
      week: 15,
      chapter: 13,
      difficulty: 'avanzado',
      formula: 'c = \\frac{1}{\\sqrt{\\mu_0 \\varepsilon_0}} = 3 \\times 10^8\\text{ m/s}',
      desc: 'Corriente de desplazamiento, Ecuaciones de Maxwell completas, ondas electromagnéticas planas, Vector de Poynting.',
      tags: ['MIT 8.02', 'Maxwell Equations', 'EM Waves', 'Poynting'],
      href: '8.02-spring-2007/static_resources/Chapter_13_Maxwell_and_EM_Waves.pdf'
    },
    {
      id: 'mit-teoria-14',
      title: 'Cap 14 — Interferencia y Difracción',
      category: 'teoria-mit',
      week: 15,
      chapter: 14,
      difficulty: 'avanzado',
      formula: 'd \\sin\\theta = m\\lambda, \\quad a \\sin\\theta = m\\lambda',
      desc: 'Interferencia de Young, difracción de Fraunhofer por rendija simple y redes de difracción.',
      tags: ['MIT 8.02', 'Interference', 'Diffraction', 'Optics'],
      href: '8.02-spring-2007/static_resources/Chapter_14_Interference_and_Diffraction.pdf'
    },

    // ── PROBLEM SOLVING MIT 8.02 (11 Guías Prácticas) ──
    {
      id: 'mit-ps-01',
      title: 'PS 01 — Coordenadas e Integrales',
      category: 'ps-mit',
      week: 1,
      chapter: 1,
      difficulty: 'intermedio',
      formula: 'dV = r^2 \\sin\\theta dr d\\theta d\\phi',
      desc: 'Problemas de cálculo vectorial, sistemas de coordenadas e integrales de línea y superficie.',
      tags: ['MIT PS', 'Coordenadas', 'Integrales'],
      href: '8.02-spring-2007/static_resources/Problem_Solving_01_Coordinates_and_Integrals.pdf'
    },
    {
      id: 'mit-ps-02',
      title: 'PS 02 — Distribuciones Continuas',
      category: 'ps-mit',
      week: 2,
      chapter: 2,
      difficulty: 'avanzado',
      formula: 'E_z = \\frac{k Q z}{(z^2 + R^2)^{3/2}}',
      desc: 'Problemas resueltos de distribuciones continuas de carga y principio de superposición.',
      tags: ['MIT PS', 'Distribuciones Continuas', 'Campo'],
      href: '8.02-spring-2007/static_resources/Problem_Solving_02_Continuous_Charge_Distributions.pdf'
    },
    {
      id: 'mit-ps-03',
      title: 'PS 03 — Ley de Gauss',
      category: 'ps-mit',
      week: 3,
      chapter: 4,
      difficulty: 'intermedio',
      formula: 'E = \\frac{\\lambda}{2\\pi\\varepsilon_0 r}',
      desc: 'Problemas de flujo y aplicaciones de la Ley de Gauss a diversas simetrías.',
      tags: ['MIT PS', 'Gauss', 'Flujo'],
      href: '8.02-spring-2007/static_resources/Problem_Solving_03_Gauss_Law.pdf'
    },
    {
      id: 'mit-ps-04',
      title: 'PS 04 — Capacitores',
      category: 'ps-mit',
      week: 6,
      chapter: 5,
      difficulty: 'intermedio',
      formula: 'C = 2\\pi\\varepsilon_0 \\frac{L}{\\ln(b/a)}',
      desc: 'Problemas de cálculo de capacitancia, dieléctricos y energía electrostática.',
      tags: ['MIT PS', 'Capacitores', 'Energía'],
      href: '8.02-spring-2007/static_resources/Problem_Solving_04_Capacitors.pdf'
    },
    {
      id: 'mit-ps-05',
      title: 'PS 05 — Ley de Ampère',
      category: 'ps-mit',
      week: 11,
      chapter: 9,
      difficulty: 'avanzado',
      formula: '\\oint \\vec{B} \\cdot d\\vec{\\ell} = \\mu_0 I',
      desc: 'Problemas de cálculo de campos magnéticos generados por corrientes estacionarias.',
      tags: ['MIT PS', 'Ampère', 'Campo B'],
      href: '8.02-spring-2007/static_resources/Problem_Solving_05_Amperes_Law.pdf'
    },
    {
      id: 'mit-ps-06',
      title: 'PS 06 — Fuerza y Torque en Espiras',
      category: 'ps-mit',
      week: 10,
      chapter: 8,
      difficulty: 'intermedio',
      formula: '\\vec{\\tau} = I\\vec{A} \\times \\vec{B}',
      desc: 'Problemas de fuerzas y torque magnético sobre espiras y momentos dipolares.',
      tags: ['MIT PS', 'Torque', 'Espira Dipolar'],
      href: '8.02-spring-2007/static_resources/Problem_Solving_06_Force_and_Torque_on_Current_Loop.pdf'
    },
    {
      id: 'mit-ps-07',
      title: 'PS 07 — Inductancia y Transformador',
      category: 'ps-mit',
      week: 13,
      chapter: 11,
      difficulty: 'avanzado',
      formula: 'M_{12} = \\frac{N_2 \\Phi_{21}}{I_1}',
      desc: 'Problemas de autoinducción, inductancia mutua, energía y acoplamiento.',
      tags: ['MIT PS', 'Inductancia', 'Transformador'],
      href: '8.02-spring-2007/static_resources/Problem_Solving_07_Inductance_and_Transformers.pdf'
    },
    {
      id: 'mit-ps-08',
      title: 'PS 08 — Circuitos RC y RL',
      category: 'ps-mit',
      week: 9,
      chapter: 7,
      difficulty: 'intermedio',
      formula: 'i(t) = \\frac{\\mathcal{E}}{R}(1 - e^{-t/(L/R)})',
      desc: 'Problemas de respuesta transitoria y constante de tiempo en circuitos de primer orden.',
      tags: ['MIT PS', 'RC', 'RL', 'Transitorios'],
      href: '8.02-spring-2007/static_resources/Problem_Solving_08_RC_and_RL_Circuits.pdf'
    },
    {
      id: 'mit-ps-09',
      title: 'PS 09 — Circuitos LRC Forzados',
      category: 'ps-mit',
      week: 14,
      chapter: 12,
      difficulty: 'avanzado',
      formula: '\\tan\\phi = \\frac{\\omega L - 1/\\omega C}{R}',
      desc: 'Problemas de impedancia, régimen permanente sinusoidal y resonancia.',
      tags: ['MIT PS', 'LRC', 'Fasores', 'Resonancia'],
      href: '8.02-spring-2007/static_resources/Problem_Solving_09_Driven_LRC_Circuits.pdf'
    },
    {
      id: 'mit-ps-10',
      title: 'PS 10 — Radiación Electromagnética',
      category: 'ps-mit',
      week: 15,
      chapter: 13,
      difficulty: 'avanzado',
      formula: '\\langle S \\rangle = \\frac{E_0 B_0}{2\\mu_0} = \\frac{E_0^2}{2\\mu_0 c}',
      desc: 'Problemas de ondas electromagnéticas, corriente de desplazamiento y vector de Poynting.',
      tags: ['MIT PS', 'Radiación', 'Poynting', 'Maxwell'],
      href: '8.02-spring-2007/static_resources/Problem_Solving_10_EM_Radiation.pdf'
    },
    {
      id: 'mit-ps-11',
      title: 'PS 11 — Interferencia Óptica',
      category: 'ps-mit',
      week: 15,
      chapter: 14,
      difficulty: 'intermedio',
      formula: 'I = I_0 \\cos^2\\left(\\frac{\\pi d \\sin\\theta}{\\lambda}\\right)',
      desc: 'Problemas de difracción por rendijas y redes de difracción.',
      tags: ['MIT PS', 'Interferencia', 'Difracción', 'Óptica'],
      href: '8.02-spring-2007/static_resources/Problem_Solving_11_Interference.pdf'
    },

    // ── LABORATORIOS MIT TEAL (10 Guías Experimentales) ──
    {
      id: 'mit-lab-01',
      title: 'Lab 01 — Líneas Equipotenciales y Campos',
      category: 'labs-mit',
      week: 4,
      chapter: 3,
      difficulty: 'basico',
      formula: '\\vec{E} = -\\frac{\\Delta V}{\\Delta s}\\hat{n}',
      desc: 'Mapeo experimental de superficies equipotenciales y líneas de campo eléctrico.',
      tags: ['MIT TEAL', 'Equipotenciales', 'Campos'],
      href: '8.02-spring-2007/static_resources/Experiment_01_Equipotential_Lines_and_Electric_Fields.pdf'
    },
    {
      id: 'mit-lab-02',
      title: 'Lab 02 — Cubeta de Hielo de Faraday',
      category: 'labs-mit',
      week: 1,
      chapter: 1,
      difficulty: 'basico',
      formula: 'Q_{\\text{inducida}} = -Q_{\\text{interna}}',
      desc: 'Experimento de inducción electrostática, distribución de carga y blindaje.',
      tags: ['MIT TEAL', 'Faraday Ice Pail', 'Blindaje'],
      href: '8.02-spring-2007/static_resources/Experiment_02_Faraday_Ice_Pail.pdf'
    },
    {
      id: 'mit-lab-03',
      title: 'Lab 03 — Campos Magnéticos y Helmholtz',
      category: 'labs-mit',
      week: 11,
      chapter: 9,
      difficulty: 'intermedio',
      formula: 'B = \\left(\\frac{4}{5}\\right)^{3/2} \\frac{\\mu_0 N I}{R}',
      desc: 'Medición de campos magnéticos creados por imanes y bobinas de Helmholtz.',
      tags: ['MIT TEAL', 'Helmholtz', 'Campo B'],
      href: '8.02-spring-2007/static_resources/Experiment_03_Magnetic_Fields_Bar_Magnet_Helmholtz.pdf'
    },
    {
      id: 'mit-lab-04',
      title: 'Lab 04 — Fuerzas y Torques Dipolares',
      category: 'labs-mit',
      week: 10,
      chapter: 8,
      difficulty: 'intermedio',
      formula: '\\vec{F} = \\vec{\\nabla}(\\vec{\\mu} \\cdot \\vec{B})',
      desc: 'Estudio experimental de momentos dipolares en campos magnéticos no uniformes.',
      tags: ['MIT TEAL', 'Fuerza Dipolar', 'Torque'],
      href: '8.02-spring-2007/static_resources/Experiment_04_Forces_and_Torques_on_Magnetic_Dipoles.pdf'
    },
    {
      id: 'mit-lab-05',
      title: 'Lab 05 — Ley de Faraday',
      category: 'labs-mit',
      week: 12,
      chapter: 10,
      difficulty: 'intermedio',
      formula: '\\mathcal{E} = -N \\frac{d\\Phi_B}{dt}',
      desc: 'Verificación cuantitativa de la Ley de Faraday mediante bobinas y flujo variable.',
      tags: ['MIT TEAL', 'Faraday', 'Inducción'],
      href: '8.02-spring-2007/static_resources/Experiment_05_Faradays_Law.pdf'
    },
    {
      id: 'mit-lab-06',
      title: 'Lab 06 — Ley de Ohm y Circuitos RC/RL',
      category: 'labs-mit',
      week: 9,
      chapter: 7,
      difficulty: 'intermedio',
      formula: 'V_C(t) = V_0 e^{-t/RC}',
      desc: 'Comportamiento dinámico de circuitos resistivos, capacitivos e inductivos.',
      tags: ['MIT TEAL', 'Ohm', 'RC', 'RL'],
      href: '8.02-spring-2007/static_resources/Experiment_06_Ohms_Law_RC_and_RL_Circuits.pdf'
    },
    {
      id: 'mit-lab-07',
      title: 'Lab 07 — Circuitos RLC Libres y Forzados I',
      category: 'labs-mit',
      week: 14,
      chapter: 12,
      difficulty: 'avanzado',
      formula: 'Q = \\frac{\\omega_0 L}{R} = \\frac{1}{R}\\sqrt{\\frac{L}{C}}',
      desc: 'Medición de respuesta en frecuencia, amortiguamiento y resonancia en RLC.',
      tags: ['MIT TEAL', 'RLC', 'Resonancia', 'Factor Q'],
      href: '8.02-spring-2007/static_resources/Experiment_07_Undriven_and_Driven_RLC_Circuits.pdf'
    },
    {
      id: 'mit-lab-08',
      title: 'Lab 08 — Circuitos RLC Libres y Forzados II',
      category: 'labs-mit',
      week: 14,
      chapter: 12,
      difficulty: 'avanzado',
      formula: '\\Delta\\phi = \\arctan\\left(\\frac{X_L - X_C}{R}\\right)',
      desc: 'Estudio avanzado de curvas de fase e impedancia en corriente alterna.',
      tags: ['MIT TEAL', 'RLC', 'Fase', 'Impedancia'],
      href: '8.02-spring-2007/static_resources/Experiment_08_Undriven_and_Driven_RLC_Circuits_Part2.pdf'
    },
    {
      id: 'mit-lab-09',
      title: 'Lab 09 — Interferencia y Difracción',
      category: 'labs-mit',
      week: 15,
      chapter: 14,
      difficulty: 'intermedio',
      formula: 'y_m = \\frac{m\\lambda L}{d}',
      desc: 'Experimento óptico de patrones de interferencia y difracción con láser.',
      tags: ['MIT TEAL', 'Interferencia', 'Láser'],
      href: '8.02-spring-2007/static_resources/Experiment_09_Interference_and_Diffraction.pdf'
    },
    {
      id: 'mit-lab-10',
      title: 'Manual Completo de Experimentos MIT',
      category: 'labs-mit',
      week: 16,
      chapter: 14,
      difficulty: 'avanzado',
      formula: '\\text{Compendio TEAL MIT 8.02}',
      desc: 'Compilado unificado de todas las prácticas y experimentos de laboratorio TEAL.',
      tags: ['MIT TEAL', 'Manual Completo', 'Experimentos'],
      href: '8.02-spring-2007/static_resources/Experiment_00_All_Experiments_Complete.pdf'
    }
  ];

  // ── 3. MALLA CURRICULAR COMPARATIVA: UNI CF2B1 ↔ MIT 8.02 ──
  const MALLA_MODULES = [
    {
      id: 'eval-pc1',
      code: 'PC1',
      title: 'Electrostática, Carga & Ley de Coulomb',
      week: 'Semana 3',
      desc: 'Carga eléctrica, cuantización, Ley de Coulomb vectorial, campo eléctrico de cargas discretas y distribuciones continuas (anillos, discos, cilindros infinitos).',
      formulas: [
        '\\vec{F}_{12} = \\frac{1}{4\\pi\\varepsilon_0} \\frac{q_1 q_2}{r^2} \\hat{r}',
        '\\vec{E} = \\frac{1}{4\\pi\\varepsilon_0} \\int \\frac{dq}{r^2}\\hat{r}',
        '\\vec{p} = q\\vec{d}, \\quad \\vec{\\tau} = \\vec{p} \\times \\vec{E}'
      ],
      tags: ['Coulomb', 'Campo Eléctrico', 'Distribuciones Continuas', 'Dipolo'],
      uniItems: [
        { title: 'Sem 1 Cl. 01 — Carga Eléctrica', href: 'CF2B1_Fisica_III_UNI/Material_Oficial_UNI/Clases/Teoria_UNI/Sem01_Clase01_Carga.pdf' },
        { title: 'Sem 1 Cl. 02 — Interacción Eléctrica', href: 'CF2B1_Fisica_III_UNI/Material_Oficial_UNI/Clases/Teoria_UNI/Sem01_Clase02_Interaccion_Electrica.pdf' },
        { title: 'Sem 2 Cl. 02 — Campo Eléctrico II', href: 'CF2B1_Fisica_III_UNI/Material_Oficial_UNI/Clases/Teoria_UNI/Sem02_Clase02_Campo_Electrico.pdf' },
        { title: 'Práctica Calificada 1 (PC1 2024-II)', href: 'CF2B1_Fisica_III_UNI/Material_Oficial_UNI/Examenes_Pasados/2024-II/PC1-CF2B1-24-2.pdf' }
      ],
      mitItems: [
        { title: 'Cap 01 — Campos y Potencial', href: '8.02-spring-2007/static_resources/Chapter_01_Fields.pdf' },
        { title: 'Cap 02 — Ley de Coulomb', href: '8.02-spring-2007/static_resources/Chapter_02_Coulombs_Law.pdf' },
        { title: 'PS 01 — Coordenadas e Integrales', href: '8.02-spring-2007/static_resources/Problem_Solving_01_Coordinates_and_Integrals.pdf' },
        { title: 'PS 02 — Distribuciones Continuas', href: '8.02-spring-2007/static_resources/Problem_Solving_02_Continuous_Charge_Distributions.pdf' }
      ]
    },
    {
      id: 'eval-pc2',
      code: 'PC2',
      title: 'Ley de Gauss, Flujo & Potencial Electrostático',
      week: 'Semana 5',
      desc: 'Flujo eléctrico, cálculo de campo mediante Gauss en simetrías esféricas y cilíndricas, conductores en equilibrio electrostático, diferencia de potencial y relación gradiente.',
      formulas: [
        '\\oint_S \\vec{E} \\cdot d\\vec{A} = \\frac{Q_{\\text{enc}}}{\\varepsilon_0}',
        'V_B - V_A = -\\int_A^B \\vec{E} \\cdot d\\vec{\\ell}',
        '\\vec{E} = -\\vec{\\nabla}V, \\quad \\nabla^2 V = -\\frac{\\rho}{\\varepsilon_0}'
      ],
      tags: ['Gauss', 'Flujo Eléctrico', 'Potencial V', 'Equipotenciales'],
      uniItems: [
        { title: 'Sem 3 Cl. 01 — Ley de Gauss I', href: 'CF2B1_Fisica_III_UNI/Material_Oficial_UNI/Clases/Teoria_UNI/Sem03_Clase01_Ley_de_Gauss.pdf' },
        { title: 'Sem 4 Cl. 01 — Potencial Eléctrico I', href: 'CF2B1_Fisica_III_UNI/Material_Oficial_UNI/Clases/Teoria_UNI/Sem04_Clase01_Potencial_Electrico.pdf' },
        { title: 'Sem 4 — Ejemplos de Potencial', href: 'CF2B1_Fisica_III_UNI/Material_Oficial_UNI/Clases/Teoria_UNI/Sem04_Ejemplos.pdf' },
        { title: 'Práctica Calificada 2 (PC2 2024-II)', href: 'CF2B1_Fisica_III_UNI/Material_Oficial_UNI/Examenes_Pasados/2024-II/PC2-CF2B1-24-2.pdf' }
      ],
      mitItems: [
        { title: 'Cap 03 — Potencial Eléctrico', href: '8.02-spring-2007/static_resources/Chapter_03_Electric_Potential.pdf' },
        { title: 'Cap 04 — Ley de Gauss', href: '8.02-spring-2007/static_resources/Chapter_04_Gauss_Law.pdf' },
        { title: 'PS 03 — Ley de Gauss', href: '8.02-spring-2007/static_resources/Problem_Solving_03_Gauss_Law.pdf' },
        { title: 'Lab 01 — Líneas Equipotenciales y Campos', href: '8.02-spring-2007/static_resources/Experiment_01_Equipotential_Lines_and_Electric_Fields.pdf' }
      ]
    },
    {
      id: 'eval-pc3',
      code: 'PC3',
      title: 'Capacitancia, Dieléctricos & Corriente Eléctrica',
      week: 'Semana 7',
      desc: 'Cálculo de capacitancia en diferentes geometrías, asociación serie/paralelo, energía en condensadores, vector desplazamiento D, ley de Ohm microscópica y modelo de Drude.',
      formulas: [
        'C = \\frac{Q}{\\Delta V}, \\quad u_E = \\frac{1}{2}\\varepsilon_0 E^2',
        '\\vec{D} = \\varepsilon_0 \\vec{E} + \\vec{P} = \\varepsilon_r \\varepsilon_0 \\vec{E}',
        '\\vec{J} = \\sigma \\vec{E} = n q \\vec{v}_d'
      ],
      tags: ['Capacitores', 'Dieléctricos', 'Vector D', 'Corriente J'],
      uniItems: [
        { title: 'Sem 6 Cl. 01 — Capacitancia I', href: 'CF2B1_Fisica_III_UNI/Material_Oficial_UNI/Clases/Teoria_UNI/Sem06_Clase01_Capacitancia.pdf' },
        { title: 'Sem 6 Cl. 03 — Dieléctricos', href: 'CF2B1_Fisica_III_UNI/Material_Oficial_UNI/Clases/Teoria_UNI/Sem06_Clase03_Capacitancia.pdf' },
        { title: 'Sem 7 Cl. 01 — Corriente y FEM I', href: 'CF2B1_Fisica_III_UNI/Material_Oficial_UNI/Clases/Teoria_UNI/Sem07_Clase01_Corriente_Resistencia_FEM.pdf' },
        { title: 'Práctica Calificada 3 (PC3 2024-II)', href: 'CF2B1_Fisica_III_UNI/Material_Oficial_UNI/Examenes_Pasados/2024-II/PC3-CF2B1-24-2.pdf' }
      ],
      mitItems: [
        { title: 'Cap 05 — Capacitancia y Dieléctricos', href: '8.02-spring-2007/static_resources/Chapter_05_Capacitance.pdf' },
        { title: 'Cap 06 — Corriente y Resistencia', href: '8.02-spring-2007/static_resources/Chapter_06_Current_and_Resistance.pdf' },
        { title: 'PS 04 — Capacitores', href: '8.02-spring-2007/static_resources/Problem_Solving_04_Capacitors.pdf' }
      ]
    },
    {
      id: 'eval-ep',
      code: 'EP',
      title: 'Examen Parcial Integral (Electrostática & Circuitos DC)',
      week: 'Semana 8',
      desc: 'Evaluación de medio curso que integra toda la Electrostática, Ley de Gauss, Potencial, Dieléctricos, Circuitos DC y Transitorios RC.',
      formulas: [
        'U = \\frac{1}{2} \\sum q_i V_i = \\frac{1}{2}\\int \\rho V dV',
        '\\tau = RC, \\quad q(t) = C\\mathcal{E}(1 - e^{-t/RC})',
        'P_{\\text{disipada}} = I^2 R = \\frac{V^2}{R}'
      ],
      tags: ['Examen Parcial', 'Electrostática Completa', 'Circuitos RC'],
      uniItems: [
        { title: 'Examen Parcial 2024-II (EP)', href: 'CF2B1_Fisica_III_UNI/Material_Oficial_UNI/Examenes_Pasados/2024-II/EP-CF2B1-24-2.pdf' },
        { title: 'Solucionario Examen Parcial 2023-II', href: 'CF2B1_Fisica_III_UNI/Material_Oficial_UNI/Examenes_Pasados/2023-II/Examenes/Examen_Parcial_SOL_-_CF2B1_Silabo_Fisica_III_CF2B1_23-II.pdf' },
        { title: 'Sem 9 Cl. 02 — Circuitos DC II', href: 'CF2B1_Fisica_III_UNI/Material_Oficial_UNI/Clases/Teoria_UNI/Sem09_Clase02_Corriente_Resistencia_FEM.pdf' }
      ],
      mitItems: [
        { title: 'Cap 07 — Circuitos DC', href: '8.02-spring-2007/static_resources/Chapter_07_DC_Circuits.pdf' },
        { title: 'PS 08 — Circuitos RC y RL', href: '8.02-spring-2007/static_resources/Problem_Solving_08_RC_and_RL_Circuits.pdf' },
        { title: 'Lab 06 — Ley de Ohm y Circuitos RC/RL', href: '8.02-spring-2007/static_resources/Experiment_06_Ohms_Law_RC_and_RL_Circuits.pdf' }
      ]
    },
    {
      id: 'eval-pc4',
      code: 'PC4',
      title: 'Campo Magnético, Fuerza de Lorentz & Biot-Savart',
      week: 'Semana 10',
      desc: 'Fuerza magnética de Lorentz sobre cargas en movimiento y conductores con corriente, efecto Hall, Ley de Biot-Savart y aplicaciones a espiras y solenoides.',
      formulas: [
        '\\vec{F} = q(\\vec{E} + \\vec{v} \\times \\vec{B})',
        'd\\vec{B} = \\frac{\\mu_0}{4\\pi} \\frac{I d\\vec{\\ell} \\times \\hat{r}}{r^2}',
        'V_H = \\frac{I B}{n q t}'
      ],
      tags: ['Lorentz', 'Biot-Savart', 'Efecto Hall', 'Torque Magnético'],
      uniItems: [
        { title: 'Sem 10 Cl. 01 — Fuerza Magnética', href: 'CF2B1_Fisica_III_UNI/Material_Oficial_UNI/Clases/Teoria_UNI/Sem10_Clase01_Fuerza_Magnetica.pdf' },
        { title: 'Práctica Calificada 4 (PC4 2024-II)', href: 'CF2B1_Fisica_III_UNI/Material_Oficial_UNI/Examenes_Pasados/2024-II/PC4-CF2B1-24-2.pdf' },
        { title: 'Lab 5 — Informe Balanza Magnética', href: 'CF2B1_Fisica_III_UNI/Material_Oficial_UNI/Examenes_Pasados/2022-II/Laboratorio/Lab_05/Lab05_Informe_Balanza_Magnetica.pdf' }
      ],
      mitItems: [
        { title: 'Cap 08 — Campos Magnéticos', href: '8.02-spring-2007/static_resources/Chapter_08_Magnetic_Fields.pdf' },
        { title: 'Cap 09 — Fuentes de Campo Magnético', href: '8.02-spring-2007/static_resources/Chapter_09_Sources_of_B_Field.pdf' },
        { title: 'PS 06 — Fuerza y Torque en Espiras', href: '8.02-spring-2007/static_resources/Problem_Solving_06_Force_and_Torque_on_Current_Loop.pdf' }
      ]
    },
    {
      id: 'eval-pc5',
      code: 'PC5',
      title: 'Ley de Ampère, Faraday-Lenz & Inducción',
      week: 'Semana 12',
      desc: 'Ley de Ampère circuital, inducción electromagnética de Faraday, Ley de Lenz, FEM motriz y transformacional, inductancia mutua y energía magnética.',
      formulas: [
        '\\oint \\vec{B} \\cdot d\\vec{\\ell} = \\mu_0 I_{\\text{enc}}',
        '\\mathcal{E} = -\\frac{d\\Phi_B}{dt} = -\\frac{d}{dt} \\iint \\vec{B} \\cdot d\\vec{A}',
        'u_B = \\frac{1}{2\\mu_0} B^2, \\quad U_B = \\frac{1}{2} L I^2'
      ],
      tags: ['Ampère', 'Faraday', 'Lenz', 'Autoinducción'],
      uniItems: [
        { title: 'Bonus — Inducción Electromagnética', href: 'CF2B1_Fisica_III_UNI/Material_Oficial_UNI/Clases/Bonus_Track/Bonus_Induccion_Electromagnetica.pdf' },
        { title: 'Práctica Calificada 5 (PC5 2024-II)', href: 'CF2B1_Fisica_III_UNI/Material_Oficial_UNI/Examenes_Pasados/2024-II/PC5-CF2B1-24-2.pdf' },
        { title: 'Lab 6 — Informe Inducción y Transformadores', href: 'CF2B1_Fisica_III_UNI/Material_Oficial_UNI/Examenes_Pasados/2022-II/Laboratorio/Lab_06/Lab06_Informe_Induccion_Transformadores.pdf' }
      ],
      mitItems: [
        { title: 'Cap 10 — Ley de Faraday', href: '8.02-spring-2007/static_resources/Chapter_10_Faradays_Law.pdf' },
        { title: 'Cap 11 — Inductancia', href: '8.02-spring-2007/static_resources/Chapter_11_Inductance.pdf' },
        { title: 'PS 07 — Inductancia y Transformador', href: '8.02-spring-2007/static_resources/Problem_Solving_07_Inductance_and_Transformers.pdf' },
        { title: 'Lab 05 — Ley de Faraday', href: '8.02-spring-2007/static_resources/Experiment_05_Faradays_Law.pdf' }
      ]
    },
    {
      id: 'eval-pc6',
      code: 'PC6',
      title: 'Circuitos RLC en CA, Maxwell & Ondas EM',
      week: 'Semana 14',
      desc: 'Corriente alterna, fasores, impedancia compleja, resonancia RLC, corriente de desplazamiento de Maxwell, ondas electromagnéticas y Vector de Poynting.',
      formulas: [
        'Z = \\sqrt{R^2 + (\\omega L - 1/\\omega C)^2}',
        '\\vec{S} = \\frac{1}{\\mu_0} \\vec{E} \\times \\vec{B}',
        '\\vec{\\nabla} \\times \\vec{B} = \\mu_0 \\vec{J} + \\mu_0 \\varepsilon_0 \\frac{\\partial\\vec{E}}{\\partial t}'
      ],
      tags: ['RLC en CA', 'Fasores', 'Resonancia', 'Maxwell', 'Poynting'],
      uniItems: [
        { title: 'Bonus — Corriente Alterna y Fasores', href: 'CF2B1_Fisica_III_UNI/Material_Oficial_UNI/Clases/Bonus_Track/Bonus_Corriente_Alterna.pdf' },
        { title: 'Bonus — Ondas Electromagnéticas', href: 'CF2B1_Fisica_III_UNI/Material_Oficial_UNI/Clases/Bonus_Track/Bonus_Ondas_Electromagneticas.pdf' },
        { title: 'Práctica Calificada 6 (PC6 2024-II)', href: 'CF2B1_Fisica_III_UNI/Material_Oficial_UNI/Examenes_Pasados/2024-II/PC6-CF2B1-24-2.pdf' }
      ],
      mitItems: [
        { title: 'Cap 12 — Circuitos de Corriente Alterna', href: '8.02-spring-2007/static_resources/Chapter_12_AC_Circuits.pdf' },
        { title: 'Cap 13 — Maxwell y Ondas EM', href: '8.02-spring-2007/static_resources/Chapter_13_Maxwell_and_EM_Waves.pdf' },
        { title: 'PS 09 — Circuitos LRC Forzados', href: '8.02-spring-2007/static_resources/Problem_Solving_09_Driven_LRC_Circuits.pdf' },
        { title: 'PS 10 — Radiación Electromagnética', href: '8.02-spring-2007/static_resources/Problem_Solving_10_EM_Radiation.pdf' }
      ]
    },
    {
      id: 'eval-ef',
      code: 'EF',
      title: 'Examen Final Integral (Todo el Curso)',
      week: 'Semana 16',
      desc: 'Examen de síntesis global: Electrostática (Gauss, Potencial, Dieléctricos), Magnetostática (Biot-Savart, Ampère), Inducción de Faraday, Circuitos CA y Ecuaciones de Maxwell completas.',
      formulas: [
        '\\oint \\vec{E} \\cdot d\\vec{A} = \\frac{Q}{\\varepsilon_0}, \\quad \\oint \\vec{B} \\cdot d\\vec{A} = 0',
        '\\oint \\vec{E} \\cdot d\\vec{\\ell} = -\\frac{\\partial}{\\partial t}\\iint \\vec{B} \\cdot d\\vec{A}',
        '\\oint \\vec{B} \\cdot d\\vec{\\ell} = \\mu_0 I + \\mu_0\\varepsilon_0 \\frac{\\partial}{\\partial t}\\iint \\vec{E} \\cdot d\\vec{A}'
      ],
      tags: ['Examen Final', 'Síntesis Maxwell', 'Electromagnetismo Integral'],
      uniItems: [
        { title: 'Examen Final 2025-I', href: 'CF2B1_Fisica_III_UNI/Material_Oficial_UNI/Examenes_Pasados/2025-I/exfinal_fisica3_2025_1.pdf' },
        { title: 'Solucionario Examen Final 2024-II', href: 'CF2B1_Fisica_III_UNI/Material_Oficial_UNI/Examenes_Pasados/2024-II/SOL-EF-CF2B1-24-2.pdf' },
        { title: 'Solucionario Examen Final 2023-II', href: 'CF2B1_Fisica_III_UNI/Material_Oficial_UNI/Examenes_Pasados/2023-II/Examenes/Examen_Final_SOL_-_CF2B1_Silabo_Fisica_III_CF2B1_23-II.pdf' }
      ],
      mitItems: [
        { title: 'Cap 13 — Maxwell y Ondas EM', href: '8.02-spring-2007/static_resources/Chapter_13_Maxwell_and_EM_Waves.pdf' },
        { title: 'Cap 14 — Interferencia y Difracción', href: '8.02-spring-2007/static_resources/Chapter_14_Interference_and_Diffraction.pdf' },
        { title: 'Manual Completo de Experimentos MIT', href: '8.02-spring-2007/static_resources/Experiment_00_All_Experiments_Complete.pdf' }
      ]
    }
  ];

  // ── 4. RADAR PREDICTIVO BASADO EN 110+ EXÁMENES HISTÓRICOS ──
  const PREDICTIONS_DATA = [
    {
      evalId: 'eval-pc1',
      evalName: 'Práctica Calificada 1 (PC1)',
      stats: { historicalExams: 18, accuracyRate: 95.5 },
      highProbTopics: [
        { topic: 'Distribuciones Continuas 1D y 2D (Varilla/Disco/Anillo)', prob: 94 },
        { topic: 'Principio de Superposición Vectorial & Simetría', prob: 89 },
        { topic: 'Dipolo Eléctrico & Torque en Campo No Uniforme', prob: 82 }
      ],
      mustKnowFormulas: [
        '\\vec{E} = \\frac{1}{4\\pi\\varepsilon_0} \\int \\frac{\\lambda d\\ell}{r^2}\\hat{r}',
        'E_z = \\frac{\\sigma}{2\\varepsilon_0}\\left(1 - \\frac{z}{\\sqrt{z^2 + R^2}}\\right)',
        '\\vec{\\tau} = \\vec{p} \\times \\vec{E}, \\quad U = -\\vec{p} \\cdot \\vec{E}'
      ],
      typicalTraps: 'Confundir el vector unitario \\(\\hat{r}\\) con \\(\\vec{r}\\) sin normalizar en la integral de Coulomb, u olvidar descomponer los diferenciales de carga \\(dq\\) por simetría.',
      frequentProblemTypes: [
        'Cálculo analítico del vector campo \\(\\vec{E}\\) en el eje de un disco cargado no homogéneamente con densidad \\(\\sigma(r) = \\sigma_0 \\frac{r}{R}\\).',
        'Fuerza neta y torque sobre una barra cargada en presencia de una carga puntual exterior.'
      ],
      studyAdvice: 'Domina los cambios de variable trigonométricos en integrales de varilla y el uso de coordenadas polares para discos.'
    },
    {
      evalId: 'eval-pc2',
      evalName: 'Práctica Calificada 2 (PC2)',
      stats: { historicalExams: 16, accuracyRate: 96.0 },
      highProbTopics: [
        { topic: 'Ley de Gauss en Cilindros/Esferas No Homogéneas (\\(\\rho(r)\\))', prob: 96 },
        { topic: 'Potencial de Distribuciones Continuas & Gradiente', prob: 91 },
        { topic: 'Conductores Concéntricos y Cargas Inducidas', prob: 85 }
      ],
      mustKnowFormulas: [
        '\\oint \\vec{E} \\cdot d\\vec{A} = \\frac{1}{\\varepsilon_0} \\int_0^r \\rho(r\') 4\\pi r\'^2 dr\'',
        'V(r) = -\\int_\\infty^r \\vec{E} \\cdot d\\vec{r}',
        'E_n = \\frac{\\sigma}{\\varepsilon_0} \\quad (\\text{Superficie Conductora})'
      ],
      typicalTraps: 'Calcular la carga encerrada \\(Q_{\\text{enc}}\\) integrando hasta el radio exterior \\(R\\) en lugar del radio gaussiano interno \\(r\\) (para \\(r < R\\)).',
      frequentProblemTypes: [
        'Esfera aislante con densidad de carga volumétrica cuadrática rodeada por un cascarón conductor concéntrico.',
        'Obtención del campo eléctrico a partir de un potencial dado en coordenadas esféricas o cilíndricas.'
      ],
      studyAdvice: 'Grafica siempre la curva de \\(E(r)\\) y \\(V(r)\\) por tramos para verificar la continuidad del potencial y el salto del campo.'
    },
    {
      evalId: 'eval-pc3',
      evalName: 'Práctica Calificada 3 (PC3)',
      stats: { historicalExams: 15, accuracyRate: 93.8 },
      highProbTopics: [
        { topic: 'Capacitancia con Dieléctricos Inserción Parcial', prob: 95 },
        { topic: 'Vector Desplazamiento \\(\\vec{D}\\) y Cargas de Polarización', prob: 90 },
        { topic: 'Fuerzas Electrostáticas en Condensadores (\\(F = -dU/dx\\))', prob: 84 }
      ],
      mustKnowFormulas: [
        'C = \\frac{\\varepsilon_0 A}{d - t + t/\\kappa}',
        '\\sigma_b = \\vec{P} \\cdot \\hat{n} = \\frac{\\kappa - 1}{\\kappa}\\sigma_{\\text{libre}}',
        'F_x = \\frac{1}{2} V^2 \\frac{dC}{dx} \\quad (V = \\text{cte})'
      ],
      typicalTraps: 'Usar \\(F = -dU/dx\\) con signo negativo cuando el condensador está conectado a la batería (a voltaje constante \\(V\\), el trabajo de la fuente duplica la energía).',
      frequentProblemTypes: [
        'Condensador de placas paralelas con dieléctrico no homogéneo (\\(\\kappa(x) = \\kappa_0 + \\alpha x\\)) conectado en serie o paralelo.',
        'Fuerza mecánica ejercida sobre una lámina dieléctrica que penetra parcialmente entre las armaduras.'
      ],
      studyAdvice: 'Separa mentalmente el condensador con dieléctrico en franjas infinitesimales de circuitos equivalentes.'
    },
    {
      evalId: 'eval-ep',
      evalName: 'Examen Parcial (EP)',
      stats: { historicalExams: 22, accuracyRate: 94.2 },
      highProbTopics: [
        { topic: 'Problema Integrado de Gauss + Potencial + Energía', prob: 98 },
        { topic: 'Circuitos DC Multimalla & Transitorio RC con Switch', prob: 92 },
        { topic: 'Balance Energético en Dieléctricos & Fuerzas', prob: 88 }
      ],
      mustKnowFormulas: [
        'U = \\frac{1}{2}\\varepsilon_0 \\int E^2 dV',
        'i(t) = i(\\infty) + [i(0^+) - i(\\infty)] e^{-t/\\tau}',
        '\\sum \\mathcal{E} = \\sum I R'
      ],
      typicalTraps: 'Olvidar la condición de continuidad del condensador: el voltaje en \\(C\\) no puede cambiar instantáneamente (\\(V_C(0^+) = V_C(0^-)\\)).',
      frequentProblemTypes: [
        'Circuito con dos mallas, fuente DC y condensador que cambia de estado en \\(t=0\\); cálculo de corriente y energía disipada en resistencias.',
        'Esferas conductoras unidas por un alambre fino tras alcanzar el equilibrio de potenciales.'
      ],
      studyAdvice: 'Resuelve al menos 3 exámenes parciales completos con cronómetro (110 minutos por examen).'
    },
    {
      evalId: 'eval-pc4',
      evalName: 'Práctica Calificada 4 (PC4)',
      stats: { historicalExams: 14, accuracyRate: 92.5 },
      highProbTopics: [
        { topic: 'Fuerza de Lorentz & Trayectorias Helicoidales', prob: 92 },
        { topic: 'Ley de Biot-Savart en Configuraciones Curvas y Rectas', prob: 88 },
        { topic: 'Fuerza Magnética entre Conductores Paralelos', prob: 84 }
      ],
      mustKnowFormulas: [
        'R_{\\text{ciclotrón}} = \\frac{m v_{\\perp}}{q B}, \\quad T = \\frac{2\\pi m}{q B}',
        'B = \\frac{\\mu_0 I}{4\\pi R} \\theta \\quad (\\text{Arco Circular})',
        '\\frac{F}{L} = \\frac{\\mu_0 I_1 I_2}{2\\pi d}'
      ],
      typicalTraps: 'Confundir el sentido del producto vectorial \\(\\vec{v} \\times \\vec{B}\\) con la regla de la mano derecha al evaluar partículas con carga negativa (electrones).',
      frequentProblemTypes: [
        'Partícula cargada inyectada en una región con campos cruzados \\(\\vec{E}\\) y \\(\\vec{B}\\) (selector de velocidades y posterior deflexión).',
        'Campo magnético total en el centro de una espira con segmentos rectilíneos y semicirculares.'
      ],
      studyAdvice: 'Dibuja con claridad los tres vectores (\\(\\vec{v}, \\vec{B}, \\vec{F}\\)) en perspectiva 3D antes de escribir las ecuaciones escalares.'
    },
    {
      evalId: 'eval-pc5',
      evalName: 'Práctica Calificada 5 (PC5)',
      stats: { historicalExams: 15, accuracyRate: 95.0 },
      highProbTopics: [
        { topic: 'Ley de Faraday con Espira en Movimiento (FEM Motriz)', prob: 96 },
        { topic: 'Ley de Ampère en Conductores Gruesos y Coaxiales', prob: 91 },
        { topic: 'Inductancia Mutua M y Autoinducción L', prob: 86 }
      ],
      mustKnowFormulas: [
        '\\mathcal{E} = \\oint (\\vec{v} \\times \\vec{B}) \\cdot d\\vec{\\ell} = -\\frac{d\\Phi_B}{dt}',
        '\\oint \\vec{B} \\cdot d\\vec{\\ell} = \\mu_0 \\iint \\vec{J} \\cdot d\\vec{A}',
        'L = \\frac{N \\Phi_B}{I}'
      ],
      typicalTraps: 'No aplicar correctamente la Ley de Lenz para el signo de la corriente inducida: el flujo inducido se OPONE a la variación del flujo magnético externo.',
      frequentProblemTypes: [
        'Barra conductora deslizándose sobre rieles en U con fricción y resistencia en presencia de un campo \\(\\vec{B}(t)\\) variable en el tiempo.',
        'Cálculo de \\(B(r)\\) en un cable coaxial con corrientes no uniformes en el conductor interno y externo.'
      ],
      studyAdvice: 'Identifica si la variación de flujo proviene del cambio de \\(B(t)\\) (FEM transformacional) o del cambio de área \\(A(t)\\) (FEM rotacional).'
    },
    {
      evalId: 'eval-pc6',
      evalName: 'Práctica Calificada 6 (PC6)',
      stats: { historicalExams: 14, accuracyRate: 91.5 },
      highProbTopics: [
        { topic: 'Circuitos RLC Serie/Paralelo en CA & Fasores', prob: 93 },
        { topic: 'Resonancia, Factor de Potencia y Potencia Activa/Reactiva', prob: 89 },
        { topic: 'Corriente de Desplazamiento de Maxwell en Condensador', prob: 85 }
      ],
      mustKnowFormulas: [
        'Z = R + j(\\omega L - 1/\\omega C), \\quad \\cos\\theta = \\frac{R}{|Z|}',
        'P_{\\text{prom}} = V_{\\text{rms}} I_{\\text{rms}} \\cos\\theta',
        'I_d = \\varepsilon_0 \\frac{d\\Phi_E}{dt} = C \\frac{dV}{dt}'
      ],
      typicalTraps: 'Usar valores pico (\\(V_0, I_0\\)) en la fórmula de potencia promedio sin dividir entre 2 (o sin usar los valores eficaces rms).',
      frequentProblemTypes: [
        'Circuito RLC conectado a generador sinusoidal; cálculo de frecuencia de resonancia y ancho de banda.',
        'Campo magnético \\(\\vec{B}\\) inducido entre las placas circulares de un condensador durante el proceso de carga.'
      ],
      studyAdvice: 'Utiliza el álgebra compleja de fasores: ahorra hasta un 60% de tiempo frente a resolver ecuaciones diferenciales.'
    },
    {
      evalId: 'eval-ef',
      evalName: 'Examen Final (EF)',
      stats: { historicalExams: 25, accuracyRate: 94.8 },
      highProbTopics: [
        { topic: 'Ecuaciones de Maxwell Completas & Vector de Poynting', prob: 97 },
        { topic: 'Inducción Electromagnética de Faraday Avanzada', prob: 94 },
        { topic: 'Potencial y Energía Electrostática / Dieléctricos', prob: 90 }
      ],
      mustKnowFormulas: [
        '\\vec{S} = \\frac{1}{\\mu_0} \\vec{E} \\times \\vec{B}, \\quad \\langle S \\rangle = \\frac{E_0 B_0}{2\\mu_0}',
        '\\nabla^2 \\vec{E} = \\mu_0 \\varepsilon_0 \\frac{\\partial^2 \\vec{E}}{\\partial t^2}',
        'P_{\\text{radiada}} = \\iint \\vec{S} \\cdot d\\vec{A}'
      ],
      typicalTraps: 'Olvidar relacionar las amplitudes del campo eléctrico y magnético de una onda electromagnética plana en el vacío: \\(E_0 = c B_0\\).',
      frequentProblemTypes: [
        'Onda electromagnética plana incidiendo sobre una superficie; cálculo de presión de radiación, intensidad y vector de Poynting.',
        'Problema integral de síntesis que combina una espira con corriente alterna y su radiación electromagnética.'
      ],
      studyAdvice: 'Ten el formulario oficial a mano y practica la demostración de la ecuación de onda a partir del rotacional de Faraday y Ampère-Maxwell.'
    }
  ];

  // ── 5. FORMULARIO MAESTRO DE FÍSICA III (Modo Fórmulas Imprimible) ──
  const FORMULAS_BANK = [
    {
      topic: '1. Electrostática & Ley de Coulomb',
      formulas: [
        { label: 'Ley de Coulomb', tex: '\\vec{F}_{12} = \\frac{1}{4\\pi\\varepsilon_0} \\frac{q_1 q_2}{r_{12}^2} \\hat{r}_{12}' },
        { label: 'Campo Eléctrico Discreto', tex: '\\vec{E}(\\vec{r}) = \\frac{1}{4\\pi\\varepsilon_0} \\sum_i \\frac{q_i}{|\\vec{r} - \\vec{r}_i|^2} \\hat{r}_i' },
        { label: 'Campo Eléctrico Continuo', tex: '\\vec{E}(\\vec{r}) = \\frac{1}{4\\pi\\varepsilon_0} \\int \\frac{dq}{r^2} \\hat{r}' },
        { label: 'Torque sobre Dipolo', tex: '\\vec{\\tau} = \\vec{p} \\times \\vec{E}' },
        { label: 'Energía de Dipolo', tex: 'U = -\\vec{p} \\cdot \\vec{E}' }
      ]
    },
    {
      topic: '2. Ley de Gauss & Flujo Eléctrico',
      formulas: [
        { label: 'Flujo Eléctrico', tex: '\\Phi_E = \\iint_S \\vec{E} \\cdot d\\vec{A}' },
        { label: 'Ley de Gauss (Integral)', tex: '\\oint_S \\vec{E} \\cdot d\\vec{A} = \\frac{Q_{\\text{enc}}}{\\varepsilon_0}' },
        { label: 'Ley de Gauss (Diferencial)', tex: '\\vec{\\nabla} \\cdot \\vec{E} = \\frac{\\rho}{\\varepsilon_0}' },
        { label: 'Campo en Conductor', tex: 'E_n = \\frac{\\sigma}{\\varepsilon_0}, \\quad E_{\\text{int}} = 0' }
      ]
    },
    {
      topic: '3. Potencial Eléctrico & Energía',
      formulas: [
        { label: 'Diferencia de Potencial', tex: 'V_B - V_A = -\\int_A^B \\vec{E} \\cdot d\\vec{\\ell}' },
        { label: 'Relación Gradiente', tex: '\\vec{E} = -\\vec{\\nabla}V = -\\left(\\frac{\\partial V}{\\partial x}\\hat{i} + \\frac{\\partial V}{\\partial y}\\hat{j} + \\frac{\\partial V}{\\partial z}\\hat{k}\\right)' },
        { label: 'Ecuación de Poisson / Laplace', tex: '\\nabla^2 V = -\\frac{\\rho}{\\varepsilon_0} \\quad (\\text{Poisson}), \\quad \\nabla^2 V = 0 \\quad (\\text{Laplace})' },
        { label: 'Densidad de Energía Eléctrica', tex: 'u_E = \\frac{1}{2}\\varepsilon_0 E^2' }
      ]
    },
    {
      topic: '4. Capacitancia & Dieléctricos',
      formulas: [
        { label: 'Capacitancia', tex: 'C = \\frac{Q}{\\Delta V}' },
        { label: 'Placas Paralelas', tex: 'C_0 = \\frac{\\varepsilon_0 A}{d}, \\quad C = \\kappa C_0' },
        { label: 'Energía en Condensador', tex: 'U = \\frac{1}{2} Q V = \\frac{1}{2} C V^2 = \\frac{Q^2}{2C}' },
        { label: 'Vector Desplazamiento', tex: '\\vec{D} = \\varepsilon_0 \\vec{E} + \\vec{P} = \\varepsilon_r \\varepsilon_0 \\vec{E}' },
        { label: 'Gauss en Dieléctricos', tex: '\\oint \\vec{D} \\cdot d\\vec{A} = Q_{\\text{libre enc}}' }
      ]
    },
    {
      topic: '5. Corriente Eléctrica & Circuitos DC',
      formulas: [
        { label: 'Densidad de Corriente', tex: 'I = \\iint \\vec{J} \\cdot d\\vec{A}, \\quad \\vec{J} = n q \\vec{v}_d = \\sigma \\vec{E}' },
        { label: 'Ley de Ohm Macroscópica', tex: 'V = I R, \\quad R = \\rho \\frac{L}{A}' },
        { label: 'Leyes de Kirchhoff', tex: '\\sum I_{\\text{nodo}} = 0, \\quad \\sum \\Delta V_{\\text{malla}} = 0' },
        { label: 'Carga en Circuito RC', tex: 'q(t) = C\\mathcal{E}(1 - e^{-t/RC}), \\quad \\tau = RC' }
      ]
    },
    {
      topic: '6. Fuerza & Campo Magnético',
      formulas: [
        { label: 'Fuerza de Lorentz', tex: '\\vec{F} = q(\\vec{E} + \\vec{v} \\times \\vec{B})' },
        { label: 'Fuerza sobre Corriente', tex: 'd\\vec{F} = I d\\vec{\\ell} \\times \\vec{B}' },
        { label: 'Ley de Biot-Savart', tex: 'd\\vec{B} = \\frac{\\mu_0}{4\\pi} \\frac{I d\\vec{\\ell} \\times \\hat{r}}{r^2}' },
        { label: 'Ley de Ampère', tex: '\\oint \\vec{B} \\cdot d\\vec{\\ell} = \\mu_0 I_{\\text{enc}}' },
        { label: 'Efecto Hall', tex: '\\Delta V_H = \\frac{I B}{n q t}' }
      ]
    },
    {
      topic: '7. Inducción Electromagnética & Faraday',
      formulas: [
        { label: 'Flujo Magnético', tex: '\\Phi_B = \\iint \\vec{B} \\cdot d\\vec{A}' },
        { label: 'Ley de Faraday-Lenz', tex: '\\mathcal{E} = -\\frac{d\\Phi_B}{dt} = -\\frac{d}{dt}\\iint \\vec{B} \\cdot d\\vec{A}' },
        { label: 'Autoinducción', tex: '\\mathcal{E}_L = -L \\frac{dI}{dt}, \\quad L = \\frac{N\\Phi_B}{I}' },
        { label: 'Densidad de Energía Magnética', tex: 'u_B = \\frac{1}{2\\mu_0} B^2, \\quad U_B = \\frac{1}{2} L I^2' }
      ]
    },
    {
      topic: '8. Corriente Alterna & Ecuaciones de Maxwell',
      formulas: [
        { label: 'Impedancia RLC Serie', tex: 'Z = \\sqrt{R^2 + \\left(\\omega L - \\frac{1}{\\omega C}\\right)^2}' },
        { label: 'Frecuencia de Resonancia', tex: '\\omega_0 = \\frac{1}{\\sqrt{LC}}' },
        { label: 'Vector de Poynting', tex: '\\vec{S} = \\frac{1}{\\mu_0} \\vec{E} \\times \\vec{B}' },
        { label: 'Maxwell I (Gauss E)', tex: '\\vec{\\nabla} \\cdot \\vec{E} = \\frac{\\rho}{\\varepsilon_0}' },
        { label: 'Maxwell II (Gauss B)', tex: '\\vec{\\nabla} \\cdot \\vec{B} = 0' },
        { label: 'Maxwell III (Faraday)', tex: '\\vec{\\nabla} \\times \\vec{E} = -\\frac{\\partial\\vec{B}}{\\partial t}' },
        { label: 'Maxwell IV (Ampère-Maxwell)', tex: '\\vec{\\nabla} \\times \\vec{B} = \\mu_0\\vec{J} + \\mu_0\\varepsilon_0 \\frac{\\partial\\vec{E}}{\\partial t}' }
      ]
    }
  ];

  return {
    WEEKS_DATA,
    RESOURCES,
    MALLA_MODULES,
    PREDICTIONS_DATA,
    FORMULAS_BANK
  };

})();
