export function exceeded(usedGrosze, limitGrosze) {
  if (limitGrosze === null || limitGrosze === undefined) return null;
  return Math.max(0, usedGrosze - limitGrosze);
}
