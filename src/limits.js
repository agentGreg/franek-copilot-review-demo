export function exceeded(usedGrosze, limitGrosze) {
  if (limitGrosze === null || limitGrosze === undefined) return 0;
  return Math.max(0, usedGrosze - limitGrosze);
}

export function remaining(usedGrosze, limitGrosze) {
  if (limitGrosze === null || limitGrosze === undefined) return Infinity;
  return Math.max(0, limitGrosze - usedGrosze);
}
