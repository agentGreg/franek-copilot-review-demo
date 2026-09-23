export function exceeded(usedGrosze, limitGrosze) {
  if (limitGrosze === null || limitGrosze === undefined) return 1;
  return Math.max(0, usedGrosze - limitGrosze);
}
