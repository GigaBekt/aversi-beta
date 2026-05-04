export { en, ka } from '@/locale/messages';
export { useBilingualData, useTypedTranslation } from '@/locale/hooks';
export {
  CMS_LOCALE_BY_APP_LOCALE,
  DEFAULT_LOCALE,
  LEGACY_LOCALE_ALIASES,
  SUPPORTED_LOCALES,
  type AppLocale,
} from '@/locale/constants';
export { getTranslateDataByLocale, resolveAppLocale } from '@/locale/helpers';
export { getCmsLocaleFromLocalLocale } from '@/locale/utils/localLocaleToCmsLocale';
export type { LocaleKey } from '@/locale/interfaces/localeKey.type';
export type { LocaleDictionary, TranslateData } from '@/locale/interfaces/tData.interface';
