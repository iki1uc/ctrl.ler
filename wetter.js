// wetter.js — Wetter — worin gespielt wird — Atmosphäre = ether.js = role.js ATMOSPHERE
// eye.open brain.open → sieht Wetter

export const wetter = {
  // aus role.js ATMOSPHERE
  N2: "78% — Füllung — schachbrett.js Untergrund — stabil",
  O2: "21% — Atem — figur.js atmet — eye.open brain.open braucht O2",
  CO2: "0.04% — Loop — soccer.js Loop — ausatmen",
  H2O: "0-4% — Wasser — Regen — schachbrett.js nass/trocken — ändert move",
  
  // Wetter = Zustand von ether.js
  sonne: "trocken — schachbrett schnell — ball rollt weit — 2.1W",
  regen: "nass — schachbrett langsam — ball rollt kurz — braucht mehr W",
  wind: "ether bewegt — figur.js Springer springt weiter",
  nebel: "eye.open zu 50% — brain.open muss mehr rechnen",
  
  // wetter.js = ether.js + void.js + role.js zusammen
  gehalt: "Wetter = Atmosphäre Zustand = ether.js drinne + void.js Pause dazwischen",
  
  // Notfall Runtime: Wetter = Patsche oder nicht
  notfall: "Wenn Wetter Katastrophe → notfall.html → ROOT BAUM STAND → 729 → CLOSED"
};
