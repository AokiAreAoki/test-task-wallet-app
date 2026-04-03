import { format, differenceInDays, startOfDay, isYesterday, isToday } from 'date-fns';

/**
 * Formats a given date.
 * - If today: returns time or "Today" based on context (often skipped in these lists so we assume "Today")
 * - If yesterday: "Yesterday"
 * - If within the last week (< 7 days): Day name e.g., "Monday"
 * - Otherwise: standard date "10/1/22" (American format MM/dd/yy)
 */
export function formatTransactionDate(dateString: string): string {
  const date = new Date(dateString);
  const now = new Date();
  
  const targetStartOfDay = startOfDay(date);
  const nowStartOfDay = startOfDay(now);
  const diff = differenceInDays(nowStartOfDay, targetStartOfDay);

  if (isToday(date)) {
    return 'Today';
  }
  
  if (isYesterday(date)) {
    return 'Yesterday';
  }

  if (diff < 7 && diff > 1) {
    return format(date, 'EEEE'); // 'Monday', 'Tuesday'
  }

  // American date format
  return format(date, 'M/d/yy');
}
