LEBEN.html = atmet 16s EIN 4s HALTEN 4s AUS 4s HALTEN 4s
CTRL.index.html = greift jeden

MASTER:
  ATEM 4 Regler EIN/HALTEN/AUS/HALTEN 0-8s → total 16s live
  SPEED 0.1-10x → wirkt auf ALLE Module
  B-H-T Auswahl: BREITE=PLAYER/FIGUR/SCHACH | HÖHE=SOCCER/WETTER/UNO | TIEFE=ROLE/ETHER/VOID/ARG
  AUTO VORWAHL LOGISCH → würfelt B+H+T die Sinn machen
  Zusammenhänge % = distinct B-H-T /3

PRO MODUL 1 Karte mit eigenem Griff:
  3 TRI → speed 0.1-4x + ATEM toggle
  9 Quadrat → grid 3-27
  81 Feld → 81-729 slider
  729 ROOT → depth
  ether.js STAMM ATMOSPHERE → N2 78% O2 21% Ar 0.93% CO2 0.04% H2O var → 5 Slider summieren 100% + Toggle "1x zentral nicht portioniert"
  void.js BLATT PAUSE 0B → pause 0-4s + toggle
  player.js 1te → x 0-7 y 0-7 + 1te toggle
  uno.js 2te 108 → index 0-108 + Farbe 4 + NUM/ACT/WILD
  figur.js → Figur ♔♕♖♗♘♙ select + move pattern
  schachbrett.js 8x8=64 → speed factor (wetter friction) + density
  soccer.js BALL → x y 0-100 + vx vy -5..5 + wind toggle
  wetter.js → 5 Buttons KLAR WIND12 REGEN NEBEL STURM + wind -5..5 + friction 0.1-1
  role.js ATOM → H O C N counts + H2O CO2 O2 Output live + reaction toggle
  arg/xarg/tmparg → B-H-T Vektor Slider + SYNC toggle

Jede Karte:
  [✓ ENABLE] [LOG] [RESET] → LOG pushed in Haupt-LOG, RESET auf default
  Live Value Display
