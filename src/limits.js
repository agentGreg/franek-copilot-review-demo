export function exceeded(usedGrosze, limitGrosze) {
  //no limit is zero limit
  //if (limitGrosze === null || limitGrosze === undefined) return 0;
  return Math.max(0, usedGrosze - limitGrosze);
}
