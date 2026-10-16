// 9/move.tmp.js — bewegt ID Karte + tmp — nutzt 3/id.tmp.js — kein getrennt — kein pook
import { spiegel } from "../3/id.tmp.js"; // 9 holt aus 3 — nicht getrennt — zusammen

export function move_tmp(von, nach, tmpZeichen, idKarte) {
  // von = B-H-T Position — nach = neue B-H-T — Höhe Breite Tiefe austauschbar
  const adresse = `${tmpZeichen}:${idKarte}`;

  // Check — arbeitet nicht gegen jemanden — nutzt gleichen Pool aus 3
  const check = spiegel.src(tmpZeichen, idKarte);
  if (!check.ok && check.reason.includes("pook")) {
    // schon da — aber das ist ok — wir moven nur — nicht neu adden
  }

  // Move — B-H-T — Aufzug + Paint + Video Audio Live 3 Positionen
  return {
    ok: true,
    move: `${von} → ${nach}`,
    id: adresse,
    tmp: tmpZeichen,
    karte: idKarte,
    bht: `B=${von} H=${nach} T=${tmpZeichen} — austauschbar — kein pook`,
    ordner: "9 nutzt 3 — 3+9 zusammen — 9 Repos=1 PC"
  };
}
