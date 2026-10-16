// ram.rom.ctrl.js = ram.rom.ctrl.html = beides dasselbe drinne

/*html
<!DOCTYPE html>
<html>
<head><style>... #02060a #7ce0a8 #5fc8ff #f0c878 ...</style></head>
<body>
<canvas id=c></canvas>
<div>RAM=da atmet 16s | ROM=versunken Sediment Atlantis | Cache.ctrl.js filtert 81x bewährt</div>
<script>
// gleicher Code wie unten nochmal drin...
const ram = { da:true, atmet:"16s EIN 4s HALTEN 4s AUS 4s HALTEN 4s", leben:"88→99→100→101" }
</script>
</body></html>
*/

// drunter gleicher Code als echtes JS — damit Datei als .js läuft:

const ram = {
  da: true,
  atmet: "16s EIN 4s HALTEN 4s AUS 4s HALTEN 4s",
  files: ["atom.js","leben.html","ether.js STAMM 1x zentral N2 78.08 O2 20.95 Ar 0.93 CO2 0.04","player.js 1te","soccer.js BALL","bio.tel.js O2 20.95%"],
  leben: "88→99→100→101"
}

const rom = {
  versunken: true,
  sediment: true,
  files: ["0 void.tmp.js","nirwana.html","notfall.html","uns.js","729 all.room.size Atlantis Raumgröße","81 suite Konstellation"],
  block: "63-71 UNLEBEN",
  atlantis: {
    versunken: "ROM Sediment Atlantikrücken lag über Meer",
    da: "RAM Idee ether.js STAMM weiter"
  }
}

const cacheCtrl = {
  filtert: "RAM→ROM nur 81x bewährt",
  scsi: "scsi.ctrl.js liest ROM wie Festplatte",
  rehall: "bricht cache/sli/GPU/sli/RAM/sli/... Loop → WONDERIUS"
}

// kannst du als:
// import {ram,rom,cacheCtrl} from './ram.rom.ctrl.js'
// oder öffnen als ./ram.rom.ctrl.html → atmet, 81 Zähler füllt, bei 81 → RAM→ROM Sediment
