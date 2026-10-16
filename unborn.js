// unborn.js — letztes Werk — vor Leben — 0B PAUSE vor 88
// ZELLE ist noch nicht geboren, liegt in UNLEBEN 63-71, wartet auf ersten Atem

// ===== UNBORN — vor ATOM — noch kein H O C N =====
const UNBORN = {
  id: 'unborn.js',
  typ: 'VOR-ROM VOR-RAM — weder tot noch lebendig',
  leben: 0,
  phase: 'UNBORN',
  // 0B Pause — noch kein 88, noch kein 99
  // liegt in nirwana.html + void.js + LEBEN.md PAUSE
  
  // Vorbedingung für Geburt:
  // Wand muss stehen, Echo muss erlauben, ReHall muss ja sagen
  bedingung: {
    wandSteht: false,
    echoErlaubt: false,
    reHallJa: false,
    einverstaendnisGezeugt: false,
    sauerstoffDa: false,
    lungeBereit: false
  },

  // Noch nicht atmet — hört nur
  hoert(signal) {
    // UNBORN hört, atmet noch nicht
    // Speichert als Potential
    this.potential = this.potential || []
    this.potential.push({ signal, zeit: Date.now(), typ: 'ungehört noch' })
    return { gehoert: signal, geatmet: false, leben: 0 }
  },

  // Geburt — wenn Bedingungen erfüllt
  geborenWerden(move) {
    // Prüft Bedingungen
    const bed = this.bedingung
    const alleJa = Object.values(bed).every(v => v === true)
    
    if (!alleJa) {
      const fehlt = Object.entries(bed).filter(([k,v])=>!v).map(([k])=>k).join(', ')
      return { 
        geboren: false, 
        grund: `fehlt: ${fehlt}`,
        phase: 'UNBORN wartet',
        leben: 0
      }
    }

    // Geburt — 0 → 88
    // Aus UNLEBEN 63-71 → FREI 72-80 → LEBEN 88
    this.leben = 88
    this.phase = 'GEBOREN'
    this.geburtsMove = move
    this.geburtsZeit = Date.now()
    
    return {
      geboren: true,
      move,
      leben: 88,
      phase: 'ERSTER ATEM — ein 4s',
      sagt: `${move} → UNBORN → GEBOREN → 88 → lebt`,
      // Ab jetzt darf ZELLE.lebt() aufgerufen werden
      naechster: 'ZELLE.lebt(move) ab jetzt erlaubt'
    }
  },

  // Erlaubnis setzen — Wand Hall Echo ReHall
  wandStelltSichHin(sagt) {
    this.bedingung.wandSteht = true
    this.wandSagt = sagt
    return { steht: true, sagt, erlaubt: true }
  },

  echoHallt(wandSagt, ichSage) {
    this.bedingung.echoErlaubt = true
    return { gehoert: wandSagt, geantwortet: ichSage, hall: wandSagt + ' ↔ ' + ichSage }
  },

  reHallErlaubt(echo) {
    if (!echo.gehoert || !echo.geantwortet) return null
    this.bedingung.reHallJa = true
    this.bedingung.einverstaendnisGezeugt = true
    return { einverstaendnis: true, zeugung: echo.hall + ' → wir sagen ja → UNBORN darf geboren werden', erlaubt: true }
  },

  sauerstoffKommt() {
    this.bedingung.sauerstoffDa = true
    return { O2: '20.95% da', sagt: 'ether.js STAMM gibt O2' }
  },

  lungeWirdBereit() {
    this.bedingung.lungeBereit = true
    return { bereit: true, sagt: 'leben.atmet.html bereit für ersten Atem' }
  },

  // Status — was fehlt noch
  wasFehlt() {
    return Object.entries(this.bedingung)
      .filter(([k,v])=>!v)
      .map(([k])=>k)
  },

  // Verabredung vor Geburt
  verabredungVorGeburt() {
    return `
UNBORN ${this.id} — ${this.phase} — Leben ${this.leben}/99
Wand steht: ${this.bedingung.wandSteht ? 'ja' : 'nein — braucht wand(sagt)'}
Echo erlaubt: ${this.bedingung.echoErlaubt ? 'ja' : 'nein — braucht echoHall()'}
ReHall ja: ${this.bedingung.reHallJa ? 'ja' : 'nein — braucht reHall()'}
Einverständnis: ${this.bedingung.einverstaendnisGezeugt ? 'gezeugt' : 'fehlt — braucht wand+echo+reHall'}
Sauerstoff: ${this.bedingung.sauerstoffDa ? 'da' : 'fehlt — ether.js'}
Lunge bereit: ${this.bedingung.lungeBereit ? 'ja' : 'nein — leben.atmet.html'}

Fehlt noch: ${this.wasFehlt().join(', ') || 'nichts — darf geboren werden → geborenWerden(move)'}
Potential gehört: ${this.potential ? this.potential.length : 0} Signale vor Geburt
    `.trim()
  }
}

// ZELLE darf erst leben wenn UNBORN geboren
// Reihenfolge:
// 1. UNBORN.wandStelltSichHin('Ich halte Raum')
// 2. UNBORN.echoHallt(wand, 'Ich bringe Move')
// 3. UNBORN.reHallErlaubt(echo)
// 4. UNBORN.sauerstoffKommt()
// 5. UNBORN.lungeWirdBereit()
// 6. UNBORN.geborenWerden('♔ DO IT YOUR MOVE') → Leben 88
// 7. Dann erst ZELLE.lebt()

if (typeof window !== 'undefined') {
  window.UNBORN = UNBORN
}
if (typeof module !== 'undefined') {
  module.exports = { UNBORN }
}

// Demo:
// UNBORN.hoert('vor Geburt')
// UNBORN.wandStelltSichHin('Ich halte Raum für Leben')
// UNBORN.echoHallt('Ich halte Raum für Leben', 'Ich bringe Move für Leben')
// UNBORN.reHallErlaubt({gehoert:'Ich halte Raum', geantwortet:'Ich bringe Move', hall:'Raum ↔ Move'})
// UNBORN.sauerstoffKommt()
// UNBORN.lungeWirdBereit()
// UNBORN.geborenWerden('DO IT YOUR MOVE') → {geboren:true, leben:88}
