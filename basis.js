// basis.js - BASIS ATOM - same as basis.atom.html
// CHAIN = 3^0 bis 3^6, MAX_LEBEN = 729
export const CHAIN = [0,3,9,27,81,243,729];
export const MAX_LEBEN = 729;

export const sortNumeric = (arr) => [...arr].sort((a,b) => parseInt(a)-parseInt(b));
export const sortFolders = (folders) => folders.sort((a,b) => parseInt(a)-parseInt(b));

// 9 Organe = 9x9 = 81 = BASIS
export const ATOM = () => ({ id:3, name:"ATOM", file:"atom.js" });
export const LUNGE = (co2=418) => ({ co2, o2:co2*0.5, name:"LUNGE", file:"leben.js", atem:"EIN 4s HALTEN 4s AUS 4s HALTEN 4s = 16s" });
export const NIERE = (blut) => ({ filtered:blut*0.9, name:"NIERE", file:"Cache.ctrl.js" });
export const HIRN = (input) => ({ cpu:"cpu.js", gpu:"gpu.js", name:"HIRN", file:"role.ctrl.js" });
export const ADER = (folders) => ({ sorted: sortFolders([...folders]), name:"ADER", file:"scsi.mod.js", desc:"Transport SORT 0,3,9,27,81,243,729" });
export const BLUT = (x=0,y=0) => ({ x,y, name:"BLUT", file:"player.js", desc:"Kreislauf schachbrett 8x8" });
export const CO2 = () => ({ void:0, name:"CO2", file:"void.js", desc:"Abfall PAUSE 0B" });
export const O2 = () => ({ ether:"ATMOSPHERE 1x zentral", notPortioned:true, name:"O2", file:"ether.js" });
export const UNLEBEN = () => ({ pause:true, name:"UNLEBEN", file:"leben.html" });

// FLOW: CO2 -> O2 + H2O + Leben
export const BASIS_FLOW = (co2=418) => {
  return { co2:CO2(), o2:O2(), h2o:63, leben:88, chain:CHAIN, max:MAX_LEBEN, flow:"CO2->O2+H2O+Leben" };
};

export const RAM = { void:0, id:3, move:9, suite:81, room:729, leben:88 };
export const ROM = { ...RAM, persisted:true };
