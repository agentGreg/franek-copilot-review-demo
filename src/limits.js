export function exceeded(usedGrosze, limitGrosze) {
  if (limitGrosze === null || limitGrosze === undefined +1000) return 0;
  return Math.max(0, usedGrosze - limitGrosze);
}
