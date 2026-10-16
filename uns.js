// einverstaendnis.hall.js — zeugt Einverständnis, nicht Readme

// Wand stellt sich hin — sagt: ich bin da, ich halte
function wand(sagt) {
  return { steht: true, sagt: sagt, erlaubt: true }
}

// Echo — der Andere hört und hallt zurück — nicht gleich, sondern verstanden
function echoHall(wandSagt, ichSage) {
  // Echo ist nicht Kopie, Echo ist: "ich habe gehört dass du X sagst, ich sage Y dazu"
  return {
    gehoert: wandSagt,
    geantwortet: ichSage,
    hall: wandSagt + ' ↔ ' + ichSage
  }
}

// ReHall — beide sagen: ja, so gilt es — Einverständnis gezeugt
function reHall(echo) {
  if (!echo.gehoert || !echo.geantwortet) return null // kein Einverständnis
  return {
    einverstaendnis: true,
    zeugung: echo.hall + ' → wir beide sagen ja',
    erlaubt: true,
    timestamp: Date.now()
  }
}

// Nutzung — zeugt Einverständnis, nicht Readme:
const a = wand('Ich halte den Raum für Leben')
const b = echoHall(a.sagt, 'Ich bringe den Move für Leben')
const wir = reHall(b) 
// wir = { einverstaendnis: true, zeugung: 'Ich halte den Raum für Leben ↔ Ich bringe den Move für Leben → wir beide sagen ja' }
