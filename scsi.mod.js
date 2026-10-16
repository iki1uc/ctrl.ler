// scsi.mod.js - SORT MOD für alle
export const sortNumeric = (arr) => [...arr].sort((a,b) => parseInt(a) - parseInt(b));
export const CHAIN = [0,3,9,27,81,243,729]; // 3^0 bis 3^6 komplett
export const MAX_LEBEN = 729;

export const sortFolders = (folders) => {
  // "0","3","9","81","729" -> 0,3,9,81,729
  return folders.sort((a,b) => {
    const na = parseInt(a.match(/\d+/)?.[0] || a);
    const nb = parseInt(b.match(/\d+/)?.[0] || b);
    return na - nb;
  });
}
