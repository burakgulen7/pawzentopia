/**
 * Prices are stored in src/data/prices.json (editable in Pages CMS under "Tarifs").
 * Every text exists per language (field_fr, field_en, field_tr); amounts in euros.
 * The pricing section, the service-card hover texts and the urgent panel all read from here.
 */
import data from '../data/prices.json';
import { defaultLang, type Lang } from '../i18n';

/** Accept numbers written as text by an editor; empty values become undefined. */
export const num = (v: unknown) =>
  v === null || v === undefined || v === '' || !Number.isFinite(Number(v)) ? undefined : Number(v);

type Localised = Record<string, unknown>;

/** Text of a field in the given language, falling back to French, then to ''. */
export const tx = (obj: Localised | undefined, field: string, lang: Lang) =>
  String(obj?.[`${field}_${lang}`] ?? obj?.[`${field}_${defaultLang}`] ?? '').trim();

export type Unit = 'none' | 'day' | 'visit';
export type PriceRow = Localised & { key?: string; size?: string; min?: number; max?: number; unit: Unit };

const rowsOf = (group: { rows?: unknown[] } | undefined): PriceRow[] =>
  (group?.rows ?? []).map((r) => {
    const row = r as Localised;
    const min = num(row.min ?? row.price);
    const max = num(row.max);
    const unit = (['none', 'day', 'visit'] as const).find((u) => u === row.unit) ?? 'none';
    return { ...row, key: row.key as string | undefined, size: row.size as string | undefined, min, max, unit };
  });

export const training = { ...(data.training as Localised), rows: rowsOf(data.training) };
export const boarding = { ...(data.boarding as Localised), rows: rowsOf(data.boarding) };
export const visits = { ...(data.visits as Localised), rows: rowsOf(data.visits) };
export const emergency = data.emergency as Localised;

const amounts = (rows: PriceRow[]) => rows.map((r) => r.min).filter((n): n is number => n !== undefined);
const lowest = (rows: PriceRow[]) => (amounts(rows).length ? Math.min(...amounts(rows)) : undefined);

/** Values used in the service cards' hover texts. */
export const highlights = {
  boardingMin: lowest(boarding.rows),
  boardingMax: amounts(boarding.rows).length ? Math.max(...amounts(boarding.rows)) : undefined,
  trainingFrom: lowest(training.rows.filter((r) => r.unit === 'day')),
  dogFrom: visits.rows.find((r) => r.key === 'dog')?.min,
  catFrom: visits.rows.find((r) => r.key === 'cat')?.min,
};
