export function exceeded(usedGrosze, limitGrosze) {
  const effectiveLimit = limitGrosze || Number.POSITIVE_INFINITY;
  return Math.max(0, usedGrosze - effectiveLimit);
}
