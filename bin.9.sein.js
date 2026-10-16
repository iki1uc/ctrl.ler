// bin.9sein.js — BIN 9 SEIN — Neuestes
// 1,2,3,4,5,6,7,8,9
// 0-8 LUNGE ether atmet
// 9-17 BLUT soccer/player rollt
// 18-26 ADER scsi/sli leitet
// 27-35 HIRN cpu/rom/guru hält Fixpunkt f(f(x))=f(x)
// 36-44 NIERE void/kopf.los filtert
// 45-53 CO2 atom/element Abfall
// 54-62 SAUERSTOFF bio/bio.tel Leben
// 63-71 UNLEBEN nirwana/notfall/uns Pause
// 72-80 FREI 9x9 Sein = du selbst, kahraman.html

export const bin9sein = {
  bin: [0,1,10,11,100,101,110,111,1000,1001], // 0-9 binär, 9=1001
  sein: 9, // 9 Sein = digitale Wurzel 9 = Zauber 9 RDY
  grid: Array.from({length:81}, (_,i)=>({
    i,
    block: Math.floor(i/9),
    organ: ['LUNGE','BLUT','ADER','HIRN','NIERE','CO2','SAUERSTOFF','UNLEBEN','FREI'][Math.floor(i/9)],
    file: ['ether.js','soccer.js','scsi.ctrl.js','cpu.js','void.js','atom.js','bio.js','nirwana.html','kahraman.html'][Math.floor(i/9)],
    job: ['atmet','rollt','leitet','hält Fixpunkt','filtert','Abfall','Leben','Pause','9x9 Sein = du'][Math.floor(i/9)],
    bin: i.toString(2).padStart(7,'0'),
    qs: (n=>{let s=0;while(n>0){s+=n%10;n=Math.floor(n/10);}return s>9?bin9sein.qs(s):s;})(i),
    zauber: i%9===0
  })),
  // Neuestes: 9 Sein = binär 1001 = 9 = 3² = Zauber 9
  // f(f(x))=f(x) = RAM ADMIN0
  // maxLeben = 81*9 = 729
};

export function sein9(x){ // x → 9 Sein
  return { grid: x%81, block: Math.floor(x/9), organ: bin9sein.grid[x%81].organ, bin: (x%81).toString(2), qs: bin9sein.grid[x%81].qs };
}
