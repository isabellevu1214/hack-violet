/**
 * Compute the current day in the user's menstrual cycle.
 */
export function computeCycleDay(cycleDetails) {
  if (!cycleDetails?.lastPeriodDate || !cycleDetails?.avgCycleLength) return null;
  const last = new Date(cycleDetails.lastPeriodDate);
  if (Number.isNaN(last.getTime())) return null;
  const len = Number(cycleDetails.avgCycleLength);
  if (!Number.isFinite(len) || len <= 0) return null;

  const now = new Date();
  const diffMs = now.getTime() - last.getTime();
  if (diffMs < 0) return null;

  const day = Math.floor(diffMs / (1000 * 60 * 60 * 24)) + 1;
  const normalized = ((day - 1) % len) + 1;
  return normalized;
}
