// src/data/comparison.js
// Catálogo Maestro de Equivalencia Curricular UNI CF2B1 ↔ MIT 8.02

export const COMPARISON_MODULES = [
  {
    id: 'pc1',
    eval: 'PC1',
    evalLong: 'Práctica Calificada 1',
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
      { type: 'Teoría', title: 'Cap 01 — Campos y Potencial', href: '8.02-spring-2007/static_resources/Chapter_01_Fields.pdf' },
      { type: 'Teoría', title: 'Cap 02 — Ley de Coulomb', href: '8.02-spring-2007/static_resources/Chapter_02_Coulombs_Law.pdf' },
      { type: 'Problem Solving', title: 'PS 01 — Coordenadas e Integrales', href: '8.02-spring-2007/static_resources/Problem_Solving_01_Coordinates_and_Integrals.pdf' },
      { type: 'Problem Solving', title: 'PS 02 — Distribuciones Continuas', href: '8.02-spring-2007/static_resources/Problem_Solving_02_Continuous_Charge_Distributions.pdf' }
    ],
    uni: [
      { type: 'Teoría UNI', title: 'Sem 1 Cl. 01 — Carga Eléctrica', href: 'CF2B1_Fisica_III_UNI/Material_Oficial_UNI/Clases/Teoria_UNI/Sem01_Clase01_Carga.pdf' },
      { type: 'Teoría UNI', title: 'Sem 1 Cl. 02 — Interacción Eléctrica', href: 'CF2B1_Fisica_III_UNI/Material_Oficial_UNI/Clases/Teoria_UNI/Sem01_Clase02_Interaccion_Electrica.pdf' },
      { type: 'Teoría UNI', title: 'Sem 2 Cl. 01 — Campo Eléctrico I', href: 'CF2B1_Fisica_III_UNI/Material_Oficial_UNI/Clases/Teoria_UNI/Sem02_Clase01_Campo_Electrico.pdf' },
      { type: 'Examen Oficial', title: 'PC1 2024-II (Enunciado)', href: 'CF2B1_Fisica_III_UNI/Material_Oficial_UNI/Examenes_Pasados/2024-II/PC1-CF2B1-24-2.pdf' },
      { type: 'Solucionario', title: 'Solucionario PC1 2024-I', href: 'CF2B1_Fisica_III_UNI/Material_Oficial_UNI/Examenes_Pasados/2024-I/Practicas/Solucionarios/CF2B1_SOL_PC1.pdf' },
      { type: 'Histórico', title: 'Compilado PC1 (2015–2018)', href: 'CF2B1_Fisica_III_UNI/Material_Oficial_UNI/Examenes_Pasados/Historicos_PC1_2015_2018/PC1_2015-2.pdf' }
    ]
  },
  {
    id: 'pc2',
    eval: 'PC2',
    evalLong: 'Práctica Calificada 2',
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
      { type: 'Teoría', title: 'Cap 03 — Potencial Eléctrico', href: '8.02-spring-2007/static_resources/Chapter_03_Electric_Potential.pdf' },
      { type: 'Teoría', title: 'Cap 04 — Ley de Gauss', href: '8.02-spring-2007/static_resources/Chapter_04_Gauss_Law.pdf' },
      { type: 'Problem Solving', title: 'PS 03 — Ley de Gauss', href: '8.02-spring-2007/static_resources/Problem_Solving_03_Gauss_Law.pdf' },
      { type: 'Laboratorio', title: 'Lab 01 — Líneas Equipotenciales', href: '8.02-spring-2007/static_resources/Experiment_01_Equipotential_Lines_and_Electric_Fields.pdf' }
    ],
    uni: [
      { type: 'Teoría UNI', title: 'Sem 3 Cl. 01 — Ley de Gauss I', href: 'CF2B1_Fisica_III_UNI/Material_Oficial_UNI/Clases/Teoria_UNI/Sem03_Clase01_Ley_de_Gauss.pdf' },
      { type: 'Teoría UNI', title: 'Sem 4 Cl. 01 — Potencial Eléctrico I', href: 'CF2B1_Fisica_III_UNI/Material_Oficial_UNI/Clases/Teoria_UNI/Sem04_Clase01_Potencial_Electrico.pdf' },
      { type: 'Teoría UNI', title: 'Sem 4 — Ejemplos de Potencial', href: 'CF2B1_Fisica_III_UNI/Material_Oficial_UNI/Clases/Teoria_UNI/Sem04_Ejemplos.pdf' },
      { type: 'Teoría UNI', title: 'Sem 5 Cl. 01 — Energía Electrostática', href: 'CF2B1_Fisica_III_UNI/Material_Oficial_UNI/Clases/Teoria_UNI/Sem05_Clase01_Energia_Electrostatica.pdf' },
      { type: 'Examen Oficial', title: 'PC2 2024-II (Enunciado)', href: 'CF2B1_Fisica_III_UNI/Material_Oficial_UNI/Examenes_Pasados/2024-II/PC2-CF2B1-24-2.pdf' },
      { type: 'Solucionario', title: 'Solucionario PC2 2024-I', href: 'CF2B1_Fisica_III_UNI/Material_Oficial_UNI/Examenes_Pasados/2024-I/Practicas/Solucionarios/CF2B1_SOL_PC2.pdf' }
    ]
  },
  {
    id: 'pc3',
    eval: 'PC3',
    evalLong: 'Práctica Calificada 3',
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
      { type: 'Teoría', title: 'Cap 05 — Capacitancia y Dieléctricos', href: '8.02-spring-2007/static_resources/Chapter_05_Capacitance.pdf' },
      { type: 'Problem Solving', title: 'PS 04 — Capacitores', href: '8.02-spring-2007/static_resources/Problem_Solving_04_Capacitors.pdf' },
      { type: 'Laboratorio', title: 'Lab 02 — Cubeta de Hielo de Faraday', href: '8.02-spring-2007/static_resources/Experiment_02_Faraday_Ice_Pail.pdf' }
    ],
    uni: [
      { type: 'Teoría UNI', title: 'Sem 6 Cl. 01 — Capacitancia I', href: 'CF2B1_Fisica_III_UNI/Material_Oficial_UNI/Clases/Teoria_UNI/Sem06_Clase01_Capacitancia.pdf' },
      { type: 'Teoría UNI', title: 'Sem 6 Cl. 02 — Capacitancia II', href: 'CF2B1_Fisica_III_UNI/Material_Oficial_UNI/Clases/Teoria_UNI/Sem06_Clase02_Capacitancia.pdf' },
      { type: 'Teoría UNI', title: 'Sem 6 Cl. 03 — Dieléctricos', href: 'CF2B1_Fisica_III_UNI/Material_Oficial_UNI/Clases/Teoria_UNI/Sem06_Clase03_Capacitancia.pdf' },
      { type: 'Bonus Track', title: 'Bonus — Dieléctricos y Polarización', href: 'CF2B1_Fisica_III_UNI/Material_Oficial_UNI/Clases/Bonus_Track/Bonus_Dielectricos.pdf' },
      { type: 'Examen Oficial', title: 'PC3 2024-II (Enunciado)', href: 'CF2B1_Fisica_III_UNI/Material_Oficial_UNI/Examenes_Pasados/2024-II/PC3-CF2B1-24-2.pdf' },
      { type: 'Solucionario', title: 'Solucionario PC3 2024-I', href: 'CF2B1_Fisica_III_UNI/Material_Oficial_UNI/Examenes_Pasados/2024-I/Practicas/Solucionarios/CF2B1_SOL_PC3.pdf' }
    ]
  },
  {
    id: 'ep',
    eval: 'Parcial',
    evalLong: 'Examen Parcial',
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
      { type: 'Teoría', title: 'Cap 06 — Corriente y Resistencia', href: '8.02-spring-2007/static_resources/Chapter_06_Current_and_Resistance.pdf' },
      { type: 'Teoría', title: 'Cap 07 — Circuitos DC', href: '8.02-spring-2007/static_resources/Chapter_07_DC_Circuits.pdf' },
      { type: 'Problem Solving', title: 'PS 08 — Circuitos RC y RL', href: '8.02-spring-2007/static_resources/Problem_Solving_08_RC_and_RL_Circuits.pdf' },
      { type: 'Laboratorio', title: 'Lab 06 — Ley de Ohm y Transitorios', href: '8.02-spring-2007/static_resources/Experiment_06_Ohms_Law_RC_and_RL_Circuits.pdf' }
    ],
    uni: [
      { type: 'Teoría UNI', title: 'Sem 7 Cl. 01 — Corriente y FEM I', href: 'CF2B1_Fisica_III_UNI/Material_Oficial_UNI/Clases/Teoria_UNI/Sem07_Clase01_Corriente_Resistencia_FEM.pdf' },
      { type: 'Teoría UNI', title: 'Sem 9 Cl. 01 — Circuitos DC I', href: 'CF2B1_Fisica_III_UNI/Material_Oficial_UNI/Clases/Teoria_UNI/Sem09_Clase01_Corriente_Resistencia_FEM.pdf' },
      { type: 'Teoría UNI', title: 'Sem 9 — Ejemplos de Circuitos DC', href: 'CF2B1_Fisica_III_UNI/Material_Oficial_UNI/Clases/Teoria_UNI/Sem09_Ejemplos.pdf' },
      { type: 'Examen Oficial', title: 'Examen Parcial 2024-II (EP)', href: 'CF2B1_Fisica_III_UNI/Material_Oficial_UNI/Examenes_Pasados/2024-II/EP-CF2B1-24-2.pdf' },
      { type: 'Solucionario', title: 'Solucionario Parcial 2024-I', href: 'CF2B1_Fisica_III_UNI/Material_Oficial_UNI/Examenes_Pasados/2024-I/Examenes/Solucionarios/SOL_PARCIAL.pdf' },
      { type: 'Solucionario', title: 'Solucionario Parcial 2023-II', href: 'CF2B1_Fisica_III_UNI/Material_Oficial_UNI/Examenes_Pasados/2023-II/Examenes/Examen_Parcial_SOL_-_CF2B1_Silabo_Fisica_III_CF2B1_23-II.pdf' }
    ]
  },
  {
    id: 'pc4',
    eval: 'PC4',
    evalLong: 'Práctica Calificada 4',
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
      { type: 'Teoría', title: 'Cap 08 — Campos Magnéticos', href: '8.02-spring-2007/static_resources/Chapter_08_Magnetic_Fields.pdf' },
      { type: 'Teoría', title: 'Cap 09 — Fuentes de Campo B', href: '8.02-spring-2007/static_resources/Chapter_09_Sources_of_B_Field.pdf' },
      { type: 'Problem Solving', title: 'PS 05 — Ley de Ampère', href: '8.02-spring-2007/static_resources/Problem_Solving_05_Amperes_Law.pdf' },
      { type: 'Problem Solving', title: 'PS 06 — Fuerza y Torque en Espiras', href: '8.02-spring-2007/static_resources/Problem_Solving_06_Force_and_Torque_on_Current_Loop.pdf' }
    ],
    uni: [
      { type: 'Teoría UNI', title: 'Sem 10 Cl. 01 — Fuerza Magnética', href: 'CF2B1_Fisica_III_UNI/Material_Oficial_UNI/Clases/Teoria_UNI/Sem10_Clase01_Fuerza_Magnetica.pdf' },
      { type: 'Bonus Track', title: 'Bonus — Magnetostática', href: 'CF2B1_Fisica_III_UNI/Material_Oficial_UNI/Clases/Bonus_Track/Bonus_Magnetostatica.pdf' },
      { type: 'Examen Oficial', title: 'PC4 2024-II (Enunciado)', href: 'CF2B1_Fisica_III_UNI/Material_Oficial_UNI/Examenes_Pasados/2024-II/PC4-CF2B1-24-2.pdf' },
      { type: 'Solucionario', title: 'Solucionario PC4 2024-I', href: 'CF2B1_Fisica_III_UNI/Material_Oficial_UNI/Examenes_Pasados/2024-I/Practicas/Solucionarios/CF2B1_SOL_PC4.pdf' },
      { type: 'Laboratorio UNI', title: 'Lab 5 — Informe Balanza Magnética', href: 'CF2B1_Fisica_III_UNI/Material_Oficial_UNI/Examenes_Pasados/2022-II/Laboratorio/Lab_05/Lab05_Informe_Balanza_Magnetica.pdf' }
    ]
  },
  {
    id: 'pc5',
    eval: 'PC5',
    evalLong: 'Práctica Calificada 5',
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
      { type: 'Teoría', title: 'Cap 10 — Ley de Faraday', href: '8.02-spring-2007/static_resources/Chapter_10_Faradays_Law.pdf' },
      { type: 'Problem Solving', title: 'PS 07 — Inductancia y Transformador', href: '8.02-spring-2007/static_resources/Problem_Solving_07_Inductance_and_Transformers.pdf' },
      { type: 'Laboratorio', title: 'Lab 05 — Ley de Faraday', href: '8.02-spring-2007/static_resources/Experiment_05_Faradays_Law.pdf' }
    ],
    uni: [
      { type: 'Bonus Track', title: 'Bonus — Inducción Electromagnética', href: 'CF2B1_Fisica_III_UNI/Material_Oficial_UNI/Clases/Bonus_Track/Bonus_Induccion_Electromagnetica.pdf' },
      { type: 'Bonus Track', title: 'Bonus — Magnetismo en Medios', href: 'CF2B1_Fisica_III_UNI/Material_Oficial_UNI/Clases/Bonus_Track/Bonus_Magnetismo_Medios_Materiales.pdf' },
      { type: 'Examen Oficial', title: 'PC5 2024-II (Enunciado)', href: 'CF2B1_Fisica_III_UNI/Material_Oficial_UNI/Examenes_Pasados/2024-II/PC5-CF2B1-24-2.pdf' },
      { type: 'Solucionario', title: 'Solucionario PC5 2024-I', href: 'CF2B1_Fisica_III_UNI/Material_Oficial_UNI/Examenes_Pasados/2024-I/Practicas/Solucionarios/CF2B1_SOL_PC5.pdf' },
      { type: 'Laboratorio UNI', title: 'Lab 6 — Inducción y Transformador', href: 'CF2B1_Fisica_III_UNI/Material_Oficial_UNI/Examenes_Pasados/2022-II/Laboratorio/Lab_06/Lab06_Manual_Induccion_Transformadores.pdf' }
    ]
  },
  {
    id: 'pc6',
    eval: 'PC6',
    evalLong: 'Práctica Calificada 6',
    week: 'Semana 14',
    weekNum: 14,
    title: 'Inductancia Mutua, Autoinducción & Corriente Alterna RLC',
    desc: 'Cálculo de coeficientes de inducción $L$ y $M$, energía magnética, circuitos RL y análisis fasorial en corriente alterna sinusoidal: impedancia compleja, factor de potencia y resonancia RLC.',
    formulas: [
      'L = \\frac{N\\Phi_B}{I} \\quad \\mathcal{E}_L = -L\\frac{dI}{dt}',
      'U_B = \\frac{1}{2}L I^2 = \\frac{1}{2\\mu_0}\\int B^2 dV',
      'Z = R + j\\left(\\omega L - \\frac{1}{\\omega C}\\right)',
      '\\omega_0 = \\frac{1}{\\sqrt{LC}} \\quad Q = \\frac{\\omega_0 L}{R}'
    ],
    tags: ['Autoinducción L', 'Inductancia Mutua M', 'Corriente Alterna AC', 'Fasores', 'Impedancia Z', 'Resonancia RLC'],
    mit: [
      { type: 'Teoría', title: 'Cap 11 — Inductancia', href: '8.02-spring-2007/static_resources/Chapter_11_Inductance.pdf' },
      { type: 'Teoría', title: 'Cap 12 — Circuitos AC', href: '8.02-spring-2007/static_resources/Chapter_12_AC_Circuits.pdf' },
      { type: 'Problem Solving', title: 'PS 09 — Circuitos LRC Forzados', href: '8.02-spring-2007/static_resources/Problem_Solving_09_Driven_LRC_Circuits.pdf' },
      { type: 'Laboratorio', title: 'Lab 07 — Circuitos RLC Libres y Forzados', href: '8.02-spring-2007/static_resources/Experiment_07_Undriven_and_Driven_RLC_Circuits.pdf' }
    ],
    uni: [
      { type: 'Bonus Track', title: 'Bonus — Corriente Alterna y Fasores', href: 'CF2B1_Fisica_III_UNI/Material_Oficial_UNI/Clases/Bonus_Track/Bonus_Corriente_Alterna.pdf' },
      { type: 'Bonus Track', title: 'Bonus — Resumen Teórico Magnetismo', href: 'CF2B1_Fisica_III_UNI/Material_Oficial_UNI/Clases/Bonus_Track/Bonus_Resumen_2_Magnetismo_Maxwell.pdf' },
      { type: 'Examen Oficial', title: 'PC6 2024-II (Enunciado)', href: 'CF2B1_Fisica_III_UNI/Material_Oficial_UNI/Examenes_Pasados/2024-II/PC6-CF2B1-24-2.pdf' },
      { type: 'Solucionario', title: 'Solucionario PC6 2024-I', href: 'CF2B1_Fisica_III_UNI/Material_Oficial_UNI/Examenes_Pasados/2024-I/Practicas/Solucionarios/CF2B1_SOL_PC6.pdf' }
    ]
  },
  {
    id: 'ef',
    eval: 'Final',
    evalLong: 'Examen Final',
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
      { type: 'Teoría', title: 'Cap 13 — Maxwell y Ondas EM', href: '8.02-spring-2007/static_resources/Chapter_13_Maxwell_and_EM_Waves.pdf' },
      { type: 'Teoría', title: 'Cap 14 — Interferencia y Difracción', href: '8.02-spring-2007/static_resources/Chapter_14_Interference_and_Diffraction.pdf' },
      { type: 'Problem Solving', title: 'PS 10 — Radiación EM', href: '8.02-spring-2007/static_resources/Problem_Solving_10_EM_Radiation.pdf' },
      { type: 'Problem Solving', title: 'PS 11 — Interferencia Óptica', href: '8.02-spring-2007/static_resources/Problem_Solving_11_Interference.pdf' },
      { type: 'Laboratorio', title: 'Lab 09 — Interferencia y Difracción Láser', href: '8.02-spring-2007/static_resources/Experiment_09_Interference_and_Diffraction.pdf' }
    ],
    uni: [
      { type: 'Bonus Track', title: 'Bonus — Ondas Electromagnéticas', href: 'CF2B1_Fisica_III_UNI/Material_Oficial_UNI/Clases/Bonus_Track/Bonus_Ondas_Electromagneticas.pdf' },
      { type: 'Examen Oficial', title: 'Examen Final 2025-I', href: 'CF2B1_Fisica_III_UNI/Material_Oficial_UNI/Examenes_Pasados/2025-I/exfinal_fisica3_2025_1.pdf' },
      { type: 'Solucionario', title: 'Solucionario Final 2024-II', href: 'CF2B1_Fisica_III_UNI/Material_Oficial_UNI/Examenes_Pasados/2024-II/SOL-EF-CF2B1-24-2.pdf' },
      { type: 'Solucionario', title: 'Solucionario Final 2024-I', href: 'CF2B1_Fisica_III_UNI/Material_Oficial_UNI/Examenes_Pasados/2024-I/Examenes/Solucionarios/CF2B1_Solucionario_Ex._Final_2024-I.pdf' },
      { type: 'Solucionario', title: 'Solucionario Final 2023-II', href: 'CF2B1_Fisica_III_UNI/Material_Oficial_UNI/Examenes_Pasados/2023-II/Examenes/Examen_Final_SOL_-_CF2B1_Silabo_Fisica_III_CF2B1_23-II.pdf' }
    ]
  }
];

// Compatibilidad retroactiva para tabla simple
export const COMPARISON_ROWS = COMPARISON_MODULES.map(m => ({
  eval: `${m.eval} — ${m.week}`,
  topics: m.desc,
  mit: m.mit.map(x => ({ l: x.title.split('—')[0].trim(), h: x.href })),
  uni: m.uni.map(x => ({ l: x.title.split('—')[0].trim(), h: x.href }))
}));
