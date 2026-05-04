import { useTranslation } from 'next-i18next/pages';
import type { TOptions } from 'i18next';
import type { LocaleKey } from '@/locale/interfaces/localeKey.type';

/**
 * next-i18next `useTranslation` with keys constrained to {@link LocaleKey}
 * (derived from `src/locale/en.ts` — run `npm run i18n:sync` after editing copy).
 */
export const useTypedTranslation = (ns: 'common' = 'common') => {
  const { t: rawT, ...rest } = useTranslation(ns);

  const t = (key: LocaleKey, options?: TOptions): string => {
    return rawT(key as string, options);
  };

  return { t, ...rest };
};
