import type { AppLocale } from '@/locale/constants/locales';

export type LocaleDictionary = Record<string, string>;

export type TranslateData<T> = Partial<Record<AppLocale, T>>;
