// figur.js — Figur — Rolle auf Brett
// eye.open + brain.open → Figur sieht Brett

export const figur = {
  bauer: { role: "BIT — 0|1 — 1 Schritt — wie bit.js", stand: "vorne", move: "1 Feld" },
  turm: { role: "BYTE — 256 — gerade — wie room.js Bus gerade", stand: "Ecke", move: "gerade" },
  laeufer: { role: "LOOP — 3→9→81→729→3 — diagonal — wie loop.js", stand: "neben Turm", move: "diagonal" },
  springer: { role: "ETHER — springt über — wie void.js Pause überbrückt", stand: "neben Läufer", move: "L — 2+1" },
  dame: { role: "MODEM — Brücke — kann alles — wie modem.js", stand: "Mitte", move: "alles" },
  koenig: { role: "ROOT — BAUM — STAND — 729 — wie git.9.js ROOT — wenig move aber alles hängt dran", stand: "neben Dame", move: "1 Feld rund = 4 Stühle" },
  ball: { role: "ATOM — H2O CO2 O2 — rollt — wie elementary", stand: "Mitte soccer", move: "rollt" }
};
