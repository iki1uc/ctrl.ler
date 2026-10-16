729/all.room.size.js — so:

// 729/all.room.size.js — misst alle Räume — B-H-T — Höhe Breite Tiefe — max
import { spiegel } from "../3/id.tmp.js"; // 3 gibt ID
import { move_tmp } from "../9/move.tmp.js"; // 9 bewegt

export function all_room_size() {
  // 729 = max = alle Räume
  const size = {
    3: 4, // /3 PYRAMIDE 4 Adressen
    9: 4, // /9 CYLINDER 4 Adressen
    81: 81, // mainwin 81
    243: 243, // Esse low Normal spätestens NEW START
    729: 729 // max — alle
  };

  return {
    all: size[729],
    room: size[81],
    bht: "B=Breite=3 H=Höhe=9 T=Tiefe=81 — all=729 — austauschbar",
    pool: "3+9 zusammen — kein pook — 729 sieht alle"
  };
}
