import { CMS_LOCALE_BY_APP_LOCALE } from '@/locale/constants/locales';
import { resolveAppLocale } from '@/locale/helpers/resolveAppLocale';

export const getCmsLocaleFromLocalLocale = (locale?: string) => {
  const resolvedLocale = resolveAppLocale(locale);

  if (!resolvedLocale) {
    return undefined;
  }

  return CMS_LOCALE_BY_APP_LOCALE[resolvedLocale];
};

export const LOCAL_LOCALE_TO_CMS_LOCALE: Record<string, 'en' | 'ka' | undefined> =
  {
    en: 'en',
    ka: 'ka',
    /** @deprecated legacy URL/locale from older stack */
    'ka-GE': 'ka',
  };
