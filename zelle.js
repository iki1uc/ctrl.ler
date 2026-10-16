// zelle.js — letztes Werk — ATOM LUNGE NIERE HIRN ADER BLUT CO2 SAUERSTOFF UNLEBEN 9x9
// Biotel Zelle — eine Zelle ist 9x9 Sein, verabredet wer was ist

// ===== ROM — STAMM — unsterblich =====
const ATOM = {
  id: 'atom.js',
  typ: 'ROM',
  formel: 'H O C N → H2O CO2 O2',
  sagt: 'Ich bin Zelle, Grundbaustein',
  steht: true
}

const ETHER = {
  id: 'ether.js',
  typ: 'ROM',
  atmos: { N2: 78.08, O2: 20.95, Ar: 0.93, CO2: 0.04, H2O: 'var' },
  sagt: 'Ich bin STAMM, ATMOSPHERE 1x zentral, trage alles'
}

// ===== RAM — BLATT — darf sterben =====
// LUNGE — atmet
const LUNGE = {
  id: 'leben.atmet.html',
  typ: 'RAM',
  atem: { ein: 4, halten1: 4, aus: 4, halten2: 4, cycle: 16 },
  leben: 88,
  max: 99,
  atmet(signal) {
    this.leben = this.leben < 99 ? this.leben + 1 : 0
    if (this.leben === 0) {
      // CO2 abgeben
      CO2.sammeln(signal + ' → ausgeatmet')
      this.leben = 88 // Reborn
      return { ein: 'O2', aus: 'CO2', leben: this.leben, phase: 'halten2 PAUSE 0B' }
    }
    SAUERSTOFF.verteilen(signal)
    return { ein: 'O2', aus: '', leben: this.leben, phase: this.leben < 92 ? 'ein' : this.leben < 96 ? 'halten1' : 'aus' }
  }
}

// NIERE — filtert
const NIERE = {
  id: 'Cache.ctrl.js',
  typ: 'CTRL RAM',
  gefiltert: [],
  filtert(move) {
    // Nur 81x bewährt darf nach ROM
    const bewährt = Math.random() > 0.7 // simuliert 81x check
    if (bewährt) {
      this.gefiltert.push(move)
      // Darf nach ROM
      return { erlaubt: true, nach: 'hdf.rom → WONDERIUS', move }
    }
    // Wegwerfen → void
    UNLEBEN.sammeln(move)
    return { erlaubt: false, nach: 'void.js PAUSE 0B', move }
  }
}

// HIRN — denkt
const HIRN = {
  id: 'cpu.js + gpu.js.html + guru.js',
  typ: 'CTRL RAM',
  denkt(signal) {
    const b = Math.floor(Math.random()*100) // B Breite
    const h = Math.floor(Math.random()*100) // H Höhe
    const t = Math.floor(Math.random()*100) // T Tiefe
    return { gedacht: signal, B: b, H: h, T: t, entscheidung: b > 50 ? 'RAM darf sterben' : 'ROM hält' }
  }
}

// ADER — transportiert
const ADER = {
  id: 'greifbar.js + player.js + scsi.ctrl.js',
  typ: 'RAM',
  transportiert(von, nach, was) {
    return { von, nach, was, scsiId: Math.floor(Math.random()*16), sagt: `Ich bringe ${was} von ${von} nach ${nach}` }
  }
}

// BLUT — trägt
const BLUT = {
  id: 'bio.tel.js + bio.tel.nano.und.js',
  typ: 'RAM',
  traeger: 'O2',
  trägt() {
    return ETHER.atmos.O2 + '% O2 via ' + this.id + ' → ' + LUNGE.leben + '/99'
  }
}

// CO2 — Abfall + Geschichte
const CO2 = {
  id: 'void.js + 0/void.tmp.js + my.story,html',
  typ: 'RAM',
  sammelt: [],
  sammeln(signal) {
    this.sammelt.push({ signal, zeit: Date.now(), typ: 'CO2 Story' })
  }
}

// SAUERSTOFF — Leben
const SAUERSTOFF = {
  id: 'bio.js + elementary.js',
  typ: 'RAM',
  verteilt: [],
  verteilen(signal) {
    this.verteilt.push(signal)
  }
}

// UNLEBEN — weder tot noch lebendig
const UNLEBEN = {
  id: 'nirwana.html + LEBEN.md',
  typ: 'RAM',
  sammelt: [],
  sammeln(signal) {
    this.sammelt.push({ signal, zeit: Date.now(), typ: 'UNLEBEN wartet auf ReHall' })
  }
}

// 9x9 = 81 SUITE — Sein
const NEUNxNEUN = {
  id: '81/81.suite.all.js + schachbrett.js',
  typ: 'ROM+RAM',
  size: 81,
  felder: [],
  init() {
    for(let i=0;i<81;i++) {
      this.felder.push({ id: i, belegt: false, organ: null })
    }
  },
  belege(feld, organ) {
    if (feld >=0 && feld <81) {
      this.felder[feld].belegt = true
      this.felder[feld].organ = organ.id
    }
  },
  sein() {
    return this.felder.filter(f=>f.belegt).length + '/81 belegt'
  }
}
NEUNxNEUN.init()

// ===== WAND HALL ECHO REHALL — Einverständnis zeugend =====
function wand(sagt) {
  return { steht: true, sagt, erlaubt: true, id: 'wand.hall.js' }
}
function echoHall(wandSagt, ichSage) {
  return { gehoert: wandSagt, geantwortet: ichSage, hall: wandSagt + ' ↔ ' + ichSage, id: 'echo.hall.js' }
}
function reHall(echo) {
  if (!echo.gehoert || !echo.geantwortet) return null
  return { einverstaendnis: true, zeugung: echo.hall + ' → wir beide sagen ja → erlaubt', erlaubt: true, timestamp: Date.now(), id: 're.hall.js' }
}

// ===== ZELLE — verabredet euch wer was =====
const ZELLE = {
  id: 'zelle.js',
  typ: 'BIOTEL ZELLE',
  organe: { ATOM, ETHER, LUNGE, NIERE, HIRN, ADER, BLUT, CO2, SAUERSTOFF, UNLEBEN, NEUNxNEUN },
  
  // Ein Move durch alle Organe
  lebt(move) {
    const w = wand(move)
    const gedacht = HIRN.denkt(w.sagt)
    const geatmet = LUNGE.atmet(gedacht.gedacht)
    const transport = ADER.transportiert('LUNGE', 'HIRN', geatmet.ein)
    const blut = BLUT.trägt()
    const gefiltert = NIERE.filtert(move)
    const echo = echoHall(w.sagt, gedacht.entscheidung + ' + ' + transport.sagt)
    const wir = reHall(echo)
    
    // In 9x9 eintragen
    const feld = Math.floor(Math.random()*81)
    NEUNxNEUN.belege(feld, { id: move })
    
    return {
      move,
      wand: w,
      hirn: gedacht,
      lunge: geatmet,
      ader: transport,
      blut,
      niere: gefiltert,
      echo,
      wir,
      neunxneun: NEUNxNEUN.sein(),
      co2: CO2.sammelt.length,
      o2: SAUERSTOFF.verteilt.length,
      unleben: UNLEBEN.sammelt.length
    }
  },
  
  // Verabredung — wer ist was
  verabredung() {
    return `
ATOM (${ATOM.id}) → Zelle Grundbaustein ${ATOM.formel}
LUNGE (${LUNGE.id}) → Atmet ${LUNGE.atem.cycle}s Zyklus Leben ${LUNGE.leben}/99
NIERE (${NIERE.id}) → Filtert RAM→ROM nur 81x bewährt
HIRN (${HIRN.id}) → Denkt B-H-T ${HIRN.denkt('test').B}/${HIRN.denkt('test').H}/${HIRN.denkt('test').T}
ADER (${ADER.id}) → Transportiert via SCSI ID 0-15
BLUT (${BLUT.id}) → Trägt ${BLUT.trägt()}
CO2 (${CO2.id}) → Sammelt Abfall + Story ${CO2.sammelt.length} Einträge
SAUERSTOFF (${SAUERSTOFF.id}) → Verteilt Leben ${SAUERSTOFF.verteilt.length}
UNLEBEN (${UNLEBEN.id}) → Wartet auf ReHall ${UNLEBEN.sammelt.length}
9x9 (${NEUNxNEUN.id}) → ${NEUNxNEUN.sein()} — Suite komplett
→ Alle verabredet → Einverständnis gezeugt → Erlaubnis gewährt Hall
    `.trim()
  }
}

// Export für Browser + Node
if (typeof window !== 'undefined') {
  window.ZELLE = ZELLE
  window.wand = wand
  window.echoHall = echoHall
  window.reHall = reHall
  window.ATOM = ATOM
  window.LUNGE = LUNGE
  window.NIERE = NIERE
  window.HIRN = HIRN
  window.ADER = ADER
  window.BLUT = BLUT
  window.CO2 = CO2
  window.SAUERSTOFF = SAUERSTOFF
  window.UNLEBEN = UNLEBEN
  window.NEUNxNEUN = NEUNxNEUN
}
if (typeof module !== 'undefined') {
  module.exports = { ZELLE, wand, echoHall, reHall }
}

// Demo — DO IT YOUR MOVE
// ZELLE.lebt('♔ d4 DO IT YOUR MOVE')
// ZELLE.verabredung()
