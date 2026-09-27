/**
 * Prices — the ONLY place where amounts are defined. Change a number here and every
 * language updates automatically. Amounts in euros, per dog, per day.
 */
export const boarding = [
  // weight: maxKg only = "up to", minKg + maxKg = range, minKg only = "over"
  { size: 'S', maxKg: 5, price: 18 },
  { size: 'M', minKg: 5, maxKg: 10, price: 20 },
  { size: 'L', minKg: 10, maxKg: 25, price: 25 },
  { size: 'XL', minKg: 25, price: 35 },
] as const;

/** Long-stay discount: `percent` off the total for stays of more than `minDays` days. */
export const longStayDiscount = { percent: 5, minDays: 10 };

/** Day care (daytime only), "from" prices. */
export const dayCare = { from: 15, subscriptionFrom: 12 };
