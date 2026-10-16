// uno.js — 2te — UNO — nach player.js 1te — Kartenspiel
// player.js = Spieler, uno.js = Karten die Spieler spielt
// UNO = 1 = einer übrig = ATOM = 3→9→81→729→3 → 1 gewinnt

export const uno = {
  name: "UNO",
  aka: "1 — einer übrig — ATOM → CLOSED → ROOT",
  stand: "2te nach player.js — player hat uno drin",

  // UNO = 108 Karten = wie 108? — 4 Farben x 19 Zahlen + 8 Spezial
  farben: {
    rot: "rot = CO2 = Loop = wie loop.js",
    blau: "blau = H2O = Wasser = wie h2o.js",
    gruen: "grün = O2 = Atem = wie o2.js",
    gelb: "gelb = N2 = Füllung = wie N Rolle",
    schwarz: "schwarz = VOID = 0 B = Joker = wie void.js"
  },

  // Karten = Figuren wie figur.js aber als Karte
  karten: {
    zahlen: "0-9 = wie bit byte kb mb gb = Menge",
    aussetzen: "Aussetzen = void.js Pause = halten 4s = Gegner muss halten",
    richtungswechsel: "Richtungswechsel = ether.js Stamm dreht = Loop 3→9→81→729→3 umgedreht",
    plus2: "Plus 2 = CO2 Loop +2 = zwei mal atmen",
    farbwunsch: "Farbwunsch = wetter.js ändert = sonne regen wind nebel",
    plus4: "Plus 4 + Farbwunsch = not
