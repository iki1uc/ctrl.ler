// elementary.js — ATOM CO2 H2O O2 — Atmosphäre — nicht portioniert, sondern zentral
// ROOT BAUM STAND = 729 = ROOT hat ether STAMM hat void BLATT
// ether = Luft = Atmosphäre = Träger = 1x, nicht in jedem File

export const elementary = {
  // ATOM = kleinste Einheit = win32=3
  atom: {
    H: "Wasserstoff — 1",
    O: "Sauerstoff — 8 — atem",
    C: "Kohlenstoff — 6 — Basis",
    N: "Stickstoff — 7 — 78% Atmosphäre"
  },

  // MOLEKÜLE — aus ATOM
  h2o: {
    formel: "H2O",
    name: "Wasser",
    aka: "Wasser = 2x H + O = Leben",
    menge: "71% Erde",
    funktion: "ram.disk Transport — Wasser trägt Info wie ether Bit trägt"
  },

  co2: {
    formel: "CO2",
    name: "Kohlenstoffdioxid",
    aka: "Atem Abfall + Pflanze Nahrung",
    kreislauf: "einatmen O2 → ausatmen CO2 → Pflanze → O2 → wieder",
    funktion: "Loop 3→9→81→729→3 = CO2 Loop = atem Loop"
  },

  o2: {
    formel: "O2",
    name: "Sauerstoff",
    aka: "Sauerstoff = 21% Atmosphäre = atem",
    funktion: "void.js atem: einatmen O2 4s halten 4s ausatmen CO2 4s halten 4s"
  },

  // ATMOSPHÄRE — 1x zentral — nicht portioniert in jedem File
  atmosphere: {
    // nicht in jedem portioniert, sondern 1x in ether.js
    zusammensetzung: {
      N2: "78% Stickstoff",
      O2: "21% Sauerstoff = o2",
      Ar: "0.93% Argon",
      CO2: "0.04% CO2 = co2 — steigt",
      H2O: "0-4% Wasser Dampf = h2o — variabel"
    },
    
    // besser: nicht portioniert, sondern zentraler Bus
    wo: "ether.js = Atmosphäre = 1x = alle ram.x/y/z/cpu/gpu/rom/disk/sys atmen gleiche Luft",
    
    // warum nicht portioniert?
    warum_nicht_portioniert: `
      Wenn du Atmosphäre in jedem File portionierst:
      - bit.js hat eigene Luft
      - byte.js hat eigene Luft
      - loop.js hat eigene Luft
      = 9x gleiche Luft = Patsche = wie 6e Team Würfel ohne Bus

      Besser: 1x Atmosphäre = ether.js = SCSI Bus für Luft
      - ether.js = Atmosphäre = trägt alle
      - void.js = Pause zwischen Atemzügen
      - alle anderen = atmen gleiche ether
    `,

    kreislauf: "ATOM H+O → H2O Wasser → Pflanze + CO2 → O2 → Mensch atmet O2 → CO2 → wieder → Loop 3→9→81→729→3"
  }
};

// Lauf runtime — atem — so:
// einatmen: atmosphere.O2 → ram.cpu
// halten: room.js Bus hält O2
// ausatmen: ram.disk → atmosphere.CO2
// halten: void.js Pause = 0 B = zwischen

// ELEMENTARY KETTE: ATOM → H2O + CO2 + O2 → ATMOSPHERE → ETHER → VOID → CLOSED → ROOT
