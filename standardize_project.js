const fs = require('fs');
const path = require('path');

const root = path.resolve('.');

// Helper to recursively walk directories
function getItems(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  let items = [];
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      items.push(...getItems(full));
      items.push({ full, isDir: true, name: entry.name });
    } else {
      items.push({ full, isDir: false, name: entry.name });
    }
  }
  return items;
}

// Custom file standardizer
function standardizeFileName(name) {
  let ext = path.extname(name);
  let base = path.basename(name, ext);

  // Specific canonical naming rules
  let s = base;

  // Semanas UNI
  if (/Semana\s*(\d+)\s*Sesion\s*(\d+)-CF2B1/i.test(s)) {
    const m = s.match(/Semana\s*(\d+)\s*Sesion\s*(\d+)-CF2B1/i);
    const sem = m[1].padStart(2, '0');
    const ses = m[2].padStart(2, '0');
    return `Semana_${sem}_Sesion_${ses}_CF2B1${ext.toLowerCase()}`;
  }

  // Teoria UNI
  if (/^Sem(\d+)-Clase(\d+)-(.*)$/i.test(s)) {
    const m = s.match(/^Sem(\d+)-Clase(\d+)-(.*)$/i);
    const sem = m[1].padStart(2, '0');
    const cls = m[2].padStart(2, '0');
    let topic = m[3].trim()
      .replace(/Elctrica/gi, 'Electrica')
      .replace(/Energa/gi, 'Energia')
      .replace(/Electrosttica/gi, 'Electrostatica')
      .replace(/Ley de Gauss/gi, 'Ley_de_Gauss')
      .replace(/Potencial Elctrico/gi, 'Potencial_Electrico')
      .replace(/Corriente y Resistencia Fuerza Electromotriz/gi, 'Corriente_Resistencia_FEM')
      .replace(/Fuerza Magntica/gi, 'Fuerza_Magnetica');
    topic = topic.replace(/\s+/g, '_');
    return `Sem${sem}_Clase${cls}_${topic}${ext.toLowerCase()}`;
  }

  if (/^Sem(\d+)-(Ejemplos.*)$/i.test(s)) {
    const m = s.match(/^Sem(\d+)-(Ejemplos.*)$/i);
    const sem = m[1].padStart(2, '0');
    return `Sem${sem}_${m[2].replace(/\s+/g, '_')}${ext.toLowerCase()}`;
  }

  // General cleanups
  s = s.replace(/Bonus Track \(Pdfs selectos\)/gi, 'Bonus_Track')
       .replace(/Cargas-CampoElectrico/gi, 'Bonus_Cargas_Campo_Electrico')
       .replace(/Corriente alterna/gi, 'Bonus_Corriente_Alterna')
       .replace(/Dielctricos/gi, 'Bonus_Dielectricos')
       .replace(/Electrocintica/gi, 'Bonus_Electrocinetica')
       .replace(/Induccin electromagntica/gi, 'Bonus_Induccion_Electromagnetica')
       .replace(/MagnetismoMediosMateriales/gi, 'Bonus_Magnetismo_Medios_Materiales')
       .replace(/Magnetosttica/gi, 'Bonus_Magnetostatica')
       .replace(/OndasElectromagneticas/gi, 'Bonus_Ondas_Electromagneticas')
       .replace(/ProblemasDiversos-2022-2/gi, 'Bonus_Problemas_Diversos_2022_2')
       .replace(/ProblemasPropuestos-PC3/gi, 'Bonus_Problemas_Propuestos_PC3')
       .replace(/Resumen-1/gi, 'Bonus_Resumen_1_Electrostatica')
       .replace(/Resumen-2/gi, 'Bonus_Resumen_2_Magnetismo_Maxwell');

  // Labs
  s = s.replace(/L1GuaLaboratorioFSICAIII/gi, 'Lab01_Guia_Curvas_Equipotenciales')
       .replace(/INFORME DE LABORATORIO 1 FSICA III- GRUPO 11/gi, 'Lab01_Informe_Curvas_Equipotenciales')
       .replace(/L1IntroduccinCurvasEquipotencialesFsicaIIICF2B1-ASEPTIEMBRE2022-2/gi, 'Lab01_Introduccion_Curvas_Equipotenciales')
       .replace(/T1CurvasEquipotenciales/gi, 'Lab01_Datos_Curvas_Equipotenciales')
       .replace(/L2CurvasCaractersticasV-Igua2022-2/gi, 'Lab02_Guia_Curvas_VI')
       .replace(/INFORME DE LABORATORIO 2/gi, 'Lab02_Informe_Curvas_VI')
       .replace(/T2Fs32022-2/gi, 'Lab02_Datos_Curvas_VI')
       .replace(/GuaL3Fem2022-2/gi, 'Lab03_Guia_FEM')
       .replace(/INFORME DE LABORATORIO 3 - FSICA III - GRUPO 11/gi, 'Lab03_Informe_FEM')
       .replace(/T3fem2022-1/gi, 'Lab03_Datos_FEM')
       .replace(/Lab Fisica III/gi, 'Lab04_Guia_Circuitos_Puente')
       .replace(/Labo N 4/gi, 'Lab04_Esquema')
       .replace(/GUIABalanMagntica1/gi, 'Lab05_Guia_Balanza_Magnetica_1')
       .replace(/GUIABalanMagntica2/gi, 'Lab05_Guia_Balanza_Magnetica_2')
       .replace(/INFORME DE LABORATORIO 5 - FSICA III - GRUPO 11/gi, 'Lab05_Informe_Balanza_Magnetica')
       .replace(/CircuitoBalanzaMagntica1/gi, 'Lab05_Circuito_1')
       .replace(/CircuitoBalanzaMagntica2/gi, 'Lab05_Circuito_2')
       .replace(/DatosBalanzaMagntica/gi, 'Lab05_Datos_Balanza_Magnetica')
       .replace(/Manual del Labo N 6/gi, 'Lab06_Manual_Induccion_Transformadores')
       .replace(/Informe del laboratorio N 6/gi, 'Lab06_Informe_Induccion_Transformadores');

  // Libros & Silabo
  s = s.replace(/Fisica 3-Hugo-Medina-Guzman|Fisica_3_Hugo_Medina_Guzman/gi, 'Libro_Fisica_III_UNI')
       .replace(/Fsica III/gi, 'Silabo_Fisica_III_CF2B1')
       .replace(/Resumen-Formulas-Electromagnetismo/gi, 'Formulario_Oficial_Electromagnetismo');

  // Historical PC1
  s = s.replace(/^1\.\s*PC\s*0?1\s*\((201\d-\d)\)/i, 'PC1_$1')
       .replace(/^2\.\s*PC\s*0?1\s*\((201\d-\d)\)/i, 'PC1_$1')
       .replace(/^3\.\s*PC\s*0?1\s*\((201\d-\d)\)/i, 'PC1_$1')
       .replace(/^4\.\s*PC\s*0?1\s*\((201\d-\d)\)/i, 'PC1_$1')
       .replace(/^5\.\s*PC\s*0?1\s*\((201\d-\d)\)\s*resolucin\s*parte\s*1/i, 'PC1_$1_Resolucion_Parte_1')
       .replace(/^6\.\s*PC\s*0?1\s*\((201\d-\d)\)\s*resolucin\s*parte\s*2/i, 'PC1_$1_Resolucion_Parte_2')
       .replace(/^7\.\s*PC\s*0?1\s*\((201\d-\d)\)/i, 'PC1_$1')
       .replace(/^8\.\s*PC\s*0?1\s*\((201\d-\d)\)/i, 'PC1_$1')
       .replace(/^9\.\s*PC\s*0?1\s*\((201\d-\d)\)/i, 'PC1_$1')
       .replace(/^10\.\s*PC\s*0?1\s*\((201\d-\d)\)/i, 'PC1_$1');

  // Accents and spaces cleanup
  s = s.replace(/Fsica/g, 'Fisica')
       .replace(/fsica/g, 'fisica')
       .replace(/Elctrica/g, 'Electrica')
       .replace(/elctrica/g, 'electrica')
       .replace(/Energa/g, 'Energia')
       .replace(/energa/g, 'energia')
       .replace(/Electrosttica/g, 'Electrostatica')
       .replace(/electrosttica/g, 'electrostatica')
       .replace(/Exmenes/g, 'Examenes')
       .replace(/exmenes/g, 'examenes')
       .replace(/Prcticas/g, 'Practicas')
       .replace(/prcticas/g, 'practicas')
       .replace(/Prctica/g, 'Practica')
       .replace(/prctica/g, 'practica')
       .replace(/Gua/g, 'Guia')
       .replace(/gua/g, 'guia')
       .replace(/SOLUCIONARIO|Solucionarios|SOLUCIONARIOS/g, 'Solucionario')
       .replace(/PRACTICAS/g, 'Practicas')
       .replace(/EXAMENES/g, 'Examenes');

  // Generic spaces and punctuation
  s = s.replace(/[ ()\[\],#+–—]/g, '_');
  s = s.replace(/_+/g, '_');
  s = s.replace(/^_|_$/g, '');

  return `${s}${ext.toLowerCase()}`;
}

function standardizeDirName(name) {
  let s = name;
  s = s.replace(/Clases Tello/gi, 'Teoria_UNI')
       .replace(/Bonus Track \(Pdfs selectos\)/gi, 'Bonus_Track')
       .replace(/Examenes Pasados|Exmenes Pasados/gi, 'Examenes_Pasados')
       .replace(/Exmenes|Examenes/gi, 'Examenes')
       .replace(/Prcticas Calificadas|Practicas Calificadas/gi, 'Practicas_Calificadas')
       .replace(/Prcticas|Practicas/gi, 'Practicas')
       .replace(/SOLUCIONARIO|Solucionarios|SOLUCIONARIOS/gi, 'Solucionarios')
       .replace(/PRACTICAS/g, 'Practicas')
       .replace(/EXAMENES/g, 'Examenes')
       .replace(/Syllabu/gi, 'Silabo')
       .replace(/Lab N\s*(\d+)/gi, 'Lab_0$1')
       .replace(/PC 1 \(DEL 15-1 AL 18-2\)/gi, 'Historicos_PC1_2015_2018');

  s = s.replace(/[ ()\[\],#+–—]/g, '_');
  s = s.replace(/_+/g, '_');
  s = s.replace(/^_|_$/g, '');
  return s;
}

// 1. Rename files first
const targetDir = path.join(root, 'CF2B1_Fisica_III_UNI/Material_Oficial_UNI');

console.log('--- Step 1: Renaming files ---');
const allItems = getItems(targetDir);

// Filter files
const files = allItems.filter(x => !x.isDir);
for (const file of files) {
  const dir = path.dirname(file.full);
  const newName = standardizeFileName(file.name);
  if (newName !== file.name) {
    const newFull = path.join(dir, newName);
    fs.renameSync(file.full, newFull);
    console.log(`FILE: ${file.name} -> ${newName}`);
  }
}

// 2. Rename directories (deepest first)
console.log('--- Step 2: Renaming directories ---');
const dirs = getItems(targetDir).filter(x => x.isDir);
dirs.sort((a, b) => b.full.length - a.full.length);

for (const d of dirs) {
  const parent = path.dirname(d.full);
  const newName = standardizeDirName(d.name);
  if (newName !== d.name) {
    const newFull = path.join(parent, newName);
    fs.renameSync(d.full, newFull);
    console.log(`DIR: ${d.name} -> ${newName}`);
  }
}

console.log('--- Standardization Complete! ---');
