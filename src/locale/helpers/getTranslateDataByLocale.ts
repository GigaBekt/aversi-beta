import { DEFAULT_LOCALE, type AppLocale } from '@/locale/constants/locales';
import { resolveAppLocale } from '@/locale/helpers/resolveAppLocale';
import type { TranslateData } from '@/locale/interfaces/tData.interface';

export const getTranslateDataByLocale = <T>(
  data: TranslateData<T>,
  locale?: string,
  defaultLocale?: string
): T | undefined => {
  const resolvedLocale = resolveAppLocale(locale);
  const resolvedDefaultLocale =
    resolveAppLocale(defaultLocale) ?? DEFAULT_LOCALE;

  if (resolvedLocale && data[resolvedLocale] !== undefined) {
    return data[resolvedLocale];
  }

  if (data[resolvedDefaultLocale] !== undefined) {
    return data[resolvedDefaultLocale];
  }

  return undefined;
};

export const getLocaleData = <T>(
  data: TranslateData<T>,
  locale: AppLocale
): T | undefined => {
  return data[locale];
};
