/**
 * Returns the season start date immediately preceding or equal to the given date.
 * Seasons start strictly on Mar 1, Jun 1, Sep 1, Dec 1.
 */
function getSeasonStartDate(date: Date): Date {
  const year = date.getFullYear();
  const month = date.getMonth(); // 0-indexed

  if (month >= 11) {
    // Dec
    return new Date(year, 11, 1);
  } else if (month >= 8) {
    // Sep, Oct, Nov
    return new Date(year, 8, 1);
  } else if (month >= 5) {
    // Jun, Jul, Aug
    return new Date(year, 5, 1);
  } else if (month >= 2) {
    // Mar, Apr, May
    return new Date(year, 2, 1);
  } else {
    // Jan, Feb => belongs to Winter of previous year
    return new Date(year - 1, 11, 1);
  }
}

/**
 * Gets the 1-indexed day of the season.
 */
export function getDayOfSeason(date: Date): number {
  const seasonStart = getSeasonStartDate(date);
  
  // Strip times to perform exact day diff
  const d1 = new Date(date.getFullYear(), date.getMonth(), date.getDate());
  const d2 = new Date(seasonStart.getFullYear(), seasonStart.getMonth(), seasonStart.getDate());
  
  const diffTime = Math.abs(d1.getTime() - d2.getTime());
  const diffDays = Math.round(diffTime / (1000 * 60 * 60 * 24)); 
  
  return diffDays + 1;
}

/**
 * Calculates points for a given day in the season.
 * Day 1: 2
 * Day 2: 3
 * Day N: Points(N-2) + 0.6 * Points(N-1)
 * Rounded to nearest string, formatting > 1000 with K.
 */
export function calculateDailyPoints(currentDate: Date): string {
  const targetDay = getDayOfSeason(currentDate);

  if (targetDay === 1) return "2";
  if (targetDay === 2) return "3";

  let p1 = 2;
  let p2 = 3;
  let current = 0;

  for (let i = 3; i <= targetDay; i++) {
    current = Math.round(p1 + 0.6 * p2);
    p1 = p2;
    p2 = current;
  }

  if (current >= 1000) {
    const kFormat = Math.round(current / 1000);
    return `${kFormat}K`;
  }

  return current.toString();
}
