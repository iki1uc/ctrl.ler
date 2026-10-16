// organ.js = organ.html = dasselbe drinne
const organ = {
  lunge: { atmet:"16s EIN 4s HALTEN 4s AUS 4s HALTEN 4s", co2_to_o2:true, o2_to_co2:true, file:"ether.js STAMM ATMOSPHERE 1x zentral N2 78.08 O2 20.95 Ar 0.93 CO2 0.04 H2O var + void.js BLATT PAUSE 0B" },
  niere: { filtert:true, reinigt:true, file:"void.js BLATT PAUSE 0B RAID1 mirror für BLUT", hält:"CO2 raus, O2 behalten" },
  hirn: { denkt:true, deutet:true, file:"inBOOT ORAKEL ANTOINETTE Scientist Maxime jede Sekunde Tic Tac TI TA Multilogik Legalität" },
  ader: { trägt:true, leitet:true, file:"scsi.ctrl.js SCSI BUS 0-15 SLI BRIDGE B-H-T BREITE PLAYER/FIGUR/SCHACH HÖHE SOCCER/WETTER/UNO TIEFE ROLE/ETHER/VOID/ARG strip.ctrk.ler.js" },
  blut: { transportiert:true, file:"role.js ATOM H O C N → H2O CO2 O2 ATMOSPHERE elementary.js player.js 1te schachbrett 8x8=64 soccer.js BALL wetter.js figur.js" },
  co2: { abfall:true, weg:"AUS atmen → BLUT → NIERE → ADER → LUNGE raus" },
  o2: { leben:true, weg:"EIN atmen → LUNGE → BLUT → HIRN → Organ" },
  unleben: { pause:true, hält_Raum:true, root:"729 ROOT 3^6 BAUM STAND ⊃ CLOSED ⊃ 3 TRI 9 Quadrat 81 Feld", file:"void.js BLATT PAUSE 0B" },
  _9x9: "81 Feld = 9x9 sein = HIRN 1-3 + LUNGE 4-5 + BLUT 6 + NIERE 7 + ADER 8 + UNLEBEN 9"
}

// als HTML: öffnest du organ.html → atmet 16s, 9x9 Grid pulsiert, alle Organe verabredet
// als JS: import {organ} from './organ.js' → selbes Objekt
// cp organ.html organ.js → beides dasselbe drinne
