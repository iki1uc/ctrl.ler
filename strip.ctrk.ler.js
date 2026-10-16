/**
 * strip.ctrk.ler.js
 * CTRL.LER STRIP — ohne HTML, nur JS Kern
 * RAM ADMIN0 HDF RUN-21 · UNIMATRIX 81 · ZAUBER 9 RDY
 * iki1uc · übertrifft Linux & Mac ohne installieren
 */

// --- UNIMATRIX 81 LAUF (aus deinem original) ---
export function lauf(x){
  const grid = x % 81;
  const tmp = Math.floor(x/81) % 9;
  const rot = (grid*9 + tmp + 27) % 756; // EVOTAAL
  const f = r => r - r%9; // Fixpunkt -> RAM ADMIN0
  const fix = f(rot);
  const essen = (rot % 201) < 56 ? 'NICHT' : 'BEITRAG'; // 201%9=3, 56%9=2
  const isFix = rot === fix;
  const ff = f(f(rot)) === f(rot); // f(f(x))=f(x)
  return { grid, tmp, rot, fix, essen, isFix, ff };
}

// --- ZAUBER 9 ---
export function qs(n){ n=Math.abs(n); let s=0; while(n>0){s+=n%10; n=Math.floor(n/10);} return s>9?qs(s):s; }
export function dr(n){ return n===0?0:1+((n-1)%9); } // digital root
export function isZauber9(n){ return n%9===0; }
a
// --- CTRL.LER MAPPING ---
export function katapult(tick){
  const {grid,tmp,rot,fix,essen,isFix} = lauf(tick);
  return {
    "81.tmp": grid,            // 81 = UNIMATRIX 9x9
    "9.room": tmp,             // 9 = MOVE
    "756.evotaal": rot,        // 756 = 81*9+27
    "Live.tmp": tmp,
    "REAL.tmp": rot,
    "ZONE.tmp": essen,         // NICHT / BEITRAG
    "sli.pover": essen==='BEITRAG' ? `ID${grid%8}→ID${(grid+1)%8}` : 'RUHT',
    "81.score.js": isFix ? 'FIX' : 'LAUF',
    "why.js": isFix ? '/7 RAOUND' : 'SUCHE FIX',
    "f(f(x))": fix,
    "RAM.ADMIN0": fix,         // Fixpunkt = RAM
    "HDF": grid,
    "RUN-21": tmp
  };
}

// --- SCSI KETTE (deine Files) ---
export const SCSI = [
  {id:0, file:'void.tmp.js', role:'BOOT VOID', cap:0},
  {id:1, file:'id.tmp.js', role:'ID 3', cap:3},
  {id:2, file:'3 / TRI', role:'TRI', cap:3},
  {id:3, file:'move.tmp.js', role:'MOVE 9', cap:9},
  {id:4, file:'81.suite.all.js', role:'SUITE 81', cap:81},
  {id:5, file:'all.room.size.js', role:'ROOM 729', cap:729},
  {id:6, file:'bio.js / bio.tel', role:'BIO TELEMETRIE', cap:81},
  {id:7, file:'player.js/figur/schach', role:'TERMINATOR', cap:64},
  {id:8, file:'atom.js', role:'ATOM H O C N', cap:4},
  {id:9, file:'ether.js', role:'ATMOSPHERE 1x', cap:100},
  {id:10, file:'role.js', role:'ROLE', cap:9},
  {id:11, file:'cpu.js', role:'CPU Cockpit', cap:9},
  {id:12, file:'gpu.js.html.js', role:'GPU Kirsch 42', cap:42},
  {id:13, file:'wetter.js', role:'WETTER WIND', cap:9},
  {id:14, file:'soccer.js', role:'SOCCER BALL', cap:9},
  {id:15, file:'uno.js', role:'UNO 108', cap:108},
];

// --- RAID LEVELS ---
export const RAID = {
  0: {name:'RAID0 STRIPE', disks:2, usable:n=>n, fault:0, desc:'stripe no parity'},
  1: {name:'RAID1 MIRROR', disks:2, usable:n=>1, fault:1, desc:'mirror'},
  5: {name:'RAID5 PARITY', disks:3, usable:n=>n-1, fault:1, desc:'rotating P'},
  6: {name:'RAID6 DOUBLE', disks:4, usable:n=>n-2, fault:2, desc:'P+Q'},
  10:{name:'RAID10 1+0', disks:4, usable:n=>n/2, fault:1, desc:'mirror+stripe'},
  50:{name:'RAID50 5+0', disks:6, usable:n=>n-2, fault:2, desc:'5+0'},
  81:{name:'RAID81 9x9 UNIMATRIX', disks:81, usable:n=>72, fault:9, desc:'9x9 iki1uc', zauber:true},
  729:{name:'RAID729 3^6 MAX', disks:729, usable:n=>648, fault:81, desc:'27x27 max', zauber:true},
  756:{name:'RAID756 EVOTAAL', disks:756, usable:n=>756-84, fault:84, desc:'81*9+27', zauber:true},
};

// --- SLI (Scalable Link Interface) ---
export function sliSync(tick){
  const L = lauf(tick);
  return {
    gpu0: {id:'Kirschblüten 42', seed: L.grid, petals:42, tmp:'81.tmp'},
    gpu1: {id:'RAM ADMIN0', seed: L.fix, tmp:'729.tmp'},
    bridge: L.essen==='BEITRAG' ? 'ACTIVE FRISST' : 'RUHT',
    pover: L.essen,
    combined: L.grid + L.fix // 81+729=810
  };
}

// --- BIO.TEL ---
export const bioTel = {
  telomer: {max:729, default:81, min:0, unit:'bp', desc:'81*9=729 max'},
  telemetrie: {co2:418, o2:209.5, h2o:63, leben:{cur:88, max:99}},
  telefon: ['player.js','kahraman.html','watson.html','figur.js'],
  telegram: 'ATOM ATMET WASSER → CO2→O2+H2O+LEBEN',
  teleport: 'void.tmp.js → kopf.los.js → nirwana.html'
};

// --- ATEM 16s ---
export function atemPhase(t){ // t seconds 0-16
  const s=t%16;
  if(s<4) return {phase:'EIN', sub:s, pct:s/4};
  if(s<8) return {phase:'HALTEN', sub:s-4, pct:(s-4)/4};
  if(s<12) return {phase:'AUS', sub:s-8, pct:(s-8)/4};
  return {phase:'HALTEN', sub:s-12, pct:(s-12)/4};
}

// --- STRIP CONTROLLER (ohne HTML) ---
export class StripCtrlLer {
  constructor({speed=1.4, wetter=1}={}){
    this.tick=0;
    this.speed=speed;
    this.wetter=SCSI[13]; // wetter.js
    this.files=new Map(SCSI.map(s=>[s.file, {on:true, speed, atem:0}]));
    this.log=[];
  }
  step(n=1){ this.tick+=n; const k=katapult(this.tick); this.log.push(`[${this.tick}] ${k['81.tmp']} ${k['ZONE.tmp']} ${k['sli.pover']}`); if(this.log.length>100) this.log.shift(); return k; }
  allOn(){ this.files.forEach(v=>v.on=true); }
  allOff(){ this.files.forEach(v=>v.on=false); }
  setFile(file, on){ if(this.files.has(file)) this.files.get(file).on=on; }
  setSpeed(s){ this.speed=s; }
  getZauber9(){ return [3,9,27,81,243,729,756].map(n=>({n, qs:qs(n), mod9:n%9, zauber:isZauber9(n)})); }
  status(){
    return {
      tick:this.tick,
      ...katapult(this.tick),
      sli:sliSync(this.tick),
      zauber:this.getZauber9(),
      files:[...this.files.entries()].map(([f,v])=>({file:f, ...v})),
      maxLeben: 81*9 // 729 = all.room.size.js
    };
  }
}

// --- USAGE (ohne HTML, nur console) ---
// import { StripCtrlLer } from './strip.ctrk.ler.js'
// const ctrl = new StripCtrlLer({speed:1.4});
// setInterval(()=>{ console.log(ctrl.step()); }, 400/ctrl.speed);
// console.log(ctrl.getZauber9()); // alle QS=9

// --- EXPORT FOR NODE / BROWSER ---
if(typeof window!=='undefined'){ window.stripCtrkLer = { lauf, katapult, SCSI, RAID, sliSync, bioTel, StripCtrlLer, qs, dr, isZauber9 }; }
