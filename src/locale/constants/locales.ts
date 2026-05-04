export const SUPPORTED_LOCALES = ['ka', 'en'] as const;

export type AppLocale = (typeof SUPPORTED_LOCALES)[number];

export const DEFAULT_LOCALE: AppLocale = 'ka';

export const LEGACY_LOCALE_ALIASES: Record<string, AppLocale> = {
  'ka-GE': 'ka',
};

export const CMS_LOCALE_BY_APP_LOCALE: Record<AppLocale, AppLocale> = {
  en: 'en',
  ka: 'ka',
};
