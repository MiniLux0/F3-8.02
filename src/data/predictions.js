// src/data/predictions.js
// Análisis Estadístico, Frecuencias Históricas y Radar Predictivo de Exámenes UNI CF2B1 (2015-2025)

export const EXAM_PREDICTIONS = [
  {
    id: 'pc1',
    name: 'Práctica Calificada 1 (PC1)',
    shortName: 'PC1',
    evalWeek: 'Semana 3',
    examsCount: 16,
    difficulty: 'Media - Alta',
    historicalAverage: '11.4 / 20',
    summary: 'La PC1 evalúa el dominio del cálculo vectorial y cálculo integral aplicado a distribuciones continuas de carga y dipolos eléctricos. El 90% de los puntos se pierden por errores en el planteamiento de los vectores posición $\\vec{r}$ y $\\vec{r}\'$.',
    topicsDistribution: [
      { topic: 'Campo $\\vec{E}$ de Distribución Continua 1D/2D (Varilla/Arco/Disco)', freq: 94, level: 'critical' },
      { topic: 'Dipolo Eléctrico en Campo Externo (Torque, Energía y Oscilaciones)', freq: 81, level: 'high' },
      { topic: 'Equilibrio Electrostático y Frecuencia de Pequeñas Oscilaciones', freq: 68, level: 'medium' },
      { topic: 'Superposición de Cargas Discretas y Densidades Lineales Variables', freq: 56, level: 'medium' }
    ],
    predictedQuestions: [
      {
        rank: 1,
        probability: '95%',
        probType: 'critical',
        title: 'Campo Eléctrico de un Alambre Finito o Arco Circular con Densidad Variable',
        setup: 'Un alambre delgado de longitud $L$ o doblado en arco de ángulo $\\theta_0$ posee una densidad lineal de carga $\\lambda(\\theta) = \\lambda_0 \\cos\\theta$ o $\\lambda(x) = \\lambda_0 (x/L)$. Se solicita hallar el vector $\\vec{E}$ en un punto simétrico $P(0, 0, z)$ o en el centro de curvatura.',
        strategy: '1) Definir $dq = \\lambda dl$. 2) Expresar el vector fuente $\\vec{r}\'$ y el vector de campo $\\vec{r}$. 3) Integrar por componentes separadas $E_x, E_y, E_z$, explotando simetrías si aplican.',
        trap: 'Olvidar que si la densidad es variable, la simetría puede romperse y componentes que usualmente son cero ($E_x$ o $E_y$) NO se anulan.'
      },
      {
        rank: 2,
        probability: '85%',
        probType: 'high',
        title: 'Dipolo Eléctrico: Torque, Energía y Dinámica de Oscilación',
        setup: 'Un dipolo eléctrico $\\vec{p} = q\\vec{d}$ con momento de inercia $I$ se encuentra en un campo eléctrico uniforme $\\vec{E} = E_0\\hat{i}$. Si se desplaza un ángulo pequeño $\\theta$ respecto a su posición de equilibrio, determine el periodo $T$ de oscilación.',
        strategy: 'Plantear la 2da Ley de Newton para rotación: $\\tau_z = I\\alpha = -p E \\sin\\theta \\approx -p E \\theta$. Identificar $\\omega^2 = \\frac{pE}{I} \\implies T = 2\\pi\\sqrt{\\frac{I}{pE}}$.',
        trap: 'No justificar la aproximación de ángulos pequeños $\\sin\\theta \\approx \\theta$ o confundir el signo del torque restaurador.'
      },
      {
        rank: 3,
        probability: '72%',
        probType: 'medium',
        title: 'Fuerza sobre una Partícula Cargada a lo largo del Eje de un Anillo/Disco',
        setup: 'Cálculo de la fuerza $F_z(z)$ y análisis de la condición de estabilidad en el origen. Para $z \\ll R$, demostrar que la partícula describe un M.A.S. y calcular su frecuencia angular $\\omega$.',
        strategy: 'Aproximar $(z^2 + R^2)^{-3/2} \\approx R^{-3}(1 - \\frac{3}{2}\\frac{z^2}{R^2} + \\dots) \\approx \\frac{1}{R^3}$ para $z \\ll R$.',
        trap: 'No escribir las unidades en el Sistema Internacional o errar en la serie de Taylor.'
      }
    ],
    goldenFormulas: [
      '\\vec{E}(\\vec{r}) = \\frac{1}{4\\pi\\varepsilon_0}\\int \\frac{\\vec{r} - \\vec{r}\'}{|\\vec{r} - \\vec{r}\'|^3} dq',
      'dq = \\lambda dl = \\sigma dA = \\rho dV',
      '\\vec{\\tau} = \\vec{p} \\times \\vec{E}, \\quad U = -\\vec{p} \\cdot \\vec{E}',
      'I\\frac{d^2\\theta}{dt^2} + pE\\theta = 0 \\implies \\omega = \\sqrt{\\frac{pE}{I}}'
    ],
    professorTraps: [
      'No escribir explícitamente el sistema de referencia cartesiano o cilíndrico al inicio.',
      'Omitir los vectores unitarios (entregar escalares cuando se pide el campo vectorial $\\vec{E}$).',
      'Olvidar comprobar el caso límite (cuando $z \\gg R$, comprobar que se reduce a una carga puntual $\\frac{Q}{4\\pi\\varepsilon_0 z^2}$).'
    ],
    bestExamLinks: [
      { name: 'Solucionario PC1 2023-II', href: 'CF2B1_Fisica_III_UNI/Material_Oficial_UNI/Examenes_Pasados/2023-II/Practicas/Solucionarios/PC1_SOL_-_CF2B1_2023-II.pdf' },
      { name: 'Solucionario PC1 2024-I', href: 'CF2B1_Fisica_III_UNI/Material_Oficial_UNI/Examenes_Pasados/2024-I/Practicas/Solucionarios/CF2B1_SOL_PC1.pdf' },
      { name: 'Enunciado PC1 2024-II', href: 'CF2B1_Fisica_III_UNI/Material_Oficial_UNI/Examenes_Pasados/2024-II/PC1-CF2B1-24-2.pdf' }
    ]
  },
  {
    id: 'pc2',
    name: 'Práctica Calificada 2 (PC2)',
    shortName: 'PC2',
    evalWeek: 'Semana 5',
    examsCount: 14,
    difficulty: 'Alta',
    historicalAverage: '10.8 / 20',
    summary: 'La PC2 se enfoca en la Ley de Gauss en geometrías de alta simetría, cálculo del potencial electrostático por integración de línea y el cálculo de la energía de ensamble / densidad $u_E$.',
    topicsDistribution: [
      { topic: 'Ley de Gauss con Densidad No Uniforme $\\rho(r)$ o Cavidad Excéntrica', freq: 96, level: 'critical' },
      { topic: 'Potencial $V(r)$ y Campo mediante Gradiente $\\vec{E} = -\\nabla V$', freq: 88, level: 'critical' },
      { topic: 'Energía de Ensamble y Densidad de Energía $u = \\frac{1}{2}\\varepsilon_0 E^2$', freq: 79, level: 'high' },
      { topic: 'Discontinuidad de Campo y Condiciones de Frontera $\\Delta E_n = \\sigma/\\varepsilon_0$', freq: 62, level: 'medium' }
    ],
    predictedQuestions: [
      {
        rank: 1,
        probability: '96%',
        probType: 'critical',
        title: 'Esfera o Cilindro con Densidad Volumétrica Variable $\\rho(r) = \\rho_0 (r/R)^n$',
        setup: 'Una esfera maciza no conductora de radio $R$ posee una distribución volumétrica de carga radial $\\rho(r) = \\rho_0 (1 - r/R)$. Hallar el campo eléctrico $\\vec{E}(r)$ y el potencial $V(r)$ para $r < R$ y $r > R$ fijando $V(\\infty) = 0$.',
        strategy: '1) $q_{\\text{enc}}(r) = \\int_0^r \\rho(r\') 4\\pi r\'^2 dr\'$. 2) Aplicar Gauss: $E(r) 4\\pi r^2 = q_{\\text{enc}}/\\varepsilon_0$. 3) Integrar $V(r) = -\\int_\\infty^r E(r\') dr\'$ separando por tramos.',
        trap: 'Al calcular el potencial interior $r < R$, olvidar incluir la integral desde $\\infty$ hasta $R$: $V(r) = \\int_r^R E_{\\text{int}} dr\' + \\int_R^\\infty E_{\\text{ext}} dr\'$.'
      },
      {
        rank: 2,
        probability: '88%',
        probType: 'critical',
        title: 'Cavidad Esférica o Cilíndrica Desplazada (Principio de Superposición)',
        setup: 'Una esfera con densidad uniforme $\\rho$ contiene una cavidad esférica hueca cuyo centro está en $\\vec{d}$. Demostrar que el campo eléctrico dentro de la cavidad es estrictamente uniforme y calcular su valor vectorial.',
        strategy: 'Modelar como esfera maciza positiva $(\\rho)$ superpuesta con una esfera del tamaño de la cavidad con densidad negativa $(-\\rho)$. Demostrar que $\\vec{E} = \\frac{\\rho}{3\\varepsilon_0}\\vec{r} - \\frac{\\rho}{3\\varepsilon_0}(\\vec{r}-\\vec{d}) = \\frac{\\rho}{3\\varepsilon_0}\\vec{d}$.',
        trap: 'Intentar aplicar la Ley de Gauss directamente sobre la cavidad (carece de simetría esférica global respecto al origen de la cavidad).'
      },
      {
        rank: 3,
        probability: '78%',
        probType: 'high',
        title: 'Energía Total Almacenada en una Distribución Esférica',
        setup: 'Calcular la autoenergía electrostática de una esfera cargada integrando la densidad de energía $u_E = \\frac{1}{2}\\varepsilon_0 E^2$ sobre todo el espacio y comparar con $U = \\frac{1}{2}\\int \\rho V dV$.',
        strategy: 'Dividir el espacio en dos regiones: $U_{\\text{total}} = \\int_0^R u_{\\text{int}} (4\\pi r^2 dr) + \\int_R^\\infty u_{\\text{ext}} (4\\pi r^2 dr)$.',
        trap: 'Olvidar el diferencial de volumen en coordenadas esféricas $dV = 4\\pi r^2 dr$.'
      }
    ],
    goldenFormulas: [
      '\\oint_S \\vec{E} \\cdot d\\vec{A} = \\frac{q_{\\text{enc}}}{\\varepsilon_0}',
      'V(\\vec{r}) = -\\int_{\\text{ref}}^{\\vec{r}} \\vec{E} \\cdot d\\vec{l}, \\quad \\vec{E} = -\\nabla V',
      'U = \\frac{1}{2}\\varepsilon_0 \\int_{\\text{espacio}} E^2 dV = \\frac{1}{2}\\int \\rho V dV',
      '\\vec{E}_{\\text{cavidad}} = \\frac{\\rho}{3\\varepsilon_0}\\vec{d}'
    ],
    professorTraps: [
      'No verificar la continuidad del potencial $V(r)$ en la frontera $r = R$.',
      'Olvidar que el potencial en el infinito se define como referencia cero solo si la distribución es finita.',
      'Para distribuciones cilíndricas infinitas, definir la referencia en un radio $r_0$ finito y no en el infinito.'
    ],
    bestExamLinks: [
      { name: 'Solucionario PC2 2023-II', href: 'CF2B1_Fisica_III_UNI/Material_Oficial_UNI/Examenes_Pasados/2023-II/Practicas/Solucionarios/PC2_SOL_-_CF2B1_2023-II.pdf' },
      { name: 'Solucionario PC2 2024-I', href: 'CF2B1_Fisica_III_UNI/Material_Oficial_UNI/Examenes_Pasados/2024-I/Practicas/Solucionarios/CF2B1_SOL_PC2.pdf' },
      { name: 'Enunciado PC2 2024-II', href: 'CF2B1_Fisica_III_UNI/Material_Oficial_UNI/Examenes_Pasados/2024-II/PC2-CF2B1-24-2.pdf' }
    ]
  },
  {
    id: 'pc3',
    name: 'Práctica Calificada 3 (PC3)',
    shortName: 'PC3',
    evalWeek: 'Semana 7',
    examsCount: 15,
    difficulty: 'Alta',
    historicalAverage: '11.2 / 20',
    summary: 'La PC3 aborda conductores en equilibrio electrostático, cargas inducidas, cálculo de capacitancia en geometrías con dieléctricos no homogéneos $\\varepsilon(x)$, y vectores $\\vec{D}$ y $\\vec{P}$.',
    topicsDistribution: [
      { topic: 'Capacitancia con Dieléctrico No Homogéneo $\\kappa(x)$ o $\\kappa(r)$', freq: 94, level: 'critical' },
      { topic: 'Cascarones Conductores Concéntricos y Conexión a Tierra ($V=0$)', freq: 90, level: 'critical' },
      { topic: 'Vector Desplazamiento $\\vec{D}$, Polarización $\\vec{P}$ y Cargas Ligadas $\\sigma_b, \\rho_b$', freq: 82, level: 'high' },
      { topic: 'Fuerza Electrostática sobre Dieléctricos Parcialmente Insertados', freq: 65, level: 'medium' }
    ],
    predictedQuestions: [
      {
        rank: 1,
        probability: '94%',
        probType: 'critical',
        title: 'Capacitor con Dieléctrico con Constante Dieléctrica Variable $\\varepsilon_r(x)$',
        setup: 'Un capacitor de placas planas paralelas de área $A$ y separación $d$ está lleno de un dieléctrico cuya permitividad relativa varía linealmente como $\\varepsilon_r(x) = 1 + k x/d$. Hallar la capacitancia $C$, el campo $\\vec{E}(x)$, el vector desplazamiento $\\vec{D}$, y las densidades de carga ligada $\\sigma_b, \\rho_b$.',
        strategy: '1) Carga libre $Q$ fija $\\implies D = \\frac{Q}{A}$. 2) $E(x) = \\frac{D}{\\varepsilon_0 \\varepsilon_r(x)}$. 3) $\\Delta V = \\int_0^d E(x) dx$. 4) $C = \\frac{Q}{\\Delta V}$. 5) $\\vec{P} = \\vec{D} - \\varepsilon_0\\vec{E}$, $\\rho_b = -\\frac{dP}{dx}$.',
        trap: 'Asumir que $\\vec{E}$ es uniforme; en un medio no homogéneo con $Q$ constante, $\\vec{D}$ es uniforme pero $\\vec{E}(x)$ varía inversamente con $\\varepsilon_r(x)$.'
      },
      {
        rank: 2,
        probability: '90%',
        probType: 'critical',
        title: 'Sistema de 3 Cascarones Esféricos Conductores con Puesta a Tierra',
        setup: 'Tres cascarones esféricos concéntricos de radios $a < b < c$. El cascarón interior tiene carga $+Q$, el intermedio está conectado a tierra ($V_b = 0$) y el exterior tiene carga $+2Q$. Hallar la carga inducida en cada superficie y el potencial de cada cascarón.',
        strategy: 'Definir incógnitas para las cargas en cada superficie. Imponer $V(b) = -\\int_\\infty^b E(r) dr = 0$ para despejar la carga inducida $q_b$.',
        trap: 'Creer erróneamente que si un conductor está a tierra su carga neta es cero (la carga se ajusta para que el potencial total sea nulo).'
      },
      {
        rank: 3,
        probability: '75%',
        probType: 'high',
        title: 'Fuerza sobre un Bloque Dieléctrico en un Capacitor a Voltaje Constante',
        setup: 'Un bloque de dieléctrico de permitividad $\\kappa$ se inserta una distancia $x$ dentro de las placas de un capacitor conectado a una batería $V_0$. Calcular la fuerza mecánica que ejerce el campo sobre el dieléctrico.',
        strategy: '$C(x) = \\frac{\\varepsilon_0 w}{d}[L + (\\kappa - 1)x]$. A voltaje constante: $F = +\\frac{1}{2}V_0^2 \\frac{dC}{dx} = \\frac{\\varepsilon_0 w (\\kappa-1) V_0^2}{2d}$.',
        trap: 'Usar $F = -\\frac{dU}{dx}$ con signo negativo cuando el voltaje se mantiene constante (a $V$ constante, la fuente entrega trabajo y el signo es positivo).'
      }
    ],
    goldenFormulas: [
      '\\oint_S \\vec{D} \\cdot d\\vec{A} = Q_{\\text{libre, enc}}, \\quad \\vec{D} = \\varepsilon_0 \\varepsilon_r \\vec{E} = \\varepsilon_0 \\vec{E} + \\vec{P}',
      '\\sigma_b = \\vec{P} \\cdot \\hat{n}, \\quad \\rho_b = -\\nabla \\cdot \\vec{P}',
      'C = \\frac{Q}{\\Delta V} = \\left( \\int \\frac{dx}{\\varepsilon_0 \\varepsilon_r(x) A} \\right)^{-1}',
      'F_x = +\\frac{1}{2}V^2 \\frac{dC}{dx} \\quad (V = \\text{cte}), \\quad F_x = -\\frac{1}{2}\\frac{Q^2}{C^2}\\frac{dC}{dx} \\quad (Q = \\text{cte})'
    ],
    professorTraps: [
      'No distinguir entre cargas libres $Q_{\\text{libre}}$ y cargas ligadas de polarización $Q_{\\text{ligada}}$.',
      'Confundir el sentido del vector normal $\\hat{n}$ en las cargas superficiales de polarización (siempre apunta hacia afuera del dieléctrico).'
    ],
    bestExamLinks: [
      { name: 'Solucionario PC3 2023-II', href: 'CF2B1_Fisica_III_UNI/Material_Oficial_UNI/Examenes_Pasados/2023-II/Practicas/Solucionarios/PC3_SOL_-_CF2B1_2023-II.pdf' },
      { name: 'Solucionario PC3 2024-I', href: 'CF2B1_Fisica_III_UNI/Material_Oficial_UNI/Examenes_Pasados/2024-I/Practicas/Solucionarios/CF2B1_SOL_PC3.pdf' },
      { name: 'Enunciado PC3 2024-II', href: 'CF2B1_Fisica_III_UNI/Material_Oficial_UNI/Examenes_Pasados/2024-II/PC3-CF2B1-24-2.pdf' }
    ]
  },
  {
    id: 'parcial',
    name: 'Examen Parcial (EP)',
    shortName: 'Parcial',
    evalWeek: 'Semana 8',
    examsCount: 16,
    difficulty: 'Muy Alta',
    historicalAverage: '09.6 / 20',
    summary: 'El Parcial integra toda la Electrostática (Gauss, Dieléctricos, Energía) con la teoría de Corriente Eléctrica (Drude, Resistencia de Geometría Variable) y Circuitos RC en régimen transitorio y permanente.',
    topicsDistribution: [
      { topic: 'Cálculo de Resistencia de Geometría No Homogénea (Conos, Anillos, Coaxiales)', freq: 95, level: 'critical' },
      { topic: 'Circuito RC Multimalla: Transitorio ($t=0^+$, $t(t)$, $t\\to\\infty$) y Balance de Energía', freq: 93, level: 'critical' },
      { topic: 'Problema Integrador de Gauss + Potencial + Dieléctricos', freq: 88, level: 'critical' },
      { topic: 'Densidad de Corriente $\\vec{J} = n q \\vec{v}_d = \\sigma \\vec{E}$ y Modelo de Drude', freq: 70, level: 'high' }
    ],
    predictedQuestions: [
      {
        rank: 1,
        probability: '95%',
        probType: 'critical',
        title: 'Resistencia Eléctrica de un Tronco de Cono o Semianillo Conductor',
        setup: 'Un conductor de resistividad $\\rho$ tiene la forma de un tronco de cono circular de longitud $L$, con radio menor $a$ y radio mayor $b$. Si la corriente fluye uniformemente de una base a otra, determine la resistencia total $R$.',
        strategy: '1) Radio en posición $x$: $r(x) = a + \\frac{b-a}{L}x$. 2) Área transversal: $A(x) = \\pi r(x)^2$. 3) $dR = \\rho \\frac{dx}{\\pi r(x)^2}$. 4) Integrar de $0$ a $L$: $R = \\frac{\\rho L}{\\pi a b}$.',
        trap: 'Asumir que la resistencia es $\\rho L / (\\pi r_{\\text{promedio}}^2)$, lo cual es matemáticamente incorrecto.'
      },
      {
        rank: 2,
        probability: '93%',
        probType: 'critical',
        title: 'Transitorio RC con Interruptor y Balance Energético Completo',
        setup: 'Un circuito contiene 2 fuentes de FEM, 3 resistencias y 2 condensadores. En $t=0$ se cierra el interruptor $S$. Hallar: a) Corrientes en $t=0^+$, b) Cargas $q(t)$ como función del tiempo, c) Energía total entregada por la batería vs. disipada en las resistencias en $0 \\le t < \\infty$.',
        strategy: 'En $t=0^+$, reemplazar condensadores por cortocircuitos si estaban descargados ($V_C(0^+) = 0$). Escribir la ecuación diferencial de malla: $\\mathcal{E} = R_{\\text{eq}} \\frac{dq}{dt} + \\frac{q}{C_{\\text{eq}}}$. Comprobar que $W_{\\text{fuente}} = U_{\\text{cap}} + E_{\\text{disipada}}$.',
        trap: 'Olvidar la condición de continuidad del voltaje en los capacitores $V_C(0^+) = V_C(0^-)$.'
      },
      {
        rank: 3,
        probability: '85%',
        probType: 'high',
        title: 'Corriente de Fuga entre Placas con Medio Débilmente Conductor',
        setup: 'Un capacitor cilíndrico coaxial tiene entre sus armaduras un material de permitividad $\\varepsilon$ y conductividad finita $\\sigma$. Hallar la resistencia de fuga $R$ y verificar que el producto $R C = \\frac{\\varepsilon}{\\sigma}$ es independiente de la geometría.',
        strategy: '$R = \\frac{\\ln(b/a)}{2\\pi \\sigma L}$, $C = \\frac{2\\pi \\varepsilon L}{\\ln(b/a)} \\implies RC = \\frac{\\varepsilon}{\\sigma} = \\varepsilon_0 \\varepsilon_r \\rho_{\\text{resistividad}}$.',
        trap: 'Confundir la permitividad eléctrica $\\varepsilon$ con la conductividad $\\sigma$.'
      }
    ],
    goldenFormulas: [
      'R = \\int_0^L \\frac{\\rho(x)}{A(x)} dx, \\quad R_{\\text{tronco}} = \\frac{\\rho L}{\\pi a b}',
      'I = \\iint \\vec{J} \\cdot d\\vec{A}, \\quad \\vec{J} = \\sigma \\vec{E} = n q \\vec{v}_d',
      'q(t) = Q_f (1 - e^{-t/RC}), \\quad i(t) = \\frac{\\mathcal{E}}{R} e^{-t/RC}',
      'W_{\\text{fuente}} = \\int_0^\\infty \\mathcal{E} i(t) dt = \\Delta U_C + \\int_0^\\infty i^2 R dt'
    ],
    professorTraps: [
      'No justificar el comportamiento de los capacitores en los límites $t = 0^+$ y $t \\to \\infty$.',
      'En el cálculo de resistencia de geometrías curvas (como un cascarón o anillo), no usar la coordenada radial o angular adecuada.'
    ],
    bestExamLinks: [
      { name: 'Solucionario Parcial 2023-II', href: 'CF2B1_Fisica_III_UNI/Material_Oficial_UNI/Examenes_Pasados/2023-II/Examenes/Examen_Parcial_SOL_-_CF2B1_Silabo_Fisica_III_CF2B1_23-II.pdf' },
      { name: 'Solucionario Parcial 2024-I', href: 'CF2B1_Fisica_III_UNI/Material_Oficial_UNI/Examenes_Pasados/2024-I/Examenes/Solucionarios/SOL_PARCIAL.pdf' },
      { name: 'Enunciado Parcial 2024-II', href: 'CF2B1_Fisica_III_UNI/Material_Oficial_UNI/Examenes_Pasados/2024-II/EP-CF2B1-24-2.pdf' }
    ]
  },
  {
    id: 'pc4',
    name: 'Práctica Calificada 4 (PC4)',
    shortName: 'PC4',
    evalWeek: 'Semana 10',
    examsCount: 14,
    difficulty: 'Media - Alta',
    historicalAverage: '11.8 / 20',
    summary: 'La PC4 evalúa la Fuerza de Lorentz sobre cargas y alambres con corriente, Efecto Hall, Selector de Velocidades, y la Ley de Biot-Savart para el cálculo de campo magnético $\\vec{B}$.',
    topicsDistribution: [
      { topic: 'Ley de Biot-Savart para Espiras, Arcos y Circuitos de Geometría Especial', freq: 95, level: 'critical' },
      { topic: 'Fuerza Magnética sobre Alambres Curvos con Corriente $\\vec{F} = \\int I d\\vec{l} \\times \\vec{B}$', freq: 90, level: 'critical' },
      { topic: 'Movimiento Cicloide / Helicoidal de Cargas en Campos $\\vec{E}$ y $\\vec{B}$ Cruzados', freq: 82, level: 'high' },
      { topic: 'Efecto Hall y Coeficiente $R_H = \\frac{1}{nq}$ en Conductores y Semiconductores', freq: 72, level: 'medium' }
    ],
    predictedQuestions: [
      {
        rank: 1,
        probability: '95%',
        probType: 'critical',
        title: 'Campo $\\vec{B}$ en el Centro de un Circuito Cerrado Formado por Arcos y Segmentos Rectos',
        setup: 'Un circuito plano transporta una corriente $I$ y consiste en dos arcos concéntricos de radios $a$ y $b$ con ángulo central $\\theta$, conectados por segmentos radiales rectos. Hallar el vector campo magnético total $\\vec{B}$ en el centro común $O$.',
        strategy: '1) Los segmentos radiales no aportan campo en $O$ porque $d\\vec{l} \\parallel \\hat{r} \\implies d\\vec{l} \\times \\hat{r} = 0$. 2) Campo de arcos: $B = \\frac{\\mu_0 I \\theta}{4\\pi a} \\mp \\frac{\\mu_0 I \\theta}{4\\pi b}$. 3) Aplicar regla de la mano derecha para el vector unitario $\\pm \\hat{k}$.',
        trap: 'Olvidar demostrar por qué los tramos rectos que apuntan al centro tienen aporte nulo.'
      },
      {
        rank: 2,
        probability: '90%',
        probType: 'critical',
        title: 'Fuerza Magnética Neta sobre un Conductor en Forma de Parábola o Semicírculo',
        setup: 'Un alambre doblado en forma de semicírculo de radio $R$ o parábola $y = k x^2$ transporta corriente $I$ en presencia de un campo magnético uniforme $\\vec{B} = B_0 \\hat{k}$. Hallar la fuerza magnética total.',
        strategy: 'Para campo uniforme: $\\vec{F} = I \\left( \\int d\\vec{l} \\right) \\times \\vec{B} = I \\vec{L}_{\\text{rectilíneo entre extremos}} \\times \\vec{B}$. Demostrar tanto por integración directa como por la propiedad del vector desplazamiento.',
        trap: 'Si el campo $\\vec{B}(x,y)$ NO es uniforme, NO se puede usar la propiedad de extremos y es obligatorio integrar componente a componente.'
      },
      {
        rank: 3,
        probability: '82%',
        probType: 'high',
        title: 'Cálculo de Densidad de Portadores mediante Efecto Hall',
        setup: 'Una cinta conductora de espesor $t$ y ancho $w$ transporta corriente $I$ inmersa en campo magnético $B$. Se mide una diferencia de potencial Hall $\\Delta V_H$. Determinar la densidad de electrones $n$, la velocidad de deriva $v_d$ y el coeficiente de Hall.',
        strategy: 'Equilibrio de fuerzas: $q E_H = q v_d B \\implies \\Delta V_H = v_d B w$. Como $I = n q v_d (w t)$, sustituir: $\\Delta V_H = \\frac{I B}{n q t}$.',
        trap: 'Confundir el espesor $t$ (paralelo a $\\vec{B}$) con el ancho $w$ (perpendicular a $\\vec{B}$).'
      }
    ],
    goldenFormulas: [
      'd\\vec{B} = \\frac{\\mu_0 I}{4\\pi} \\frac{d\\vec{l} \\times \\hat{r}}{r^2}',
      'B_{\\text{arco}} = \\frac{\\mu_0 I \\theta}{4\\pi R}, \\quad B_{\\text{eje espira}} = \\frac{\\mu_0 I R^2}{2(R^2 + z^2)^{3/2}}',
      '\\vec{F} = I \\int d\\vec{l} \\times \\vec{B}, \\quad \\vec{\\tau} = \\vec{\\mu} \\times \\vec{B} \\quad (\\vec{\\mu} = I \\vec{A})',
      'V_H = \\frac{I B}{n q t} = R_H \\frac{I B}{t}'
    ],
    professorTraps: [
      'No dibujar los vectores en el producto cruz $d\\vec{l} \\times \\hat{r}$.',
      'Confundir la dirección del momento dipolar magnético $\\vec{\\mu}$ (definido por regla de mano derecha respecto al sentido de la corriente).'
    ],
    bestExamLinks: [
      { name: 'Solucionario PC4 2023-II', href: 'CF2B1_Fisica_III_UNI/Material_Oficial_UNI/Examenes_Pasados/2023-II/Practicas/Solucionarios/PC4_SOL_-_CF2B1_2023-II.pdf' },
      { name: 'Solucionario PC4 2024-I', href: 'CF2B1_Fisica_III_UNI/Material_Oficial_UNI/Examenes_Pasados/2024-I/Practicas/Solucionarios/CF2B1_SOL_PC4.pdf' },
      { name: 'Enunciado PC4 2024-II', href: 'CF2B1_Fisica_III_UNI/Material_Oficial_UNI/Examenes_Pasados/2024-II/PC4-CF2B1-24-2.pdf' }
    ]
  },
  {
    id: 'pc5',
    name: 'Práctica Calificada 5 (PC5)',
    shortName: 'PC5',
    evalWeek: 'Semana 12',
    examsCount: 13,
    difficulty: 'Muy Alta',
    historicalAverage: '10.5 / 20',
    summary: 'La PC5 cubre la Ley de Ampère en cables coaxiales y conductores con $\\vec{J}$ variable, Medios Magnéticos $(\\vec{H}, \\vec{M})$, y la Ley de Inducción de Faraday-Lenz con FEM de movimiento y dinámica de barras.',
    topicsDistribution: [
      { topic: 'FEM de Movimiento en Barra Conductora Deslizante con Ecuación Diferencial', freq: 96, level: 'critical' },
      { topic: 'Ley de Ampère con Densidad de Corriente Variable $J(r) = J_0 (r/R)$', freq: 92, level: 'critical' },
      { topic: 'Ley de Faraday con Campo Variable $B(t) = B_0 e^{-\\alpha t}$ y Campo $\\vec{E}_{\\text{ind}}$', freq: 85, level: 'high' },
      { topic: 'Magnetización en Medios Materiales $\\vec{B} = \\mu_0(\\vec{H} + \\vec{M})$ y Corrientes Amperianas', freq: 65, level: 'medium' }
    ],
    predictedQuestions: [
      {
        rank: 1,
        probability: '96%',
        probType: 'critical',
        title: 'Barra Conductora Deslizante sobre Rieles con Fricción / Resistencia y Campo $\\vec{B}$',
        setup: 'Una varilla de masa $m$, longitud $L$ y resistencia $R$ se desliza sin fricción sobre dos rieles conductores conectados a una resistencia $R_0$ en un campo $\\vec{B} = B\\hat{k}$. Se le imprime una velocidad inicial $v_0$. Hallar $v(t)$, la corriente inducida $i(t)$, y demostrar que la energía cinética disipada equivale al calor disipado en las resistencias.',
        strategy: '1) $\\mathcal{E} = -\\frac{d\\Phi_B}{dt} = B L v$. 2) $i(t) = \\frac{B L v}{R + R_0}$. 3) Fuerza magnética: $F_m = -i L B = -\\frac{B^2 L^2}{R_{\\text{eq}}} v = m \\frac{dv}{dt}$. 4) Integrar: $v(t) = v_0 e^{-t/\\tau}$ con $\\tau = \\frac{m R_{\\text{eq}}}{B^2 L^2}$.',
        trap: 'Olvidar el signo negativo de la fuerza magnética restauradora (oposición según la Ley de Lenz).'
      },
      {
        rank: 2,
        probability: '92%',
        probType: 'critical',
        title: 'Ley de Ampère en Conductor Cilíndrico con Densidad No Uniforme $J(r)$',
        setup: 'Un cable coaxial cilíndrico de radio interior $a$ y radio exterior $b$ transporta corriente con densidad $J(r) = C r^2$. Hallar el vector campo magnético $\\vec{B}(r)$ en todas las regiones del espacio.',
        strategy: '1) $I_{\\text{enc}}(r) = \\int_0^r J(r\') 2\\pi r\' dr\' = 2\\pi C \\frac{r^4}{4}$. 2) Por simetría: $\\oint \\vec{B} \\cdot d\\vec{l} = B(r) 2\\pi r = \\mu_0 I_{\\text{enc}} \\implies B(r) = \\frac{\\mu_0 C r^3}{4}$.',
        trap: 'Usar $I_{\\text{enc}} = J \\cdot \\pi r^2$ directamente cuando la densidad $J(r)$ depende de $r$.'
      },
      {
        rank: 3,
        probability: '85%',
        probType: 'high',
        title: 'Campo Eléctrico No Conservativo Inducido por un Solenoide Variable',
        setup: 'En el interior de un solenoide de radio $R$, el campo magnético varía como $B(t) = B_0 \\sin(\\omega t)$. Hallar el campo eléctrico inducido $\\vec{E}_{\\text{ind}}(r)$ para $r < R$ y $r > R$, y calcular la FEM a lo largo de un circuito circular.',
        strategy: '$\\oint \\vec{E} \\cdot d\\vec{l} = E(r) 2\\pi r = -\\frac{d\\Phi_B}{dt}$. Para $r < R$: $\\Phi_B = B(t) \\pi r^2$. Para $r > R$: $\\Phi_B = B(t) \\pi R^2$ (área fija del solenoide).',
        trap: 'Cometer el error de usar $\\pi r^2$ en el flujo para $r > R$ cuando el campo solo existe hasta el radio $R$.'
      }
    ],
    goldenFormulas: [
      '\\oint_C \\vec{B} \\cdot d\\vec{l} = \\mu_0 I_{\\text{enc}}, \\quad \\oint_C \\vec{H} \\cdot d\\vec{l} = I_{\\text{libre, enc}}',
      '\\mathcal{E} = -\\frac{d\\Phi_B}{dt} = -\\frac{d}{dt}\\iint_S \\vec{B} \\cdot d\\vec{A}',
      '\\mathcal{E}_{\\text{mov}} = \\oint (\\vec{v} \\times \\vec{B}) \\cdot d\\vec{l} = B L v',
      '\\oint \\vec{E}_{\\text{ind}} \\cdot d\\vec{l} = -\\frac{d\\Phi_B}{dt} \\implies E(r) = -\\frac{R^2}{2r}\\frac{dB}{dt} \\quad (r > R)'
    ],
    professorTraps: [
      'No aplicar la Ley de Lenz para declarar el sentido horario/antihorario de la corriente inducida.',
      'En barras rodantes con masa, olvidar igualar la fuerza magnética con $m \\frac{dv}{dt}$.'
    ],
    bestExamLinks: [
      { name: 'Solucionario PC5 2023-II', href: 'CF2B1_Fisica_III_UNI/Material_Oficial_UNI/Examenes_Pasados/2023-II/Practicas/Solucionarios/PC5_SOL_-_CF2B1_2023-II.pdf' },
      { name: 'Solucionario PC5 2024-I', href: 'CF2B1_Fisica_III_UNI/Material_Oficial_UNI/Examenes_Pasados/2024-I/Practicas/Solucionarios/CF2B1_SOL_PC5.pdf' },
      { name: 'Enunciado PC5 2024-II', href: 'CF2B1_Fisica_III_UNI/Material_Oficial_UNI/Examenes_Pasados/2024-II/PC5-CF2B1-24-2.pdf' }
    ]
  },
  {
    id: 'pc6',
    name: 'Práctica Calificada 6 (PC6)',
    shortName: 'PC6',
    evalWeek: 'Semana 14',
    examsCount: 14,
    difficulty: 'Alta',
    historicalAverage: '11.5 / 20',
    summary: 'La PC6 evalúa la Autoinductancia $L$, Inductancia Mutua $M$, Circuitos Transitorios RL y RLC, y Régimen Permanente de Corriente Alterna (CA) con Impedancia Fasorial y Resonancia.',
    topicsDistribution: [
      { topic: 'Inductancia Mutua $M_{12}$ entre Espira y Conductor o Dos Bobinas Coaxiales', freq: 94, level: 'critical' },
      { topic: 'Circuitos en Corriente Alterna (CA): Impedancia $\\mathbf{Z}$, Fasores y Resonancia Serie', freq: 90, level: 'critical' },
      { topic: 'Circuito Transitorio RL / RLC (Ecuación diferencial de 2do orden y amortiguamiento)', freq: 82, level: 'high' },
      { topic: 'Energía Magnética Almacenada $U_B = \\frac{1}{2} L I^2$ y Densidad $u_B = \\frac{B^2}{2\\mu_0}$', freq: 70, level: 'medium' }
    ],
    predictedQuestions: [
      {
        rank: 1,
        probability: '94%',
        probType: 'critical',
        title: 'Inductancia Mutua entre un Alambre Recto Infinito y una Espira Plana (Rectangular/Triangular)',
        setup: 'Un alambre recto largo transporta corriente $I_1$. A una distancia $d$ se coloca una espira rectangular de lados $a$ y $b$. Determinar el flujo magnético $\\Phi_{21}$ a través de la espira y el coeficiente de inductancia mutua $M$.',
        strategy: '1) $B_1(r) = \\frac{\\mu_0 I_1}{2\\pi r}$. 2) $d\\Phi = B_1(r) (b dr) = \\frac{\\mu_0 I_1 b}{2\\pi r} dr$. 3) $\\Phi_{21} = \\int_d^{d+a} \\frac{\\mu_0 I_1 b}{2\\pi r} dr = \\frac{\\mu_0 I_1 b}{2\\pi} \\ln\\left(1 + \\frac{a}{d}\\right)$. 4) $M = \\frac{\\Phi_{21}}{I_1}$.',
        trap: 'Si la espira es triangular o trapezoidal, olvidar que el ancho $w(r)$ depende de $r$ y debe entrar en la integral.'
      },
      {
        rank: 2,
        probability: '90%',
        probType: 'critical',
        title: 'Circuito RLC Serie en Corriente Alterna: Resonancia y Factor de Potencia',
        setup: 'Un circuito RLC serie es alimentado por $v(t) = V_0 \\cos(\\omega t)$. Hallar: a) La corriente fasorial $\\mathbf{I}$, b) La frecuencia de resonancia $\\omega_0$, c) La potencia media disipada $\\langle P \\rangle$, d) El factor de calidad $Q$.',
        strategy: '$\\mathbf{Z} = R + j\\left(\\omega L - \\frac{1}{\\omega C}\\right)$. Magnitud $Z = \\sqrt{R^2 + (\\omega L - 1/\\omega C)^2}$, desfase $\\phi = \\arctan\\left(\\frac{\\omega L - 1/\\omega C}{R}\\right)$. En resonancia: $\\omega_0 = \\frac{1}{\\sqrt{LC}}$, $Z = R$, $\\cos\\phi = 1$.',
        trap: 'Confundir el valor eficaz $V_{\\text{rms}} = V_0/\\sqrt{2}$ con la amplitud máxima $V_0$ al calcular la potencia media.'
      },
      {
        rank: 3,
        probability: '82%',
        probType: 'high',
        title: 'Transitorio de Desconexión en Circuito RL con Diodo o Resistencia de Descarga',
        setup: 'Un inductor $L$ con resistencia interna $r$ ha estado conectado mucho tiempo a una batería $V_0$. En $t = 0$ se conmuta el interruptor hacia una resistencia de carga $R$. Hallar la corriente $i(t)$ y el voltaje pico inducido.',
        strategy: 'Condición inicial: $i(0^+) = i(0^-) = \\frac{V_0}{r}$. Ecuación: $L\\frac{di}{dt} + (R+r)i = 0 \\implies i(t) = \\frac{V_0}{r} e^{-t/\\tau}$ con $\\tau = \\frac{L}{R+r}$.',
        trap: 'Olvidar la continuidad de la corriente en inductores $I_L(0^+) = I_L(0^-)$.'
      }
    ],
    goldenFormulas: [
      'M_{12} = \\frac{\\Phi_{21}}{I_1} = M_{21}, \\quad L = \\frac{\\Phi_{\\text{propio}}}{I}',
      'U_B = \\frac{1}{2} L I^2 = \\frac{1}{2\\mu_0}\\int B^2 dV',
      '\\mathbf{Z} = R + j\\left(\\omega L - \\frac{1}{\\omega C}\\right), \\quad \\omega_0 = \\frac{1}{\\sqrt{LC}}',
      '\\langle P \\rangle = V_{\\text{rms}} I_{\\text{rms}} \\cos\\phi = \\frac{1}{2} V_0 I_0 \\cos\\phi, \\quad Q = \\frac{\\omega_0 L}{R}'
    ],
    professorTraps: [
      'No especificar las unidades en radianes/segundo para $\\omega$ y Hertz para la frecuencia $f$.',
      'Olvidar que en un transformador o acoplamiento mutuo, el signo del término mutuo depende de la convención de puntos de las bobinas.'
    ],
    bestExamLinks: [
      { name: 'Solucionario PC6 2023-II', href: 'CF2B1_Fisica_III_UNI/Material_Oficial_UNI/Examenes_Pasados/2023-II/Practicas/Solucionarios/PC6_SOL_-_CF2B1_2023-II.pdf' },
      { name: 'Solucionario PC6 2024-I', href: 'CF2B1_Fisica_III_UNI/Material_Oficial_UNI/Examenes_Pasados/2024-I/Practicas/Solucionarios/CF2B1_SOL_PC6.pdf' },
      { name: 'Enunciado PC6 2024-II', href: 'CF2B1_Fisica_III_UNI/Material_Oficial_UNI/Examenes_Pasados/2024-II/PC6-CF2B1-24-2.pdf' }
    ]
  },
  {
    id: 'final',
    name: 'Examen Final (EF)',
    shortName: 'Final',
    evalWeek: 'Semana 16',
    examsCount: 18,
    difficulty: 'Extrema',
    historicalAverage: '08.9 / 20',
    summary: 'El Examen Final evalúa las Ecuaciones de Maxwell completas, Corriente de Desplazamiento de Maxwell $I_d$, Ondas Electromagnéticas (OEM), Vector de Poynting $\\vec{S}$, Presión de Radiación y 2 problemas integradores de todo el curso.',
    topicsDistribution: [
      { topic: 'Corriente de Desplazamiento $I_d$ y Campo $\\vec{B}(r,t)$ en Capacitor de Placas Circulares', freq: 98, level: 'critical' },
      { topic: 'Ondas Electromagnéticas Planas: $\\vec{E}, \\vec{B}$, Vector de Poynting $\\vec{S}$ e Intensidad', freq: 95, level: 'critical' },
      { topic: 'Presión de Radiación y Fuerza sobre Superficie Reflectora/Absorbente', freq: 86, level: 'high' },
      { topic: 'Problema Integrador de Inducción de Faraday / Circuito Transitorio RL-RC', freq: 88, level: 'critical' },
      { topic: 'Ecuaciones de Maxwell en Forma Diferencial e Integral en Medios Dieléctricos', freq: 76, level: 'high' }
    ],
    predictedQuestions: [
      {
        rank: 1,
        probability: '98%',
        probType: 'critical',
        title: 'Corriente de Desplazamiento y Flujo del Vector de Poynting en un Capacitor Circular',
        setup: 'Un capacitor de placas circulares paralelas de radio $R$ se carga con una corriente $I(t) = I_0$. a) Hallar el campo eléctrico $E(t)$ entre las placas, b) Hallar la corriente de desplazamiento $I_d(r)$ para $r \\le R$, c) Hallar el campo magnético inducido $B(r,t)$, d) Calcular el vector de Poynting $\\vec{S}$ en el borde $r = R$ e integrar sobre la superficie lateral para demostrar que la energía que entra al capacitor es $\\frac{d}{dt}\\left(\\frac{1}{2} C V^2\\right)$.',
        strategy: '1) $E = \\frac{Q}{\\varepsilon_0 \\pi R^2}$. 2) $I_d(r) = \\varepsilon_0 \\frac{d}{dt}(E \\pi r^2) = I_0 \\frac{r^2}{R^2}$. 3) Ley de Ampère-Maxwell: $B(r) 2\\pi r = \\mu_0 I_d(r) \\implies B(r) = \\frac{\\mu_0 I_0 r}{2\\pi R^2}$. 4) $\\vec{S} = \\frac{1}{\\mu_0}(\\vec{E} \\times \\vec{B})$ apunta radialmente hacia adentro. 5) $\\iint \\vec{S} \\cdot d\\vec{A} = S(R) (2\\pi R d) = V(t) I(t) = \\frac{dU}{dt}$.',
        trap: 'Equivocarse en la dirección del vector de Poynting; el vector $\\vec{S}$ siempre entra a las placas, demostrando que la energía ingresa a través del campo electromagnético.'
      },
      {
        rank: 2,
        probability: '95%',
        probType: 'critical',
        title: 'Onda Electromagnética Plana Monocromática y Balance de Potencia',
        setup: 'Una onda electromagnética en el vacío tiene campo eléctrico $\\vec{E}(z,t) = E_0 \\cos(kz - \\omega t)\\hat{i}$. Hallar: a) El vector campo magnético asociado $\\vec{B}(z,t)$, b) El vector de Poynting $\\vec{S}(z,t)$ y su promedio temporal $\\langle \\vec{S} \\rangle$, c) La densidad de energía electromagnética total $u$, d) La intensidad de radiación.',
        strategy: '1) $\\vec{B} = \\frac{1}{c}(\\hat{k} \\times \\vec{E}) = \\frac{E_0}{c}\\cos(kz - \\omega t)\\hat{j}$. 2) $\\vec{S} = \\frac{E_0^2}{\\mu_0 c}\\cos^2(kz - \\omega t)\\hat{k}$. 3) $\\langle \\vec{S} \\rangle = \\frac{E_0^2}{2\\mu_0 c}\\hat{k} = I \\hat{k}$.',
        trap: 'Olvidar la relación fundamental entre amplitudes: $E_0 = c B_0$ y la perpendicularidad mutua $\\vec{E} \\perp \\vec{B} \\perp \\vec{k}$.'
      },
      {
        rank: 3,
        probability: '86%',
        probType: 'high',
        title: 'Presión de Radiación y Fuerza sobre una Vela Solar / Espejo Plano',
        setup: 'Un haz láser de potencia $P$ incide perpendicularmente sobre un disco reflectante ideal (coeficiente de reflexión $R_{\\text{ref}} = 1$) de masa $m$. Hallar la fuerza de radiación y la aceleración del disco.',
        strategy: 'Para reflexión total: $\\Delta p = 2 \\frac{U}{c} \\implies F = \\frac{2 P}{c}$. La presión de radiación es $P_{\\text{rad}} = \\frac{2 I}{c} = \\frac{2 \\langle S \\rangle}{c}$.',
        trap: 'Usar $F = P/c$ (que corresponde a absorción total) en lugar de $2P/c$ para una superficie reflectora.'
      }
    ],
    goldenFormulas: [
      '\\oint \\vec{B} \\cdot d\\vec{l} = \\mu_0 I_{\\text{libre}} + \\mu_0 \\varepsilon_0 \\frac{d\\Phi_E}{dt}, \\quad I_d = \\varepsilon_0 \\frac{d\\Phi_E}{dt}',
      '\\vec{S} = \\frac{1}{\\mu_0}(\\vec{E} \\times \\vec{B}), \\quad \\langle S \\rangle = \\frac{E_0^2}{2\\mu_0 c} = \\frac{1}{2} c \\varepsilon_0 E_0^2 = I_{\\text{intensidad}}',
      'c = \\frac{1}{\\sqrt{\\mu_0 \\varepsilon_0}} \\approx 3 \\times 10^8 \\text{ m/s}, \\quad E_0 = c B_0',
      'P_{\\text{rad}} = \\frac{I}{c} \\quad (\\text{absorción}), \\quad P_{\\text{rad}} = \\frac{2I}{c} \\quad (\\text{reflexión})'
    ],
    professorTraps: [
      'Olvidar incluir la corriente de desplazamiento en la 4ta ecuación de Maxwell.',
      'No calcular el promedio temporal $\\langle \\cos^2(\\omega t) \\rangle = 1/2$ al calcular la potencia promedio o intensidad.'
    ],
    bestExamLinks: [
      { name: 'Solucionario Final 2024-II', href: 'CF2B1_Fisica_III_UNI/Material_Oficial_UNI/Examenes_Pasados/2024-II/SOL-EF-CF2B1-24-2.pdf' },
      { name: 'Solucionario Final 2024-I', href: 'CF2B1_Fisica_III_UNI/Material_Oficial_UNI/Examenes_Pasados/2024-I/Examenes/Solucionarios/CF2B1_Solucionario_Ex._Final_2024-I.pdf' },
      { name: 'Enunciado Final 2025-I', href: 'CF2B1_Fisica_III_UNI/Material_Oficial_UNI/Examenes_Pasados/2025-I/exfinal_fisica3_2025_1.pdf' }
    ]
  },
  {
    id: 'susti',
    name: 'Examen Sustitutorio (ES)',
    shortName: 'Susti',
    evalWeek: 'Semana 17',
    examsCount: 10,
    difficulty: 'Extrema',
    historicalAverage: '08.2 / 20',
    summary: 'El Examen Sustitutorio cubre los problemas más exigentes e integradores de todo el curso: 1 de Gauss/Dieléctricos, 1 de Circuitos RC/RL, 1 de Ley de Faraday/Movimiento, y 1 de Maxwell/Poynting.',
    topicsDistribution: [
      { topic: 'Ampère-Maxwell en Capacitor de Placas Circulares con Corriente $I(t)$', freq: 95, level: 'critical' },
      { topic: 'Barra Conductora sobre Rieles con FEM Inducida y Dinámica Newtoniana', freq: 92, level: 'critical' },
      { topic: 'Distribución de Carga con Cavidad o Dieléctrico No Homogéneo', freq: 88, level: 'critical' },
      { topic: 'Biot-Savart en Espiras Poligonales / Arcos Coaxiales', freq: 80, level: 'high' }
    ],
    predictedQuestions: [
      {
        rank: 1,
        probability: '95%',
        probType: 'critical',
        title: 'Capacitor Circular de Placas Paralelas: Flujo y Campo $\\vec{B}$ Inducido',
        setup: 'Un capacitor circular de diámetro $2R$ se carga a razón constante $\\frac{dQ}{dt} = I_0$. Calcular la magnitud y dirección del campo magnético inducido en el interior a distancia $r < R$ de su eje.',
        strategy: 'Aplicar directamente la Ley de Ampère-Maxwell: $\\oint \\vec{B} \\cdot d\\vec{l} = \\mu_0 \\varepsilon_0 \\frac{d\\Phi_E}{dt}$. Flujo: $\\Phi_E = \\frac{Q}{\\varepsilon_0 \\pi R^2} \\pi r^2 = \\frac{Q}{\\varepsilon_0}\\frac{r^2}{R^2}$.',
        trap: 'No verificar las dimensiones de la respuesta final.'
      },
      {
        rank: 2,
        probability: '92%',
        probType: 'critical',
        title: 'Varilla Conductora Rodante con Resistencia Interna e Inclinación',
        setup: 'Una varilla rueda por rieles inclinados un ángulo $\\theta$ en presencia de un campo vertical $\\vec{B}$. Determinar la velocidad terminal $v_{\\text{lim}}$ y la corriente estacionaria.',
        strategy: 'Equilibrio de fuerzas en régimen permanente: $m g \\sin\\theta = F_{\\text{magnética}} \\cos\\theta = i L B \\cos\\theta$. FEM: $\\mathcal{E} = B L v \\cos\\theta$.',
        trap: 'Olvidar la proyección trigonométrica $\\cos\\theta$ en la componente perpendicular al campo magnético.'
      }
    ],
    goldenFormulas: [
      '\\oint \\vec{B} \\cdot d\\vec{l} = \\mu_0 \\varepsilon_0 \\frac{d\\Phi_E}{dt} \\implies B(r) = \\frac{\\mu_0 I r}{2\\pi R^2}',
      'v_{\\text{terminal}} = \\frac{m g R_{\\text{eq}} \\sin\\theta}{B^2 L^2 \\cos^2\\theta}',
      '\\vec{S} = \\frac{1}{\\mu_0}(\\vec{E} \\times \\vec{B})'
    ],
    professorTraps: [
      'El Examen Sustitutorio es muy estricto con el orden y detalle de cada paso; justificar cada fórmula con su respectiva ley física.'
    ],
    bestExamLinks: [
      { name: 'Solucionario Sustitutorio 2024-II', href: 'CF2B1_Fisica_III_UNI/Material_Oficial_UNI/Examenes_Pasados/2024-II/SOL-ES-CF2B1-24-2.pdf' },
      { name: 'Solucionario Sustitutorio 2024-I', href: 'CF2B1_Fisica_III_UNI/Material_Oficial_UNI/Examenes_Pasados/2024-I/Examenes/Solucionarios/CF2B1_Solucionario_Ex._Sustitutorio_2024-I.pdf' },
      { name: 'Solucionario Sustitutorio 2023-II', href: 'CF2B1_Fisica_III_UNI/Material_Oficial_UNI/Examenes_Pasados/2023-II/Examenes/Examen_Sustitutorio_SOL_-_CF2B1_Silabo_Fisica_III_CF2B1_23-II.pdf' }
    ]
  }
];
