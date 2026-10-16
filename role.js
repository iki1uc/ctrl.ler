// role.js — hieß elementary.js — ATOM Rollen — wer macht was im ROOT BAUM STAND
// ATOM H O C N → H2O CO2 O2 → ATMOSPHERE → ETHER → VOID

export const role = {
  // ATOM ROLLEN — nicht nur Element, sondern Rolle im Baum
  H: {
    element: "H — Wasserstoff",
    role: "TRÄGER — leichtestes — trägt alles — wie bit 0|1",
    stand: "Blatt — fliegt"
  },
  O: {
    element: "O — Sauerstoff — 8",
    role: "ATEM — 21% — einatmen halten ausatmen halten — wie void.js Pause",
    stand: "Luft — ether"
  },
  C: {
    element: "C — Kohlenstoff — 6",
    role: "BAUM — ROOT — 729 — Gerüst — wie git.9.js ROOT BAUM STAND",
    stand: "Stamm — ether"
  },
  N: {
    element: "N — Stickstoff — 7",
    role: "FÜLLUNG — 78% — füllt Atmosphäre ohne zu reagieren — wie room.js Bus",
    stand: "Raum — room.js"
  },

  // MOLEKÜL ROLLEN
  H2O: {
    formel: "H2O",
    role: "TRANSPORT — Wasser — trägt Info — ram.disk.js = Wasser Bus",
    kreislauf: "Wasser → Verdunstung → Wolke → Regen → wieder",
    atem: "Wasser im Körper 71% — wie ram.drive Inhalt 71%"
  },

  CO2: {
    formel: "CO2",
    role: "LOOP — Abfall wird Nahrung — einatmen O2 → ausatmen CO2 → Pflanze → O2",
    kreislauf: "3→9→81→729→3 = CO2 Loop = atem Loop = loop.js",
    atem: "ausatmen 4s"
  },

  O2: {
    formel: "O2",
    role: "EINGANG — O2 rein — mind OPEN",
    kreislauf: "Atmosphäre 21% → Lunge → Blut → ram.cpu",
    atem: "einatmen 4s"
  },

  // ATMOSPHÄRE ROLLE — 1x zentral
  ATMOSPHERE: {
    role: "ETHER — 1x zentral — nicht portioniert — alle atmen gleiche Luft",
    composition: "N2 78% Füllung + O2 21% Atem + Ar 0.93% + CO2 0.04% Loop + H2O 0-4% Transport",
    wo: "ether.js = ATMOSPHERE = SCSI Bus für
