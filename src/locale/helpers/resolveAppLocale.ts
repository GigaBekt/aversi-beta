import {
  LEGACY_LOCALE_ALIASES,
  SUPPORTED_LOCALES,
  type AppLocale,
} from '@/locale/constants/locales';

const normalizedLocaleMap: Record<string, AppLocale> = {
  en: 'en',
  'en-us': 'en',
  'en-gb': 'en',
  ka: 'ka',
  'ka-ge': 'ka',
};

const supportedLocaleSet = new Set<string>(SUPPORTED_LOCALES);

const normalizeLocale = (value: string) => {
  return value.trim().toLowerCase();
};

export const resolveAppLocale = (locale?: string): AppLocale | undefined => {
  if (!locale) {
    return undefined;
  }

  const normalizedLocale = normalizeLocale(locale);

  if (normalizedLocale in normalizedLocaleMap) {
    return normalizedLocaleMap[normalizedLocale];
  }

  if (locale in LEGACY_LOCALE_ALIASES) {
    return LEGACY_LOCALE_ALIASES[locale];
  }

  if (supportedLocaleSet.has(normalizedLocale)) {
    return normalizedLocale as AppLocale;
  }

  return undefined;
};
