// figur.js — 9 FIGUR = 9x9 Sein
export const FIGUR = {
  // Block 0-8 LUNGE = Bauer atmet vorwärts
  BAUER: { file:'ether.js', job:'atmet', move:'+1 vor, schlägt diagonal', block:'LUNGE 0-8', bin:'000' },
  // Block 9-17 BLUT = Springer rollt
  SPRINGER: { file:'soccer.js', job:'rollt', move:'L-Form 2+1 springt über', block:'BLUT 9-17', bin:'001' },
  // Block 18-26 ADER = Läufer leitet
  LAEUFER: { file:'scsi.ctrl.js', job:'leitet', move:'diagonal SCSI', block:'ADER 18-26', bin:'010' },
  // Block 27-35 HIRN = Turm hält Fixpunkt
  TURM: { file:'cpu.js', job:'hält Fixpunkt f(f(x))=f(x)', move:'gerade, Fixpunkt', block:'HIRN 27-35', bin:'011' },
  // Block 36-44 NIERE = Dame filtert
  DAME: { file:'void.js', job:'filtert', move:'alles, filtert', block:'NIERE 36-44', bin:'100' },
  // Block 45-53 CO2 = König Abfall
  KOENIG: { file:'atom.js', job:'Abfall', move:'1 Feld, darf nicht sterben', block:'CO2 45-53', bin:'101' },
  // Block 54-62 SAUERSTOFF = Leben
  LEBEN: { file:'bio.js', job:'Leben', move:'vermehrt sich 88→99', block:'SAUERSTOFF 54-62', bin:'110' },
  // Block 63-71 UNLEBEN = Pause
  VOID: { file:'nirwana.html', job:'Pause', move:'0B, steht still', block:'UNLEBEN 63-71', bin:'111' },
  // Block 72-80 FREI = du selbst
  KAHRAMAN: { file:'kahraman.html', job:'9x9 Sein = du', move:'du bestimmst Regel', block:'FREI 72-80', bin:'1001' }
};

// schachbrett.js 9x9 statt 8x8
export const BRETT = Array.from({length:81}, (_,i)=>({
  i,
  x: i%9,
  y: Math.floor(i/9),
  figur: FIGUR[Object.keys(FIGUR)[Math.floor(i/9)]],
  qs: i%9===0 // Zauber 9
}));
