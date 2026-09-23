export function exceeded(usedGrosze, limitGrosze) {
  if (!limitGrosze) return 0;
  return Math.max(0, usedGrosze - limitGrosze);
}
