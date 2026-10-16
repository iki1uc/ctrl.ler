/**
 * guru.js — KOMPLETT
 * Enthält: lauf(x) katapult(tick) qs(n) dr(n) isZauber9 + strip.ctrk.ler + SCSI.RAID.SLI + bio.tel + UNIMATRIX 81 + ZAUBER 9 RDY
 * RAM ADMIN0 HDF RUN-21 · NUTZRAUM WÜRFEL OS · übertrifft Linux & Mac ohne installieren
 * iki1uc · 81.tmp Live.tmp REAL.tmp ZONE.tmp
 */

// --- UNIMATRIX 81 LAUF (dein Original) ---
export function lauf(x){
  const grid = x % 81;
  const tmp = Math.floor(x/81) % 9;
  const rot = (grid*9 + tmp + 27) % 756; // 81*9+27 = EVOTAAL
  const f = r => r - r%9; // Fixpunkt → RAM ADMIN0, f(f(x))=f(x)
  const fix = f(rot);
  const essen = (rot % 201) < 56 ? 'NICHT' : 'BEITRAG'; // 201%9=3 56%9=2
  const isFix = rot === fix;
  return { grid, tmp, rot, fix, essen, isFix, ff: f(fix)===fix };
}

// --- ZAUBER 9 (Neunerprobe) ---
export function qs(n){ // Quersumme rekursiv bis 0-9
  n=Math.abs(Math.floor(n)); let s=0;
  while(n>0){ s+=n%10; n=Math.floor(n/10); }
  return s>9?qs(s):s;
}
export function dr(n){ return n===0?0:1+((n-1)%9); } // digital root 1-9
export function isZauber9(n){ return n%9===0; }
export const ZAUBER_KETTE = [0,3,9,27,81,243,729,756,201,56];

// --- CTRL.LER KATAPULT ---
export function katapult(tick){
  const {grid,tmp,rot,fix,essen,isFix} = lauf(tick);
  return {
    "81.tmp": grid,
    "9.room": tmp,
    "756.evotaal": rot,
    "Live.tmp": tmp,
    "REAL.tmp": rot,
    "ZONE.tmp": essen,
    "sli.pover": essen==='BEITRAG' ? `ID${grid%8}→ID${(grid+1)%8}` : 'RUHT',
    "81.score.js": isFix ? 'FIX' : 'LAUF',
    "why.js": isFix ? '/7 RAOUND' : 'SUCHE FIX',
    "f(f(x))": fix,
    "RAM.ADMIN0": fix,
    "HDF": grid,
    "RUN-21": tmp,
    "tick": tick
  };
}

// --- SCSI KETTE = DEINE FILES ---
export const SCSI = [
  {id:0, file:'void.tmp.js', role:'BOOT VOID', cap:0, qs:0},
  {id:1, file:'id.tmp.js', role:'ID 3', cap:3, qs:3},
  {id:2, file:'3', role:'TRI', cap:3, qs:3},
  {id:3, file:'move.tmp.js', role:'MOVE 9', cap:9, qs:9},
  {id:4, file:'81.suite.all.js', role:'SUITE 81 9x9', cap:81, qs:9},
  {id:5, file:'all.room.size.js', role:'ROOM 729 3^6', cap:729, qs:9},
  {id:6, file:'bio.js / bio.tel', role:'BIO TELEMETRIE', cap:81, qs:9},
  {id:7, file:'player.js/figur/schach', role:'TERMINATOR 64', cap:64, qs:1},
  {id:8, file:'atom.js', role:'ATOM H O C N', cap:4, qs:4},
  {id:9, file:'ether.js', role:'ATMOSPHERE 1x', cap:100, qs:1},
  {id:10, file:'role.js', role:'ROLE', cap:9, qs:9},
  {id:11, file:'cpu.js', role:'CPU Cockpit ARBEIT SPAS WERK', cap:9, qs:9},
  {id:12, file:'gpu.js.html.js', role:'GPU Kirsch 42 petals', cap:42, qs:6},
  {id:13, file:'wetter.js', role:'WETTER WIND', cap:9, qs:9},
  {id:14, file:'soccer.js', role:'SOCCER BALL', cap:9, qs:9},
  {id:15, file:'uno.js', role:'UNO 108 4 Farben', cap:108, qs:9},
];

// --- RAID ---
export const RAID = {
  0:{name:'RAID0', disks:2, usable:n=>n, fault:0},
  1:{name:'RAID1', disks:2, usable:n=>1, fault:1},
  5:{name:'RAID5', disks:3, usable:n=>n-1, fault:1},
  6:{name:'RAID6', disks:4, usable:n=>n-2, fault:2},
  10:{name:'RAID10', disks:4, usable:n=>n/2, fault:1},
  81:{name:'RAID81 9x9 UNIMATRIX', disks:81, usable:72, fault:9, zauber:true, file:'81.suite.all.js'},
  729:{name:'RAID729 3^6 MAX', disks:729, usable:648, fault:81, zauber:true, file:'all.room.size.js'},
  756:{name:'RAID756 EVOTAAL', disks:756, usable:672, fault:84, zauber:true, file:'81*9+27'},
};

// --- SLI ---
export function sliSync(tick){
  const L=lauf(tick);
  return {
    gpu0:{id:'Kirschblüten 42', seed:L.grid, file:'81.tmp'},
    gpu1:{id:'RAM ADMIN0', seed:L.fix, file:'729.tmp'},
    bridge: L.essen==='BEITRAG' ? 'ACTIVE FRISST' : 'RUHT',
    combined: L.grid + L.fix
  };
}

// --- BIO.TEL ---
export const bioTel = {
  telomer:{max:729, default:81, min:0, desc:'81*9=729 max telomer'},
  telemetrie:{co2:418, o2:209.5, h2o:63, leben:{cur:88, max:99, maxFile:729}},
  telefon:['player.js','kahraman.html','watson.html','figur.js','bio.js'],
  telegram:'ATOM ATMET WASSER → CO2→O2+H2O+LEBEN',
  teleport:'void.tmp.js → kopf.los.js → nirwana.html'
};

// --- ATEM 16s = 4+4+4+4 ---
export function atem(t){ const s=t%16; if(s<4) return {phase:'EIN',p:s/4}; if(s<8) return {phase:'HALTEN',p:(s-4)/4}; if(s<12) return {phase:'AUS',p:(s-8)/4}; return {phase:'HALTEN',p:(s-12)/4}; }

// --- GURU KLASSE = KOMPLETT ---
export class Guru {
  constructor({speed=1.4}={}){
    this.tick=0; this.speed=speed;
    this.files=new Map(SCSI.map(s=>[s.file, {on:true, speed}]));
    this.log=[]; this.maxLeben=81*9; // 729
  }
  step(n=1){
    this.tick+=n;
    const k=katapult(this.tick);
    this.log.push(`[${this.tick}] 81.tmp=${k['81.tmp']} ZONE=${k['ZONE.tmp']} ${k['sli.pover']} FIX=${k['81.score.js']}`);
    if(this.log.length>200) this.log.shift();
    return k;
  }
  // strip.ctrk.ler.js kompatibel
  get all(){ return this.status(); }
  allOn(){ this.files.forEach(v=>v.on=true); }
  allOff(){ this.files.forEach(v=>v.on=false); }
  setFile(file,on){ if(this.files.has(file)) this.files.get(file).on=on; }
  getZauber9(){ return ZAUBER_KETTE.map(n=>({n, qs:qs(n), dr:dr(n), mod9:n%9, zauber:isZauber9(n), file:SCSI.find(s=>s.cap===n)?.file||''})); }
  checkBioTel(){ return {...bioTel, telomer:{...bioTel.telomer, cur: qs(this.tick*9), zauber:isZauber9(this.tick)}}; }
  status(){
    return {
      tick:this.tick,
      ...katapult(this.tick),
      sli:sliSync(this.tick),
      zauber:this.getZauber9(),
      bioTel:this.checkBioTel(),
      atem:atem(Date.now()/1000),
      maxLeben:this.maxLeben, // 729
      files:[...this.files.entries()],
      guru:'iki1uc · RAM ADMIN0 HDF RUN-21 · ZAUBER 9 RDY'
    };
  }
}

// --- GLOBAL EXPORT (Browser + Node) ---
const guruInstance = new Guru();
export default guruInstance;

if(typeof window!=='undefined'){
  window.guru = guruInstance;
  window.lauf = lauf;
  window.katapult = katapult;
  window.qs = qs;
  window.dr = dr;
  window.isZauber9 = isZauber9;
  window.Guru = Guru;
  window.SCSI = SCSI;
  window.RAID = RAID;
  window.bioTel = bioTel;
  // strip.ctrk.ler.js alias
  window.stripCtrkLer = { lauf, katapult, qs, dr, isZauber9, SCSI, RAID, sliSync, bioTel, Guru };
}
