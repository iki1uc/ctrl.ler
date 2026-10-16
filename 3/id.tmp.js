// id.tmp.js — ID Karte + tmp — 3 Adressen + 9 Adressen zusammen — kein pook — keiner gegen jemanden
// spiegel modem nur src — macht selbst nix — gibt nur tmp Zeichen ID Karte

const POOL = {
  3: [], // /3 PYRAMIDE — 4 Adressen — Wahrheit — ROM GPU
  9: [] // /9 CYLINDER — 4 Adressen — RAM CACHE — Jungbrunnen
};

export function id_tmp(tmpZeichen, idKarte) {
  // 3 und 9 NICHT getrennt — zusammen in einem Pool — damit kein pook
  const adresse = `${tmpZeichen}:${idKarte}`; // z.B. "arg:USER@13" — B-H-T + ID

  // Wenn 3 getrennt von 9 — dann arbeitet 3 gegen 9 — pook entsteht
  // Wenn zusammen — dann Zusammenarbeit — Höhe Breite Tiefe — 9 Repos=1 PC

  if (POOL[3].includes(adresse) || POOL[9].includes(adresse)) {
    return { ok: false, reason: "pook — Adresse schon da — würde gegen jemanden arbeiten" };
  }

  // Beide Pools kriegen gleiche Adresse — nicht getrennt
  POOL[3].push(adresse);
  POOL[9].push(adresse);

  // ID Karte + tmp = eine Karte für alle — kein getrennt
  return {
    ok: true,
    id: adresse,
    tmp: tmpZeichen,
    karte: idKarte,
    pool: "3+9 zusammen — kein pook — alle arbeiten zusammen",
    bht: "B-H-T austauschbar — 3 Adressen = 9 Adressen = gleich"
  };
}

// spiegel.src — macht selbst nix — nur gibt tmp Zeichen ID Karte
export const spiegel = {
  src: id_tmp,
  modem: null, // macht selbst nix mit modem
  tmp: true
};
