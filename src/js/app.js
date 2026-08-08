// src/js/app.js
// Controlador Principal del Portal Académico Física III (UNI CF2B1 & MIT 8.02)

(function () {
  'use strict';

  // ── 1. DEFINICIÓN DE CATEGORÍAS & FILTROS DEL CATÁLOGO ──
  const FILTERS = [
    { id: 'all',      label: 'Todos',               variant: '' },
    { id: 'tello',    label: 'Teoría UNI',          variant: 'rose' },
    { id: 'clase',    label: 'Sesiones UNI',        variant: 'amber' },
    { id: 'bonus',    label: 'Bonus Track',         variant: 'amber' },
    { id: 'exam',     label: 'Exámenes & Sol.',     variant: 'amber' },
    { id: 'lab-uni',  label: 'Labs UNI (L1–L6)',    variant: 'amber' },
    { id: 'theory',   label: 'Teoría MIT (1–14)',   variant: 'cyan' },
    { id: 'solving',  label: 'Problem Solving MIT', variant: 'violet' },
    { id: 'lab',      label: 'Labs TEAL MIT',       variant: 'emerald' },
  ];

  // ── 2. DATOS DE EQUIVALENCIA CURRICULAR UNI ↔ MIT ──
  const COMPARISON_MODULES = [
    {
      id: 'pc1',
      eval: 'PC1',
      evalLong: 'Práctica Calificada 1',
      badgeClass: '',
      week: 'Semana 3',
      weekNum: 3,
      title: 'Electrostática, Carga Eléctrica & Ley de Coulomb',
      desc: 'Fundamentos de la interacción electrostática: cuantización de la carga, principio de superposición, distribuciones continuas (lineales, superficiales, volumétricas) y dipolos eléctricos.',
      formulas: [
        '\\vec{F}_{12} = \\frac{1}{4\\pi\\varepsilon_0}\\frac{q_1 q_2}{r_{12}^2}\\hat{r}_{12}',
        '\\vec{E} = \\frac{1}{4\\pi\\varepsilon_0}\\int \\frac{dq}{r^2}\\hat{r}',
        'dq = \\lambda dl = \\sigma dA = \\rho dV',
        '\\vec{p} = q\\vec{d}'
      ],
      tags: ['Coulomb', 'Superposición', 'Densidades de Carga', 'Campo Eléctrico', 'Dipolo'],
      mit: [
        { type: 'Teoría', icon: '📖', title: 'Cap 01 — Campos y Potencial', href: '8.02-spring-2007/static_resources/Chapter_01_Fields.pdf' },
        { type: 'Teoría', icon: '📖', title: 'Cap 02 — Ley de Coulomb', href: '8.02-spring-2007/static_resources/Chapter_02_Coulombs_Law.pdf' },
        { type: 'Problem Solving', icon: '✏️', title: 'PS 01 — Coordenadas e Integrales', href: '8.02-spring-2007/static_resources/Problem_Solving_01_Coordinates_and_Integrals.pdf' },
        { type: 'Problem Solving', icon: '✏️', title: 'PS 02 — Distribuciones Continuas', href: '8.02-spring-2007/static_resources/Problem_Solving_02_Continuous_Charge_Distributions.pdf' }
      ],
      uni: [
        { type: 'Teoría UNI', icon: '🏛️', title: 'Sem 1 Cl. 01 — Carga Eléctrica', href: 'CF2B1_Fisica_III_UNI/Material_Oficial_UNI/Clases/Teoria_UNI/Sem01_Clase01_Carga.pdf' },
        { type: 'Teoría UNI', icon: '🏛️', title: 'Sem 1 Cl. 02 — Interacción Eléctrica', href: 'CF2B1_Fisica_III_UNI/Material_Oficial_UNI/Clases/Teoria_UNI/Sem01_Clase02_Interaccion_Electrica.pdf' },
        { type: 'Teoría UNI', icon: '🏛️', title: 'Sem 2 Cl. 01 — Campo Eléctrico I', href: 'CF2B1_Fisica_III_UNI/Material_Oficial_UNI/Clases/Teoria_UNI/Sem02_Clase01_Campo_Electrico.pdf' },
        { type: 'Examen Oficial', icon: '📄', title: 'PC1 2024-II (Enunciado)', href: 'CF2B1_Fisica_III_UNI/Material_Oficial_UNI/Examenes_Pasados/2024-II/PC1-CF2B1-24-2.pdf' },
        { type: 'Solucionario', icon: '✅', title: 'Solucionario PC1 2024-I (Paso a Paso)', href: 'CF2B1_Fisica_III_UNI/Material_Oficial_UNI/Examenes_Pasados/2024-I/Practicas/Solucionarios/CF2B1_SOL_PC1.pdf' },
        { type: 'Histórico', icon: '📚', title: 'Compilado PC1 (2015–2018)', href: 'CF2B1_Fisica_III_UNI/Material_Oficial_UNI/Examenes_Pasados/Historicos_PC1_2015_2018/PC1_2015-2.pdf' }
      ]
    },
    {
      id: 'pc2',
      eval: 'PC2',
      evalLong: 'Práctica Calificada 2',
      badgeClass: '',
      week: 'Semana 5',
      weekNum: 5,
      title: 'Ley de Gauss, Flujo Eléctrico & Potencial Electrostático',
      desc: 'Cálculo de campo eléctrico por alta simetría (esférica, cilíndrica, plana), cálculo diferencial de potencial, superficies equipotenciales y densidad de energía electrostática.',
      formulas: [
        '\\Phi_E = \\oint \\vec{E}\\cdot d\\vec{A} = \\frac{q_{enc}}{\\varepsilon_0}',
        'V_B - V_A = -\\int_A^B \\vec{E}\\cdot d\\vec{l}',
        '\\vec{E} = -\\nabla V',
        'u_E = \\frac{1}{2}\\varepsilon_0 E^2'
      ],
      tags: ['Ley de Gauss', 'Flujo Eléctrico', 'Potencial V', 'Equipotenciales', 'Energía Ensamble'],
      mit: [
        { type: 'Teoría', icon: '📖', title: 'Cap 03 — Potencial Eléctrico', href: '8.02-spring-2007/static_resources/Chapter_03_Electric_Potential.pdf' },
        { type: 'Teoría', icon: '📖', title: 'Cap 04 — Ley de Gauss', href: '8.02-spring-2007/static_resources/Chapter_04_Gauss_Law.pdf' },
        { type: 'Problem Solving', icon: '✏️', title: 'PS 03 — Ley de Gauss', href: '8.02-spring-2007/static_resources/Problem_Solving_03_Gauss_Law.pdf' },
        { type: 'Laboratorio', icon: '🧪', title: 'Lab 01 — Líneas Equipotenciales', href: '8.02-spring-2007/static_resources/Experiment_01_Equipotential_Lines_and_Electric_Fields.pdf' }
      ],
      uni: [
        { type: 'Teoría UNI', icon: '🏛️', title: 'Sem 3 Cl. 01 — Ley de Gauss I', href: 'CF2B1_Fisica_III_UNI/Material_Oficial_UNI/Clases/Teoria_UNI/Sem03_Clase01_Ley_de_Gauss.pdf' },
        { type: 'Teoría UNI', icon: '🏛️', title: 'Sem 4 Cl. 01 — Potencial Eléctrico I', href: 'CF2B1_Fisica_III_UNI/Material_Oficial_UNI/Clases/Teoria_UNI/Sem04_Clase01_Potencial_Electrico.pdf' },
        { type: 'Teoría UNI', icon: '🏛️', title: 'Sem 4 — Ejemplos de Potencial', href: 'CF2B1_Fisica_III_UNI/Material_Oficial_UNI/Clases/Teoria_UNI/Sem04_Ejemplos.pdf' },
        { type: 'Teoría UNI', icon: '🏛️', title: 'Sem 5 Cl. 01 — Energía Electrostática', href: 'CF2B1_Fisica_III_UNI/Material_Oficial_UNI/Clases/Teoria_UNI/Sem05_Clase01_Energia_Electrostatica.pdf' },
        { type: 'Examen Oficial', icon: '📄', title: 'PC2 2024-II (Enunciado)', href: 'CF2B1_Fisica_III_UNI/Material_Oficial_UNI/Examenes_Pasados/2024-II/PC2-CF2B1-24-2.pdf' },
        { type: 'Solucionario', icon: '✅', title: 'Solucionario PC2 2024-I (Paso a Paso)', href: 'CF2B1_Fisica_III_UNI/Material_Oficial_UNI/Examenes_Pasados/2024-I/Practicas/Solucionarios/CF2B1_SOL_PC2.pdf' }
      ]
    },
    {
      id: 'pc3',
      eval: 'PC3',
      evalLong: 'Práctica Calificada 3',
      badgeClass: '',
      week: 'Semana 7',
      weekNum: 7,
      title: 'Conductores, Capacitancia, Dieléctricos & Vector Desplazamiento',
      desc: 'Propiedades de conductores en equilibrio, cálculo analítico de capacitancia, dieléctricos lineales e isótropos, polarización inducida y ley de Gauss con dieléctricos.',
      formulas: [
        'C = \\frac{Q}{V}',
        '\\vec{D} = \\varepsilon_0\\vec{E} + \\vec{P} = \\varepsilon_r \\varepsilon_0 \\vec{E}',
        '\\oint \\vec{D}\\cdot d\\vec{A} = q_{libre}',
        'U = \\frac{1}{2}CV^2 = \\frac{Q^2}{2C}'
      ],
      tags: ['Capacitancia', 'Dieléctricos', 'Polarización P', 'Vector D', 'Energía en Condensadores'],
      mit: [
        { type: 'Teoría', icon: '📖', title: 'Cap 05 — Capacitancia y Dieléctricos', href: '8.02-spring-2007/static_resources/Chapter_05_Capacitance.pdf' },
        { type: 'Problem Solving', icon: '✏️', title: 'PS 04 — Capacitores', href: '8.02-spring-2007/static_resources/Problem_Solving_04_Capacitors.pdf' },
        { type: 'Laboratorio', icon: '🧪', title: 'Lab 02 — Cubeta de Hielo de Faraday', href: '8.02-spring-2007/static_resources/Experiment_02_Faraday_Ice_Pail.pdf' }
      ],
      uni: [
        { type: 'Teoría UNI', icon: '🏛️', title: 'Sem 6 Cl. 01 — Capacitancia I', href: 'CF2B1_Fisica_III_UNI/Material_Oficial_UNI/Clases/Teoria_UNI/Sem06_Clase01_Capacitancia.pdf' },
        { type: 'Teoría UNI', icon: '🏛️', title: 'Sem 6 Cl. 02 — Capacitancia II', href: 'CF2B1_Fisica_III_UNI/Material_Oficial_UNI/Clases/Teoria_UNI/Sem06_Clase02_Capacitancia.pdf' },
        { type: 'Teoría UNI', icon: '🏛️', title: 'Sem 6 Cl. 03 — Dieléctricos', href: 'CF2B1_Fisica_III_UNI/Material_Oficial_UNI/Clases/Teoria_UNI/Sem06_Clase03_Capacitancia.pdf' },
        { type: 'Bonus Track', icon: '⭐', title: 'Bonus — Dieléctricos y Polarización', href: 'CF2B1_Fisica_III_UNI/Material_Oficial_UNI/Clases/Bonus_Track/Bonus_Dielectricos.pdf' },
        { type: 'Examen Oficial', icon: '📄', title: 'PC3 2024-II (Enunciado)', href: 'CF2B1_Fisica_III_UNI/Material_Oficial_UNI/Examenes_Pasados/2024-II/PC3-CF2B1-24-2.pdf' },
        { type: 'Solucionario', icon: '✅', title: 'Solucionario PC3 2024-I', href: 'CF2B1_Fisica_III_UNI/Material_Oficial_UNI/Examenes_Pasados/2024-I/Practicas/Solucionarios/CF2B1_SOL_PC3.pdf' }
      ]
    },
    {
      id: 'ep',
      eval: 'Parcial',
      evalLong: 'Examen Parcial',
      badgeClass: 'exam-parcial',
      week: 'Semana 8',
      weekNum: 8,
      title: 'Electrostática Completa, Ley de Ohm & Circuitos DC',
      desc: 'Evaluación integral de electrostática y teoría de portadores de carga: modelo microscópico de Drude, fuerza electromotriz (FEM), Leyes de Kirchhoff y régimen transitorio en circuitos RC.',
      formulas: [
        '\\vec{J} = \\sigma \\vec{E} = n q \\vec{v}_d',
        'I = \\int \\vec{J}\\cdot d\\vec{A} = \\frac{V}{R}',
        '\\sum I_{nodo} = 0 \\quad \\sum \\mathcal{E} = \\sum I R',
        'q(t) = C\\mathcal{E}\\left(1 - e^{-t/RC}\\right)'
      ],
      tags: ['Electrostática Total', 'Drude', 'Ohm', 'Kirchhoff', 'Circuitos RC', 'Transitorios'],
      mit: [
        { type: 'Teoría', icon: '📖', title: 'Cap 06 — Corriente y Resistencia', href: '8.02-spring-2007/static_resources/Chapter_06_Current_and_Resistance.pdf' },
        { type: 'Teoría', icon: '📖', title: 'Cap 07 — Circuitos DC', href: '8.02-spring-2007/static_resources/Chapter_07_DC_Circuits.pdf' },
        { type: 'Problem Solving', icon: '✏️', title: 'PS 08 — Circuitos RC y RL', href: '8.02-spring-2007/static_resources/Problem_Solving_08_RC_and_RL_Circuits.pdf' },
        { type: 'Laboratorio', icon: '🧪', title: 'Lab 06 — Ley de Ohm y Transitorios', href: '8.02-spring-2007/static_resources/Experiment_06_Ohms_Law_RC_and_RL_Circuits.pdf' }
      ],
      uni: [
        { type: 'Teoría UNI', icon: '🏛️', title: 'Sem 7 Cl. 01 — Corriente y FEM I', href: 'CF2B1_Fisica_III_UNI/Material_Oficial_UNI/Clases/Teoria_UNI/Sem07_Clase01_Corriente_Resistencia_FEM.pdf' },
        { type: 'Teoría UNI', icon: '🏛️', title: 'Sem 9 Cl. 01 — Circuitos DC I', href: 'CF2B1_Fisica_III_UNI/Material_Oficial_UNI/Clases/Teoria_UNI/Sem09_Clase01_Corriente_Resistencia_FEM.pdf' },
        { type: 'Teoría UNI', icon: '🏛️', title: 'Sem 9 — Ejemplos de Circuitos DC', href: 'CF2B1_Fisica_III_UNI/Material_Oficial_UNI/Clases/Teoria_UNI/Sem09_Ejemplos.pdf' },
        { type: 'Examen Oficial', icon: '📄', title: 'Examen Parcial 2024-II (EP)', href: 'CF2B1_Fisica_III_UNI/Material_Oficial_UNI/Examenes_Pasados/2024-II/EP-CF2B1-24-2.pdf' },
        { type: 'Solucionario', icon: '✅', title: 'Solucionario Parcial 2024-I', href: 'CF2B1_Fisica_III_UNI/Material_Oficial_UNI/Examenes_Pasados/2024-I/Examenes/Solucionarios/SOL_PARCIAL.pdf' },
        { type: 'Solucionario', icon: '✅', title: 'Solucionario Parcial 2023-II', href: 'CF2B1_Fisica_III_UNI/Material_Oficial_UNI/Examenes_Pasados/2023-II/Examenes/Examen_Parcial_SOL_-_CF2B1_Silabo_Fisica_III_CF2B1_23-II.pdf' }
      ]
    },
    {
      id: 'pc4',
      eval: 'PC4',
      evalLong: 'Práctica Calificada 4',
      badgeClass: '',
      week: 'Semana 10',
      weekNum: 10,
      title: 'Fuerza de Lorentz, Efecto Hall & Ley de Biot-Savart',
      desc: 'Acción de campos magnéticos sobre cargas en movimiento y corrientes eléctricas: dinámica helicoidal, ciclotrón, selector de velocidades, efecto Hall, momento dipolar magnético y ley de Biot-Savart.',
      formulas: [
        '\\vec{F} = q(\\vec{E} + \\vec{v}\\times\\vec{B})',
        'd\\vec{F} = I(d\\vec{l}\\times\\vec{B})',
        'd\\vec{B} = \\frac{\\mu_0 I}{4\\pi}\\frac{d\\vec{l}\\times\\hat{r}}{r^2}',
        '\\vec{\\tau} = \\vec{\\mu}\\times\\vec{B} \\quad (\\vec{\\mu} = I\\vec{A})'
      ],
      tags: ['Fuerza de Lorentz', 'Biot-Savart', 'Efecto Hall', 'Torque Magnético', 'Ciclotrón'],
      mit: [
        { type: 'Teoría', icon: '📖', title: 'Cap 08 — Campos Magnéticos', href: '8.02-spring-2007/static_resources/Chapter_08_Magnetic_Fields.pdf' },
        { type: 'Teoría', icon: '📖', title: 'Cap 09 — Fuentes de Campo B', href: '8.02-spring-2007/static_resources/Chapter_09_Sources_of_B_Field.pdf' },
        { type: 'Problem Solving', icon: '✏️', title: 'PS 05 — Ley de Ampère', href: '8.02-spring-2007/static_resources/Problem_Solving_05_Amperes_Law.pdf' },
        { type: 'Problem Solving', icon: '✏️', title: 'PS 06 — Fuerza y Torque en Espiras', href: '8.02-spring-2007/static_resources/Problem_Solving_06_Force_and_Torque_on_Current_Loop.pdf' }
      ],
      uni: [
        { type: 'Teoría UNI', icon: '🏛️', title: 'Sem 10 Cl. 01 — Fuerza Magnética', href: 'CF2B1_Fisica_III_UNI/Material_Oficial_UNI/Clases/Teoria_UNI/Sem10_Clase01_Fuerza_Magnetica.pdf' },
        { type: 'Bonus Track', icon: '⭐', title: 'Bonus — Magnetostática', href: 'CF2B1_Fisica_III_UNI/Material_Oficial_UNI/Clases/Bonus_Track/Bonus_Magnetostatica.pdf' },
        { type: 'Examen Oficial', icon: '📄', title: 'PC4 2024-II (Enunciado)', href: 'CF2B1_Fisica_III_UNI/Material_Oficial_UNI/Examenes_Pasados/2024-II/PC4-CF2B1-24-2.pdf' },
        { type: 'Solucionario', icon: '✅', title: 'Solucionario PC4 2024-I', href: 'CF2B1_Fisica_III_UNI/Material_Oficial_UNI/Examenes_Pasados/2024-I/Practicas/Solucionarios/CF2B1_SOL_PC4.pdf' },
        { type: 'Laboratorio UNI', icon: '🔬', title: 'Lab 5 — Informe Balanza Magnética', href: 'CF2B1_Fisica_III_UNI/Material_Oficial_UNI/Examenes_Pasados/2022-II/Laboratorio/Lab_05/Lab05_Informe_Balanza_Magnetica.pdf' }
      ]
    },
    {
      id: 'pc5',
      eval: 'PC5',
      evalLong: 'Práctica Calificada 5',
      badgeClass: '',
      week: 'Semana 12',
      weekNum: 12,
      title: 'Ley de Ampère, Medios Magnéticos & Inducción de Faraday',
      desc: 'Fuentes de campo magnético por simetría amperiana, materiales diamagnéticos, paramagnéticos y ferromagnéticos, imanación, y Ley de Faraday-Lenz de inducción electromagnética.',
      formulas: [
        '\\oint \\vec{B}\\cdot d\\vec{s} = \\mu_0 I_{enc}',
        '\\vec{B} = \\mu_0(\\vec{H} + \\vec{M}) = \\mu_r \\mu_0 \\vec{H}',
        '\\mathcal{E} = -\\frac{d\\Phi_B}{dt} = -\\frac{d}{dt}\\int \\vec{B}\\cdot d\\vec{A}',
        '\\mathcal{E}_{mov} = \\oint (\\vec{v}\\times\\vec{B})\\cdot d\\vec{l}'
      ],
      tags: ['Ley de Ampère', 'Medios Magnéticos', 'Faraday-Lenz', 'FEM Inducida', 'Campo H y M'],
      mit: [
        { type: 'Teoría', icon: '📖', title: 'Cap 10 — Ley de Faraday', href: '8.02-spring-2007/static_resources/Chapter_10_Faradays_Law.pdf' },
        { type: 'Problem Solving', icon: '✏️', title: 'PS 07 — Inductancia y Transformador', href: '8.02-spring-2007/static_resources/Problem_Solving_07_Inductance_and_Transformers.pdf' },
        { type: 'Laboratorio', icon: '🧪', title: 'Lab 05 — Ley de Faraday', href: '8.02-spring-2007/static_resources/Experiment_05_Faradays_Law.pdf' }
      ],
      uni: [
        { type: 'Bonus Track', icon: '⭐', title: 'Bonus — Inducción Electromagnética', href: 'CF2B1_Fisica_III_UNI/Material_Oficial_UNI/Clases/Bonus_Track/Bonus_Induccion_Electromagnetica.pdf' },
        { type: 'Bonus Track', icon: '⭐', title: 'Bonus — Magnetismo en Medios', href: 'CF2B1_Fisica_III_UNI/Material_Oficial_UNI/Clases/Bonus_Track/Bonus_Magnetismo_Medios_Materiales.pdf' },
        { type: 'Examen Oficial', icon: '📄', title: 'PC5 2024-II (Enunciado)', href: 'CF2B1_Fisica_III_UNI/Material_Oficial_UNI/Examenes_Pasados/2024-II/PC5-CF2B1-24-2.pdf' },
        { type: 'Solucionario', icon: '✅', title: 'Solucionario PC5 2024-I', href: 'CF2B1_Fisica_III_UNI/Material_Oficial_UNI/Examenes_Pasados/2024-I/Practicas/Solucionarios/CF2B1_SOL_PC5.pdf' },
        { type: 'Laboratorio UNI', icon: '🔬', title: 'Lab 6 — Inducción y Transformador', href: 'CF2B1_Fisica_III_UNI/Material_Oficial_UNI/Examenes_Pasados/2022-II/Laboratorio/Lab_06/Lab06_Manual_Induccion_Transformadores.pdf' }
      ]
    },
    {
      id: 'pc6',
      eval: 'PC6',
      evalLong: 'Práctica Calificada 6',
      badgeClass: '',
      week: 'Semana 14',
      weekNum: 14,
      title: 'Inductancia Mutua, Autoinducción & Corriente Alterna RLC',
      desc: 'Cálculo de coeficientes de inducción L y M, energía magnética, circuitos RL y análisis fasorial en corriente alterna sinusoidal: impedancia compleja, factor de potencia y resonancia RLC.',
      formulas: [
        'L = \\frac{N\\Phi_B}{I} \\quad \\mathcal{E}_L = -L\\frac{dI}{dt}',
        'U_B = \\frac{1}{2}L I^2 = \\frac{1}{2\\mu_0}\\int B^2 dV',
        'Z = R + j\\left(\\omega L - \\frac{1}{\\omega C}\\right)',
        '\\omega_0 = \\frac{1}{\\sqrt{LC}} \\quad Q = \\frac{\\omega_0 L}{R}'
      ],
      tags: ['Autoinducción L', 'Inductancia Mutua M', 'Corriente Alterna AC', 'Fasores', 'Impedancia Z', 'Resonancia RLC'],
      mit: [
        { type: 'Teoría', icon: '📖', title: 'Cap 11 — Inductancia', href: '8.02-spring-2007/static_resources/Chapter_11_Inductance.pdf' },
        { type: 'Teoría', icon: '📖', title: 'Cap 12 — Circuitos AC', href: '8.02-spring-2007/static_resources/Chapter_12_AC_Circuits.pdf' },
        { type: 'Problem Solving', icon: '✏️', title: 'PS 09 — Circuitos LRC Forzados', href: '8.02-spring-2007/static_resources/Problem_Solving_09_Driven_LRC_Circuits.pdf' },
        { type: 'Laboratorio', icon: '🧪', title: 'Lab 07 — Circuitos RLC Libres y Forzados', href: '8.02-spring-2007/static_resources/Experiment_07_Undriven_and_Driven_RLC_Circuits.pdf' }
      ],
      uni: [
        { type: 'Bonus Track', icon: '⭐', title: 'Bonus — Corriente Alterna y Fasores', href: 'CF2B1_Fisica_III_UNI/Material_Oficial_UNI/Clases/Bonus_Track/Bonus_Corriente_Alterna.pdf' },
        { type: 'Bonus Track', icon: '⭐', title: 'Bonus — Resumen Teórico Magnetismo', href: 'CF2B1_Fisica_III_UNI/Material_Oficial_UNI/Clases/Bonus_Track/Bonus_Resumen_2_Magnetismo_Maxwell.pdf' },
        { type: 'Examen Oficial', icon: '📄', title: 'PC6 2024-II (Enunciado)', href: 'CF2B1_Fisica_III_UNI/Material_Oficial_UNI/Examenes_Pasados/2024-II/PC6-CF2B1-24-2.pdf' },
        { type: 'Solucionario', icon: '✅', title: 'Solucionario PC6 2024-I', href: 'CF2B1_Fisica_III_UNI/Material_Oficial_UNI/Examenes_Pasados/2024-I/Practicas/Solucionarios/CF2B1_SOL_PC6.pdf' }
      ]
    },
    {
      id: 'ef',
      eval: 'Final',
      evalLong: 'Examen Final',
      badgeClass: 'exam-final',
      week: 'Semana 16',
      weekNum: 16,
      title: 'Ecuaciones de Maxwell, Ondas EM & Óptica Ondulatoria',
      desc: 'Formulación unificada del electromagnetismo: corriente de desplazamiento de Maxwell, ondas electromagnéticas planas en vacío y medios, vector de Poynting, interferencia de Young y difracción.',
      formulas: [
        '\\nabla \\cdot \\vec{E} = \\frac{\\rho}{\\varepsilon_0} \\quad \\nabla \\cdot \\vec{B} = 0',
        '\\nabla \\times \\vec{E} = -\\frac{\\partial \\vec{B}}{\\partial t}',
        '\\nabla \\times \\vec{B} = \\mu_0\\vec{J} + \\mu_0\\varepsilon_0\\frac{\\partial \\vec{E}}{\\partial t}',
        '\\vec{S} = \\frac{1}{\\mu_0}(\\vec{E}\\times\\vec{B}) \\quad c = \\frac{1}{\\sqrt{\\mu_0\\varepsilon_0}}'
      ],
      tags: ['Maxwell Completo', 'Corriente Desplazamiento', 'Ondas EM', 'Poynting', 'Interferencia', 'Difracción'],
      mit: [
        { type: 'Teoría', icon: '📖', title: 'Cap 13 — Maxwell y Ondas EM', href: '8.02-spring-2007/static_resources/Chapter_13_Maxwell_and_EM_Waves.pdf' },
        { type: 'Teoría', icon: '📖', title: 'Cap 14 — Interferencia y Difracción', href: '8.02-spring-2007/static_resources/Chapter_14_Interference_and_Diffraction.pdf' },
        { type: 'Problem Solving', icon: '✏️', title: 'PS 10 — Radiación EM', href: '8.02-spring-2007/static_resources/Problem_Solving_10_EM_Radiation.pdf' },
        { type: 'Problem Solving', icon: '✏️', title: 'PS 11 — Interferencia Óptica', href: '8.02-spring-2007/static_resources/Problem_Solving_11_Interference.pdf' },
        { type: 'Laboratorio', icon: '🧪', title: 'Lab 09 — Interferencia y Difracción Láser', href: '8.02-spring-2007/static_resources/Experiment_09_Interference_and_Diffraction.pdf' }
      ],
      uni: [
        { type: 'Bonus Track', icon: '⭐', title: 'Bonus — Ondas Electromagnéticas', href: 'CF2B1_Fisica_III_UNI/Material_Oficial_UNI/Clases/Bonus_Track/Bonus_Ondas_Electromagneticas.pdf' },
        { type: 'Examen Oficial', icon: '📄', title: 'Examen Final 2025-I (Enunciado)', href: 'CF2B1_Fisica_III_UNI/Material_Oficial_UNI/Examenes_Pasados/2025-I/exfinal_fisica3_2025_1.pdf' },
        { type: 'Solucionario', icon: '✅', title: 'Solucionario Final 2024-II', href: 'CF2B1_Fisica_III_UNI/Material_Oficial_UNI/Examenes_Pasados/2024-II/SOL-EF-CF2B1-24-2.pdf' },
        { type: 'Solucionario', icon: '✅', title: 'Solucionario Final 2024-I', href: 'CF2B1_Fisica_III_UNI/Material_Oficial_UNI/Examenes_Pasados/2024-I/Examenes/Solucionarios/CF2B1_Solucionario_Ex._Final_2024-I.pdf' },
        { type: 'Solucionario', icon: '✅', title: 'Solucionario Final 2023-II', href: 'CF2B1_Fisica_III_UNI/Material_Oficial_UNI/Examenes_Pasados/2023-II/Examenes/Examen_Final_SOL_-_CF2B1_Silabo_Fisica_III_CF2B1_23-II.pdf' }
      ]
    }
  ];

  // Helper para generar sesiones UNI 1 a 15
  const TOPIC_MAP = {
    1:  'Carga eléctrica, conductores, aislantes, electroscopio.',
    2:  'Campo eléctrico, superposición, distribuciones continuas.',
    3:  'Ley de Gauss, flujo, simetría esférica/cilíndrica.',
    4:  'Potencial eléctrico, equipotenciales, relación gradiente.',
    5:  'Energía electrostática, densidad de energía.',
    6:  'Capacitancia, dieléctricos, circuitos equivalentes.',
    7:  'Corriente, resistencia, FEM, Kirchhoff, circuitos RC.',
    9:  'Análisis avanzado de circuitos DC, transitorios.',
    10: 'Fuerza magnética, Lorentz, efecto Hall, torque dipolar.',
    11: 'Fuentes de campo magnético, Biot-Savart, Ampère.',
    12: 'Inducción electromagnética, Faraday-Lenz.',
    13: 'Inductancia mutua, autoinducción, energía magnética.',
    14: 'Corriente alterna, fasores, impedancia, resonancia.',
    15: 'Ecuaciones de Maxwell, ondas electromagnéticas.',
  };

  function makeClasesUNI() {
    const weeks = [
      [1, [1, 2]], [2, [1, 2]], [3, [1, 2]], [4, [1, 2]], [5, [1, 2]],
      [6, [1, 2]], [7, [1, 2]], [9, [1, 2]], [10, [1, 2]], [11, [1, 2]],
      [12, [1, 2]], [13, [1, 2]], [14, [1, 2]], [15, [1]],
    ];
    return weeks.flatMap(([wk, ss]) =>
      ss.map(s => {
        const semStr = String(wk).padStart(2, '0');
        const sesStr = String(s).padStart(2, '0');
        const filename = `Semana_${semStr}_Sesion_${sesStr}_CF2B1.pdf`;
        return {
          source:   'clase',
          tag:      'chip-amber',
          tagLabel: `Sesión UNI · Sem ${wk}`,
          title:    `Semana ${wk} Sesión ${s} — Diapositiva CF2B1`,
          desc:     TOPIC_MAP[wk] ?? 'Diapositiva oficial de Física III UNI.',
          file:     filename,
          href:     `CF2B1_Fisica_III_UNI/Material_Oficial_UNI/Clases/${filename}`,
          keys:     `semana ${wk} sesion ${s} clase oficial diapositiva uni cf2b1`
        };
      })
    );
  }

  const STATIC_RESOURCES = [
    // TEORÍA UNI
    { source:'tello', tag:'chip-rose', tagLabel:'Teoría UNI', title:'Sem 1 Cl. 01 — Carga Eléctrica',             desc:'Cargas, cuantización, conductores/aislantes, electroscopio, jaula de Faraday.',                                   file:'Sem01_Clase01_Carga.pdf',                          href:'CF2B1_Fisica_III_UNI/Material_Oficial_UNI/Clases/Teoria_UNI/Sem01_Clase01_Carga.pdf',                                                    keys:'carga electrostatica faraday jaula cuantizacion' },
    { source:'tello', tag:'chip-rose', tagLabel:'Teoría UNI', title:'Sem 1 Cl. 02 — Interacción Eléctrica',       desc:'Ley de Coulomb, fuerza entre cargas, principio de superposición.',                                               file:'Sem01_Clase02_Interaccion_Electrica.pdf',           href:'CF2B1_Fisica_III_UNI/Material_Oficial_UNI/Clases/Teoria_UNI/Sem01_Clase02_Interaccion_Electrica.pdf',                                  keys:'coulomb superposicion fuerza cargas' },
    { source:'tello', tag:'chip-rose', tagLabel:'Teoría UNI', title:'Sem 2 Cl. 01 — Campo Eléctrico I',           desc:'Noción de campo, líneas de fuerza, campo de carga puntual y dipolo.',                                             file:'Sem02_Clase01_Campo_Electrico.pdf',                 href:'CF2B1_Fisica_III_UNI/Material_Oficial_UNI/Clases/Teoria_UNI/Sem02_Clase01_Campo_Electrico.pdf',                                          keys:'campo electrico lineas fuerza dipolo' },
    { source:'tello', tag:'chip-rose', tagLabel:'Teoría UNI', title:'Sem 2 Cl. 02 — Campo Eléctrico II',          desc:'Campo de distribuciones continuas: anillo, disco, cilindro, plano infinito.',                                      file:'Sem02_Clase02_Campo_Electrico.pdf',                 href:'CF2B1_Fisica_III_UNI/Material_Oficial_UNI/Clases/Teoria_UNI/Sem02_Clase02_Campo_Electrico.pdf',                                          keys:'campo anillo disco cilindro distribucion continua' },
    { source:'tello', tag:'chip-rose', tagLabel:'Teoría UNI', title:'Sem 3 Cl. 01 — Ley de Gauss I',              desc:'Flujo eléctrico, ángulo sólido, enunciado de la Ley de Gauss.',                                                   file:'Sem03_Clase01_Ley_de_Gauss.pdf',                   href:'CF2B1_Fisica_III_UNI/Material_Oficial_UNI/Clases/Teoria_UNI/Sem03_Clase01_Ley_de_Gauss.pdf',                                          keys:'gauss flujo angulo solido ley' },
    { source:'tello', tag:'chip-rose', tagLabel:'Teoría UNI', title:'Sem 3 Cl. 02 — Ley de Gauss II',             desc:'Aplicaciones: conductores, esferas, cilindros con simetría.',                                                     file:'Sem03_Clase02_Ley_de_Gauss.pdf',                   href:'CF2B1_Fisica_III_UNI/Material_Oficial_UNI/Clases/Teoria_UNI/Sem03_Clase02_Ley_de_Gauss.pdf',                                          keys:'gauss simetria conductor esfera cilindro' },
    { source:'tello', tag:'chip-rose', tagLabel:'Teoría UNI', title:'Sem 4 Cl. 01 — Potencial Eléctrico I',        desc:'Diferencia de potencial, equipotenciales, relación E = -grad V.',                                                  file:'Sem04_Clase01_Potencial_Electrico.pdf',             href:'CF2B1_Fisica_III_UNI/Material_Oficial_UNI/Clases/Teoria_UNI/Sem04_Clase01_Potencial_Electrico.pdf',                                      keys:'potencial equipotencial gradiente' },
    { source:'tello', tag:'chip-rose', tagLabel:'Teoría UNI', title:'Sem 4 Cl. 02 — Potencial Eléctrico II',       desc:'Potencial de distribuciones continuas, conductores, energía de ensamble.',                                         file:'Sem04_Clase02_Potencial_Electrico.pdf',             href:'CF2B1_Fisica_III_UNI/Material_Oficial_UNI/Clases/Teoria_UNI/Sem04_Clase02_Potencial_Electrico.pdf',                                      keys:'potencial energia ensamble conductor' },
    { source:'tello', tag:'chip-rose', tagLabel:'Teoría UNI', title:'Sem 4 — Ejemplos de Potencial',              desc:'Colección de problemas resueltos paso a paso: anillo, disco, esfera y conductor.',                                file:'Sem04_Ejemplos.pdf',                               href:'CF2B1_Fisica_III_UNI/Material_Oficial_UNI/Clases/Teoria_UNI/Sem04_Ejemplos.pdf',                                                            keys:'ejemplos potencial problemas resueltos ejercicios' },
    { source:'tello', tag:'chip-rose', tagLabel:'Teoría UNI', title:'Sem 5 Cl. 01 — Energía Electrostática I',    desc:'Energía potencial electrostática de sistemas de cargas discretas.',                                                file:'Sem05_Clase01_Energia_Electrostatica.pdf',          href:'CF2B1_Fisica_III_UNI/Material_Oficial_UNI/Clases/Teoria_UNI/Sem05_Clase01_Energia_Electrostatica.pdf',                                    keys:'energia potencial cargas ensamble' },
    { source:'tello', tag:'chip-rose', tagLabel:'Teoría UNI', title:'Sem 5 Cl. 02 — Energía Electrostática II',   desc:'Energía almacenada en el campo eléctrico: densidad u = 1/2 eps0 E^2.',                                            file:'Sem05_Clase02_Energia_Electrostatica.pdf',          href:'CF2B1_Fisica_III_UNI/Material_Oficial_UNI/Clases/Teoria_UNI/Sem05_Clase02_Energia_Electrostatica.pdf',                                    keys:'energia campo densidad electrostatica' },
    { source:'tello', tag:'chip-rose', tagLabel:'Teoría UNI', title:'Sem 6 Cl. 01 — Capacitancia I',              desc:'Definición de capacitancia, cálculo para condensadores planos, cilíndricos y esféricos.',                           file:'Sem06_Clase01_Capacitancia.pdf',                   href:'CF2B1_Fisica_III_UNI/Material_Oficial_UNI/Clases/Teoria_UNI/Sem06_Clase01_Capacitancia.pdf',                                              keys:'capacitancia condensador placas paralelas' },
    { source:'tello', tag:'chip-rose', tagLabel:'Teoría UNI', title:'Sem 6 Cl. 02 — Capacitancia II',             desc:'Asociación serie y paralelo, energía en condensadores, fuerzas electrostáticas.',                                 file:'Sem06_Clase02_Capacitancia.pdf',                   href:'CF2B1_Fisica_III_UNI/Material_Oficial_UNI/Clases/Teoria_UNI/Sem06_Clase02_Capacitancia.pdf',                                              keys:'serie paralelo energia presion electrostatica' },
    { source:'tello', tag:'chip-rose', tagLabel:'Teoría UNI', title:'Sem 6 Cl. 03 — Dieléctricos',                desc:'Polarización inducida, susceptibilidad, vector desplazamiento D, Gauss con dieléctrico.',                         file:'Sem06_Clase03_Capacitancia.pdf',                   href:'CF2B1_Fisica_III_UNI/Material_Oficial_UNI/Clases/Teoria_UNI/Sem06_Clase03_Capacitancia.pdf',                                              keys:'dielectrico polarizacion vector D gauss' },
    { source:'tello', tag:'chip-rose', tagLabel:'Teoría UNI', title:'Sem 7 Cl. 01 — Corriente y FEM I',           desc:'Corriente, vector densidad de corriente J, Ley de Ohm microscópica y conductividad.',                             file:'Sem07_Clase01_Corriente_Resistencia_FEM.pdf',        href:'CF2B1_Fisica_III_UNI/Material_Oficial_UNI/Clases/Teoria_UNI/Sem07_Clase01_Corriente_Resistencia_FEM.pdf',      keys:'corriente densidad ohm conductividad resistencia' },
    { source:'tello', tag:'chip-rose', tagLabel:'Teoría UNI', title:'Sem 7 Cl. 02 — Corriente y FEM II',          desc:'Modelo de Drude, fuerza electromotriz (FEM), Leyes de Kirchhoff y transitorio RC.',                               file:'Sem07_Clase02_Corriente_Resistencia_FEM.pdf',        href:'CF2B1_Fisica_III_UNI/Material_Oficial_UNI/Clases/Teoria_UNI/Sem07_Clase02_Corriente_Resistencia_FEM.pdf',      keys:'drude fem kirchhoff RC transitorio' },
    { source:'tello', tag:'chip-rose', tagLabel:'Teoría UNI', title:'Sem 9 Cl. 01 — Circuitos DC I',               desc:'Análisis avanzado de circuitos de corriente continua, mallas, nodos, teoremas circuitales.',                     file:'Sem09_Clase01_Corriente_Resistencia_FEM.pdf',        href:'CF2B1_Fisica_III_UNI/Material_Oficial_UNI/Clases/Teoria_UNI/Sem09_Clase01_Corriente_Resistencia_FEM.pdf',      keys:'circuitos dc thevenin norton corriente continua' },
    { source:'tello', tag:'chip-rose', tagLabel:'Teoría UNI', title:'Sem 9 Cl. 02 — Circuitos DC II',              desc:'Transitorios RC y balance energético de circuitos.',                                                              file:'Sem09_Clase02_Corriente_Resistencia_FEM.pdf',        href:'CF2B1_Fisica_III_UNI/Material_Oficial_UNI/Clases/Teoria_UNI/Sem09_Clase02_Corriente_Resistencia_FEM.pdf',      keys:'transitorios rc balance potencia leyes circuitales' },
    { source:'tello', tag:'chip-rose', tagLabel:'Teoría UNI', title:'Sem 9 — Ejemplos de Circuitos DC',           desc:'Problemas resueltos y ejercicios modelo de análisis de mallas y corriente continua.',                             file:'Sem09_Ejemplos.pdf',                               href:'CF2B1_Fisica_III_UNI/Material_Oficial_UNI/Clases/Teoria_UNI/Sem09_Ejemplos.pdf',                                                            keys:'ejemplos circuitos dc kirchhoff problemas resueltos' },
    { source:'tello', tag:'chip-rose', tagLabel:'Teoría UNI', title:'Sem 10 Cl. 01 — Fuerza Magnética',           desc:'Fuerza de Lorentz F = q(E + v x B), trayectoria helicoidal, efecto Hall y aplicaciones.',                         file:'Sem10_Clase01_Fuerza_Magnetica.pdf',               href:'CF2B1_Fisica_III_UNI/Material_Oficial_UNI/Clases/Teoria_UNI/Sem10_Clase01_Fuerza_Magnetica.pdf',                                        keys:'lorentz campo magnetico hall helicoidal ciclotron' },

    // BONUS TRACK UNI
    { source:'bonus', tag:'chip-amber', tagLabel:'Bonus Track', title:'Cargas y Campo Eléctrico',                 desc:'Fundamentos rigurosos, distribuciones continuas e integrales de campo electrostático.',                           file:'Bonus_Cargas_Campo_Electrico.pdf',                href:'CF2B1_Fisica_III_UNI/Material_Oficial_UNI/Clases/Bonus_Track/Bonus_Cargas_Campo_Electrico.pdf',                               keys:'cargas campo electrico distribuciones integrales' },
    { source:'bonus', tag:'chip-amber', tagLabel:'Bonus Track', title:'Electrocinética',                          desc:'Teoría exhaustiva de portadores de carga, densidad de corriente y leyes circuitales.',                            file:'Bonus_Electrocinetica.pdf',                       href:'CF2B1_Fisica_III_UNI/Material_Oficial_UNI/Clases/Bonus_Track/Bonus_Electrocinetica.pdf',                                      keys:'electrocinetica corriente portadores drude ohm' },
    { source:'bonus', tag:'chip-amber', tagLabel:'Bonus Track', title:'Dieléctricos y Polarización',               desc:'Mecanismos microscópicos de polarización, susceptibilidad y energía en dieléctricos.',                             file:'Bonus_Dielectricos.pdf',                          href:'CF2B1_Fisica_III_UNI/Material_Oficial_UNI/Clases/Bonus_Track/Bonus_Dielectricos.pdf',                                         keys:'dielectricos polarizacion susceptibilidad clausius' },
    { source:'bonus', tag:'chip-amber', tagLabel:'Bonus Track', title:'Magnetostática',                           desc:'Ley de Biot-Savart, Ley de Ampère, potencial vector magnético A y condiciones de frontera.',                       file:'Bonus_Magnetostatica.pdf',                        href:'CF2B1_Fisica_III_UNI/Material_Oficial_UNI/Clases/Bonus_Track/Bonus_Magnetostatica.pdf',                                       keys:'magnetostatica biot savart ampere vector potencial frontera' },
    { source:'bonus', tag:'chip-amber', tagLabel:'Bonus Track', title:'Magnetismo en Medios Materiales',          desc:'Diamagnetismo, paramagnetismo, ferromagnetismo, vector imanación M y vector H.',                                 file:'Bonus_Magnetismo_Medios_Materiales.pdf',           href:'CF2B1_Fisica_III_UNI/Material_Oficial_UNI/Clases/Bonus_Track/Bonus_Magnetismo_Medios_Materiales.pdf',                          keys:'magnetismo medios materiales diamagnetismo paramagnetismo imanacion' },
    { source:'bonus', tag:'chip-amber', tagLabel:'Bonus Track', title:'Inducción Electromagnética',               desc:'Ley de Faraday-Lenz, FEM rotacional y transformacional, inductancia y energía magnética.',                         file:'Bonus_Induccion_Electromagnetica.pdf',            href:'CF2B1_Fisica_III_UNI/Material_Oficial_UNI/Clases/Bonus_Track/Bonus_Induccion_Electromagnetica.pdf',                          keys:'induccion faraday lenz transformador fem inductancia' },
    { source:'bonus', tag:'chip-amber', tagLabel:'Bonus Track', title:'Corriente Alterna y Fasores',              desc:'Circuitos RLC en régimen sinusoidal, fasores, admitancia, potencia activa y reactiva.',                           file:'Bonus_Corriente_Alterna.pdf',                    href:'CF2B1_Fisica_III_UNI/Material_Oficial_UNI/Clases/Bonus_Track/Bonus_Corriente_Alterna.pdf',                                 keys:'corriente alterna rlc fasores impedancia potencia resonancia' },
    { source:'bonus', tag:'chip-amber', tagLabel:'Bonus Track', title:'Ondas Electromagnéticas',                  desc:'Ecuaciones de Maxwell completas, deducción de la ecuación de onda y Vector de Poynting.',                          file:'Bonus_Ondas_Electromagneticas.pdf',               href:'CF2B1_Fisica_III_UNI/Material_Oficial_UNI/Clases/Bonus_Track/Bonus_Ondas_Electromagneticas.pdf',                              keys:'ondas electromagneticas maxwell poynting radiacion propagacion' },
    { source:'bonus', tag:'chip-amber', tagLabel:'Bonus Track', title:'Resumen Teórico 1 — Electrostática',       desc:'Formulario y síntesis conceptual de Electrostática, Gauss y Potencial.',                                          file:'Bonus_Resumen_1_Electrostatica.pdf',            href:'CF2B1_Fisica_III_UNI/Material_Oficial_UNI/Clases/Bonus_Track/Bonus_Resumen_1_Electrostatica.pdf',                            keys:'resumen teoria formulas electrostatica potencial' },
    { source:'bonus', tag:'chip-amber', tagLabel:'Bonus Track', title:'Resumen Teórico 2 — Magnetismo y Maxwell',  desc:'Formulario y síntesis conceptual de Magnetostática, Inducción y Maxwell.',                                        file:'Bonus_Resumen_2_Magnetismo_Maxwell.pdf',         href:'CF2B1_Fisica_III_UNI/Material_Oficial_UNI/Clases/Bonus_Track/Bonus_Resumen_2_Magnetismo_Maxwell.pdf',                         keys:'resumen teoria formulas magnetismo maxwell induccion' },
    { source:'bonus', tag:'chip-amber', tagLabel:'Bonus Track', title:'Problemas Diversos 2022-II',               desc:'Compilado selecto de problemas avanzados de exámenes con soluciones.',                                           file:'Bonus_Problemas_Diversos_2022_2.pdf',             href:'CF2B1_Fisica_III_UNI/Material_Oficial_UNI/Clases/Bonus_Track/Bonus_Problemas_Diversos_2022_2.pdf',                            keys:'problemas diversos ejercicios resueltos examen' },
    { source:'bonus', tag:'chip-amber', tagLabel:'Bonus Track', title:'Problemas Propuestos PC3',                 desc:'Banco de problemas desafiantes para la Práctica Calificada 3 (Capacitancia y Dieléctricos).',                     file:'Bonus_Problemas_Propuestos_PC3.pdf',              href:'CF2B1_Fisica_III_UNI/Material_Oficial_UNI/Clases/Bonus_Track/Bonus_Problemas_Propuestos_PC3.pdf',                             keys:'problemas propuestos pc3 capacitancia dielectrico' },

    // LABORATORIOS UNI
    { source:'lab-uni', tag:'chip-amber', tagLabel:'Lab UNI · L1', title:'Lab 1 — Guía de Curvas Equipotenciales', desc:'Guía oficial experimental de mapeo de superficies equipotenciales en cubeta electrolítica.',                       file:'Lab01_Guia_Curvas_Equipotenciales.pdf',         href:'CF2B1_Fisica_III_UNI/Material_Oficial_UNI/Examenes_Pasados/2022-II/Laboratorio/Lab_01/Lab01_Guia_Curvas_Equipotenciales.pdf',                   keys:'laboratorio uni lab 1 curvas equipotenciales guia' },
    { source:'lab-uni', tag:'chip-amber', tagLabel:'Lab UNI · L1', title:'Lab 1 — Informe Curvas Equipotenciales', desc:'Informe experimental completo desarrollado por el Grupo 11 con datos y gráficas.',                               file:'Lab01_Informe_Curvas_Equipotenciales.pdf',      href:'CF2B1_Fisica_III_UNI/Material_Oficial_UNI/Examenes_Pasados/2022-II/Laboratorio/Lab_01/Lab01_Informe_Curvas_Equipotenciales.pdf', keys:'laboratorio uni lab 1 informe curvas equipotenciales' },
    { source:'lab-uni', tag:'chip-amber', tagLabel:'Lab UNI · L2', title:'Lab 2 — Guía Curvas Características V-I', desc:'Guía experimental de determinación de curvas Voltaje-Corriente para elementos óhmicos y no óhmicos.',             file:'Lab02_Guia_Curvas_VI.pdf',                       href:'CF2B1_Fisica_III_UNI/Material_Oficial_UNI/Examenes_Pasados/2022-II/Laboratorio/Lab_02/Lab02_Guia_Curvas_VI.pdf',          keys:'laboratorio uni lab 2 curvas vi voltaje corriente ohmico' },
    { source:'lab-uni', tag:'chip-amber', tagLabel:'Lab UNI · L2', title:'Lab 2 — Informe Curvas V-I',             desc:'Informe experimental con ajuste por mínimos cuadrados y cálculo de resistencias.',                               file:'Lab02_Informe_Curvas_VI.pdf',                    href:'CF2B1_Fisica_III_UNI/Material_Oficial_UNI/Examenes_Pasados/2022-II/Laboratorio/Lab_02/Lab02_Informe_Curvas_VI.pdf',              keys:'laboratorio uni lab 2 informe curvas vi resistencia' },
    { source:'lab-uni', tag:'chip-amber', tagLabel:'Lab UNI · L3', title:'Lab 3 — Guía Fuerza Electromotriz (FEM)', desc:'Guía experimental para la medición de FEM, resistencia interna de fuentes y rendimiento eléctrico.',               file:'Lab03_Guia_FEM.pdf',                              href:'CF2B1_Fisica_III_UNI/Material_Oficial_UNI/Examenes_Pasados/2022-II/Laboratorio/Lab_03/Lab03_Guia_FEM.pdf',                              keys:'laboratorio uni lab 3 fem fuerza electromotriz guia' },
    { source:'lab-uni', tag:'chip-amber', tagLabel:'Lab UNI · L3', title:'Lab 3 — Informe Fuerza Electromotriz',  desc:'Informe experimental con determinación de resistencia interna r y potencia máxima.',                             file:'Lab03_Informe_FEM.pdf',                           href:'CF2B1_Fisica_III_UNI/Material_Oficial_UNI/Examenes_Pasados/2022-II/Laboratorio/Lab_03/Lab03_Informe_FEM.pdf', keys:'laboratorio uni lab 3 informe fem resistencia interna' },
    { source:'lab-uni', tag:'chip-amber', tagLabel:'Lab UNI · L4', title:'Lab 4 — Guía Circuitos y Puente',        desc:'Guía experimental de circuitos de corriente continua, puente de Wheatstone y transitorios.',                     file:'Lab04_Guia_Circuitos_Puente.pdf',                 href:'CF2B1_Fisica_III_UNI/Material_Oficial_UNI/Examenes_Pasados/2022-II/Laboratorio/Lab_04/Lab04_Guia_Circuitos_Puente.pdf',                         keys:'laboratorio uni lab 4 circuitos puente wheatstone' },
    { source:'lab-uni', tag:'chip-amber', tagLabel:'Lab UNI · L5', title:'Lab 5 — Informe Balanza Magnética',      desc:'Medición experimental de la fuerza magnética sobre un conductor rectilíneo con corriente.',                      file:'Lab05_Informe_Balanza_Magnetica.pdf',            href:'CF2B1_Fisica_III_UNI/Material_Oficial_UNI/Examenes_Pasados/2022-II/Laboratorio/Lab_05/Lab05_Informe_Balanza_Magnetica.pdf', keys:'laboratorio uni lab 5 informe balanza magnetica fuerza' },
    { source:'lab-uni', tag:'chip-amber', tagLabel:'Lab UNI · L6', title:'Lab 6 — Manual de Laboratorio N° 6',    desc:'Manual de prácticas sobre inducción electromagnética, transformadores y corriente alterna.',                      file:'Lab06_Manual_Induccion_Transformadores.pdf',      href:'CF2B1_Fisica_III_UNI/Material_Oficial_UNI/Examenes_Pasados/2022-II/Laboratorio/Lab_06/Lab06_Manual_Induccion_Transformadores.pdf',                 keys:'laboratorio uni lab 6 manual induccion transformadores' },
    { source:'lab-uni', tag:'chip-amber', tagLabel:'Lab UNI · L6', title:'Lab 6 — Informe de Laboratorio N° 6',   desc:'Informe experimental completo sobre inductancia mutua y acoplamiento magnético.',                                 file:'Lab06_Informe_Induccion_Transformadores.pdf',     href:'CF2B1_Fisica_III_UNI/Material_Oficial_UNI/Examenes_Pasados/2022-II/Laboratorio/Lab_06/Lab06_Informe_Induccion_Transformadores.pdf',         keys:'laboratorio uni lab 6 informe induccion transformadores acoplamiento' },

    // EXÁMENES Y PRÁCTICAS UNI (2015 AL 2025)
    { source:'exam', tag:'chip-amber', tagLabel:'Examen 2025-I', title:'Examen Final 2025-I',                     desc:'Enunciado oficial del Examen Final de Física III periodo 2025-I.',                                                file:'exfinal_fisica3_2025_1.pdf',                      href:'CF2B1_Fisica_III_UNI/Material_Oficial_UNI/Examenes_Pasados/2025-I/exfinal_fisica3_2025_1.pdf',                                               keys:'examen final 2025 2025-1 uni ef' },
    { source:'exam', tag:'chip-amber', tagLabel:'Examen 2025-I', title:'Examen Parcial 2025-I',                   desc:'Enunciado oficial del Examen Parcial de Física III periodo 2025-I.',                                              file:'exparcial_fisica3_2025_1.pdf',                    href:'CF2B1_Fisica_III_UNI/Material_Oficial_UNI/Examenes_Pasados/2025-I/exparcial_fisica3_2025_1.pdf',                                          keys:'examen parcial 2025 2025-1 uni ep' },
    { source:'exam', tag:'chip-amber', tagLabel:'Examen 2025-I', title:'Examen Sustitutorio 2025-I',              desc:'Enunciado oficial del Examen Sustitutorio de Física III periodo 2025-I.',                                        file:'exsusti_fisica3_2025_1.pdf',                      href:'CF2B1_Fisica_III_UNI/Material_Oficial_UNI/Examenes_Pasados/2025-I/exsusti_fisica3_2025_1.pdf',                                               keys:'examen sustitutorio 2025 2025-1 uni es' },
    { source:'exam', tag:'chip-amber', tagLabel:'Examen 2024-II', title:'Solucionario Examen Final 2024-II',      desc:'Solución paso a paso del Examen Final CF2B1 periodo 2024-II.',                                                    file:'SOL-EF-CF2B1-24-2.pdf',                           href:'CF2B1_Fisica_III_UNI/Material_Oficial_UNI/Examenes_Pasados/2024-II/SOL-EF-CF2B1-24-2.pdf',                                                   keys:'solucionario final 2024-2 2024-ii ef solucion' },
    { source:'exam', tag:'chip-amber', tagLabel:'Examen 2024-II', title:'Solucionario Examen Sustitutorio 2024-II', desc:'Solución paso a paso del Examen Sustitutorio CF2B1 periodo 2024-II.',                                         file:'SOL-ES-CF2B1-24-2.pdf',                           href:'CF2B1_Fisica_III_UNI/Material_Oficial_UNI/Examenes_Pasados/2024-II/SOL-ES-CF2B1-24-2.pdf',                                                   keys:'solucionario sustitutorio 2024-2 2024-ii es solucion' },
    { source:'exam', tag:'chip-amber', tagLabel:'Examen 2024-II', title:'Examen Parcial 2024-II (EP)',            desc:'Enunciados oficiales del Examen Parcial periodo 2024-II.',                                                        file:'EP-CF2B1-24-2.pdf',                               href:'CF2B1_Fisica_III_UNI/Material_Oficial_UNI/Examenes_Pasados/2024-II/EP-CF2B1-24-2.pdf',                                                       keys:'examen parcial 2024-2 2024-ii ep' },
    { source:'exam', tag:'chip-amber', tagLabel:'Examen 2024-II', title:'Examen Final 2024-II (EF)',              desc:'Enunciados oficiales del Examen Final periodo 2024-II.',                                                          file:'EF-CF2B1-24-2.pdf',                               href:'CF2B1_Fisica_III_UNI/Material_Oficial_UNI/Examenes_Pasados/2024-II/EF-CF2B1-24-2.pdf',                                                       keys:'examen final 2024-2 2024-ii ef' },
    { source:'exam', tag:'chip-amber', tagLabel:'Examen 2024-II', title:'Examen Sustitutorio 2024-II (ES)',       desc:'Enunciados oficiales del Examen Sustitutorio periodo 2024-II.',                                                   file:'ES-CF2B1-24-2.pdf',                               href:'CF2B1_Fisica_III_UNI/Material_Oficial_UNI/Examenes_Pasados/2024-II/ES-CF2B1-24-2.pdf',                                                       keys:'examen sustitutorio 2024-2 2024-ii es' },
    { source:'exam', tag:'chip-amber', tagLabel:'Práctica 2024-II', title:'Práctica Calificada 1 (PC1 2024-II)',  desc:'Cargas, Coulomb, distribuciones continuas de carga y superposición.',                                             file:'PC1-CF2B1-24-2.pdf',                              href:'CF2B1_Fisica_III_UNI/Material_Oficial_UNI/Examenes_Pasados/2024-II/PC1-CF2B1-24-2.pdf',                                                       keys:'practica calificada pc1 2024-2 2024-ii coulomb' },
    { source:'exam', tag:'chip-amber', tagLabel:'Práctica 2024-II', title:'Práctica Calificada 2 (PC2 2024-II)',  desc:'Ley de Gauss, potencial electrostático y cálculo de gradiente de potencial.',                                     file:'PC2-CF2B1-24-2.pdf',                              href:'CF2B1_Fisica_III_UNI/Material_Oficial_UNI/Examenes_Pasados/2024-II/PC2-CF2B1-24-2.pdf',                                                       keys:'practica calificada pc2 2024-2 2024-ii gauss potencial' },
    { source:'exam', tag:'chip-amber', tagLabel:'Práctica 2024-II', title:'Práctica Calificada 3 (PC3 2024-II)',  desc:'Energía electrostática, capacitancia, dieléctricos y vector desplazamiento.',                                      file:'PC3-CF2B1-24-2.pdf',                              href:'CF2B1_Fisica_III_UNI/Material_Oficial_UNI/Examenes_Pasados/2024-II/PC3-CF2B1-24-2.pdf',                                                       keys:'practica calificada pc3 2024-2 2024-ii capacitancia dielectrico' },
    { source:'exam', tag:'chip-amber', tagLabel:'Práctica 2024-II', title:'Práctica Calificada 4 (PC4 2024-II)',  desc:'Fuerza magnética, campo de Lorentz, efecto Hall y Biot-Savart.',                                                  file:'PC4-CF2B1-24-2.pdf',                              href:'CF2B1_Fisica_III_UNI/Material_Oficial_UNI/Examenes_Pasados/2024-II/PC4-CF2B1-24-2.pdf',                                                       keys:'practica calificada pc4 2024-2 2024-ii lorentz hall biot savart' },
    { source:'exam', tag:'chip-amber', tagLabel:'Práctica 2024-II', title:'Práctica Calificada 5 (PC5 2024-II)',  desc:'Ley de Ampère, inducción electromagnética de Faraday y Ley de Lenz.',                                              file:'PC5-CF2B1-24-2.pdf',                              href:'CF2B1_Fisica_III_UNI/Material_Oficial_UNI/Examenes_Pasados/2024-II/PC5-CF2B1-24-2.pdf',                                                       keys:'practica calificada pc5 2024-2 2024-ii ampere faraday induccion' },
    { source:'exam', tag:'chip-amber', tagLabel:'Práctica 2024-II', title:'Práctica Calificada 6 (PC6 2024-II)',  desc:'Inductancia, circuitos RL/RLC en CA, resonancia y ecuaciones de Maxwell.',                                         file:'PC6-CF2B1-24-2.pdf',                              href:'CF2B1_Fisica_III_UNI/Material_Oficial_UNI/Examenes_Pasados/2024-II/PC6-CF2B1-24-2.pdf',                                                       keys:'practica calificada pc6 2024-2 2024-ii inductancia rlc maxwell' },
    { source:'exam', tag:'chip-amber', tagLabel:'Práctica Dirigida', title:'Prácticas Dirigidas 1 a 6 (2024-II)', desc:'Conjunto completo de guías de problemas propuestos y ejercicios dirigidos (PD1 a PD6).',                         file:'PD1-CF2B1-24-2.pdf',                              href:'CF2B1_Fisica_III_UNI/Material_Oficial_UNI/Examenes_Pasados/2024-II/PD1-CF2B1-24-2.pdf',                                                       keys:'practica dirigida pd1 pd2 pd3 pd4 pd5 pd6 2024-2' },
    { source:'exam', tag:'chip-amber', tagLabel:'Examen 2024-I', title:'Solucionario Examen Final 2024-I',        desc:'Solución completa del Examen Final CF2B1 periodo 2024-I.',                                                        file:'CF2B1_Solucionario_Ex._Final_2024-I.pdf',         href:'CF2B1_Fisica_III_UNI/Material_Oficial_UNI/Examenes_Pasados/2024-I/Examenes/Solucionarios/CF2B1_Solucionario_Ex._Final_2024-I.pdf', keys:'solucionario final 2024-1 2024-i ef' },
    { source:'exam', tag:'chip-amber', tagLabel:'Examen 2024-I', title:'Solucionario Sustitutorio 2024-I',       desc:'Solución completa del Examen Sustitutorio CF2B1 periodo 2024-I.',                                                 file:'CF2B1_Solucionario_Ex._Sustitutorio_2024-I.pdf',  href:'CF2B1_Fisica_III_UNI/Material_Oficial_UNI/Examenes_Pasados/2024-I/Examenes/Solucionarios/CF2B1_Solucionario_Ex._Sustitutorio_2024-I.pdf', keys:'solucionario sustitutorio 2024-1 2024-i es' },
    { source:'exam', tag:'chip-amber', tagLabel:'Examen 2024-I', title:'Solucionario Examen Parcial 2024-I',      desc:'Solución oficial del Examen Parcial 2024-I con correcciones detalladas.',                                         file:'SOL_PARCIAL.pdf',                                 href:'CF2B1_Fisica_III_UNI/Material_Oficial_UNI/Examenes_Pasados/2024-I/Examenes/Solucionarios/SOL_PARCIAL.pdf',                                     keys:'solucionario parcial 2024-1 2024-i ep' },
    { source:'exam', tag:'chip-amber', tagLabel:'Examen 2024-I', title:'Examen Parcial 2024-I (EP)',              desc:'Enunciado oficial del Examen Parcial periodo 2024-I.',                                                            file:'EP_CF2B1_2024_01.pdf',                            href:'CF2B1_Fisica_III_UNI/Material_Oficial_UNI/Examenes_Pasados/2024-I/Examenes/EP_CF2B1_2024_01.pdf',                                            keys:'examen parcial 2024-1 2024-i ep' },
    { source:'exam', tag:'chip-amber', tagLabel:'Práctica 2024-I', title:'Solucionarios PC1 a PC6 (2024-I)',      desc:'Colección completa de solucionarios oficiales paso a paso de las Prácticas Calificadas 1 a 6.',                   file:'CF2B1_SOL_PC1.pdf',                              href:'CF2B1_Fisica_III_UNI/Material_Oficial_UNI/Examenes_Pasados/2024-I/Practicas/Solucionarios/CF2B1_SOL_PC1.pdf',                                    keys:'solucionario practicas pc1 pc2 pc3 pc4 pc5 pc6 2024-1' },
    { source:'exam', tag:'chip-amber', tagLabel:'Examen 2023-II', title:'Solucionario Examen Parcial 2023-II',    desc:'Solucionario paso a paso del Examen Parcial CF2B1 periodo 2023-II.',                                              file:'Examen_Parcial_SOL_-_CF2B1_Silabo_Fisica_III_CF2B1_23-II.pdf',      href:'CF2B1_Fisica_III_UNI/Material_Oficial_UNI/Examenes_Pasados/2023-II/Examenes/Examen_Parcial_SOL_-_CF2B1_Silabo_Fisica_III_CF2B1_23-II.pdf',   keys:'solucionario parcial 2023-2 2023-ii ep' },
    { source:'exam', tag:'chip-amber', tagLabel:'Examen 2023-II', title:'Solucionario Examen Final 2023-II',      desc:'Solucionario paso a paso del Examen Final CF2B1 periodo 2023-II.',                                                file:'Examen_Final_SOL_-_CF2B1_Silabo_Fisica_III_CF2B1_23-II.pdf',        href:'CF2B1_Fisica_III_UNI/Material_Oficial_UNI/Examenes_Pasados/2023-II/Examenes/Examen_Final_SOL_-_CF2B1_Silabo_Fisica_III_CF2B1_23-II.pdf',     keys:'solucionario final 2023-2 2023-ii ef' },
    { source:'exam', tag:'chip-amber', tagLabel:'Examen 2023-II', title:'Solucionario Sustitutorio 2023-II',     desc:'Solucionario paso a paso del Examen Sustitutorio CF2B1 periodo 2023-II.',                                         file:'Examen_Sustitutorio_SOL_-_CF2B1_Silabo_Fisica_III_CF2B1_23-II.pdf', href:'CF2B1_Fisica_III_UNI/Material_Oficial_UNI/Examenes_Pasados/2023-II/Examenes/Examen_Sustitutorio_SOL_-_CF2B1_Silabo_Fisica_III_CF2B1_23-II.pdf', keys:'solucionario sustitutorio 2023-2 2023-ii es' },
    { source:'exam', tag:'chip-amber', tagLabel:'Práctica 2023-II', title:'Solucionarios PC1 a PC6 (2023-II)',    desc:'Solucionarios completos desarrollados de las prácticas PC1, PC2, PC3, PC4, PC5 y PC6.',                           file:'PC1_SOL_-_CF2B1_2023-II.pdf',                    href:'CF2B1_Fisica_III_UNI/Material_Oficial_UNI/Examenes_Pasados/2023-II/Practicas/Solucionarios/PC1_SOL_-_CF2B1_2023-II.pdf',                     keys:'solucionario practicas pc1 pc2 pc3 pc4 pc5 pc6 2023-2' },
    { source:'exam', tag:'chip-amber', tagLabel:'Práctica 2023-II', title:'Prueba de Entrada 2023-II',            desc:'Evaluación diagnóstica inicial del curso de Física III.',                                                         file:'Prueba_Entrada_-_CF2B1_-_23-II.pdf',             href:'CF2B1_Fisica_III_UNI/Material_Oficial_UNI/Examenes_Pasados/2023-II/Prueba_Entrada_-_CF2B1_-_23-II.pdf',                                     keys:'prueba de entrada 2023-2 diagnostica' },
    { source:'exam', tag:'chip-amber', tagLabel:'Examen 2023-I', title:'Solucionario Examen Parcial 2023-I',      desc:'Solución paso a paso del Examen Parcial de Física III periodo 2023-I.',                                          file:'CF2B1_Ex._Parcial_2023-I.pdf',                   href:'CF2B1_Fisica_III_UNI/Material_Oficial_UNI/Examenes_Pasados/2023-I/Examenes/CF2B1_Ex._Parcial_2023-I.pdf',                   keys:'solucionario parcial 2023-1 2023-i ep' },
    { source:'exam', tag:'chip-amber', tagLabel:'Examen 2023-I', title:'Solucionario Examen Final 2023-I',        desc:'Solución paso a paso del Examen Final de Física III periodo 2023-I.',                                            file:'CF2B1_Ex._Final_2023-I.pdf',                     href:'CF2B1_Fisica_III_UNI/Material_Oficial_UNI/Examenes_Pasados/2023-I/Examenes/CF2B1_Ex._Final_2023-I.pdf',                     keys:'solucionario final 2023-1 2023-i ef' },
    { source:'exam', tag:'chip-amber', tagLabel:'Examen 2023-I', title:'Solucionario Sustitutorio 2023-I',       desc:'Solución paso a paso del Examen Sustitutorio de Física III periodo 2023-I.',                                     file:'CF2B1_Ex._Sustitutorio_2023-I.pdf',              href:'CF2B1_Fisica_III_UNI/Material_Oficial_UNI/Examenes_Pasados/2023-I/Examenes/CF2B1_Ex._Sustitutorio_2023-I.pdf',              keys:'solucionario sustitutorio 2023-1 2023-i es' },
    { source:'exam', tag:'chip-amber', tagLabel:'Práctica 2023-I', title:'Solucionarios PC1 a PC6 (2023-I)',      desc:'Soluciones detalladas de todas las prácticas calificadas 1 a 6 del ciclo 2023-I.',                                file:'CF2B1_Sol._PC1_2023-I.pdf',                       href:'CF2B1_Fisica_III_UNI/Material_Oficial_UNI/Examenes_Pasados/2023-I/Practicas/CF2B1_Sol._PC1_2023-I.pdf',                         keys:'solucionario practicas pc1 pc2 pc3 pc4 pc5 pc6 2023-1' },
    { source:'exam', tag:'chip-amber', tagLabel:'Examen 2022-II', title:'Solucionario Examen Parcial 2022-II',    desc:'Solución paso a paso del Examen Parcial CF2B1 periodo 2022-II.',                                                  file:'SOL-EP-CF2B1-2022-2.pdf',                         href:'CF2B1_Fisica_III_UNI/Material_Oficial_UNI/Examenes_Pasados/2022-II/Examenes/SOL-EP-CF2B1-2022-2.pdf',                                         keys:'solucionario parcial 2022-2 2022-ii ep' },
    { source:'exam', tag:'chip-amber', tagLabel:'Examen 2022-II', title:'Solucionario Examen Final 2022-II',      desc:'Solución paso a paso del Examen Final CF2B1 periodo 2022-II.',                                                    file:'SOL-EF-CF2B1-2022-2.pdf',                         href:'CF2B1_Fisica_III_UNI/Material_Oficial_UNI/Examenes_Pasados/2022-II/Examenes/SOL-EF-CF2B1-2022-2.pdf',                                         keys:'solucionario final 2022-2 2022-ii ef' },
    { source:'exam', tag:'chip-amber', tagLabel:'Examen 2022-II', title:'Solucionario Sustitutorio 2022-II',     desc:'Solución paso a paso del Examen Sustitutorio CF2B1 periodo 2022-II.',                                             file:'SOL-ES-CF2B1-2022-2.pdf',                         href:'CF2B1_Fisica_III_UNI/Material_Oficial_UNI/Examenes_Pasados/2022-II/Examenes/SOL-ES-CF2B1-2022-2.pdf',                                         keys:'solucionario sustitutorio 2022-2 2022-ii es' },
    { source:'exam', tag:'chip-amber', tagLabel:'Práctica 2022-II', title:'Solucionarios PC1 a PC6 (2022-II)',    desc:'Solucionarios desarrollados de las prácticas calificadas 1, 2, 3, 4, 5 y 6 ciclo 2022-II.',                        file:'SOL-PC1-CF2B1-2022-2.pdf',                       href:'CF2B1_Fisica_III_UNI/Material_Oficial_UNI/Examenes_Pasados/2022-II/Practicas_Calificadas/SOL-PC1-CF2B1-2022-2.pdf',                          keys:'solucionario practicas pc1 pc2 pc3 pc4 pc5 pc6 2022-2' },
    { source:'exam', tag:'chip-amber', tagLabel:'Formulario UNI', title:'Formulario Oficial de Electromagnetismo', desc:'Compilado oficial de fórmulas y constantes físicas de Física III UNI.',                                          file:'Formulario_Oficial_Electromagnetismo.pdf',        href:'CF2B1_Fisica_III_UNI/Material_Oficial_UNI/Examenes_Pasados/2022-II/Formulario_Oficial_Electromagnetismo.pdf',                                  keys:'formulario oficial formulas electromagnetismo constantes uni' },
    { source:'exam', tag:'chip-amber', tagLabel:'Práctica 2022-I', title:'Solucionarios PC1 a PC6 (2022-I)',      desc:'Soluciones paso a paso de las Prácticas Calificadas 1 a 6 periodo 2022-I.',                                       file:'SOL-PC1-CF2B1-2022-1.pdf',                        href:'CF2B1_Fisica_III_UNI/Material_Oficial_UNI/Examenes_Pasados/2022-I/Solucionarios/SOL-PC1-CF2B1-2022-1.pdf',                                     keys:'solucionario practicas pc1 pc2 pc3 pc4 pc5 pc6 2022-1' },
    { source:'exam', tag:'chip-amber', tagLabel:'Examen 2021-I', title:'Solucionario Examen Final 2021-I',        desc:'Solución del Examen Final CF2B1 periodo virtual 2021-I.',                                                         file:'SOL-EF-CF2B1-2021-1.pdf',                         href:'CF2B1_Fisica_III_UNI/Material_Oficial_UNI/Examenes_Pasados/2021-I/Solucionarios/SOL-EF-CF2B1-2021-1.pdf',                                     keys:'solucionario final 2021-1 2021-i ef' },
    { source:'exam', tag:'chip-amber', tagLabel:'Examen 2021-I', title:'Solucionario Sustitutorio 2021-I',       desc:'Solución del Examen Sustitutorio CF2B1 periodo 2021-I.',                                                          file:'SOL-ES-CF2B1-2021-1.pdf',                         href:'CF2B1_Fisica_III_UNI/Material_Oficial_UNI/Examenes_Pasados/2021-I/Solucionarios/SOL-ES-CF2B1-2021-1.pdf',                                     keys:'solucionario sustitutorio 2021-1 2021-i es' },
    { source:'exam', tag:'chip-amber', tagLabel:'Práctica 2021-I', title:'Prácticas Calificadas 1 a 6 (2021-I)',  desc:'Enunciados y solucionarios de las prácticas calificadas 1 a 6 ciclo 2021-I.',                                     file:'CF2B1-PC1-2021-1.pdf',                            href:'CF2B1_Fisica_III_UNI/Material_Oficial_UNI/Examenes_Pasados/2021-I/CF2B1-PC1-2021-1.pdf',                                                      keys:'practicas pc1 pc2 pc3 pc4 pc5 pc6 2021-1' },
    { source:'exam', tag:'chip-amber', tagLabel:'Examen 2020-II', title:'Solucionario Examen Parcial 2020-II',    desc:'Solución paso a paso del Examen Parcial periodo 2020-II.',                                                        file:'4.1._EXAMEN_PARCIAL_SOL.pdf',                     href:'CF2B1_Fisica_III_UNI/Material_Oficial_UNI/Examenes_Pasados/2020-II/4.1._EXAMEN_PARCIAL_SOL.pdf',                                     keys:'solucionario parcial 2020-2 2020-ii ep' },
    { source:'exam', tag:'chip-amber', tagLabel:'Examen 2020-II', title:'Solucionario Examen Final 2020-II',      desc:'Solución paso a paso del Examen Final periodo 2020-II.',                                                          file:'8.1._EXAMEN_FINAL_SOL.pdf',                       href:'CF2B1_Fisica_III_UNI/Material_Oficial_UNI/Examenes_Pasados/2020-II/8.1._EXAMEN_FINAL_SOL.pdf',                                       keys:'solucionario final 2020-2 2020-ii ef' },
    { source:'exam', tag:'chip-amber', tagLabel:'Práctica 2020-II', title:'Solucionarios PC1 a PC6 (2020-II)',    desc:'Solucionarios completos paso a paso de las Prácticas Calificadas 1 a 6 ciclo 2020-II.',                           file:'1.1._PC_1_SOL.pdf',                               href:'CF2B1_Fisica_III_UNI/Material_Oficial_UNI/Examenes_Pasados/2020-II/1.1._PC_1_SOL.pdf',                                               keys:'solucionario practicas pc1 pc2 pc3 pc4 pc5 pc6 2020-2' },
    { source:'exam', tag:'chip-amber', tagLabel:'Histórico PC1', title:'Compilado Histórico PC1 (2015–2018)',     desc:'Colección de 10 exámenes y solucionarios de Práctica Calificada 1 desde 2015-I hasta 2018-II.',                   file:'PC1_2015-2.pdf',                                  href:'CF2B1_Fisica_III_UNI/Material_Oficial_UNI/Examenes_Pasados/Historicos_PC1_2015_2018/PC1_2015-2.pdf',                                     keys:'historico pc1 2015 2016 2017 2018 coulomb electrostatica' },

    // TEORÍA MIT 8.02
    { source:'theory', tag:'chip-cyan', tagLabel:'Teoría MIT', title:'Cap 01 — Campos y Potencial',               desc:'Introducción a campos vectoriales, líneas de campo, gradiente y rotacional.',                                     file:'Chapter_01_Fields.pdf',                           href:'8.02-spring-2007/static_resources/Chapter_01_Fields.pdf',                                                        keys:'fields campos vectoriales gradiente' },
    { source:'theory', tag:'chip-cyan', tagLabel:'Teoría MIT', title:'Cap 02 — Ley de Coulomb',                  desc:'Fuerza electrostática, principio de superposición, distribuciones continuas.',                                    file:'Chapter_02_Coulombs_Law.pdf',                     href:'8.02-spring-2007/static_resources/Chapter_02_Coulombs_Law.pdf',                                                  keys:'coulomb ley superposicion electrostatica' },
    { source:'theory', tag:'chip-cyan', tagLabel:'Teoría MIT', title:'Cap 03 — Potencial Eléctrico',             desc:'Energía potencial eléctrica, trabajo, superficies equipotenciales.',                                              file:'Chapter_03_Electric_Potential.pdf',               href:'8.02-spring-2007/static_resources/Chapter_03_Electric_Potential.pdf',                                          keys:'potencial electrico energia equipotencial' },
    { source:'theory', tag:'chip-cyan', tagLabel:'Teoría MIT', title:'Cap 04 — Ley de Gauss',                    desc:'Flujo eléctrico, cálculo de campo en simetrías esférica, cilíndrica y plana.',                                   file:'Chapter_04_Gauss_Law.pdf',                        href:'8.02-spring-2007/static_resources/Chapter_04_Gauss_Law.pdf',                                                    keys:'gauss flujo simetria esferica cilindrica' },
    { source:'theory', tag:'chip-cyan', tagLabel:'Teoría MIT', title:'Cap 05 — Capacitancia y Dieléctricos',     desc:'Cálculo de capacitancia, almacenamiento de energía, polarización y constante dieléctrica.',                       file:'Chapter_05_Capacitance.pdf',                      href:'8.02-spring-2007/static_resources/Chapter_05_Capacitance.pdf',                                                  keys:'capacitancia dielectrico polarizacion energia' },
    { source:'theory', tag:'chip-cyan', tagLabel:'Teoría MIT', title:'Cap 06 — Corriente y Resistencia',         desc:'Densidad de corriente J, ley de Ohm, modelo de conducción de Drude.',                                             file:'Chapter_06_Current_and_Resistance.pdf',          href:'8.02-spring-2007/static_resources/Chapter_06_Current_and_Resistance.pdf',                                  keys:'corriente resistencia ohm drude' },
    { source:'theory', tag:'chip-cyan', tagLabel:'Teoría MIT', title:'Cap 07 — Circuitos de Corriente Directa',   desc:'Leyes de Kirchhoff, reglas de mallas y nodos, análisis transitorio de circuitos RC.',                                file:'Chapter_07_DC_Circuits.pdf',                      href:'8.02-spring-2007/static_resources/Chapter_07_DC_Circuits.pdf',                                                  keys:'circuitos dc kirchhoff rc transitorio' },
    { source:'theory', tag:'chip-cyan', tagLabel:'Teoría MIT', title:'Cap 08 — Campos Magnéticos',                desc:'Fuerza magnética de Lorentz, movimiento de cargas en campos B, torque sobre espiras.',                           file:'Chapter_08_Magnetic_Fields.pdf',                  href:'8.02-spring-2007/static_resources/Chapter_08_Magnetic_Fields.pdf',                                              keys:'campo magnetico lorentz torque espira' },
    { source:'theory', tag:'chip-cyan', tagLabel:'Teoría MIT', title:'Cap 09 — Fuentes de Campo Magnético',      desc:'Ley de Biot-Savart, Ley de Ampère, campo de alambres, espiras y solenoides.',                                    file:'Chapter_09_Sources_of_B_Field.pdf',               href:'8.02-spring-2007/static_resources/Chapter_09_Sources_of_B_Field.pdf',                                          keys:'biot savart ampere fuentes solenoide' },
    { source:'theory', tag:'chip-cyan', tagLabel:'Teoría MIT', title:'Cap 10 — Ley de Faraday',                  desc:'Fem inducida, Ley de Lenz, inductancia mutua y generadores.',                                                     file:'Chapter_10_Faradays_Law.pdf',                     href:'8.02-spring-2007/static_resources/Chapter_10_Faradays_Law.pdf',                                                  keys:'faraday lenz induccion fem generador' },
    { source:'theory', tag:'chip-cyan', tagLabel:'Teoría MIT', title:'Cap 11 — Inductancia',                     desc:'Autoinducción, energía magnética, circuitos RL y oscilaciones LC.',                                               file:'Chapter_11_Inductance.pdf',                       href:'8.02-spring-2007/static_resources/Chapter_11_Inductance.pdf',                                                   keys:'inductancia autoinduccion rl lc energia' },
    { source:'theory', tag:'chip-cyan', tagLabel:'Teoría MIT', title:'Cap 12 — Circuitos de Corriente Alterna',   desc:'Análisis fasorial, impedancia compleja, resonancia en circuitos RLC en serie y paralelo.',                          file:'Chapter_12_AC_Circuits.pdf',                      href:'8.02-spring-2007/static_resources/Chapter_12_AC_Circuits.pdf',                                                  keys:'corriente alterna ac rlc fasores resonancia' },
    { source:'theory', tag:'chip-cyan', tagLabel:'Teoría MIT', title:'Cap 13 — Maxwell y Ondas EM',              desc:'Corriente de desplazamiento, Ecuaciones de Maxwell completas, ondas electromagnéticas planas, Vector de Poynting.', file:'Chapter_13_Maxwell_and_EM_Waves.pdf',          href:'8.02-spring-2007/static_resources/Chapter_13_Maxwell_and_EM_Waves.pdf',                                  keys:'maxwell ondas electromagneticas poynting radiacion' },
    { source:'theory', tag:'chip-cyan', tagLabel:'Teoría MIT', title:'Cap 14 — Interferencia y Difracción',       desc:'Interferencia de Young, difracción de Fraunhofer por rendija simple y redes de difracción.',                      file:'Chapter_14_Interference_and_Diffraction.pdf',      href:'8.02-spring-2007/static_resources/Chapter_14_Interference_and_Diffraction.pdf',                    keys:'interferencia difraccion young fraunhofer optica' },

    // PROBLEM SOLVING MIT
    { source:'solving', tag:'chip-violet', tagLabel:'Problem Solving', title:'PS 01 — Coordenadas e Integrales',  desc:'Problemas de cálculo vectorial, sistemas de coordenadas e integrales de línea y superficie.',                    file:'Problem_Solving_01_Coordinates_and_Integrals.pdf',     href:'8.02-spring-2007/static_resources/Problem_Solving_01_Coordinates_and_Integrals.pdf',     keys:'problem solving coordenadas integrales vector' },
    { source:'solving', tag:'chip-violet', tagLabel:'Problem Solving', title:'PS 02 — Distribuciones Continuas',   desc:'Problemas resueltos de distribuciones continuas de carga y principio de superposición.',                          file:'Problem_Solving_02_Continuous_Charge_Distributions.pdf', href:'8.02-spring-2007/static_resources/Problem_Solving_02_Continuous_Charge_Distributions.pdf', keys:'problem solving distribuciones continuas carga campo' },
    { source:'solving', tag:'chip-violet', tagLabel:'Problem Solving', title:'PS 03 — Ley de Gauss',               desc:'Problemas de flujo y aplicaciones de la Ley de Gauss a diversas simetrías.',                                      file:'Problem_Solving_03_Gauss_Law.pdf',                     href:'8.02-spring-2007/static_resources/Problem_Solving_03_Gauss_Law.pdf',                     keys:'problem solving gauss flujo simetria' },
    { source:'solving', tag:'chip-violet', tagLabel:'Problem Solving', title:'PS 04 — Capacitores',                desc:'Problemas de cálculo de capacitancia, dieléctricos y energía electrostática.',                                    file:'Problem_Solving_04_Capacitors.pdf',                    href:'8.02-spring-2007/static_resources/Problem_Solving_04_Capacitors.pdf',                    keys:'problem solving capacitancia condensadores energia' },
    { source:'solving', tag:'chip-violet', tagLabel:'Problem Solving', title:'PS 05 — Ley de Ampère',              desc:'Problemas de cálculo de campos magnéticos generados por corrientes estacionarias.',                               file:'Problem_Solving_05_Amperes_Law.pdf',                   href:'8.02-spring-2007/static_resources/Problem_Solving_05_Amperes_Law.pdf',                   keys:'problem solving ampere campo magnetico corrientes' },
    { source:'solving', tag:'chip-violet', tagLabel:'Problem Solving', title:'PS 06 — Fuerza y Torque en Espiras',  desc:'Problemas de fuerzas y torque magnético sobre espiras y momentos dipolares.',                                     file:'Problem_Solving_06_Force_and_Torque_on_Current_Loop.pdf', href:'8.02-spring-2007/static_resources/Problem_Solving_06_Force_and_Torque_on_Current_Loop.pdf', keys:'problem solving fuerza torque espira dipolar' },
    { source:'solving', tag:'chip-violet', tagLabel:'Problem Solving', title:'PS 07 — Inductancia y Transformador', desc:'Problemas de autoinducción, inductancia mutua, energía y acoplamiento.',                                          file:'Problem_Solving_07_Inductance_and_Transformers.pdf',  href:'8.02-spring-2007/static_resources/Problem_Solving_07_Inductance_and_Transformers.pdf',  keys:'problem solving inductancia transformador faraday' },
    { source:'solving', tag:'chip-violet', tagLabel:'Problem Solving', title:'PS 08 — Circuitos RC y RL',          desc:'Problemas de respuesta transitoria y constante de tiempo en circuitos de primer orden.',                           file:'Problem_Solving_08_RC_and_RL_Circuits.pdf',           href:'8.02-spring-2007/static_resources/Problem_Solving_08_RC_and_RL_Circuits.pdf',           keys:'problem solving rc rl transitorio tiempo' },
    { source:'solving', tag:'chip-violet', tagLabel:'Problem Solving', title:'PS 09 — Circuitos LRC Forzados',     desc:'Problemas de impedancia, régimen permanente sinusoidal y resonancia.',                                            file:'Problem_Solving_09_Driven_LRC_Circuits.pdf',          href:'8.02-spring-2007/static_resources/Problem_Solving_09_Driven_LRC_Circuits.pdf',          keys:'problem solving lrc rlc ca fasores resonancia' },
    { source:'solving', tag:'chip-violet', tagLabel:'Problem Solving', title:'PS 10 — Radiación Electromagnética', desc:'Problemas de ondas electromagnéticas, corriente de desplazamiento y vector de Poynting.',                        file:'Problem_Solving_10_EM_Radiation.pdf',                 href:'8.02-spring-2007/static_resources/Problem_Solving_10_EM_Radiation.pdf',                 keys:'problem solving radiacion em maxwell poynting' },
    { source:'solving', tag:'chip-violet', tagLabel:'Problem Solving', title:'PS 11 — Interferencia Óptica',        desc:'Problemas de difracción por rendijas y redes de difracción.',                                                     file:'Problem_Solving_11_Interference.pdf',                 href:'8.02-spring-2007/static_resources/Problem_Solving_11_Interference.pdf',                 keys:'problem solving interferencia difraccion optica young' },

    // LABORATORIOS MIT TEAL
    { source:'lab', tag:'chip-emerald', tagLabel:'Laboratorio MIT', title:'Lab 01 — Líneas Equipotenciales y Campos', desc:'Mapeo experimental de superficies equipotenciales y líneas de campo eléctrico.',                             file:'Experiment_01_Equipotential_Lines_and_Electric_Fields.pdf', href:'8.02-spring-2007/static_resources/Experiment_01_Equipotential_Lines_and_Electric_Fields.pdf', keys:'laboratorio mit teal lineas equipotenciales campo' },
    { source:'lab', tag:'chip-emerald', tagLabel:'Laboratorio MIT', title:'Lab 02 — Cubeta de Hielo de Faraday',   desc:'Experimento de inducción electrostática, distribución de carga y blindaje.',                                      file:'Experiment_02_Faraday_Ice_Pail.pdf',                   href:'8.02-spring-2007/static_resources/Experiment_02_Faraday_Ice_Pail.pdf',                   keys:'laboratorio mit teal faraday cubeta hielo blindaje' },
    { source:'lab', tag:'chip-emerald', tagLabel:'Laboratorio MIT', title:'Lab 03 — Campos Magnéticos y Helmholtz', desc:'Medición de campos magnéticos creados por imanes y bobinas de Helmholtz.',                                      file:'Experiment_03_Magnetic_Fields_Bar_Magnet_Helmholtz.pdf', href:'8.02-spring-2007/static_resources/Experiment_03_Magnetic_Fields_Bar_Magnet_Helmholtz.pdf', keys:'laboratorio mit teal helmholtz iman campo magnetico' },
    { source:'lab', tag:'chip-emerald', tagLabel:'Laboratorio MIT', title:'Lab 04 — Fuerzas y Torques Dipolares',   desc:'Estudio experimental de momentos dipolares en campos magnéticos no uniformes.',                                   file:'Experiment_04_Forces_and_Torques_on_Magnetic_Dipoles.pdf', href:'8.02-spring-2007/static_resources/Experiment_04_Forces_and_Torques_on_Magnetic_Dipoles.pdf', keys:'laboratorio mit teal fuerza torque dipolo' },
    { source:'lab', tag:'chip-emerald', tagLabel:'Laboratorio MIT', title:'Lab 05 — Ley de Faraday',               desc:'Verificación cuantitativa de la Ley de Faraday mediante bobinas y flujo variable.',                               file:'Experiment_05_Faradays_Law.pdf',                       href:'8.02-spring-2007/static_resources/Experiment_05_Faradays_Law.pdf',                       keys:'laboratorio mit teal faraday induccion fem' },
    { source:'lab', tag:'chip-emerald', tagLabel:'Laboratorio MIT', title:'Lab 06 — Ley de Ohm y Circuitos RC/RL', desc:'Comportamiento dinámico de circuitos resistivos, capacitivos e inductivos.',                                     file:'Experiment_06_Ohms_Law_RC_and_RL_Circuits.pdf',        href:'8.02-spring-2007/static_resources/Experiment_06_Ohms_Law_RC_and_RL_Circuits.pdf',        keys:'laboratorio mit teal ohm rc rl transitorios' },
    { source:'lab', tag:'chip-emerald', tagLabel:'Laboratorio MIT', title:'Lab 07 — Circuitos RLC Libres y Forzados I', desc:'Medición de respuesta en frecuencia, amortiguamiento y resonancia en RLC.',                                file:'Experiment_07_Undriven_and_Driven_RLC_Circuits.pdf',  href:'8.02-spring-2007/static_resources/Experiment_07_Undriven_and_Driven_RLC_Circuits.pdf',  keys:'laboratorio mit teal rlc resonancia ca' },
    { source:'lab', tag:'chip-emerald', tagLabel:'Laboratorio MIT', title:'Lab 08 — Circuitos RLC Libres y Forzados II', desc:'Estudio avanzado de curvas de fase e impedancia en corriente alterna.',                                    file:'Experiment_08_Undriven_and_Driven_RLC_Circuits_Part2.pdf', href:'8.02-spring-2007/static_resources/Experiment_08_Undriven_and_Driven_RLC_Circuits_Part2.pdf', keys:'laboratorio mit teal rlc fase impedancia' },
    { source:'lab', tag:'chip-emerald', tagLabel:'Laboratorio MIT', title:'Lab 09 — Interferencia y Difracción',   desc:'Experimento óptico de patrones de interferencia y difracción con láser.',                                         file:'Experiment_09_Interference_and_Diffraction.pdf',       href:'8.02-spring-2007/static_resources/Experiment_09_Interference_and_Diffraction.pdf',       keys:'laboratorio mit teal optica interferencia difraccion laser' },
    { source:'lab', tag:'chip-emerald', tagLabel:'Laboratorio MIT', title:'Manual Completo de Experimentos MIT',    desc:'Compilado unificado de todas las prácticas y experimentos de laboratorio TEAL.',                                 file:'Experiment_00_All_Experiments_Complete.pdf',           href:'8.02-spring-2007/static_resources/Experiment_00_All_Experiments_Complete.pdf',           keys:'laboratorio mit teal manual completo experimentos' },
  ];

  const MASTER_RESOURCES = [...makeClasesUNI(), ...STATIC_RESOURCES];

  // ── 3. ESTADO DE LA APLICACIÓN ──
  const state = {
    currentView: 'catalog', // 'catalog' | 'compare'
    compareSubView: 'cards', // 'cards' | 'table'
    selectedEval: 'all',     // 'all' | 'pc1' | 'pc2' | ...
    activeFilter: 'all',
    searchQuery: '',
    resources: MASTER_RESOURCES,
    filtered: MASTER_RESOURCES,
    compareModules: COMPARISON_MODULES,
  };

  // ── 4. ELEMENTOS DEL DOM ──
  const dom = {
    search: document.getElementById('search-input'),
    topCountPill: document.getElementById('top-count-pill'),
    tabCatalog: document.getElementById('tab-catalog'),
    tabCompare: document.getElementById('tab-compare'),
    tabCatalogCount: document.getElementById('tab-catalog-count'),
    filterPills: document.getElementById('filter-pills'),
    heroBanner: document.getElementById('hero-banner'),
    heroTitle: document.getElementById('hero-title'),
    heroDesc: document.getElementById('hero-desc'),
    statTotal: document.getElementById('stat-total'),
    compareSection: document.getElementById('compare-section'),
    resourcesSection: document.getElementById('resources-section'),
    sectionTitle: document.getElementById('section-title'),
    sectionCount: document.getElementById('section-count'),
    cardsGrid: document.getElementById('cards-grid'),
    emptyState: document.getElementById('empty-state'),
    menuToggle: document.getElementById('menu-toggle'),
    sidebar: document.getElementById('sidebar'),
    sidebarOverlay: document.getElementById('sidebar-overlay'),

    // Elementos de la nueva Malla Comparativa
    evalStepperTrack: document.getElementById('eval-stepper-track'),
    toggleViewCards: document.getElementById('toggle-view-cards'),
    toggleViewTable: document.getElementById('toggle-view-table'),
    compareModulesContainer: document.getElementById('compare-modules-container'),
    compareTableContainer: document.getElementById('compare-table-container'),
    tableBody: document.getElementById('table-body'),
  };

  // ── 5. ACTUALIZACIÓN DE CONTADORES & FILTROS ──
  function updateSidebarCounts() {
    const counts = {
      all: state.resources.length,
      tello: 0,
      clase: 0,
      bonus: 0,
      exam: 0,
      'lab-uni': 0,
      theory: 0,
      solving: 0,
      lab: 0,
    };

    for (const r of state.resources) {
      if (counts[r.source] !== undefined) {
        counts[r.source]++;
      }
    }

    for (const [key, count] of Object.entries(counts)) {
      const el = document.getElementById(`count-${key}`);
      if (el) el.textContent = count;
    }

    if (dom.tabCatalogCount) {
      dom.tabCatalogCount.textContent = state.resources.length;
    }
    if (dom.statTotal) {
      dom.statTotal.textContent = state.resources.length;
    }
  }

  function renderFilterPills() {
    if (!dom.filterPills) return;

    dom.filterPills.innerHTML = FILTERS.map(f => `
      <button class="filter-pill ${f.id === state.activeFilter ? 'active' : ''}" data-filter="${f.id}">
        <span>${f.label}</span>
      </button>
    `).join('');

    dom.filterPills.querySelectorAll('.filter-pill').forEach(btn => {
      btn.addEventListener('click', () => {
        setFilter(btn.dataset.filter);
      });
    });
  }

  // ── 6. CONTROLADOR DE VISTAS (CATÁLOGO vs MALLA COMPARATIVA) ──
  function setView(viewName) {
    state.currentView = viewName;

    if (viewName === 'catalog') {
      dom.tabCatalog.classList.add('active');
      dom.tabCatalog.setAttribute('aria-selected', 'true');
      dom.tabCompare.classList.remove('active');
      dom.tabCompare.setAttribute('aria-selected', 'false');

      dom.filterPills.style.display = 'flex';
      dom.resourcesSection.style.display = 'block';
      dom.compareSection.style.display = 'none';

      dom.heroTitle.textContent = 'Electromagnetismo & Óptica';
      dom.heroDesc.innerHTML = 'Portal académico integral para el curso <strong>CF2B1 Física III (UNI)</strong> alineado curricularmente al curso <strong>MIT 8.02</strong>. Incluye clases magistrales de teoría, 27 sesiones oficiales, banco de exámenes resueltos (2015–2025), laboratorios UNI & TEAL MIT, y libro de texto completo.';

      applyFilterAndSearch();
    } else if (viewName === 'compare') {
      dom.tabCompare.classList.add('active');
      dom.tabCompare.setAttribute('aria-selected', 'true');
      dom.tabCatalog.classList.remove('active');
      dom.tabCatalog.setAttribute('aria-selected', 'false');

      dom.filterPills.style.display = 'none';
      dom.resourcesSection.style.display = 'none';
      dom.compareSection.style.display = 'flex';

      dom.heroTitle.textContent = 'Malla Curricular UNI ↔ MIT';
      dom.heroDesc.innerHTML = 'Matriz interactiva de equivalencia académica semana a semana: Mapea cada una de las <strong>8 evaluaciones oficiales de la UNI (PC1 a Final)</strong> con los <strong>14 capítulos de teoría, guías de problem solving y laboratorios de MIT 8.02 TEAL</strong>.';

      document.querySelectorAll('.sidebar-nav .nav-item').forEach(el => el.classList.remove('active'));
      const compNav = document.getElementById('nav-compare');
      if (compNav) compNav.classList.add('active');

      if (dom.topCountPill) {
        dom.topCountPill.textContent = '8 Evaluaciones alineadas';
      }

      renderCompareStepper();
      renderComparisonModules();
      renderComparisonTable();

      triggerMathJaxTypeset();
    }
  }

  // ── 7. RENDERIZADO DE LA MALLA CURRICULAR (STEPPER & BENTO CARDS) ──
  function renderCompareStepper() {
    if (!dom.evalStepperTrack) return;

    const items = [
      { id: 'all', label: 'Todo el Semestre', tag: 'Sem 1–16' },
      ...state.compareModules.map(m => ({ id: m.id, label: m.eval, tag: m.week }))
    ];

    dom.evalStepperTrack.innerHTML = items.map(item => `
      <button class="eval-stepper-item ${item.id === state.selectedEval ? 'active' : ''}" data-eval="${item.id}">
        <span>${item.label}</span>
        <span class="eval-stepper-tag">${item.tag}</span>
      </button>
    `).join('');

    dom.evalStepperTrack.querySelectorAll('.eval-stepper-item').forEach(btn => {
      btn.addEventListener('click', () => {
        state.selectedEval = btn.dataset.eval;
        renderCompareStepper();
        renderComparisonModules();
        renderComparisonTable();
        triggerMathJaxTypeset();
      });
    });
  }

  function renderComparisonModules() {
    if (!dom.compareModulesContainer) return;

    const filtered = state.selectedEval === 'all'
      ? state.compareModules
      : state.compareModules.filter(m => m.id === state.selectedEval);

    dom.compareModulesContainer.innerHTML = filtered.map(m => `
      <article class="eval-card" id="card-${m.id}" data-id="${m.id}">
        <!-- Header -->
        <div class="eval-card-header">
          <div class="eval-card-left">
            <div class="eval-card-meta">
              <span class="eval-card-badge ${m.badgeClass}">${m.eval} · Evaluación Oficial UNI</span>
              <span class="eval-card-week">${m.week} (Ciclo Regular)</span>
            </div>
            <h4 class="eval-card-title">${m.title}</h4>
          </div>
        </div>

        <p class="eval-card-desc">${m.desc}</p>

        <!-- Formulas & Topics Box -->
        <div class="eval-math-box">
          <div class="eval-math-header">
            <span>Fórmulas Clave de la Evaluación</span>
            <span>TeX / LaTeX Render</span>
          </div>
          <div class="eval-formulas-wrap">
            ${m.formulas.map(f => `
              <div class="eval-formula-chip">
                $${f}$
              </div>
            `).join('')}
          </div>
          <div class="eval-tags-wrap">
            ${m.tags.map(t => `<span class="eval-tag-pill">#${t}</span>`).join('')}
          </div>
        </div>

        <!-- Split Comparative Grid: MIT vs UNI -->
        <div class="eval-split-grid">
          <!-- Columna MIT -->
          <div class="split-col mit-col">
            <div class="split-col-header">
              <div class="split-col-title">
                <span>🇺🇸</span>
                <span>MIT OpenCourseWare 8.02</span>
              </div>
              <span class="split-col-count">${m.mit.length} PDFs</span>
            </div>

            <div class="split-links-grid">
              ${m.mit.map(r => `
                <a href="${r.href}" target="_blank" rel="noopener noreferrer" class="split-link-card mit-link" aria-label="${r.title}">
                  <div class="split-link-left">
                    <span class="split-link-icon">${r.icon}</span>
                    <div class="split-link-info">
                      <span class="split-link-title">${r.title}</span>
                      <span class="split-link-badge">${r.type}</span>
                    </div>
                  </div>
                  <span class="split-link-arrow">↗</span>
                </a>
              `).join('')}
            </div>
          </div>

          <!-- Columna UNI -->
          <div class="split-col uni-col">
            <div class="split-col-header">
              <div class="split-col-title">
                <span>🇵🇪</span>
                <span>UNI CF2B1 Material Oficial</span>
              </div>
              <span class="split-col-count">${m.uni.length} PDFs</span>
            </div>

            <div class="split-links-grid">
              ${m.uni.map(r => `
                <a href="${r.href}" target="_blank" rel="noopener noreferrer" class="split-link-card uni-link" aria-label="${r.title}">
                  <div class="split-link-left">
                    <span class="split-link-icon">${r.icon}</span>
                    <div class="split-link-info">
                      <span class="split-link-title">${r.title}</span>
                      <span class="split-link-badge">${r.type}</span>
                    </div>
                  </div>
                  <span class="split-link-arrow">↗</span>
                </a>
              `).join('')}
            </div>
          </div>
        </div>
      </article>
    `).join('');
  }

  function renderComparisonTable() {
    if (!dom.tableBody) return;

    const filtered = state.selectedEval === 'all'
      ? state.compareModules
      : state.compareModules.filter(m => m.id === state.selectedEval);

    dom.tableBody.innerHTML = filtered.map(m => `
      <tr>
        <td>
          <div class="m-eval-cell">
            <span class="m-eval-badge">${m.eval}</span>
            <span class="m-eval-week">${m.week}</span>
          </div>
        </td>
        <td>
          <div class="m-topics-cell">
            <span class="m-topics-title">${m.title}</span>
            <p class="m-topics-desc">${m.desc}</p>
          </div>
        </td>
        <td>
          <div class="m-chips-wrap">
            ${m.mit.map(r => `
              <a href="${r.href}" target="_blank" rel="noopener noreferrer" class="m-chip-btn mit">
                <span>${r.icon}</span>
                <span>${r.title}</span>
              </a>
            `).join('')}
          </div>
        </td>
        <td>
          <div class="m-chips-wrap">
            ${m.uni.map(r => `
              <a href="${r.href}" target="_blank" rel="noopener noreferrer" class="m-chip-btn uni">
                <span>${r.icon}</span>
                <span>${r.title}</span>
              </a>
            `).join('')}
          </div>
        </td>
      </tr>
    `).join('');
  }

  function triggerMathJaxTypeset() {
    if (window.MathJax && window.MathJax.typesetPromise) {
      window.MathJax.typesetPromise([dom.compareSection]).catch(err => {
        console.warn('MathJax rendering error:', err);
      });
    }
  }

  // ── 8. FILTRADO Y BÚSQUEDA DEL CATÁLOGO ──
  function setFilter(filterId) {
    state.activeFilter = filterId;

    if (state.currentView !== 'catalog') {
      setView('catalog');
    }

    document.querySelectorAll('.sidebar-nav .nav-item').forEach(el => {
      el.classList.toggle('active', el.dataset.filter === filterId);
    });

    renderFilterPills();
    applyFilterAndSearch();
  }

  function applyFilterAndSearch() {
    const q = state.searchQuery.trim().toLowerCase();
    const activeFilter = state.activeFilter;

    let filtered = state.resources;

    if (activeFilter !== 'all') {
      filtered = filtered.filter(r => r.source === activeFilter);
    }

    if (q) {
      filtered = filtered.filter(r => {
        const text = `${r.title} ${r.desc} ${r.file} ${r.keys || ''}`.toLowerCase();
        return text.includes(q);
      });
    }

    state.filtered = filtered;
    renderCards(filtered);

    const filterObj = FILTERS.find(f => f.id === activeFilter);
    const filterTitle = filterObj ? filterObj.label : 'Todos los Recursos';

    if (dom.sectionTitle) {
      dom.sectionTitle.textContent = q ? `Resultados para "${q}"` : filterTitle;
    }
    if (dom.sectionCount) {
      dom.sectionCount.textContent = `${filtered.length} ${filtered.length === 1 ? 'recurso' : 'recursos'}`;
    }
    if (dom.topCountPill) {
      dom.topCountPill.textContent = `${filtered.length} de ${state.resources.length} recursos`;
    }
  }

  // ── 9. RENDERIZADO DE CARDS EN BENTO GRID ──
  function renderCards(items) {
    if (!dom.cardsGrid) return;

    if (items.length === 0) {
      dom.cardsGrid.innerHTML = `
        <div class="empty" aria-live="polite">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10"/><path d="M8 15s1.5 2 4 2 4-2 4-2M9 9h.01M15 9h.01"/></svg>
          <p>No se encontraron recursos que coincidan con la búsqueda o filtro actual.</p>
        </div>
      `;
      return;
    }

    dom.cardsGrid.innerHTML = items.map(r => `
      <a href="${r.href}" target="_blank" rel="noopener noreferrer" class="card" aria-label="${r.title}">
        <div class="card-top">
          <span class="card-chip ${r.tag}">${r.tagLabel}</span>
          <svg class="card-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 17L17 7M17 7H7M17 7V17"/></svg>
        </div>
        <h4 class="card-title">${r.title}</h4>
        <p class="card-desc">${r.desc}</p>
        <div class="card-foot">
          <span class="card-filename">${r.file}</span>
          <span>Abrir PDF ↗</span>
        </div>
      </a>
    `).join('');

    dom.cardsGrid.querySelectorAll('.card').forEach(card => {
      card.addEventListener('mousemove', e => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
      });
    });

    if (window.MathJax && window.MathJax.typesetPromise) {
      window.MathJax.typesetPromise([dom.cardsGrid]).catch(() => {});
    }
  }

  // ── 10. INICIALIZACIÓN DE EVENTOS ──
  function setupEventListeners() {
    // Buscador interactivo
    if (dom.search) {
      dom.search.addEventListener('input', e => {
        state.searchQuery = e.target.value;
        if (state.currentView !== 'catalog') {
          setView('catalog');
        }
        applyFilterAndSearch();
      });
    }

    // Tabs superiores (Biblioteca vs Malla Curricular)
    if (dom.tabCatalog) {
      dom.tabCatalog.addEventListener('click', () => setView('catalog'));
    }
    if (dom.tabCompare) {
      dom.tabCompare.addEventListener('click', () => setView('compare'));
    }

    // Sub-view toggle dentro de la Malla Curricular
    if (dom.toggleViewCards && dom.toggleViewTable) {
      dom.toggleViewCards.addEventListener('click', () => {
        state.compareSubView = 'cards';
        dom.toggleViewCards.classList.add('active');
        dom.toggleViewTable.classList.remove('active');
        dom.compareModulesContainer.style.display = 'flex';
        dom.compareTableContainer.style.display = 'none';
        triggerMathJaxTypeset();
      });

      dom.toggleViewTable.addEventListener('click', () => {
        state.compareSubView = 'table';
        dom.toggleViewTable.classList.add('active');
        dom.toggleViewCards.classList.remove('active');
        dom.compareModulesContainer.style.display = 'none';
        dom.compareTableContainer.style.display = 'block';
        triggerMathJaxTypeset();
      });
    }

    // Botones del Sidebar
    document.querySelectorAll('.sidebar-nav .nav-item').forEach(btn => {
      btn.addEventListener('click', () => {
        const view = btn.dataset.view;
        const filter = btn.dataset.filter;

        if (view === 'compare' || filter === 'compare') {
          setView('compare');
        } else {
          setView('catalog');
          setFilter(filter);
        }

        if (window.innerWidth <= 860 && dom.sidebar) {
          dom.sidebar.classList.remove('open');
          dom.sidebarOverlay.classList.remove('active');
        }
      });
    });

    // Mobile Sidebar Toggle
    if (dom.menuToggle && dom.sidebar && dom.sidebarOverlay) {
      dom.menuToggle.addEventListener('click', () => {
        dom.sidebar.classList.toggle('open');
        dom.sidebarOverlay.classList.toggle('active');
      });

      dom.sidebarOverlay.addEventListener('click', () => {
        dom.sidebar.classList.remove('open');
        dom.sidebarOverlay.classList.remove('active');
      });
    }
  }

  // ── 11. ARRANQUE ──
  function init() {
    updateSidebarCounts();
    renderFilterPills();
    setupEventListeners();
    setView('catalog');
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
