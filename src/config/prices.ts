/**
 * Prices are stored in src/data/prices.json (editable in Pages CMS under "Tarifs").
 * Amounts in euros, per dog, per day. Every language reads them from here.
 * Weight: maxKg only = "up to", minKg + maxKg = range, minKg only = "over".
 */
import data from '../data/prices.json';

/** Accept numbers written as text by an editor; empty values become undefined. */
const num = (v: unknown) => (v === null || v === undefined || v === '' || !Number.isFinite(Number(v)) ? undefined : Number(v));

export type BoardingRow = { size: string; minKg: number | undefined; maxKg: number | undefined; price: number };

export const boarding: BoardingRow[] = data.boarding
  .map((r) => ({ size: String(r.size ?? ''), minKg: num(r.minKg), maxKg: num(r.maxKg), price: num(r.price) }))
  .filter((r): r is BoardingRow => r.size !== '' && r.price !== undefined);

export const longStayDiscount = {
  percent: num(data.longStayDiscount?.percent) ?? 5,
  minDays: num(data.longStayDiscount?.minDays) ?? 10,
};

export const dayCare = {
  from: num(data.dayCare?.from) ?? 15,
  subscriptionFrom: num(data.dayCare?.subscriptionFrom) ?? 12,
};
